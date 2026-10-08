import type { DirectMarketContent } from '../types'

const es: DirectMarketContent = {
  market: 'padel-clubs',
  lang: 'es',
  docTitle: 'Reserva de pistas de pádel sin comisiones | Likwiid',
  description:
    'Reservas de pistas en la web de tu club: horarios por pista, lista de espera para las horas punta, reglas de antelación y de cancelación. Sin comisiones.',
  crumb: 'Clubes de pádel',
  eyebrow: 'Likwiid Direct para clubes de pádel',
  h1: 'Reserva de pistas de pádel en la web de tu club.',
  intro: [
    'Muchos clubes siguen gestionando las reservas por WhatsApp y una hoja de cálculo compartida, o con una app de terceros que se queda con la relación con el jugador y cobra por cada reserva.',
    'Likwiid Direct lleva la reserva de pistas a la web que ya tienes. El jugador elige hora y pista, ve lo que cuesta y reserva en pocos toques. Tú decides las pistas, los horarios y las normas, y cada reserva te llega directamente a ti.',
  ],
  demo: 'atelier-likwiid',
  ctaDemo: 'Prueba la demo más parecida',
  ctaTalk: 'Habla con nosotros',
  demoNote:
    'Todavía no hay una demo de pádel. La más parecida es Atelier Likwiid, un estudio ficticio que reserva sesiones por horario, con plazas libres y lista de espera. El pago es simulado y no se cobra nada.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Lo que hoy se complica',
      items: [
        'Peticiones de reserva repartidas entre WhatsApp, Instagram y llamadas, contestadas entre partido y partido.',
        'La pista de las 19:00 reservada dos veces porque dos personas tocaron la misma hoja.',
        'Cancelaciones de última hora en horas punta que dejan una pista vacía y sin cobrar.',
        'Apps intermediarias que se quedan una parte de cada reserva y el contacto del jugador.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Así va una reserva de pista',
      items: [
        { title: 'Elegir día y hora', desc: 'El jugador ve los horarios libres del día. Cuando todas las pistas están ocupadas, esa hora aparece completa.' },
        { title: 'Elegir pista', desc: 'Cubierta o descubierta, central o lateral: cada pista aparece por separado y con su propio precio.' },
        { title: 'Añadir lo que necesite', desc: 'Alquiler de pala o un bote de bolas, por jugador o por reserva, añadidos con un clic.' },
        { title: 'Confirmar o enviar una solicitud', desc: 'Una señal con tarjeta confirma la pista al momento. En modo solicitud, la reserva espera a que tú la apruebes.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Lo que Likwiid Direct resuelve para un club',
      items: [
        { title: 'Pistas y horarios', desc: 'Cada pista tiene sus horarios y su precio por turno. Una hora solo aparece completa cuando todas las pistas están reservadas.' },
        { title: 'Lista de espera para las horas punta', desc: 'Con todas las pistas ocupadas, el jugador se apunta a la lista de espera en vez de escribirte. No se cobra nada, y tú ofreces la plaza desde el panel cuando se libera.' },
        { title: 'Cancelaciones con reglas', desc: 'Tú fijas la antelación mínima para cancelar. Con aviso suficiente, la señal se convierte en crédito para otra reserva; a última hora, se la queda el club.' },
        { title: 'Antelación y periodos cerrados', desc: 'La antelación mínima para reservar y fechas cerradas por vacaciones, obras o un fin de semana de torneo.' },
        { title: 'Tus condiciones, aceptadas antes', desc: 'Tus condiciones de cancelación y de pago aparecen en el último paso, y nadie reserva sin marcar que las ha leído.' },
        { title: 'Un panel para recepción', desc: 'Reservas para buscar y exportar, solicitudes para aprobar o rechazar y un calendario donde bloqueas fechas con un clic.' },
      ],
    },
    {
      kind: 'proof',
      id: 'proof',
      title: 'Ya hemos construido reservas de pádel',
      body: 'Para un cliente en el Líbano construimos una plataforma de pádel completa: los jugadores reservan pistas, encuentran partidos de su nivel y juegan ligas, y los organizadores lo gestionan todo desde un portal web. Está publicada en el App Store y en Google Play. Likwiid Direct es la versión ligera de esa idea: reserva de pistas en tu propia web, sin app que descargar.',
      linkLabel: 'Ver el caso de estudio de reservas de pádel',
      to: '/work/padel-booking',
    },
  ],
  faqTitle: 'Lo que nos preguntan los clubes',
  faq: [
    {
      q: '¿Los jugadores tienen que descargar una app o crear una cuenta?',
      a: 'No. Reservan en la web del club, desde el navegador de cualquier móvil, solo con su nombre y sus datos de contacto. No hay cuenta que crear.',
    },
    {
      q: '¿Podemos mantener nuestra web actual?',
      a: 'Sí. Likwiid Direct se integra en la web que ya tienes con una etiqueta de script y un div, ya sea WordPress, Wix o una web hecha a mano. Si además necesitas una web nueva, también la hacemos.',
    },
    {
      q: '¿Pueden pagar los jugadores al reservar?',
      a: 'Lo decides tú. Una señal con tarjeta confirma la pista en el momento de reservar, o el modo solicitud deja que el jugador pida una pista sin pagar mientras tú confirmas cada una. Cambias de un modo a otro desde el panel de propietario.',
    },
    {
      q: '¿Gestiona ligas y búsqueda de compañeros?',
      a: 'No. Likwiid Direct sirve para reservar pistas. Las ligas y encontrar jugadores del mismo nivel son lo que construimos en la plataforma de pádel de arriba, y eso es un proyecto aparte del que hablamos encantados.',
    },
    {
      q: '¿Cobráis comisión por las reservas?',
      a: 'No. No hay comisión sobre ninguna reserva. Cuéntanos cómo es tu club y te explicamos qué supone ponerlo en marcha.',
    },
  ],
  closingTitle: 'Cuéntanos cómo reserva hoy tu club',
  closingBody:
    'Envíanos tus pistas, tu horario y cómo reservan ahora los jugadores. Te respondemos en 24 horas con cómo encajaría Likwiid Direct, y con lo que no haría.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Todo lo que hace Likwiid Direct',
  breadcrumbLabel: 'Ruta de navegación',
}

export default es
