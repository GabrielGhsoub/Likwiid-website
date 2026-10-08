import type { DirectMarketContent } from '../types'

const es: DirectMarketContent = {
  market: 'casa-rural',
  lang: 'es',
  docTitle: 'Reservas directas para casas rurales, sin comisiones | Likwiid',
  description:
    'Motor de reservas sin comisiones en la web de tu casa rural: alquiler completo o por habitaciones, señal o solicitud, estancia mínima y calendario sincronizado.',
  crumb: 'Casas rurales',
  eyebrow: 'Likwiid Direct para casas rurales',
  h1: 'Reservas directas para tu casa rural, completa o por habitaciones.',
  intro: [
    'En una casa rural, buena parte de las reservas empieza con una llamada o un WhatsApp: si está libre el puente, cuántos caben, si se admiten perros, cuánto es la señal. Luego llega la transferencia, que hay que cuadrar con el banco, y la fecha que hay que cerrar a mano en cada portal.',
    'Likwiid Direct lleva todo eso a la web de tu casa. El huésped ve qué fechas están libres, elige la casa completa o una habitación, añade los extras y paga la señal con tarjeta o te envía una solicitud. Sin comisión por reserva y sin intermediarios entre tú y quien vuelve cada año.',
  ],
  demo: 'quinta-likwiid',
  ctaDemo: 'Prueba la demo en vivo',
  ctaTalk: 'Habla con nosotros',
  demoNote:
    'Quinta Likwiid es una casa de huéspedes ficticia en el valle del Duero. Existe para que puedas recorrer el motor exacto que construiríamos para ti. El pago es simulado y no se cobra nada.',
  sections: [
    {
      kind: 'steps',
      id: 'flow',
      title: 'Así va una reserva en una casa rural',
      items: [
        { title: 'Fechas y alojamiento', desc: 'El huésped elige las fechas y la casa completa o una habitación. Solo ve lo que está libre y cumple tus normas.' },
        { title: 'Extras', desc: 'Desayuno, leña para la chimenea o una cesta de productos de la zona, por persona, por noche o por estancia.' },
        { title: 'Datos y condiciones', desc: 'Nombre y contacto, sin crear cuenta, y tus condiciones de cancelación aceptadas antes de seguir.' },
        { title: 'Señal o solicitud', desc: 'Una señal con tarjeta confirma la estancia y el resto se paga a la llegada. En modo solicitud no se reserva nada hasta que confirmas.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Lo que Likwiid Direct resuelve para una casa rural',
      items: [
        { title: 'Completa o por habitaciones', desc: 'Si alquilas la casa entera, es una sola unidad con su capacidad. Si alquilas por habitaciones, cada una tiene su calendario, su precio y su número de plazas.' },
        { title: 'Puentes y temporadas', desc: 'Un precio por noche para el puente de diciembre y otro para noviembre, una estancia mínima, días libres entre reservas y los periodos en que cierras.' },
        { title: 'Señal con tarjeta', desc: 'La misma señal que hoy pides por transferencia, cobrada en el momento en que el huésped se decide, sin justificantes que cuadrar.' },
        { title: 'Calendario sincronizado', desc: 'Importa las fechas ocupadas de cualquier portal que exporte un feed iCal y exporta las tuyas. No es instantáneo, y el calendario muestra cuándo se sincronizó por última vez.' },
        { title: 'Modo solicitud', desc: 'Para quien prefiere hablar antes con cada grupo: la solicitud llega con fechas, personas y extras, y tú confirmas, propones otra fecha o la rechazas.' },
        { title: 'Tus normas, aceptadas antes', desc: 'Mascotas, horarios de entrada y condiciones de cancelación en el último paso, y nadie reserva sin marcar que las ha leído.' },
      ],
    },
    {
      kind: 'panel',
      id: 'local',
      title: 'Lo que pide la normativa, y dónde ayuda la web',
      paragraphs: [
        'Cada comunidad autónoma regula y registra sus alojamientos rurales, y en muchas el número de registro tiene que figurar en la publicidad, también en tu propia web. Cuando instalamos el motor, comprobamos que el número se ve en las páginas donde se reserva.',
        'Los alojamientos de turismo rural también tienen que comunicar los datos de los viajeros y de la reserva a través de SES.HOSPEDAJES, o a la policía autonómica en Cataluña y el País Vasco. Likwiid Direct guarda el nombre y el contacto de cada reserva, pero no hace esa comunicación por ti.',
      ],
      note: 'Esto es un resumen, no asesoramiento jurídico. Las normas cambian y varían de una comunidad a otra: confírmalo con el registro de turismo de tu comunidad autónoma.',
    },
  ],
  faqTitle: 'Lo que preguntan los propietarios de casas rurales',
  faq: [
    {
      q: '¿Sirve si alquilo la casa completa?',
      a: 'Sí. La casa entera es una sola unidad con su capacidad máxima, su precio por noche y sus temporadas. Si un día pasas a alquilar por habitaciones, cada habitación se convierte en su propia unidad.',
    },
    {
      q: '¿Puedo seguir en los portales donde me anuncio?',
      a: 'Sí. Likwiid Direct importa por iCal las fechas ocupadas en los portales y exporta las suyas, para que una reserva directa cierre la fecha en los demás. Como la sincronización no es instantánea, puedes dejar días libres de margen.',
    },
    {
      q: '¿Cómo cobro la señal?',
      a: 'Con tarjeta, en tu propia cuenta de pagos, en el momento de reservar. El resto se paga a la llegada, como ahora. Si prefieres no cobrar nada por internet, usa el modo solicitud.',
    },
    {
      q: '¿Cobráis comisión por las reservas?',
      a: 'No. No hay comisión sobre ninguna reserva. Cuéntanos cómo es tu casa y te explicamos qué supone ponerlo en marcha.',
    },
  ],
  closingTitle: 'Cuéntanos cómo es tu casa',
  closingBody:
    'Si la alquilas completa o por habitaciones, dónde te anuncias hoy y cómo cobras la señal. Te respondemos en 24 horas con cómo encajaría Likwiid Direct, y con lo que no haría.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Todo lo que hace Likwiid Direct',
  breadcrumbLabel: 'Ruta de navegación',
}

export default es
