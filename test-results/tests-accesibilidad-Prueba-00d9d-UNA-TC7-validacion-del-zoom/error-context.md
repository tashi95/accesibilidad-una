# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\accesibilidad.spec.js >> Pruebas automatizadas de accesibilidad - UNA >> TC7_validacion del zoom
- Location: tests\accesibilidad.spec.js:172:1

# Error details

```
Error: locator.getAttribute: Error: strict mode violation: locator('meta[name="viewport"]') resolved to 2 elements:
    1) <meta name="viewport" content="width=device-width, initial-scale=1.0"/> aka locator('meta[name="viewport"]').first()
    2) <meta name="viewport" content="width=device-width, initial-scale=1.0"/> aka locator('meta[name="viewport"]').nth(1)

Call log:
  - waiting for locator('meta[name="viewport"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e5]:
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "•  Correo " [ref=e9] [cursor=pointer]:
            - /url: "#"
            - text: •
            - generic [ref=e10]: 
            - text: Correo 
        - listitem [ref=e11]:
          - link "•  Aulas " [ref=e12] [cursor=pointer]:
            - /url: "#"
            - text: •
            - generic [ref=e13]: 
            - text: Aulas 
        - listitem [ref=e14]:
          - link "•  Biblioteca" [ref=e15] [cursor=pointer]:
            - /url: https://www.siduna.una.ac.cr/
            - text: •
            - generic [ref=e16]: 
            - text: Biblioteca
        - listitem [ref=e17]:
          - link "•  Directorio" [ref=e18] [cursor=pointer]:
            - /url: https://www.directorio.una.ac.cr/
            - text: •
            - generic [ref=e19]: 
            - text: Directorio
        - listitem [ref=e20]:
          - link "•  Calendario " [ref=e21] [cursor=pointer]:
            - /url: "#"
            - text: •
            - generic [ref=e22]: 
            - text: Calendario 
        - listitem [ref=e23]:
          - link "•  Preguntas" [ref=e24] [cursor=pointer]:
            - /url: https://www.preguntasfrecuentes.una.ac.cr/
            - text: •
            - generic [ref=e25]: 
            - text: Preguntas
        - listitem [ref=e26]:
          - link "•  Documentos" [ref=e27] [cursor=pointer]:
            - /url: https://documentos.una.ac.cr/
            - text: •
            - generic [ref=e28]: 
            - text: Documentos
        - listitem [ref=e29]:
          - link "•  Noticias" [ref=e30] [cursor=pointer]:
            - /url: https://www.una.ac.cr/noticias/
            - text: •
            - generic [ref=e31]: 
            - text: Noticias
        - listitem [ref=e32]:
          - link "•  Servicios " [ref=e33] [cursor=pointer]:
            - /url: "#"
            - text: •
            - generic [ref=e34]: 
            - text: Servicios 
        - listitem [ref=e35]:
          - link "• ES " [ref=e36] [cursor=pointer]:
            - /url: "#"
      - list [ref=e39]:
        - listitem [ref=e40]:
          - link "Facebook" [ref=e41] [cursor=pointer]:
            - /url: https://www.facebook.com/unacostarica
            - text: 
        - listitem [ref=e42]:
          - link "Twitter" [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/ComunidadUNACR/
            - text: 
        - listitem [ref=e44]:
          - link "Instagram" [ref=e45] [cursor=pointer]:
            - /url: https://instagram.com/una.ac.cr/
            - text: 
        - listitem [ref=e46]:
          - link "Youtube" [ref=e47] [cursor=pointer]:
            - /url: https://www.youtube.com/user/unamultimedia
            - text: 
    - generic [ref=e50]:
      - link [ref=e51] [cursor=pointer]:
        - /url: https://www.una.ac.cr/
        - img "Universidad Nacional" [ref=e52]
      - generic [ref=e53]:
        - list [ref=e54]:
          - listitem [ref=e55]:
            - link " Acerca de la UNA " [ref=e56] [cursor=pointer]:
              - /url: https://www.una.ac.cr/acerca-de-la-una/
              - generic [ref=e57]: 
              - text: Acerca de la UNA 
          - listitem [ref=e58]:
            - link " Facultades y Centros" [ref=e59] [cursor=pointer]:
              - /url: https://www.una.ac.cr/facultades-centros-y-sedes/
              - generic [ref=e60]: 
              - text: Facultades y Centros
          - listitem [ref=e61]:
            - link " Admisión" [ref=e62] [cursor=pointer]:
              - /url: https://www.una.ac.cr/admision/
              - generic [ref=e63]: 
              - text: Admisión
          - listitem [ref=e64]:
            - link " Oferta académica" [ref=e65] [cursor=pointer]:
              - /url: https://www.carreras.una.ac.cr/
              - generic [ref=e66]: 
              - text: Oferta académica
          - listitem [ref=e67]:
            - link " Información para " [ref=e68] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e69]: 
              - text: Información para 
          - listitem [ref=e70]:
            - link " Áreas " [ref=e71] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e72]: 
              - text: Áreas 
        - text:                           
  - main "Contenido principal" [ref=e73]:
    - generic [ref=e75]:
      - generic [ref=e77]:
        - heading [level=2] [ref=e87]:
          - link "Natación y karate de la UNA suben al podio en los Juncos 2026" [ref=e88] [cursor=pointer]:
            - /url: https://www.unacomunica.una.ac.cr/index.php/octubre-2026/7123-natacion-y-karate-de-la-una-suben-al-podio-en-los-juncos-2026
        - generic:
          - link "Anterior" [ref=e89] [cursor=pointer]:
            - /url: "#"
            - text: "4"
          - link "Siguiente" [ref=e90] [cursor=pointer]:
            - /url: "#"
            - text: "5"
        - generic [ref=e91]:
          - link "1" [ref=e92] [cursor=pointer]:
            - /url: "#"
          - link "2" [ref=e93] [cursor=pointer]:
            - /url: "#"
          - link "3" [ref=e94] [cursor=pointer]:
            - /url: "#"
          - link "4" [ref=e95] [cursor=pointer]:
            - /url: "#"
          - link "5" [ref=e96] [cursor=pointer]:
            - /url: "#"
          - link "6" [ref=e97] [cursor=pointer]:
            - /url: "#"
          - link "7" [ref=e98] [cursor=pointer]:
            - /url: "#"
          - link "8" [ref=e99] [cursor=pointer]:
            - /url: "#"
          - link "9" [ref=e100] [cursor=pointer]:
            - /url: "#"
          - link "10" [ref=e101] [cursor=pointer]:
            - /url: "#"
      - generic [ref=e102]:
        - generic [ref=e104]:
          - heading "UNA Eventos Académicos" [level=1] [ref=e107]
          - generic [ref=e116]:
            - generic [ref=e120]:
              - button [ref=e121] [cursor=pointer]:
                - note [ref=e126]: X Diálogo de Gobernanza de Internet (IGF Costa Rica) 2026
                - generic [ref=e133]:
                  - generic [ref=e134]: X Diálogo de Gobernanza de Internet (IGF Costa Rica) 2026
                  - generic [ref=e136]: Octubre 27, 2026 @ 09:00 am – 12:00 pm
              - button [aria-hidden] [ref=e138] [cursor=pointer]:
                - note [ref=e143]: International Bioprocesses, Biotechnology and Engineering Congress
                - generic [ref=e150]:
                  - generic [ref=e151]: International Bioprocesses, Biotechnology and Engineering Congress
                  - generic [ref=e153]: Noviembre 16, 2027 @ 09:00 am – Noviembre 18, 2027 @ 02:00 pm
              - button [aria-hidden] [ref=e155] [cursor=pointer]:
                - note [ref=e160]: Premiación I Edición Concurso Liderazgos Comunitarios 2026
                - generic [ref=e167]:
                  - generic [ref=e168]: Premiación I Edición Concurso Liderazgos Comunitarios 2026
                  - generic [ref=e170]: Enero 5, 2027 @ 10:00 am – Febrero 5, 2027 @ 12:00 pm
              - button [aria-hidden] [ref=e172] [cursor=pointer]:
                - note [ref=e177]: Premiación Concurso “Persona Extensionista Destacada” 2026
                - generic [ref=e184]:
                  - generic [ref=e185]: Premiación Concurso “Persona Extensionista Destacada” 2026
                  - generic [ref=e187]: Octubre 27, 2026 @ 01:00 pm – 03:00 pm
              - button [aria-hidden] [ref=e189] [cursor=pointer]:
                - note [ref=e194]: I Encuentro Internacional de Semilleros de Investigación, / II Certamen Internacional de Investigación en Ciencias de la Actividad Física, Deporte y Salud
                - generic [ref=e201]:
                  - generic [ref=e202]: I Encuentro Internacional de Semilleros de Investigación, / II Certamen Internacional de Investigación en Ciencias de la Actividad Física, Deporte y Salud
                  - generic [ref=e204]: Octubre 29, 2026 @ 09:00 am – Octubre 31, 2026 @ 03:00 pm
              - button [aria-hidden] [ref=e206] [cursor=pointer]:
                - note [ref=e211]: 6to Congreso Internacional de Investigación sobre Educación en Bibliotecología, Documentación y Archivística
                - generic [ref=e218]:
                  - generic [ref=e219]: 6to Congreso Internacional de Investigación sobre Educación en Bibliotecología, Documentación y Archivística
                  - generic [ref=e221]: Octubre 19, 2026 @ 08:30 am – Octubre 21, 2026 @ 11:41 am
              - button [aria-hidden] [ref=e223] [cursor=pointer]:
                - note [ref=e228]: ENCUENTRO SOBRE IDENTIDADES DE GUANACASTE
                - generic [ref=e235]:
                  - generic [ref=e236]: ENCUENTRO SOBRE IDENTIDADES DE GUANACASTE
                  - generic [ref=e238]: Noviembre 17, 2026 @ 08:00 am – Noviembre 19, 2026 @ 04:00 pm
              - button [aria-hidden] [ref=e240] [cursor=pointer]:
                - note [ref=e245]: II CONGRESO INTERNACIONAL DE CIENCIAS EXACTAS Y NATURALES
                - generic [ref=e252]:
                  - generic [ref=e253]: II CONGRESO INTERNACIONAL DE CIENCIAS EXACTAS Y NATURALES
                  - generic [ref=e255]: Febrero 3, 2027 @ 08:00 am – Febrero 5, 2027 @ 05:00 pm
              - button [aria-hidden] [ref=e257] [cursor=pointer]:
                - note [ref=e262]: VIII Congreso Internacional de Ordenamiento Territorial y Tecnologías de Información Geográfica (CIOTTIG 2026)
                - generic [ref=e269]:
                  - generic [ref=e270]: VIII Congreso Internacional de Ordenamiento Territorial y Tecnologías de Información Geográfica (CIOTTIG 2026)
                  - generic [ref=e272]: Noviembre 4, 2026 @ 08:00 am – Noviembre 7, 2026 @ 05:00 pm
              - button [aria-hidden] [ref=e274] [cursor=pointer]:
                - note [ref=e279]: Simulación ERI 2026
                - generic [ref=e286]:
                  - generic [ref=e287]: Simulación ERI 2026
                  - generic [ref=e289]: Marzo 2, 2026 @ 01:00 pm – Octubre 25, 2026 @ 01:00 pm
            - group "Selecciona el slide para mostrar." [ref=e292]
        - generic [ref=e293]:
          - link "Agenda de eventos Z" [ref=e296] [cursor=pointer]:
            - /url: https://eventos.una.ac.cr/#agenda
          - link "Próximos eventos " [ref=e299] [cursor=pointer]:
            - /url: https://eventos.una.ac.cr/#upcoming
          - link "Eventos en curso " [ref=e302] [cursor=pointer]:
            - /url: https://eventos.una.ac.cr/#ongoing
      - heading "Buscar" [level=1] [ref=e308]
      - generic [ref=e309]:
        - heading "Información para" [level=1] [ref=e314]
        - generic [ref=e315]:
          - generic [ref=e317] [cursor=pointer]:
            - text: "|"
            - generic [ref=e319]:
              - heading "Estudiantes" [level=1] [ref=e322]
              - generic [ref=e323]: Beneficios, servicios e información para estudiantes de la UNA
          - generic [ref=e325] [cursor=pointer]:
            - text: "|"
            - generic [ref=e327]:
              - heading "Funcionarios" [level=1] [ref=e330]
              - generic [ref=e331]: Beneficios, servicios e información para funcionarios de la UNA
      - generic [ref=e334]:
        - heading "Destacados" [level=1] [ref=e337]
        - link "Más noticias y avisos i" [ref=e344] [cursor=pointer]:
          - /url: https://www.una.ac.cr/noticias/
      - generic [ref=e352]:
        - generic [ref=e403]:
          - generic [ref=e404]:
            - note [ref=e405]: Slide 1
            - generic [ref=e410]:
              - generic [ref=e412]:
                - generic [ref=e414]:
                  - generic [ref=e415]: Excelencia en Posgrados de la
                  - generic [ref=e416]: Universidad Nacional
                - paragraph [ref=e423]: Los posgrados de la Universidad Nacional son símbolo de madurez y calidad académica.
                - paragraph [ref=e427]: SEPUNA te invita a conocer programas avanzados diseñados para estudiantes y profesionales que buscan una formación de excelencia en sus áreas de interés.
                - button "SIGUIENTE" [ref=e430] [cursor=pointer]
              - generic [ref=e434]:
                - generic [ref=e436]:
                  - button "Contacto" [ref=e437] [cursor=pointer]:
                    - paragraph [ref=e444]: Contacto
                  - button "Doctorados" [ref=e445] [cursor=pointer]:
                    - paragraph [ref=e452]: Doctorados
                - generic [ref=e454]:
                  - button "Maestrías" [ref=e455] [cursor=pointer]:
                    - paragraph [ref=e462]: Maestrías
                  - button "Próximas aperturas" [ref=e463] [cursor=pointer]:
                    - paragraph [ref=e470]: Próximas aperturas
          - generic [aria-hidden] [ref=e471]:
            - note [ref=e472]: Slide 3
            - generic [ref=e477]:
              - generic [ref=e479]:
                - generic [ref=e480]: Investigación como Eje Estratégico
                - generic [ref=e482]: La investigación es el pilar central en SEPUNA.
                - paragraph [ref=e487]: Cada posgrado define líneas prioritarias de estudio que impulsan el desarrollo del conocimiento en áreas clave, promoviendo innovación y análisis crítico en cada disciplina.
                - button [ref=e490] [cursor=pointer]:
                  - generic [ref=e491]: SIGUIENTE
              - generic [ref=e498]:
                - generic [ref=e502]: Doctorados
                - paragraph [ref=e507]: El nivel académico más alto en la educación universitaria, diseñado para formar investigadores de excelencia mediante la creación y defensa de una tesis.
                - link [ref=e510] [cursor=pointer]:
                  - /url: https://www.carreras.una.ac.cr/?tex_grado_academico=doctorado
                  - generic [ref=e511]: Empieza ahora
          - generic [aria-hidden] [ref=e513]:
            - note [ref=e514]: Slide 4
            - generic [ref=e519]:
              - generic [ref=e521]:
                - generic [ref=e522]: Formación Integral
                - generic [ref=e524]: para el Crecimiento Profesional.
                - paragraph [ref=e529]: SEPUNA forma parte de la oferta académica institucional de la Universidad Nacional, donde cada programa está diseñado para alinearse con la misión, principios y objetivos de nuestra universidad, contribuyendo al crecimiento integral de nuestros estudiantes.
                - button [ref=e532] [cursor=pointer]:
                  - generic [ref=e533]: SIGUIENTE
              - generic [ref=e540]:
                - generic [ref=e544]: Maestrías
                - paragraph [ref=e549]: "Profesionales: posgrados con enfoque en investigación aplicada. Académicas: creación de conocimiento a través de la investigación y tesis."
                - link [ref=e552] [cursor=pointer]:
                  - /url: https://www.carreras.una.ac.cr/?tex_grado_academico=maestria
                  - generic [ref=e553]: EMPIEZA AHORA
          - generic [aria-hidden] [ref=e555]:
            - note [ref=e556]: Slide 5
            - generic [ref=e561]:
              - generic [ref=e563]:
                - generic [ref=e564]: Actualización y Profundización en Conocimiento
                - generic [ref=e566]: Nuestros programas están orientados a brindar una formación rigurosa y actualizada.
                - paragraph [ref=e571]: A través de planes especializados SEPUNA garantiza que nuestros estudiantes estén siempre a la vanguardia en sus respectivos campos.
                - button [ref=e574] [cursor=pointer]:
                  - generic [ref=e575]: SIGUIENTE
              - generic [ref=e582]:
                - paragraph [ref=e588]: "2025"
                - generic [ref=e589]: Próximas aperturas de promociones
                - paragraph [ref=e594]: I Ciclo 2025 y I Trimestre 2025
                - link [ref=e597] [cursor=pointer]:
                  - /url: https://www.sepuna.una.ac.cr/#promociones
                  - generic [ref=e598]: OBTÉN MÁS INFORMACIÓN
          - generic [aria-hidden] [ref=e600]:
            - note [ref=e601]: Slide 2
            - generic [ref=e606]:
              - generic [ref=e608]:
                - generic [ref=e609]: Cursos de Especialización y Evaluación Constante
                - generic [ref=e611]: Además de programas conducentes a títulos, SEPUNA ofrece cursos de actualización y especialización en distintas áreas.
                - paragraph [ref=e616]: Cada programa está sujeto a evaluaciones periódicas para asegurar su relevancia y calidad en el tiempo.
                - button [ref=e620] [cursor=pointer]:
                  - generic [ref=e621]: REGRESAR
              - generic [ref=e628]:
                - paragraph [ref=e635]: Asistencia Administrativa
                - generic [ref=e636]: Rosibel Zamora Ramírez
                - paragraph [ref=e641]: "Teléfono: 2277-3750"
                - link [ref=e644] [cursor=pointer]:
                  - /url: https://www.sepuna.una.ac.cr/index.php/contactenos
                  - generic [ref=e645]: Contacto
        - button "next arrow" [ref=e647] [cursor=pointer]:
          - img "next arrow" [ref=e649]
          - img "next arrow" [ref=e651]
        - button "previous arrow" [ref=e652] [cursor=pointer]:
          - img "previous arrow" [ref=e654]
          - img "previous arrow" [ref=e656]
      - generic [ref=e658]:
        - generic [ref=e661]:
          - heading "Facultades y Centros" [level=1] [ref=e662]
          - list [ref=e663]:
            - listitem [ref=e664]:
              - link "Centro de Estudios Generales" [ref=e665] [cursor=pointer]:
                - /url: http://www.ceg.una.ac.cr/
            - listitem [ref=e666]:
              - link "Centro de Investigación Docencia y Extensión Artística" [ref=e667] [cursor=pointer]:
                - /url: http://www.cidea.una.ac.cr/
            - listitem [ref=e669]:
              - link "Centro de Investigación y Docencia en Educación" [ref=e670] [cursor=pointer]:
                - /url: http://www.cide.una.ac.cr/
            - listitem [ref=e672]:
              - link "Facultad de Ciencias de la Salud" [ref=e673] [cursor=pointer]:
                - /url: https://www.fcsalud.una.ac.cr/
            - listitem [ref=e675]:
              - link "Facultad de Ciencias de la Tierra y el Mar" [ref=e676] [cursor=pointer]:
                - /url: http://www.tierraymar.una.ac.cr/
            - listitem [ref=e678]:
              - link "Facultad de Ciencias Exactas y Naturales" [ref=e679] [cursor=pointer]:
                - /url: https://www.exactasynaturales.una.ac.cr/
            - listitem [ref=e681]:
              - link "Facultad de Ciencias Sociales" [ref=e682] [cursor=pointer]:
                - /url: https://www.cienciassociales.una.ac.cr/
            - listitem [ref=e684]:
              - link "Facultad de Filosofía y Letras" [ref=e685] [cursor=pointer]:
                - /url: http://www.facultadfilosofia.una.ac.cr/
        - generic [ref=e689]:
          - heading "Campus Universitarios" [level=1] [ref=e690]
          - list [ref=e691]:
            - listitem [ref=e692]:
              - link "Campus Omar Dengo" [ref=e693] [cursor=pointer]:
                - /url: https://www.una.ac.cr/
            - listitem [ref=e694]:
              - link "Campus Liberia" [ref=e695] [cursor=pointer]:
                - /url: http://www.chorotega.una.ac.cr/
            - listitem [ref=e696]:
              - link "Campus Nicoya" [ref=e697] [cursor=pointer]:
                - /url: http://www.chorotega.una.ac.cr/
            - listitem [ref=e698]:
              - link "Campus Coto" [ref=e699] [cursor=pointer]:
                - /url: https://www.srb.una.ac.cr/index.php/es/
            - listitem [ref=e701]:
              - link "Campus Pérez Zeledón" [ref=e702] [cursor=pointer]:
                - /url: https://www.srb.una.ac.cr/index.php/es/
            - listitem [ref=e703]:
              - link "Campus Benjamín Núñez" [ref=e704] [cursor=pointer]:
                - /url: https://www.directorio.una.ac.cr/?wpbdp_listing=mt-benjamin-nunez
            - listitem [ref=e705]:
              - link "Campus Sarapiquí" [ref=e706] [cursor=pointer]:
                - /url: http://www.sarapiqui.una.ac.cr/
            - listitem [ref=e707]:
              - link "Sede Interuniversitaria de Alajuela" [ref=e708] [cursor=pointer]:
                - /url: https://sia.ucr.ac.cr/
      - heading "Producción Académica" [level=2] [ref=e714]
      - generic [ref=e715]:
        - generic [ref=e716]:
          - generic [ref=e719]:
            - img "Portal de Revistas Académicas" [ref=e722]
            - heading "Portal de Revistas Académicas" [level=2] [ref=e724]
          - generic [ref=e727]:
            - img "Repositorio Académico Institucional" [ref=e730]
            - heading "Repositorio Académico Institucional" [level=2] [ref=e732]
          - generic [ref=e735]:
            - img "UNA Red Académica" [ref=e738]
            - heading "UNA Red Académica" [level=2] [ref=e740]
          - generic [ref=e743]:
            - img "Editorial Universidad Nacional" [ref=e746]
            - heading "Editorial Universidad Nacional" [level=2] [ref=e748]
        - link "Conocer más 5" [ref=e752] [cursor=pointer]:
          - /url: https://www.una.ac.cr/publicaciones/
      - generic [ref=e754]:
        - generic [ref=e755]:
          - img "UNA Transparente" [ref=e758]
          - heading "Hacia una universidad abierta" [level=2] [ref=e761]
          - link "Portal UNA Transparente " [ref=e763] [cursor=pointer]:
            - /url: https://www.transparencia.una.ac.cr
          - link "Portal Datos Abiertos " [ref=e765] [cursor=pointer]:
            - /url: https://www.datosabiertos.una.ac.cr/
          - link "Universidad Abierta " [ref=e767] [cursor=pointer]:
            - /url: https://www.uabierta.una.ac.cr/
        - generic [ref=e770]:
          - paragraph [ref=e771]: La Universidad Nacional, mediante la rendición de cuentas, garantiza a la sociedad que cumple con su misión, usa eficientemente los recursos a ella asignados y realiza una gestión responsable de estos.
          - paragraph [ref=e772]: Creemos en la transparencia de nuestra institución como un compromiso que asumimos con la sociedad mediante el acceso de la información de carácter público.
      - generic [ref=e774]:
        - generic [ref=e777]:
          - heading "Admisión y Becas" [level=2] [ref=e778]
          - list [ref=e779]:
            - listitem [ref=e780]:
              - link "Admisión" [ref=e781] [cursor=pointer]:
                - /url: https://www.una.ac.cr/admision/
            - listitem [ref=e782]:
              - link "Departamento de Registro" [ref=e783] [cursor=pointer]:
                - /url: https://www.registro.una.ac.cr
            - listitem [ref=e784]:
              - link "Becas Estudiantiles" [ref=e785] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/becas
        - generic [ref=e788]:
          - heading "Trámites estudiantes" [level=2] [ref=e789]
          - list [ref=e790]:
            - listitem [ref=e791]:
              - link "Admisión" [ref=e792] [cursor=pointer]:
                - /url: https://www.una.ac.cr/admision/
            - listitem [ref=e793]:
              - link "Reconocimiento y equiparación" [ref=e794] [cursor=pointer]:
                - /url: https://www.registro.una.ac.cr/index.php/informacion-general-reconocimiento
            - listitem [ref=e795]:
              - link "Certificaciones" [ref=e796] [cursor=pointer]:
                - /url: https://www.registro.una.ac.cr/index.php/tipos-de-certificaciones
            - listitem [ref=e797]:
              - link "Graduación" [ref=e798] [cursor=pointer]:
                - /url: https://www.registro.una.ac.cr/index.php/graduacion
            - listitem [ref=e799]:
              - link "Carné estudiantil" [ref=e800] [cursor=pointer]:
                - /url: https://www.registro.una.ac.cr/index.php/carne
        - generic [ref=e803]:
          - heading "Servicios en línea" [level=2] [ref=e804]
          - list [ref=e805]:
            - listitem [ref=e806]:
              - link "Matrícula" [ref=e807] [cursor=pointer]:
                - /url: https://studentssb.una.ac.cr/StudentRegistrationSsb
            - listitem [ref=e808]:
              - link "Aula virtual" [ref=e809] [cursor=pointer]:
                - /url: https://aulavirtual.una.ac.cr/login/index.php
            - listitem [ref=e810]:
              - link "Biblioteca" [ref=e811] [cursor=pointer]:
                - /url: https://www.siduna.una.ac.cr/
            - listitem [ref=e812]:
              - link "Portal de Revistas" [ref=e813] [cursor=pointer]:
                - /url: https://www.revistas.una.ac.cr
            - listitem [ref=e814]:
              - link "Repositorio Académico" [ref=e815] [cursor=pointer]:
                - /url: https://repositorio.una.ac.cr/
            - listitem [ref=e816]:
              - link "Red Académica" [ref=e817] [cursor=pointer]:
                - /url: https://redacademica.una.ac.cr/
            - listitem [ref=e818]:
              - link "Plataforma de servicios DTIC" [ref=e819] [cursor=pointer]:
                - /url: https://www.dtic.una.ac.cr/index.php/recuperacion-de-contrasenas
        - generic [ref=e822]:
          - heading "Programas de estudio" [level=2] [ref=e823]
          - list [ref=e824]:
            - listitem [ref=e825]:
              - link "Catálogos de Carreras" [ref=e826] [cursor=pointer]:
                - /url: https://www.carreras.una.ac.cr/
            - listitem [ref=e827]:
              - link "Diplomados" [ref=e828] [cursor=pointer]:
                - /url: https://www.carreras.una.ac.cr/grado_academico/diplomado/
            - listitem [ref=e829]:
              - link "Bachilleratos" [ref=e830] [cursor=pointer]:
                - /url: https://www.carreras.una.ac.cr/grado_academico/bachillerato/
            - listitem [ref=e831]:
              - link "Licenciaturas" [ref=e832] [cursor=pointer]:
                - /url: https://www.carreras.una.ac.cr/grado_academico/licenciatura/
            - listitem [ref=e833]:
              - link "Maestrías" [ref=e834] [cursor=pointer]:
                - /url: https://www.carreras.una.ac.cr/grado_academico/maestria/
            - listitem [ref=e835]:
              - link "Doctorados" [ref=e836] [cursor=pointer]:
                - /url: https://www.carreras.una.ac.cr/grado_academico/doctorado/
        - generic [ref=e839]:
          - heading "Vida Estudiantil" [level=2] [ref=e840]
          - list [ref=e841]:
            - listitem [ref=e842]:
              - link "Grupos artísticos" [ref=e843] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/grupos
            - listitem [ref=e844]:
              - link "Apoyo a Madres y Padres" [ref=e845] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/madresypadres
            - listitem [ref=e846]:
              - link "Desarrollo Personal y Social" [ref=e847] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/desarrollopersonalsocial
            - listitem [ref=e848]:
              - link "Atención psicológica" [ref=e849] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/atencionpsicologica
            - listitem [ref=e850]:
              - link "Atención psicopedagógica" [ref=e851] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/areadepsicopedagogia
            - listitem [ref=e852]:
              - link "Becas Estudiantiles" [ref=e853] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/becas
            - listitem [ref=e854]:
              - link "Asesorías en Orientación" [ref=e855] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/asesoriasorientacion
            - listitem [ref=e856]:
              - link "Recreación" [ref=e857] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/recreacion
            - listitem [ref=e858]:
              - link "Talleres Culturales" [ref=e859] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/talleresculturales
            - listitem [ref=e860]:
              - link "UNAventura voluntariado" [ref=e861] [cursor=pointer]:
                - /url: https://www.vidaestudiantil.una.ac.cr/unaventura
  - contentinfo [ref=e862]:
    - generic [ref=e864]:
      - paragraph [ref=e865]:
        - text: © 2026
        - link "Dirección de Tecnologías de Información y Comunicación, Centro de Gestión Tecnológica, Área UNAWEB" [ref=e866] [cursor=pointer]:
          - /url: https://www.dtic.una.ac.cr/
        - text: "| Universidad Nacional, Costa Rica."
      - list [ref=e868]:
        - listitem [ref=e869]:
          - link "Facebook" [ref=e870] [cursor=pointer]:
            - /url: https://www.facebook.com/unacostarica
            - text: 
        - listitem [ref=e871]:
          - link "Twitter" [ref=e872] [cursor=pointer]:
            - /url: https://twitter.com/ComunidadUNACR/
            - text: 
        - listitem [ref=e873]:
          - link "Instagram" [ref=e874] [cursor=pointer]:
            - /url: https://instagram.com/una.ac.cr/
            - text: 
        - listitem [ref=e875]:
          - link "Youtube" [ref=e876] [cursor=pointer]:
            - /url: https://www.youtube.com/user/unamultimedia
            - text: 
```

# Test source

```ts
  76  |   });
  77  | 
  78  |   test('TC4_ registra los encabezados', async ({ page }) => {
  79  |     await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });
  80  | 
  81  |     const encabezados = await page.locator('h1, h2, h3, h4, h5, h6')
  82  |       .evaluateAll(elementos => elementos.map(elemento => ({
  83  |         nivel: Number(elemento.tagName.substring(1)),
  84  |         texto: elemento.innerText.trim()
  85  |       })));
  86  | 
  87  |     console.log('Jerarquía de encabezados:', encabezados);
  88  | 
  89  |     await page.screenshot({
  90  |       path: 'reportes/TC4-encabezados.png',
  91  |       fullPage: true
  92  |     });
  93  |   });
  94  | 
  95  | test('TC5_identifica objetivos tactiles pequenos', async ({ page }) => {
  96  |   await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });
  97  | 
  98  |   const elementos = page.locator(
  99  |     'a, button, input, select, textarea, [role="button"], [role="link"]'
  100 |   );
  101 | 
  102 |   const total = await elementos.count();
  103 |   const pequenos = [];
  104 | 
  105 |   for (let i = 0; i < total; i++) 
  106 |     {
  107 |     const elemento = elementos.nth(i);
  108 | 
  109 |     if (!(await elemento.isVisible())) continue;
  110 | 
  111 |     const datos = await elemento.evaluate(el => {
  112 |       const rect = el.getBoundingClientRect();
  113 | 
  114 |       return {
  115 |         etiqueta: el.tagName,
  116 |         texto: (el.innerText || el.getAttribute('aria-label') || '')
  117 |           .trim().slice(0, 80),
  118 |         ancho: Math.round(rect.width),
  119 |         alto: Math.round(rect.height),
  120 |         href: el.getAttribute('href')
  121 |       };
  122 |     });
  123 | 
  124 |     if (datos.ancho > 0 && datos.alto > 0 &&
  125 |         (datos.ancho < 24 || datos.alto < 24)) {
  126 |       pequenos.push(datos);
  127 |     }
  128 |   }
  129 | 
  130 |   console.log('Objetivos pequeños:', pequenos);
  131 | });
  132 | 
  133 | test('TC6_navegacion mediante teclado', async ({ page }) => {
  134 |   await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });
  135 | 
  136 |   const recorrido = [];
  137 | 
  138 |   for (let i = 0; i < 15; i++) {
  139 |     await page.keyboard.press('Tab');
  140 | 
  141 |     const foco = await page.evaluate(() => {
  142 |       const el = document.activeElement;
  143 | 
  144 |       if (!el) return null;
  145 | 
  146 |       const estilo = getComputedStyle(el);
  147 |       const rect = el.getBoundingClientRect();
  148 | 
  149 |       return {
  150 |         etiqueta: el.tagName,
  151 |         texto: (el.innerText || el.getAttribute('aria-label') || '')
  152 |           .trim().slice(0, 80),
  153 |         id: el.id,
  154 |         visible: rect.width > 0 && rect.height > 0,
  155 |         outlineStyle: estilo.outlineStyle,
  156 |         outlineWidth: estilo.outlineWidth,
  157 |         outlineColor: estilo.outlineColor
  158 |       };
  159 |     });
  160 | 
  161 |     recorrido.push(foco);
  162 |   }
  163 | 
  164 |   console.log('Recorrido de foco con Tab:', recorrido);
  165 | 
  166 |   await page.screenshot({
  167 |     path: 'reportes/TC8-teclado.png',
  168 |     fullPage: false
  169 |   });
  170 | });
  171 | 
  172 | test('TC7_validacion del zoom', async ({ page }) => {
  173 |   await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });
  174 | 
  175 |   const viewport = await page.locator('meta[name="viewport"]')
> 176 |     .getAttribute('content');
      |      ^ Error: locator.getAttribute: Error: strict mode violation: locator('meta[name="viewport"]') resolved to 2 elements:
  177 | 
  178 |   console.log('Configuración viewport:', viewport);
  179 | 
  180 |   const problemas = [];
  181 | 
  182 |   if (!viewport) {
  183 |     problemas.push('No se encontró la etiqueta meta viewport.');
  184 |   } else {
  185 |     if (/user-scalable\s*=\s*no/i.test(viewport)) {
  186 |       problemas.push('Se encontró user-scalable=no.');
  187 |     }
  188 | 
  189 |     const escalaMaxima = viewport.match(
  190 |       /maximum-scale\s*=\s*([0-9.]+)/i
  191 |     );
  192 | 
  193 |     if (escalaMaxima && Number(escalaMaxima[1]) < 2) {
  194 |       problemas.push(
  195 |         `maximum-scale=${escalaMaxima[1]} podría limitar el zoom.`
  196 |       );
  197 |     }
  198 |   }
  199 | 
  200 |   console.log('Observaciones sobre zoom:', problemas);
  201 | });
  202 | 
  203 | test('TC8: identifica campos sin label asociado', async ({ page }) => {
  204 |   await page.goto(URL_UNA, { waitUntil: 'domcontentloaded' });
  205 | 
  206 |   const campos = page.locator(
  207 |     'input:not([type="hidden"]):not([type="submit"]):not([type="button"]), select, textarea'
  208 |   );
  209 | 
  210 |   const total = await campos.count();
  211 |   const revisar = [];
  212 | 
  213 |   for (let i = 0; i < total; i++) {
  214 |     const campo = campos.nth(i);
  215 | 
  216 |     const datos = await campo.evaluate(el => {
  217 |       const tieneLabel = Boolean(
  218 |         el.labels && Array.from(el.labels).some(label =>
  219 |           label.innerText.trim().length > 0
  220 |         )
  221 |       );
  222 | 
  223 |       const tieneAriaLabel = Boolean(
  224 |         el.getAttribute('aria-label')?.trim()
  225 |       );
  226 | 
  227 |       const tieneAriaLabelledby = Boolean(
  228 |         el.getAttribute('aria-labelledby')?.trim()
  229 |       );
  230 | 
  231 |       return {
  232 |         etiqueta: el.tagName,
  233 |         tipo: el.getAttribute('type'),
  234 |         id: el.id,
  235 |         placeholder: el.getAttribute('placeholder'),
  236 |         tieneLabel,
  237 |         tieneAriaLabel,
  238 |         tieneAriaLabelledby
  239 |       };
  240 |     });
  241 | 
  242 |     if (!datos.tieneLabel &&
  243 |         !datos.tieneAriaLabel &&
  244 |         !datos.tieneAriaLabelledby) {
  245 |       revisar.push(datos);
  246 |     }
  247 |   }
  248 | 
  249 |   console.log('Campos que requieren revisión:', revisar);
  250 | });
  251 | });
```