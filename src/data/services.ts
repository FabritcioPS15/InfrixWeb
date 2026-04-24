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
      { value: '500+', label: 'Proyectos ejecutados' },
      { value: '12', label: 'Años de especialidad' },
      { value: '98%', label: 'Satisfacción de clientes' }
    ],
    process: [
      { step: '01', title: 'Evaluación', desc: 'Visita técnica y levantamiento de información en campo.' },
      { step: '02', title: 'Diseño', desc: 'Elaboración de planos y especificaciones técnicas.' },
      { step: '03', title: 'Ejecución', desc: 'Instalación profesional con materiales certificados.' },
      { step: '04', title: 'Entrega', desc: 'Control de calidad final y entrega de obra limpia.' }
    ],
    images: {
      hero: '/assets/services/Drywall y estructuras.jpeg',
      gallery: [
        '/images/drywall-1.jpg',
        '/images/drywall-2.jpg',
        '/images/drywall-3.jpg'
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
      { value: '300+', label: 'Ambientes creados' },
      { value: '8', label: 'Años de experiencia' },
      { value: '97%', label: 'Satisfacción total' }
    ],
    process: [
      { step: '01', title: 'Conceptualización', desc: 'Definición de estilos, colores y texturas.' },
      { step: '02', title: 'Despiece', desc: 'Ingeniería de detalle para corte de precisión.' },
      { step: '03', title: 'Fabricación', desc: 'Procesamiento en planta con maquinaria CNC.' },
      { step: '04', title: 'Ensamblaje', desc: 'Montaje en sitio con ajustes finales de precisión.' }
    ],
    images: {
      hero: '/assets/services/Melamine y muebles.jpeg',
      gallery: [
        '/images/melamina-1.jpg',
        '/images/melamina-2.jpg',
        '/images/melamina-3.jpg'
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
      { value: '200+', label: 'Instalaciones' },
      { value: '15', label: 'Años de trayectoria' },
      { value: '99%', label: 'Seguridad garantizada' }
    ],
    process: [
      { step: '01', title: 'Diagnóstico', desc: 'Análisis de carga y estado de redes existentes.' },
      { step: '02', title: 'Ingeniería', desc: 'Cálculos eléctricos y diagramas unifilares.' },
      { step: '03', title: 'Montaje', desc: 'Tendido de ducterías y cableado normativo.' },
      { step: '04', title: 'Pruebas', desc: 'Protocolos de prueba y certificación de operatividad.' }
    ],
    images: {
      hero: '/assets/services/Instalaciones-electricas.jpg',
      gallery: [
        '/images/electricas-1.jpg',
        '/images/electricas-2.jpg',
        '/images/electricas-3.jpg'
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
      { value: '180+', label: 'Obras entregadas' },
      { value: '10', label: 'Años de especialidad' },
      { value: '98%', label: 'Cero filtraciones' }
    ],
    process: [
      { step: '01', title: 'Replanteo', desc: 'Validación de trazado de redes en obra.' },
      { step: '02', title: 'Canalización', desc: 'Zanjeo o picado según especificaciones.' },
      { step: '03', title: 'Instalación', desc: 'Termofusión o pegado de tuberías certificadas.' },
      { step: '04', title: 'Presión', desc: 'Pruebas de estanqueidad y presión hidráulica.' }
    ],
    images: {
      hero: '/assets/services/Gasfiteria y saneamiento.jpeg',
      gallery: [
        '/images/gasfiteria-1.jpg',
        '/images/gasfiteria-2.jpg',
        '/images/gasfiteria-3.jpg'
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
      { value: '80+', label: 'Megaproyectos' },
      { value: '20', label: 'Años de liderazgo' },
      { value: '97%', label: 'Eficiencia técnica' }
    ],
    process: [
      { step: '01', title: 'Anteproyecto', desc: 'Estudios de suelos y cálculo estructural básico.' },
      { step: '02', title: 'Permisos', desc: 'Gestión de licencias y autorizaciones sectoriales.' },
      { step: '03', title: 'Construcción', desc: 'Administración de obra con control de hitos.' },
      { step: '04', title: 'Comisionamiento', desc: 'Pruebas de funcionamiento de sistemas integrados.' }
    ],
    images: {
      hero: '/assets/services/Proyectos Civiles.jpeg',
      gallery: [
        '/images/civiles-1.jpg',
        '/images/civiles-2.jpg',
        '/images/civiles-3.jpg'
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
      { value: '400+', label: 'Ambientes' },
      { value: '10', label: 'Años de detalle' },
      { value: '99%', label: 'Excelencia estética' }
    ],
    process: [
      { step: '01', title: 'Selección', desc: 'Asesoría en la elección de materiales y marcas.' },
      { step: '02', title: 'Preparación', desc: 'Acondicionamiento de superficies base.' },
      { step: '03', title: 'Aplicación', desc: 'Mano de obra especializada para cada material.' },
      { step: '04', title: 'Pulido', desc: 'Limpieza fina y tratamiento protector de superficies.' }
    ],
    images: {
      hero: '/assets/services/Acabados y arquitectura.jpeg',
      gallery: [
        '/images/acabados-1.jpg',
        '/images/acabados-2.jpg',
        '/images/acabados-3.jpg'
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
      { value: '60+', label: 'Campamentos' },
      { value: '15', label: 'Años de logística' },
      { value: '98%', label: 'Habitabilidad total' }
    ],
    process: [
      { step: '01', title: 'Logística', desc: 'Plan de transporte a zonas de difícil acceso.' },
      { step: '02', title: 'Cimentación', desc: 'Preparación de plataformas y redes básicas.' },
      { step: '03', title: 'Montaje', desc: 'Ensamblaje de módulos con sistemas rápidos.' },
      { step: '04', title: 'Equipamiento', desc: 'Habilitación de mobiliario y servicios críticos.' }
    ],
    images: {
      hero: '/assets/services/Campamentos Minerales.jpeg',
      gallery: [
        '/images/campamentos-1.jpg',
        '/images/campamentos-2.jpg',
        '/images/campamentos-3.jpg'
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
      { value: '600+', label: 'Proyectos' },
      { value: '12', label: 'Años de protección' },
      { value: '98%', label: 'Resistencia probada' }
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
        '/images/pintura-1.jpg',
        '/images/pintura-2.jpg',
        '/images/pintura-3.jpg'
      ]
    },
    relatedServices: ['acabados-arquitectura-interior', 'drywall-estructuras']
  }
];
