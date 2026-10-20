
const { test, expect } = require('@playwright/test');

const URL_UNA = 'https://www.una.ac.cr/';

test.describe('Pruebas automatizadas de accesibilidad - UNA', () => {

  test('TC1_ el sitio web carga correctamente', async ({ page }) => {
    const respuesta = await page.goto(URL_UNA, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    expect(respuesta).not.toBeNull();
    expect(respuesta.status()).toBeLessThan(400);

    await expect(page.locator('body')).toBeVisible();
    await page.screenshot({
      path: 'reportes/TC1-pagina-principal.png',
      fullPage: true
    });
  });

  test('TC2_el sitio tiene titulo e idioma', async ({ page }) => {
    await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });

    const titulo = await page.title();
    const idioma = await page.locator('html').getAttribute('lang');

    console.log('Titulo:', titulo);
    console.log('Idioma:', idioma);

    expect(titulo.trim().length).toBeGreaterThan(0);
    expect(idioma).toBeTruthy();
  });

  test('TC3_identifica enlaces sin nombre accesible', async ({ page }) => {
    await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });

    const enlaces = page.locator('a');
    const total = await enlaces.count();
    const sinNombre = [];

    for (let i = 0; i < total; i++) 
        {
      const enlace = enlaces.nth(i);
      const nombre = await enlace.evaluate(element => {
        const ariaLabel = element.getAttribute('aria-label');
        const labelledBy = element.getAttribute('aria-labelledby');
        const texto = element.innerText?.trim();
        const imagen = element.querySelector('img')?.getAttribute('alt');

        const textoReferencia = labelledBy
          ? labelledBy.split(/\s+/).map(id =>
              document.getElementById(id)?.innerText?.trim() || ''
            ).join(' ').trim()
          : '';

        return ariaLabel?.trim() ||
          textoReferencia ||
          texto ||
          imagen ||
          '';
      });

      if (!nombre) {
        sinNombre.push(await enlace.evaluate(element => ({
          html: element.outerHTML.slice(0, 300),
          href: element.getAttribute('href')
        })));
      }
    }

    console.log('Total de enlaces:', total);
    console.log('Enlaces sin nombre detectado:', sinNombre);
  });

  test('TC4_ registra los encabezados', async ({ page }) => {
    await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });

    const encabezados = await page.locator('h1, h2, h3, h4, h5, h6')
      .evaluateAll(elementos => elementos.map(elemento => ({
        nivel: Number(elemento.tagName.substring(1)),
        texto: elemento.innerText.trim()
      })));

    console.log('Jerarquía de encabezados:', encabezados);

    await page.screenshot({
      path: 'reportes/TC4-encabezados.png',
      fullPage: true
    });
  });

test('TC5_identifica objetivos tactiles pequenos', async ({ page }) => {
  await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });

  const elementos = page.locator(
    'a, button, input, select, textarea, [role="button"], [role="link"]'
  );

  const total = await elementos.count();
  const pequenos = [];

  for (let i = 0; i < total; i++) 
    {
    const elemento = elementos.nth(i);

    if (!(await elemento.isVisible())) continue;

    const datos = await elemento.evaluate(el => {
      const rect = el.getBoundingClientRect();

      return {
        etiqueta: el.tagName,
        texto: (el.innerText || el.getAttribute('aria-label') || '')
          .trim().slice(0, 80),
        ancho: Math.round(rect.width),
        alto: Math.round(rect.height),
        href: el.getAttribute('href')
      };
    });

    if (datos.ancho > 0 && datos.alto > 0 &&
        (datos.ancho < 24 || datos.alto < 24)) {
      pequenos.push(datos);
    }
  }

  console.log('Objetivos pequeños:', pequenos);
});

test('TC6_navegacion mediante teclado', async ({ page }) => {
  await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });

  const recorrido = [];

  for (let i = 0; i < 15; i++) {
    await page.keyboard.press('Tab');

    const foco = await page.evaluate(() => {
      const el = document.activeElement;

      if (!el) return null;

      const estilo = getComputedStyle(el);
      const rect = el.getBoundingClientRect();

      return {
        etiqueta: el.tagName,
        texto: (el.innerText || el.getAttribute('aria-label') || '')
          .trim().slice(0, 80),
        id: el.id,
        visible: rect.width > 0 && rect.height > 0,
        outlineStyle: estilo.outlineStyle,
        outlineWidth: estilo.outlineWidth,
        outlineColor: estilo.outlineColor
      };
    });

    recorrido.push(foco);
  }

  console.log('Recorrido de foco con Tab:', recorrido);

  await page.screenshot({
    path: 'reportes/TC8-teclado.png',
    fullPage: false
  });
});

test('TC7_validacion del zoom', async ({ page }) => {
  await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });

  const viewport = await page.locator('meta[name="viewport"]')
    .getAttribute('content');

  console.log('Configuración viewport:', viewport);

  const problemas = [];

  if (!viewport) {
    problemas.push('No se encontró la etiqueta meta viewport.');
  } else {
    if (/user-scalable\s*=\s*no/i.test(viewport)) {
      problemas.push('Se encontró user-scalable=no.');
    }

    const escalaMaxima = viewport.match(
      /maximum-scale\s*=\s*([0-9.]+)/i
    );

    if (escalaMaxima && Number(escalaMaxima[1]) < 2) {
      problemas.push(
        `maximum-scale=${escalaMaxima[1]} podría limitar el zoom.`
      );
    }
  }

  console.log('Observaciones sobre zoom:', problemas);
});

test('TC8: identifica campos sin label asociado', async ({ page }) => {
  await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });

  const campos = page.locator(
    'input:not([type="hidden"]):not([type="submit"]):not([type="button"]), select, textarea'
  );

  const total = await campos.count();
  const revisar = [];

  for (let i = 0; i < total; i++) {
    const campo = campos.nth(i);

    const datos = await campo.evaluate(el => {
      const tieneLabel = Boolean(
        el.labels && Array.from(el.labels).some(label =>
          label.innerText.trim().length > 0
        )
      );

      const tieneAriaLabel = Boolean(
        el.getAttribute('aria-label')?.trim()
      );

      const tieneAriaLabelledby = Boolean(
        el.getAttribute('aria-labelledby')?.trim()
      );

      return {
        etiqueta: el.tagName,
        tipo: el.getAttribute('type'),
        id: el.id,
        placeholder: el.getAttribute('placeholder'),
        tieneLabel,
        tieneAriaLabel,
        tieneAriaLabelledby
      };
    });

    if (!datos.tieneLabel &&
        !datos.tieneAriaLabel &&
        !datos.tieneAriaLabelledby) {
      revisar.push(datos);
    }
  }

  console.log('Campos que requieren revisión:', revisar);
});
});