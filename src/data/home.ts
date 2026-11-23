import type { HomeContent } from '@/types/content';
import { media } from './media';
import { footerNav, navCta, primaryNav } from './navigation';
import { site } from './site';

const servicesImage = {
  picture: media.servicesPhoto,
  alt: 'Público asistente a una exposición de pinturas en la sala de la Pinacoteca D’Vinci',
};

export const homeContent: HomeContent = {
  nav: { links: primaryNav, cta: navCta },

  hero: {
    eyebrow: '45 años',
    titleLines: [['Descubre el arte'], ['que ', { em: 'transforma' }], ['vidas']],
    primaryCta: { label: 'Explora la colección', href: '#servicios' },
    secondaryCta: { label: 'Nuestra historia', href: '#nosotros' },
    model: {
      sketchfabId: '922621b4e0dd499d817cd3a039664289',
      title: 'Hombre de Vitruvio en 3D',
      autospin: 0.2,
      launchLabel: 'Ver en 3D',
      credit: {
        model: {
          label: 'Vitruvian Man 3D',
          href: 'https://sketchfab.com/3d-models/vitruvian-man-3d-922621b4e0dd499d817cd3a039664289',
        },
        author: { label: 'Eric Lynx Lin 林靖軒', href: 'https://sketchfab.com/hinxlinx' },
      },
    },
  },

  manifesto: {
    srTitle: 'Nuestra trayectoria en cifras',
    statement: ['La proporción no es una regla, es una ', { em: 'manera de mirar...' }],
    stats: [
      { value: '1980', label: 'Fundación' },
      { value: '45', label: 'Años de huella', highlight: true },
      { value: '900+', label: 'Obras en sala' },
      { value: '3', label: 'Pisos de galería' },
    ],
  },

  about: {
    eyebrow: 'Quiénes somos',
    title: 'Una casa donde el arte se queda a vivir',
    paragraphs: [
      [
        'La ',
        { strong: 'Pinacoteca & Corporación D’Vinci' },
        ' es una entidad cultural creada en 1980 con más de 45 años de trayectoria dedicada a preservar, promover y difundir el arte y la cultura como pilares del desarrollo humano. Hemos construido un espacio donde convergen la creación artística, la formación, el patrimonio y el compromiso social.',
      ],
      [
        'A través de exposiciones, talleres, procesos de formación, restauración y enmarcación de obras, trabajamos para fortalecer el vínculo entre la comunidad, el patrimonio artístico y la creatividad.',
      ],
    ],
    image: {
      picture: media.aboutPhoto,
      alt: 'Escalera de la pinacoteca con pinturas enmarcadas colgadas en ambas paredes',
    },
    signature: { name: 'Margarita y James', role: 'Fundadores — una historia de amor' },
    readMore: {
      label: 'Leer más',
      href: '#contacto',
      ariaLabel: 'Leer más sobre la historia de la Pinacoteca D’Vinci',
    },
  },

  services: {
    title: 'Qué hacemos',
    kicker: 'Tres formas de entrar',
    items: [
      {
        number: '01',
        title: 'Exposiciones de arte',
        description:
          'Muestras contemporáneas y clásicas que rotan a lo largo del año en los tres pisos.',
        image: servicesImage,
        imagePosition: 'right',
        href: '#contacto',
      },
      {
        number: '02',
        title: 'Talleres creativos',
        description: 'Dibujo, pintura y cerámica para todas las edades y niveles.',
        image: servicesImage,
        imagePosition: 'left',
        href: '#contacto',
      },
      {
        number: '03',
        title: 'Venta y enmarcación',
        description:
          'Obra seleccionada de artistas destacados, con restauración y enmarcación propias.',
        image: servicesImage,
        imagePosition: 'right',
        href: '#contacto',
      },
    ],
  },

  proposal: {
    eyebrow: 'Propuesta única',
    title: 'Por qué aquí',
    pillars: [
      {
        title: 'Espacio inclusivo',
        description:
          'Creamos un ambiente donde todos pueden apreciar y crear arte, sin importar su origen o experiencia previa.',
      },
      {
        title: 'Más de 45 años',
        description:
          'Con décadas de experiencia, garantizamos un enfoque profesional y artístico en cada uno de nuestros programas y exposiciones.',
      },
      {
        title: 'Proyectos sociales',
        description:
          'Fomentamos la inclusión y el desarrollo social a través de iniciativas que acercan el arte a diversas comunidades.',
      },
    ],
    image: {
      picture: media.proposalPhoto,
      alt: 'Alumna de un taller señalando su pintura sobre un caballete, con obras colgadas al fondo',
    },
  },

  gallery: {
    srTitle: 'Galería: talleres y obras',
    image: {
      picture: media.collage,
      alt: 'Collage de talleres y obras de la Pinacoteca D’Vinci: pinturas en sala, adultos mayores dibujando y niños pintando en caballetes',
    },
  },

  footer: {
    links: footerNav,
    legalName: site.name,
  },
};
