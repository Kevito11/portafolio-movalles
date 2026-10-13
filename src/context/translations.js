export const translations = {
  es: {
    nav: {
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Casos QA',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
      resume: 'Descargar CV'
    },
    hero: {
      badge: 'QA TESTER MANUAL & API TESTING',
      greeting: 'HOLA, MI NOMBRE ES',
      name: 'Michael Ovalles.',
      role: 'Asegurando la Calidad de Software.',
      description: 'Especialista en QA Manual enfocado en garantizar la fiabilidad y solidez de plataformas web y APIs. Diseño y ejecución de casos de prueba, validación de datos con SQL y documentación rigurosa de defectos en Jira y Linear.',
      ctaProjects: 'Ver Casos y Pruebas',
      ctaContact: 'Contactar',
      downloadCV: 'Descargar Curriculum (PDF)',
      status: 'Disponible para oportunidades QA'
    },
    about: {
      number: '01.',
      title: 'Sobre Mí',
      p1: '¡Hola! Soy Michael, <gold>QA Tester Manual</gold> apasionado por la excelencia en el software. Actualmente aseguro la calidad de la plataforma web de <gold>Fizupay</gold>, analizando requisitos funcionales e historias de usuario para diseñar y ejecutar casos de prueba que garanticen una experiencia de usuario impecable.',
      p2: 'En mi día a día empleo <gold>Postman</gold> para validar endpoints de API y corroboro mediante consultas <gold>SQL</gold> que cada dato persista con total integridad en la base de datos. Registro y gestiono el ciclo de vida de los defectos en <gold>Jira</gold> y <gold>Linear</gold>, aportando pasos de reproducción claros, severidad y evidencias visuales para colaborar estrechamente con el equipo de desarrollo.',
      p3: 'Antes de QA acumulé más de seis años en soporte técnico de alto nivel, gestión de casos y documentación crítica donde la exactitud es innegociable. Esa experiencia forjó mi agudo <gold>ojo para el detalle</gold> y mi capacidad para explicar cualquier comportamiento anómalo de forma estructurada.',
      traits: {
        detail: {
          title: 'Atención al Detalle',
          desc: 'Identificación temprana de comportamientos inesperados, fallos de validación y discrepancias entre UI y backend.'
        },
        methodical: {
          title: 'Enfoque Metódico',
          desc: 'Construcción de matrices de prueba con caminos felices, errores forzados y casos límite (edge cases).'
        },
        communication: {
          title: 'Comunicación Asertiva',
          desc: 'Reportes de bugs reproducibles con pasos puntuales, logs y severidad que agilizan la corrección en desarrollo.'
        }
      },
      highlights: [
        { label: 'Especialidad', value: 'Testing Manual & APIs' },
        { label: 'Herramientas Clave', value: 'Jira, Linear, Postman, SQL' },
        { label: 'Ubicación', value: 'Santo Domingo, Rep. Dominicana' },
        { label: 'Modalidad', value: 'Remoto / Híbrido' }
      ]
    },
    experience: {
      number: '02.',
      title: 'Experiencia Laboral',
      subtitle: 'Trayectoria profesional enfocada en calidad, análisis y gestión de procesos',
      items: [
        {
          role: 'QA Tester Manual',
          company: 'Fizupay',
          location: 'Remoto',
          period: '2026 - Actualidad',
          badge: 'Actual',
          description: 'Aseguramiento de la calidad de la plataforma web de pagos y fintech Fizupay.',
          responsibilities: [
            'Pruebo manualmente la plataforma web de Fizupay y verifico que cada flujo cumpla con los requisitos y user stories.',
            'Escribo y mantengo los casos de prueba (caminos normales, flujos de error y casos límite) en matrices de prueba en Excel.',
            'Pruebo las respuestas de la API con Postman y confirmo con consultas SQL que los datos queden persistidos correctamente.',
            'Registro los defectos en Jira y Linear con pasos exactos de reproducción, evidencias multimedia y severidad, ejecutando re-tests tras las correcciones.',
            'Informo el estatus del testing y mantengo comunicación constante con los desarrolladores para resolver incidencias con agilidad.'
          ],
          technologies: ['Jira', 'Linear', 'Postman', 'SQL', 'Testing Funcional', 'Regresión', 'Excel']
        },
        {
          role: 'Referral Specialist',
          company: 'The Ward Law Group',
          location: 'Miami, FL (Remoto)',
          period: '12/2025 - 05/2026',
          description: 'Gestión y seguimiento de derivaciones de clientes y precisión de registros.',
          responsibilities: [
            'Gestioné entre 30 y 50 referidos por semana, asegurando que cada caso quedara asignado y con trazabilidad completa.',
            'Monitoreé métricas de conversión en el CRM y mantuve la base de datos de casos al día.',
            'Coordiné con intake y el equipo legal para garantizar transiciones ágiles y sin atrasos.'
          ],
          technologies: ['CRM', 'Gestión de Casos', 'Control de Procesos', 'Métricas']
        },
        {
          role: 'Scheduling Coordinator',
          company: 'The Ward Law Group',
          location: 'Miami, FL (Remoto)',
          period: '08/2024 - 12/2025',
          description: 'Coordinación estratégica de citas y optimización de asistencia.',
          responsibilities: [
            'Coordiné de 40 a 70 citas semanales entre clientes, abogados y personal interno.',
            'Mantuve el índice de asistencia por encima del 90% mediante confirmaciones multicanal (teléfono, email, SMS).',
            'Actualicé registros de clientes y expedientes en el CRM con el más alto rigor de exactitud.'
          ],
          technologies: ['CRM', 'Planificación', 'Atención al Detalle', 'Documentación']
        },
        {
          role: 'Customer Service Chat Representative',
          company: 'Laytrip',
          location: 'Dover, Delaware (Remoto)',
          period: '08/2024 - 07/2025',
          description: 'Soporte al cliente para plataforma de reservas y viajes.',
          responsibilities: [
            'Atendí chats en Zendesk con tiempo de primera respuesta inferior a 5 minutos en el 98% de los casos.',
            'Documenté y gestioné tickets en Zendesk y Jira: 90% de resolución al primer contacto (FCR) y 95% de CSAT.',
            'Asistí en pedidos, reembolsos y cambios técnicos, impulsando un incremento del 25% en transacciones exitosas.'
          ],
          technologies: ['Zendesk', 'Jira', 'Soporte Técnico', 'Gestión de Tickets']
        },
        {
          role: 'Child Protective Social Worker',
          company: 'State of NH, DHHS',
          location: 'Manchester, NH',
          period: '10/2023 - 08/2024',
          description: 'Investigación, gestión de expedientes y documentación oficial.',
          responsibilities: [
            'Manejé expedientes complejos cumpliendo órdenes judiciales y manteniendo bases de datos gubernamentales actualizadas.',
            'Completé documentación legal y reportes judiciales en el sistema Bridges con un 99% de exactitud comprobada.'
          ],
          technologies: ['Bases de Datos Gubernamentales', 'Documentación Legal', 'Auditoría']
        },
        {
          role: 'Program Assistant II',
          company: 'State of NH, Office of Professional Licensure',
          location: 'Manchester, NH',
          period: '06/2023 - 10/2023',
          description: 'Asistencia y soporte a usuarios de sistemas de licencias profesionales.',
          responsibilities: [
            'Resolví más de 100 consultas por teléfono y correo con 95% de satisfacción, guiando a usuarios en el software de licencias.',
            'Reduje las incidencias y quejas repetidas en un 30% gracias a la clarificación de flujos y requerimientos.'
          ],
          technologies: ['Soporte de Software', 'Análisis de Incidencias', 'Atención al Usuario']
        },
        {
          role: 'Supervisor y Representante de Servicio & Chat',
          company: 'Teleperformance',
          location: 'Santo Domingo, Rep. Dominicana',
          period: '05/2020 - 03/2023',
          description: 'Liderazgo operativo, control de calidad y soporte multicanal.',
          responsibilities: [
            'Como supervisor: incrementé la productividad del equipo en un +25%, aceleré la capacitación inicial un 40% y mejoré la eficiencia en un 15%.',
            'Como representante: alcancé +30% en satisfacción de cliente, +25% en conversión y reduje del 15% al 20% los tiempos de resolución de quejas.'
          ],
          technologies: ['Liderazgo', 'Control de Calidad (QA Operativo)', 'Capacitación', 'Métricas']
        }
      ]
    },
    projects: {
      number: '03.',
      title: 'Casos de Prueba y Proyectos QA',
      subtitle: 'Evidencias del proceso de calidad: matrices de pruebas, APIs y validación de bases de datos',
      tagFilterAll: 'Todos',
      items: [
        {
          title: 'Fizupay - Suite Integral de Testing Web',
          category: 'Testing Funcional & Regresión',
          tag: 'Fintech Web',
          description: 'Diseño y ejecución de una suite completa de casos de prueba para los flujos críticos de la plataforma web de Fizupay: autenticación con 2FA, onboarding de usuarios, transferencias y pagos. Validación de casos borde y manejo de errores de red.',
          metrics: ['100% Cobertura de Criterios', 'Flujos de Pago & Autenticación', 'Pruebas de Regresión'],
          deliverables: [
            'Matriz de Casos de Prueba (Happy Path, Errores y Edge Cases)',
            'Pruebas de Regresión ante cada despliegue de desarrollo',
            'Verificación cross-browser de compatibilidad y UI responsiveness'
          ],
          tools: ['Linear', 'Jira', 'Excel Test Suite', 'Chrome DevTools', 'Postman']
        },
        {
          title: 'Postman API Test Suite - Servicios de Pago & Auth',
          category: 'API Testing',
          tag: 'API Validation',
          description: 'Verificación estructurada de endpoints REST de servicios financieros y autenticación mediante Postman. Validación de códigos de respuesta HTTP (200, 400, 401, 403, 500), payload JSON de entrada/salida y consistencia de headers.',
          metrics: ['Validación de Status Codes', 'Estructura de Esquemas JSON', 'Manejo de Errores de API'],
          deliverables: [
            'Colecciones organizadas por módulos (Auth, Transacciones, Usuarios)',
            'Variables de entorno configuradas para pruebas en Dev y Staging',
            'Comprobación de tiempos de respuesta y mensajes de error descriptivos'
          ],
          tools: ['Postman', 'REST APIs', 'JSON Schema', 'HTTP Codes']
        },
        {
          title: 'Validación de Persistencia e Integridad con SQL',
          category: 'Base de Datos QA',
          tag: 'SQL & Database',
          description: 'Auditoría de integridad de datos entre lo procesado en la interfaz de usuario y las tablas relacionales en la base de datos. Creación de consultas SQL para validar transacciones, estados de cuentas y registros sin duplicidad.',
          metrics: ['Consultas SELECT complejas con JOINs', 'Comprobación de Estados de Registro', 'Detección de Inconsistencias'],
          deliverables: [
            'Consultas DQL para cotejar transacciones creadas vs balance actualizado',
            'Validación de campos no nulos, llaves foráneas y tipos de datos',
            'Scripts de comprobación rápida para agilizar el re-test'
          ],
          tools: ['SQL', 'DQL (SELECT, JOIN, WHERE)', 'PostgreSQL', 'MongoDB']
        },
        {
          title: 'Ciclo de Vida de Bugs y Triage en Jira & Linear',
          category: 'Gestión de Defectos',
          tag: 'Bug Tracking',
          description: 'Documentación estandarizada de defectos de alta y media severidad con pasos exactos de reproducción (STR), comportamiento esperado vs real, logs de consola, capturas de pantalla y videos para rápida resolución por los desarrolladores.',
          metrics: ['Reportes 100% Reproducibles', 'Triage de Prioridad/Severidad', 'Re-test Riguroso'],
          deliverables: [
            'Plantilla estructurada de bug report (Título, STR, Actual, Esperado, Env)',
            'Adjuntos de evidencia gráfica y network logs',
            'Seguimiento hasta cierre definitivo (Resolved / Verified)'
          ],
          tools: ['Jira Software', 'Linear', 'Loom / Capturas', 'DevTools Console']
        }
      ]
    },
    skills: {
      number: '04.',
      title: 'Habilidades Técnicas',
      subtitle: 'Conocimientos y herramientas aplicadas en el aseguramiento de la calidad de software',
      categories: [
        {
          name: 'Metodologías y Pruebas',
          icon: 'CheckSquare',
          items: [
            { name: 'Testing Manual Funcional', level: 'Avanzado' },
            { name: 'Pruebas de Regresión', level: 'Avanzado' },
            { name: 'Análisis de User Stories', level: 'Avanzado' },
            { name: 'Diseño de Casos de Prueba', level: 'Avanzado' },
            { name: 'Smoke Testing', level: 'Sólido' },
            { name: 'Edge Cases (Casos Límite)', level: 'Avanzado' }
          ]
        },
        {
          name: 'Pruebas de API & Red',
          icon: 'Network',
          items: [
            { name: 'Postman', level: 'Avanzado' },
            { name: 'Pruebas de APIs REST', level: 'Avanzado' },
            { name: 'Validación de JSON', level: 'Avanzado' },
            { name: 'Códigos de Estado HTTP', level: 'Avanzado' },
            { name: 'Variables de Entorno API', level: 'Sólido' },
            { name: 'Chrome DevTools (Network)', level: 'Sólido' }
          ]
        },
        {
          name: 'Gestión de Defectos & Tracking',
          icon: 'Bug',
          items: [
            { name: 'Jira Software', level: 'Avanzado' },
            { name: 'Linear', level: 'Avanzado' },
            { name: 'Pasos de Reproducción (STR)', level: 'Avanzado' },
            { name: 'Triage & Severidad de Bugs', level: 'Avanzado' },
            { name: 'Re-test & Verificación', level: 'Avanzado' },
            { name: 'Excel (Matrices de Prueba)', level: 'Avanzado' }
          ]
        },
        {
          name: 'Bases de Datos & Entornos',
          icon: 'Database',
          items: [
            { name: 'SQL (Consultas DQL)', level: 'Intermedio' },
            { name: 'Validación de Datos en BD', level: 'Avanzado' },
            { name: 'MongoDB', level: 'Básico/Intermedio' },
            { name: 'Metodología Ágil / Scrum', level: 'Sólido' },
            { name: 'Zendesk & CRM', level: 'Avanzado' },
            { name: 'Git (Comandos Básicos)', level: 'Básico' }
          ]
        }
      ]
    },
    education: {
      number: '05.',
      title: 'Formación Académica',
      subtitle: 'Bases en tecnología, sistemas computacionales y análisis de comportamiento',
      items: [
        {
          institution: 'ITESA',
          degree: 'Ciencias de la Computación',
          location: 'Santo Domingo, Rep. Dominicana',
          details: 'Formación en fundamentos computacionales, lógica de programación, bases de datos y estructuras de sistemas.'
        },
        {
          institution: 'UNPHU (Universidad Nacional Pedro Henríquez Ureña)',
          degree: 'Psicología Clínica / Trabajo Social',
          location: 'Santo Domingo, Rep. Dominicana',
          details: 'Formación analítica que fortalece la empatía con el usuario final, el pensamiento crítico, la resolución de conflictos y la documentación minuciosa de casos.'
        }
      ]
    },
    contact: {
      number: '06.',
      subtitle: '¿TIENES UN PROYECTO O UNA VACANTE?',
      title: 'Ponte en Contacto',
      text: 'Actualmente estoy abierto a nuevas oportunidades como QA Tester Manual, ya sea en modalidad remota o híbrida. Si buscas a alguien detallista, metódico y comprometido con la calidad de tu producto, ¡hablemos!',
      cta: 'Iniciar Conversación',
      footer: 'Diseñado y desarrollado para Michael Ovalles • Santo Domingo, RD',
      modal: {
        title: 'Información de Contacto',
        email: 'CORREO ELECTRÓNICO',
        phone: 'TELÉFONO / WHATSAPP',
        location: 'UBICACIÓN',
        copyEmail: 'Copiar Correo',
        copyPhone: 'Copiar Teléfono',
        copied: '¡Copiado!',
        downloadCV: 'Descargar Curriculum (PDF)'
      }
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'QA Cases',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      resume: 'Resume PDF'
    },
    hero: {
      badge: 'MANUAL QA TESTER & API TESTING',
      greeting: 'HI, MY NAME IS',
      name: 'Michael Ovalles.',
      role: 'Ensuring Software Quality.',
      description: 'Manual QA Specialist dedicated to verifying the reliability and resilience of web platforms and APIs. Proficient in test case design & execution, SQL database validation, and rigorous defect tracking in Jira and Linear.',
      ctaProjects: 'View QA Test Cases',
      ctaContact: 'Get In Touch',
      downloadCV: 'Download Resume (PDF)',
      status: 'Open to QA Opportunities'
    },
    about: {
      number: '01.',
      title: 'About Me',
      p1: 'Hello! I am Michael, a <gold>Manual QA Tester</gold> passionate about software excellence. I currently perform quality assurance on the <gold>Fizupay</gold> web platform, analyzing functional requirements and user stories to build and execute test cases that ensure a seamless user experience.',
      p2: 'In my daily routine, I use <gold>Postman</gold> to test API endpoints and verify with <gold>SQL</gold> queries that all data is properly saved in the database. I log and track bugs through their entire lifecycle in <gold>Jira</gold> and <gold>Linear</gold>, providing step-by-step reproduction instructions, severity classifications, and visual evidence to streamline dev team fixes.',
      p3: 'Prior to QA, I spent over six years in technical customer support, case management, and strict documentation where precision was critical. That foundation developed my sharp <gold>eye for detail</gold> and my ability to clearly articulate technical bugs so anyone can replicate them.',
      traits: {
        detail: {
          title: 'Attention to Detail',
          desc: 'Early identification of edge cases, unexpected behaviors, and discrepancies between UI and database layers.'
        },
        methodical: {
          title: 'Methodical Approach',
          desc: 'Building structured test matrices covering happy paths, negative flows, and edge cases.'
        },
        communication: {
          title: 'Clear Communication',
          desc: 'Actionable bug reports with precise reproduction steps, logs, and evidence to accelerate debugging.'
        }
      },
      highlights: [
        { label: 'Specialty', value: 'Manual QA & API Testing' },
        { label: 'Core Tools', value: 'Jira, Linear, Postman, SQL' },
        { label: 'Location', value: 'Santo Domingo, Dominican Rep.' },
        { label: 'Work Mode', value: 'Remote / Hybrid' }
      ]
    },
    experience: {
      number: '02.',
      title: 'Work Experience',
      subtitle: 'Professional track record focused on quality, analytical rigor, and process management',
      items: [
        {
          role: 'Manual QA Tester',
          company: 'Fizupay',
          location: 'Remote',
          period: '2026 - Present',
          badge: 'Current',
          description: 'Quality assurance for the Fizupay fintech and payments web platform.',
          responsibilities: [
            'Manually test the Fizupay web application and verify every flow conforms to product specifications and user stories.',
            'Write and maintain test cases (happy path, error states, and edge cases) in Excel test matrices to track coverage.',
            'Test API responses with Postman and confirm data persistence in the database using SQL queries.',
            'File defects in Jira and Linear with precise reproduction steps, multimedia evidence, and severity ratings, re-testing upon fix.',
            'Report testing status and collaborate closely with developers to resolve incidents quickly.'
          ],
          technologies: ['Jira', 'Linear', 'Postman', 'SQL', 'Functional Testing', 'Regression', 'Excel']
        },
        {
          role: 'Referral Specialist',
          company: 'The Ward Law Group',
          location: 'Miami, FL (Remote)',
          period: '12/2025 - 05/2026',
          description: 'Case intake, referral pipeline management, and record accuracy.',
          responsibilities: [
            'Managed 30 to 50 referrals per week, ensuring case assignment and end-to-end traceability.',
            'Tracked conversion metrics in the CRM and maintained case records up to date.',
            'Coordinated with intake and legal teams to prevent workflow bottlenecks.'
          ],
          technologies: ['CRM', 'Case Management', 'Process Control', 'Metrics']
        },
        {
          role: 'Scheduling Coordinator',
          company: 'The Ward Law Group',
          location: 'Miami, FL (Remote)',
          period: '08/2024 - 12/2025',
          description: 'Strategic appointment coordination and attendance rate optimization.',
          responsibilities: [
            'Coordinated 40 to 70 appointments weekly between clients, attorneys, and internal teams.',
            'Maintained attendance rates above 90% through phone, email, and SMS confirmations.',
            'Updated client profiles and case files in CRM with high precision.'
          ],
          technologies: ['CRM', 'Scheduling', 'Attention to Detail', 'Documentation']
        },
        {
          role: 'Customer Service Chat Representative',
          company: 'Laytrip',
          location: 'Dover, Delaware (Remote)',
          period: '08/2024 - 07/2025',
          description: 'Technical and customer support for travel and booking platform.',
          responsibilities: [
            'Handled live chat inquiries on Zendesk, maintaining <5 min response time in 98% of cases.',
            'Documented and managed tickets in Zendesk and Jira: 90% first-contact resolution (FCR) and 95% CSAT.',
            'Assisted with orders, refunds, and technical issues, driving a 25% increase in successful transactions.'
          ],
          technologies: ['Zendesk', 'Jira', 'Technical Support', 'Ticket Management']
        },
        {
          role: 'Child Protective Social Worker',
          company: 'State of NH, DHHS',
          location: 'Manchester, NH',
          period: '10/2023 - 08/2024',
          description: 'Case investigation, regulatory compliance, and state database records.',
          responsibilities: [
            'Managed 6+ active cases while adhering to court orders and keeping state databases updated.',
            'Completed mandatory legal documentation and court reports in Bridges with 99% accuracy.'
          ],
          technologies: ['State Databases', 'Legal Documentation', 'Auditing']
        },
        {
          role: 'Program Assistant II',
          company: 'State of NH, Office of Professional Licensure',
          location: 'Manchester, NH',
          period: '06/2023 - 10/2023',
          description: 'User support and system guidance for professional licensing portal.',
          responsibilities: [
            'Resolved over 100 queries via phone and email with 95% satisfaction, guiding users through licensing systems.',
            'Reduced recurring complaints by 30% through clear user flow instructions.'
          ],
          technologies: ['Software Support', 'Incident Analysis', 'User Assistance']
        },
        {
          role: 'Supervisor & Customer Service Representative',
          company: 'Teleperformance',
          location: 'Santo Domingo, Dominican Rep.',
          period: '05/2020 - 03/2023',
          description: 'Operational team leadership, quality control, and multichannel support.',
          responsibilities: [
            'As supervisor: boosted team productivity by +25%, accelerated onboarding by 40%, and lifted operational efficiency by 15%.',
            'As representative: achieved +30% customer satisfaction, +25% sales conversion, and cut repeat complaints by 15-20%.'
          ],
          technologies: ['Leadership', 'Quality Assurance (Operational QA)', 'Coaching', 'Metrics']
        }
      ]
    },
    projects: {
      number: '03.',
      title: 'QA Test Cases & Projects',
      subtitle: 'Demonstrated quality engineering: test matrices, API collections, and database validation',
      tagFilterAll: 'All',
      items: [
        {
          title: 'Fizupay - End-to-End Web Testing Suite',
          category: 'Functional & Regression Testing',
          tag: 'Fintech Web',
          description: 'Design and execution of a comprehensive test case suite for Fizupay core web workflows: 2FA auth, merchant onboarding, transfers, and gateway payments. Validated boundary values and network error handling.',
          metrics: ['100% Acceptance Criteria Met', 'Payment & Auth Workflows', 'Regression Suites'],
          deliverables: [
            'Test Case Matrix (Happy Path, Error Scenarios & Edge Cases)',
            'Regression testing before each deployment to staging/production',
            'Cross-browser UI responsiveness and consistency verification'
          ],
          tools: ['Linear', 'Jira', 'Excel Test Suite', 'Chrome DevTools', 'Postman']
        },
        {
          title: 'Postman API Test Suite - Payment & Auth Endpoints',
          category: 'API Testing',
          tag: 'API Validation',
          description: 'Structured testing of REST endpoints for financial microservices and authentication using Postman. Validated HTTP response codes (200, 400, 401, 403, 500), JSON payload formats, and header tokens.',
          metrics: ['Status Code Verification', 'JSON Schema Validation', 'Error Response Integrity'],
          deliverables: [
            'Postman collections organized by module (Auth, Transactions, Users)',
            'Configured environment variables for staging & dev testing',
            'Verification of response latency and actionable error codes'
          ],
          tools: ['Postman', 'REST APIs', 'JSON Schema', 'HTTP Codes']
        },
        {
          title: 'SQL Data Persistence & Integrity Validation',
          category: 'Database QA',
          tag: 'SQL & Database',
          description: 'Data auditing between UI submissions and relational database tables. Crafted SQL queries with JOINs, conditional filters, and aggregations to ensure accurate financial records without duplicates.',
          metrics: ['Complex SELECT queries with JOINs', 'Record State Verification', 'Data Consistency Audits'],
          deliverables: [
            'DQL queries to verify created transactions vs updated wallet balance',
            'Validation of not-null constraints, foreign keys, and data types',
            'Quick verification scripts to speed up re-testing iterations'
          ],
          tools: ['SQL', 'DQL (SELECT, JOIN, WHERE)', 'PostgreSQL', 'MongoDB']
        },
        {
          title: 'Defect Lifecycle & Triage in Jira and Linear',
          category: 'Defect Management',
          tag: 'Bug Tracking',
          description: 'Standardized defect documentation with exact steps to reproduce (STR), expected vs actual outcomes, console logs, screenshots, and screen recordings to facilitate quick dev triage and turnaround.',
          metrics: ['100% Reproducible Bug Reports', 'Severity & Priority Triage', 'Rigorous Re-testing'],
          deliverables: [
            'Structured bug template (Summary, STR, Actual, Expected, Env)',
            'Attached visual evidence and network log extracts',
            'Tracking through to final verification and closure'
          ],
          tools: ['Jira Software', 'Linear', 'Loom / Screenshots', 'DevTools Console']
        }
      ]
    },
    skills: {
      number: '04.',
      title: 'Technical Skills',
      subtitle: 'Competencies and tools applied across software quality assurance',
      categories: [
        {
          name: 'Testing Methodologies',
          icon: 'CheckSquare',
          items: [
            { name: 'Manual Functional Testing', level: 'Advanced' },
            { name: 'Regression Testing', level: 'Advanced' },
            { name: 'User Stories & Criteria', level: 'Advanced' },
            { name: 'Test Case Design', level: 'Advanced' },
            { name: 'Smoke Testing', level: 'Solid' },
            { name: 'Edge Case Scenarios', level: 'Advanced' }
          ]
        },
        {
          name: 'API & Network Testing',
          icon: 'Network',
          items: [
            { name: 'Postman', level: 'Advanced' },
            { name: 'REST API Testing', level: 'Advanced' },
            { name: 'JSON Validation', level: 'Advanced' },
            { name: 'HTTP Status Codes', level: 'Advanced' },
            { name: 'API Environment Variables', level: 'Solid' },
            { name: 'Chrome DevTools (Network)', level: 'Solid' }
          ]
        },
        {
          name: 'Defect Management & Tracking',
          icon: 'Bug',
          items: [
            { name: 'Jira Software', level: 'Advanced' },
            { name: 'Linear', level: 'Advanced' },
            { name: 'Reproduction Steps (STR)', level: 'Advanced' },
            { name: 'Bug Triage & Severity', level: 'Advanced' },
            { name: 'Re-testing & Verification', level: 'Advanced' },
            { name: 'Excel (Test Matrices)', level: 'Advanced' }
          ]
        },
        {
          name: 'Databases & Environments',
          icon: 'Database',
          items: [
            { name: 'SQL (DQL Queries)', level: 'Intermediate' },
            { name: 'Data Validation in DB', level: 'Advanced' },
            { name: 'MongoDB', level: 'Basic/Intermediate' },
            { name: 'Agile / Scrum Mindset', level: 'Solid' },
            { name: 'Zendesk & CRM', level: 'Advanced' },
            { name: 'Git (Basic Commands)', level: 'Basic' }
          ]
        }
      ]
    },
    education: {
      number: '05.',
      title: 'Education',
      subtitle: 'Background in computer science, system foundations, and analytical thinking',
      items: [
        {
          institution: 'ITESA',
          degree: 'Computer Science (Ciencias de la Computación)',
          location: 'Santo Domingo, Dominican Republic',
          details: 'Core foundations in computer science, software logic, databases, and system architectures.'
        },
        {
          institution: 'UNPHU',
          degree: 'Clinical Psychology / Social Work',
          location: 'Santo Domingo, Dominican Republic',
          details: 'Analytical training sharpening end-user empathy, critical reasoning, conflict resolution, and meticulous documentation.'
        }
      ]
    },
    contact: {
      number: '06.',
      subtitle: 'HAVE AN OPPORTUNITY OR QA NEED?',
      title: 'Get In Touch',
      text: 'I am currently open to new opportunities as a Manual QA Tester, available for remote or hybrid positions. If you are looking for a thorough, methodical tester committed to product quality, let\'s talk!',
      cta: 'Start Conversation',
      footer: 'Designed & Developed for Michael Ovalles • Santo Domingo, DR',
      modal: {
        title: 'Contact Information',
        email: 'EMAIL ADDRESS',
        phone: 'PHONE / WHATSAPP',
        location: 'LOCATION',
        copyEmail: 'Copy Email',
        copyPhone: 'Copy Phone',
        copied: 'Copied!',
        downloadCV: 'Download Resume (PDF)'
      }
    }
  }
};
