import type { DirectMarketContent } from '../types'

const es: DirectMarketContent = {
  market: 'dive-centres',
  lang: 'es',
  docTitle: 'Reservas para centros de buceo sin comisiones | Likwiid',
  description:
    'Reservas de inmersiones y cursos en la web de tu centro de buceo: plazas por salida, cursos de varios días, alquiler de equipo y titulaciones antes de bucear.',
  crumb: 'Centros de buceo',
  eyebrow: 'Likwiid Direct para centros de buceo',
  h1: 'Reservas de inmersiones y cursos, con el papeleo hecho antes de que salga el barco.',
  intro: [
    'Una reserva de buceo nunca es solo una fecha. Necesitas la titulación del buceador, el equipo que va a alquilar y a veces un certificado médico, y casi siempre lo recoges por email, pregunta a pregunta, o en el mostrador la mañana de la inmersión.',
    'Likwiid Direct recibe reservas de inmersiones, bautizos y cursos en la web de tu centro. Lleva un número de plazas por salida y por curso, pide los documentos que exige cada actividad y te envía cada reserva directamente, sin pasar por una plataforma que se queda una parte.',
  ],
  demo: 'escuela-likwiid',
  ctaDemo: 'Prueba la demo más parecida',
  ctaTalk: 'Habla con nosotros',
  demoNote:
    'Todavía no hay una demo de buceo. La más parecida es Escuela Likwiid, una escuela náutica ficticia con cursos de varios días, plazas por sesión y un paso de documentos. Los archivos no salen de tu navegador y el pago es simulado.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Dónde fallan las reservas de buceo',
      items: [
        'Un buceador reserva una inmersión más profunda de lo que permite su titulación, y te enteras en el mostrador.',
        'Lo que necesita de equipo llega la misma mañana de la inmersión, o no llega.',
        'Un curso de tres días se reserva como una inmersión suelta, y las fechas se pierden entre mensajes.',
        'El viento cancela la salida en barco y hay que devolver el dinero o cambiar la fecha a cada buceador a mano.',
        'Las plataformas de reservas se quedan una comisión de cada inmersión y de cada curso.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Así va una reserva de buceo',
      items: [
        { title: 'Elegir la actividad', desc: 'Una inmersión, un bautizo o un curso, cada uno con sus fechas, sus horarios y sus plazas.' },
        { title: 'Elegir la fecha', desc: 'Las inmersiones muestran su hora de salida. Los cursos muestran sus sesiones, con todos los días del curso incluidos.' },
        { title: 'Añadir el equipo', desc: 'Equipo completo, neopreno o linterna, por buceador o por reserva, para que sepas qué preparar.' },
        { title: 'Subir los documentos', desc: 'La titulación o el certificado médico que pide la actividad, con un aviso de cuánto tiempo se guardan.' },
        { title: 'Señal o solicitud', desc: 'Una señal con tarjeta asegura la plaza, o la reserva queda como solicitud hasta que la revisas y la confirmas.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Lo que Likwiid Direct resuelve para un centro de buceo',
      items: [
        { title: 'Plazas por salida y por curso', desc: 'Cada salida en barco y cada curso tiene su número de plazas. El buceador ve cuántas quedan y se apunta a la lista de espera si está completo.' },
        { title: 'Cursos de varios días en una sola reserva', desc: 'Un curso de tres días es una única reserva con las tres fechas, no tres inmersiones reservadas por separado.' },
        { title: 'Documentos antes de bucear', desc: 'Cada actividad indica los documentos que necesita. El buceador los sube al reservar, y tú marcas cada uno como recibido o revisado en el panel.' },
        { title: 'Alquiler de equipo como opción', desc: 'El equipo de alquiler entra en la reserva con su precio, por buceador o por reserva, y cuenta en el total y en la señal.' },
        { title: 'Cancelaciones por mal tiempo en crédito', desc: 'Cancelas una salida desde el panel y los buceadores apuntados reciben crédito para otra fecha, en lugar de devoluciones que perseguir una a una.' },
        { title: 'El punto de encuentro en la confirmación', desc: 'La confirmación indica dónde quedar, con un enlace al mapa, y puede enlazar un vídeo de briefing.' },
      ],
    },
    {
      kind: 'panel',
      id: 'limits',
      title: 'Lo que no decide por ti',
      paragraphs: [
        'Likwiid Direct no comprueba una titulación en los registros de una agencia de formación ni valora si alguien está en condiciones de bucear. Recoge la titulación y el certificado y te los pone delante antes del día.',
        'Para las inmersiones que piden más atención, usa el modo solicitud: el buceador envía la reserva con sus documentos, tú los revisas y solo entonces la confirmas. La decisión sigue siendo tuya y de tus instructores.',
      ],
    },
  ],
  faqTitle: 'Lo que nos preguntan los centros de buceo',
  faq: [
    {
      q: '¿Comprueba el nivel de titulación automáticamente?',
      a: 'No. Pide la titulación que necesita cada actividad y te la muestra con la reserva. Decides tú o tus instructores, y el modo solicitud te deja confirmar solo después de revisarla.',
    },
    {
      q: '¿Se puede reservar un curso de varios días?',
      a: 'Sí. Un curso se configura en sesiones que pueden durar varios días, y cada sesión es una única reserva con todas sus fechas y su propio número de plazas.',
    },
    {
      q: '¿Qué pasa cuando el mal tiempo cancela una salida?',
      a: 'Cancelas la salida desde el panel de propietario y los buceadores apuntados reciben un crédito para usar otro día, sin devoluciones que gestionar a mano.',
    },
    {
      q: '¿Cuánto tiempo se guardan los documentos?',
      a: 'Lo decides tú: cuántos días después de la actividad se borran. El paso de subida se lo indica al buceador antes de que envíe nada.',
    },
    {
      q: '¿Cobráis comisión por las reservas?',
      a: 'No. No hay comisión sobre ninguna inmersión ni ningún curso. Cuéntanos cómo es tu centro y te explicamos qué supone ponerlo en marcha.',
    },
  ],
  closingTitle: 'Cuéntanos cómo reserva hoy tu centro',
  closingBody:
    'Envíanos tus salidas, tus cursos y lo que pides a los buceadores antes de venir. Te respondemos en 24 horas con cómo encajaría Likwiid Direct, y con lo que no haría.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Todo lo que hace Likwiid Direct',
  breadcrumbLabel: 'Ruta de navegación',
}

export default es
