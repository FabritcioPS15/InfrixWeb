export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  stats: Stat[];
  process: ProcessStep[];
  images: {
    hero: string;
    gallery: string[];
  };
  relatedServices: string[];
  iconSlug?: string; // To map icons if needed
}

export const services: Service[] = [
  {
    id: '01',
    slug: 'drywall-estructuras',
    name: 'Drywall & Estructuras',
    tagline: 'Particiones precisas, espacios funcionales',
    description: 'Especialistas en sistemas de tabiquería liviana para oficinas, hospitales, centros comerciales y edificios corporativos. Trabajamos con perfiles de acero galvanizado y planchas de yeso de alta resistencia, garantizando acabados impecables y rapidez en la ejecución.',
    bullets: [
      'Tabiques y muros divisorios',
      'Estructura metálica liviana',
      'Cielos rasos y plafones',
      'Sistemas acústicos y térmicos'
    ],
    stats: [
      { value: '10+', label: 'Años de Experiencia' },
      { value: 'Calidad', label: 'En cada detalle' },
      { value: 'Confianza', label: 'En cada entrega' }
    ],
    process: [
      { step: '01', title: 'Evaluación', desc: 'Visita técnica y levantamiento de información en campo.' },
      { step: '02', title: 'Diseño', desc: 'Elaboración de planos y especificaciones técnicas.' },
      { step: '03', title: 'Ejecución', desc: 'Instalación profesional con materiales certificados.' },
      { step: '04', title: 'Entrega', desc: 'Control de calidad final y entrega de obra limpia.' }
    ],
    images: {
      hero: '/assets/services/Drywall y estructuras.webp',
      gallery: [
        '/assets/services/Drywall & Estructuras/WhatsApp Image 2026-05-04 at 17.23.19 (6).jpeg',
        '/assets/services/Drywall & Estructuras/WhatsApp Image 2026-05-04 at 17.23.19 (7).jpeg',
        '/assets/services/Drywall & Estructuras/WhatsApp Image 2026-05-04 at 17.23.19 (8).jpeg'
      ]
    },
    relatedServices: ['melamina-muebles', 'acabados-arquitectura-interior']
  },
  {
    id: '02',
    slug: 'melamina-muebles',
    name: 'Melamina y Muebles',
    tagline: 'Mobiliario a medida, identidad de espacio',
    description: 'Diseñamos y fabricamos muebles en melamina de alta densidad para proyectos residenciales, hoteleros y corporativos. Cada pieza es personalizada según planos arquitectónicos, utilizando herrajes de alta calidad para durabilidad extrema.',
    bullets: [
      'Muebles a medida',
      'Cocinas y closets',
      'Mobiliario de oficina',
      'Acabados en melamina premium'
    ],
    stats: [
      { value: 'Diseño', label: 'A medida' },
      { value: 'Funcionalidad', label: 'En cada espacio' },
      { value: 'Alto', label: 'Estándar de acabados' }
    ],
    process: [
      { step: '01', title: 'Planteamiento', desc: 'Definición de estilos, colores y texturas.' },
      { step: '02', title: 'Despiece', desc: 'Ingeniería de detalle para corte de precisión.' },
      { step: '03', title: 'Fabricación', desc: 'Procesamiento en planta con maquinaria CNC.' },
      { step: '04', title: 'Ensamblaje', desc: 'Montaje en sitio con ajustes finales de precisión.' }
    ],
    images: {
      hero: '/assets/services/Melamine y muebles.webp',
      gallery: [
        '/assets/services/Melamina y Muebles/WhatsApp Image 2026-05-04 at 17.23.19 (14).jpeg',
        '/assets/services/Melamina y Muebles/WhatsApp Image 2026-05-04 at 17.23.19 (3).jpeg',
        '/assets/services/Melamina y Muebles/WhatsApp Image 2026-05-04 at 17.23.19 (4).jpeg'
      ]
    },
    relatedServices: ['drywall-estructuras', 'acabados-arquitectura-interior']
  },
  {
    id: '03',
    slug: 'instalaciones-electricas',
    name: 'Instalaciones Eléctricas',
    tagline: 'Energía segura, sistemas que duran',
    description: 'Ejecutamos instalaciones eléctricas integrales para proyectos industriales, comerciales y residenciales. Desde el diseño del tablero general hasta la puesta a tierra y sistemas de respaldo energético, cumpliendo con el CNE.',
    bullets: [
      'Redes eléctricas industriales',
      'Tableros y subestaciones',
      'Sistemas de iluminación',
      'Puesta a tierra y protecciones'
    ],
    stats: [
      { value: 'Seguridad', label: 'Operativa total' },
      { value: 'Cumplimiento', label: 'Normativo y técnico' },
      { value: 'SST', label: 'Prevención y control' }
    ],
    process: [
      { step: '01', title: 'Diagnóstico', desc: 'Análisis de carga y estado de redes existentes.' },
      { step: '02', title: 'Ingeniería', desc: 'Cálculos eléctricos y diagramas unifilares.' },
      { step: '03', title: 'Montaje', desc: 'Tendido de ducterías y cableado normativo.' },
      { step: '04', title: 'Pruebas', desc: 'Protocolos de prueba y certificación de operatividad.' }
    ],
    images: {
      hero: '/assets/services/Instalaciones-electricas.webp',
      gallery: [
        '/assets/services/Instalaciones Eléctricas/WhatsApp Image 2026-05-04 at 17.23.19 (17).jpeg',
        '/assets/services/Instalaciones Eléctricas/WhatsApp Image 2026-05-04 at 17.23.20 (2).jpeg',
        '/assets/services/Instalaciones Eléctricas/WhatsApp Image 2026-05-04 at 17.23.20 (4).jpeg'
      ]
    },
    relatedServices: ['gasfiteria-saneamiento', 'proyectos-civiles-electromecanicos']
  },
  {
    id: '04',
    slug: 'gasfiteria-saneamiento',
    name: 'Gasfitería y Saneamiento',
    tagline: 'Redes hídricas con ingeniería de detalle',
    description: 'Instalamos sistemas de agua, desagüe, gas natural y sistemas contra incendio para todo tipo de edificaciones. Cumplimos con normativa INDECI y el Reglamento Nacional de Edificaciones para garantizar máxima seguridad.',
    bullets: [
      'Redes de agua fría y caliente',
      'Desagüe y alcantarillado',
      'Sistemas contra incendio',
      'Instalaciones sanitarias'
    ],
    stats: [
      { value: 'Eficiencia', label: 'Hidráulica total' },
      { value: 'Cero', label: 'Filtraciones críticas' },
      { value: 'Cumplimiento', label: 'Técnico y normativo' }
    ],
    process: [
      { step: '01', title: 'Replanteo', desc: 'Validación de trazado de redes en obra.' },
      { step: '02', title: 'Canalización', desc: 'Zanjeo o picado según especificaciones.' },
      { step: '03', title: 'Instalación', desc: 'Termofusión o pegado de tuberías certificadas.' },
      { step: '04', title: 'Presión', desc: 'Pruebas de estanqueidad y presión hidráulica.' }
    ],
    images: {
      hero: '/assets/services/Gasfiteria y saneamiento.webp',
      gallery: [
        '/assets/services/Gasfitería y Saneamiento/WhatsApp Image 2026-05-04 at 17.23.19 (12).jpeg',
        '/assets/services/Gasfitería y Saneamiento/WhatsApp Image 2026-05-04 at 17.23.19.jpeg',
        '/assets/services/Gasfitería y Saneamiento/WhatsApp Image 2026-05-04 at 17.23.20 (1).jpeg'
      ]
    },
    relatedServices: ['instalaciones-electricas', 'proyectos-civiles-electromecanicos']
  },
  {
    id: '05',
    slug: 'proyectos-civiles-electromecanicos',
    name: 'Proyectos Civiles y Electromecánicos',
    tagline: 'Ingeniería estructural de alta exigencia',
    description: 'Desarrollamos proyectos de construcción civil pesada combinados con sistemas electromecánicos complejos para la industria minera, energética y manufactura. Contamos con ingenieros CIP colegiados de amplia trayectoria.',
    bullets: [
      'Obras de concreto armado',
      'Plantas industriales',
      'Sistemas electromecánicos',
      'Ingeniería estructural'
    ],
    stats: [
      { value: 'Ejecución', label: 'Integral de proyectos' },
      { value: 'Calidad', label: 'De alto estándar' },
      { value: 'Cobertura', label: 'Operativa a nivel nacional' }
    ],
    process: [
      { step: '01', title: 'Anteproyecto', desc: 'Estudios de suelos y cálculo estructural básico.' },
      { step: '02', title: 'Permisos', desc: 'Gestión de licencias y autorizaciones sectoriales.' },
      { step: '03', title: 'Construcción', desc: 'Administración de obra con control de hitos.' },
      { step: '04', title: 'Comisionamiento', desc: 'Pruebas de funcionamiento de sistemas integrados.' }
    ],
    images: {
      hero: '/assets/services/Proyectos Civiles.webp',
      gallery: [
        '/assets/services/Proyectos Civiles y Electromecánicos/WhatsApp Image 2026-05-04 at 17.23.19 (16).jpeg',
        '/assets/services/Proyectos Civiles y Electromecánicos/WhatsApp Image 2026-05-04 at 17.23.19 (18).jpeg',
        '/assets/services/Proyectos Civiles y Electromecánicos/WhatsApp Image 2026-05-04 at 17.23.20 (3).jpeg'
      ]
    },
    relatedServices: ['campamentos-mineros-industriales', 'instalaciones-electricas']
  },
  {
    id: '06',
    slug: 'acabados-arquitectura-interior',
    name: 'Acabados & Arquitectura Interior',
    tagline: 'Superficies que definen la experiencia',
    description: 'Aplicamos acabados arquitectónicos de alta gama en pisos, paredes y cielos. Trabajamos con porcelanato, madera, vinilo, microcemento y materiales importados para proyectos donde el detalle es lo más importante.',
    bullets: [
      'Pisos y contrapisos',
      'Falsos cielos',
      'Diseño de interiores',
      'Acabados de alta gama'
    ],
    stats: [
      { value: 'Diseño', label: 'Funcional y estético' },
      { value: 'Precisión', label: 'En cada acabado' },
      { value: 'Espacios', label: 'Alto impacto' }
    ],
    process: [
      { step: '01', title: 'Selección', desc: 'Asesoría en la elección de materiales y marcas.' },
      { step: '02', title: 'Preparación', desc: 'Acondicionamiento de superficies base.' },
      { step: '03', title: 'Aplicación', desc: 'Mano de obra especializada para cada material.' },
      { step: '04', title: 'Pulido', desc: 'Limpieza fina y tratamiento protector de superficies.' }
    ],
    images: {
      hero: '/assets/services/Acabados y arquitectura.webp',
      gallery: [
        '/assets/services/Acabados & Arquitectura Interior/WhatsApp Image 2026-05-04 at 17.23.19 (10).jpeg',
        '/assets/services/Acabados & Arquitectura Interior/WhatsApp Image 2026-05-04 at 17.23.19 (5).jpeg',
        '/assets/services/Acabados & Arquitectura Interior/WhatsApp Image 2026-05-04 at 17.23.19 (9).jpeg'
      ]
    },
    relatedServices: ['drywall-estructuras', 'pintura-revestimiento']
  },
  {
    id: '07',
    slug: 'campamentos-mineros-industriales',
    name: 'Campamentos Mineros e Industriales',
    tagline: 'Infraestructura de campo lista para operar',
    description: 'Construimos e instalamos campamentos modulares para operaciones mineras y proyectos de infraestructura en zonas remotas. Soluciones autosostenibles con generación eléctrica, agua y tratamiento de residuos.',
    bullets: [
      'Módulos habitacionales',
      'Infraestructura de campo',
      'Instalaciones mineras',
      'Campamentos temporales y permanentes'
    ],
    stats: [
      { value: 'Instalación', label: 'Rápida y eficiente' },
      { value: 'Habitabilidad', label: 'Segura y funcional' },
      { value: 'Soluciones', label: 'Modulares industriales' }
    ],
    process: [
      { step: '01', title: 'Logística', desc: 'Plan de transporte a zonas de difícil acceso.' },
      { step: '02', title: 'Cimentación', desc: 'Preparación de plataformas y redes básicas.' },
      { step: '03', title: 'Montaje', desc: 'Ensamblaje de módulos con sistemas rápidos.' },
      { step: '04', title: 'Equipamiento', desc: 'Habilitación de mobiliario y servicios críticos.' }
    ],
    images: {
      hero: '/assets/services/Campamentos Minerales.webp',
      gallery: [
        '/assets/services/Campamentos Mineros e Industriales/WhatsApp Image 2026-05-04 at 17.23.19 (1).jpeg',
        '/assets/services/Campamentos Mineros e Industriales/WhatsApp Image 2026-05-04 at 17.23.19 (11).jpeg',
        '/assets/services/Campamentos Mineros e Industriales/WhatsApp Image 2026-05-04 at 17.23.19 (13).jpeg'
      ]
    },
    relatedServices: ['proyectos-civiles-electromecanicos', 'gasfiteria-saneamiento']
  },
  {
    id: '08',
    slug: 'pintura-revestimiento',
    name: 'Pintura & Revestimiento',
    tagline: 'Color y protección con precisión técnica',
    description: 'Aplicamos sistemas de pintura y revestimiento para edificios, plantas industriales y superficies de alta exigencia. Usamos pinturas epóxicas, poliuretánicas y anticorrosivas según la demanda de cada superficie.',
    bullets: [
      'Pintura interior y exterior',
      'Revestimientos especiales',
      'Impermeabilización',
      'Texturas y acabados'
    ],
    stats: [
      { value: 'Acabados', label: 'De alto estandar' },
      { value: 'Precisión', label: 'En cada detalle' },
      { value: 'Superficies', label: 'Que generan valor' }
    ],
    process: [
      { step: '01', title: 'Limpieza', desc: 'Preparación de superficie y eliminación de impurezas.' },
      { step: '02', title: 'Imprimación', desc: 'Aplicación de base para asegurar adherencia.' },
      { step: '03', title: 'Acabado', desc: 'Capas de recubrimiento con espesor controlado.' },
      { step: '04', title: 'Inspección', desc: 'Control de calidad y medición de micras.' }
    ],
    images: {
      hero: '/assets/services/pintura y recubrimiento.webp',
      gallery: [
        '/assets/services/Pintura & Revestimiento/WhatsApp Image 2026-05-04 at 17.23.19 (15).jpeg',
        '/assets/services/Pintura & Revestimiento/WhatsApp Image 2026-05-04 at 17.23.19 (2).jpeg',
        '/assets/services/Pintura & Revestimiento/WhatsApp Image 2026-05-04 at 17.23.20.jpeg'
      ]
    },
    relatedServices: ['acabados-arquitectura-interior', 'drywall-estructuras']
  }
];
