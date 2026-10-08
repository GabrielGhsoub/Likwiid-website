import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Booking.com for Partners: Entender tu comisión (consultado en octubre de 2026)',
    href: 'https://partner.booking.com/es/ayuda/comisi%C3%B3n-facturas-e-impuestos/facturas/entender-tu-comisi%C3%B3n',
  },
  {
    label: 'Booking.com for Partners: Joining Payments by Booking.com, en inglés (consultado en octubre de 2026)',
    href: 'https://partner.booking.com/en-gb/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom',
  },
  {
    label: 'Booking.com for Partners: Understanding the Preferred Partner Programme, en inglés (consultado en octubre de 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-preferred-partner-programme',
  },
  {
    label: 'Booking.com for Partners: Understanding the Genius marketing programme, en inglés (consultado en octubre de 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-genius-marketing-programme',
  },
  {
    label: 'Booking.com Developers: Get property commission, comisión contratada y Visibility Booster (consultado en octubre de 2026)',
    href: 'https://developers.booking.com/connectivity/docs/b_xml-getcommissionoverride',
  },
  {
    label: 'Comisión Europea: La Comisión designa a Booking como guardián de acceso, IP/24/2561, 13 de mayo de 2024',
    href: 'https://ec.europa.eu/commission/presscorner/detail/es/ip_24_2561',
  },
  {
    label: 'Comisión Europea, DMA: Booking must comply with all relevant obligations under the DMA, 14 de noviembre de 2024',
    href: 'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en',
  },
  {
    label: 'Comisión Europea, DMA: ficha sobre la libertad de precios de quienes usan Booking.com, 28 de septiembre de 2026',
    href: 'https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en',
  },
  {
    label: 'Agencia Tributaria: IVA en operaciones de comercio exterior, prestaciones de servicios (consultado en octubre de 2026)',
    href: 'https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-comercio-exterior/prestaciones-servicios.html',
  },
  {
    label: 'Tu Europa (Unión Europea): IVA transfronterizo, compra de servicios en otro país de la UE (consultado en octubre de 2026)',
    href: 'https://europa.eu/youreurope/business/finance-and-tax/vat/cross-border-vat/index_es.htm',
  },
  {
    label: 'GLEIF: registro de la entidad Booking.com B.V., Ámsterdam, Países Bajos (consultado en octubre de 2026)',
    href: 'https://search.gleif.org/#/record/7245009ZP4X4SZC79G88',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="booking-com-commission-costs" lang="es" sources={sources}>
      <Summary>
        <Li>La comisión de Booking.com es un porcentaje fijado en tu contrato. Cambia según el país, el tipo de alojamiento y el acuerdo firmado, así que la cifra que vale es la de tu extranet.</Li>
        <Li>Se calcula sobre el total que paga el huésped, con limpieza y otros cargos y, en la mayoría de países, con el IVA. Los impuestos locales quedan fuera.</Li>
        <Li>Alojamientos preferentes y Visibilidad extra suben la comisión. Genius no la sube, pero el descuento lo pagas tú.</Li>
        <Li>En España, la comisión de un proveedor de otro país de la UE suele tributar por inversión del sujeto pasivo. Habla con tu gestor.</Li>
        <Li>Desde 2024, la normativa europea te deja ofrecer mejor precio en tu propia web.</Li>
      </Summary>

      <H2>Qué es la comisión y qué pagas con ella</H2>
      <P>
        Booking.com no cobra por anunciarte. Se queda con un porcentaje de cada reserva que te trae. Según sus páginas de
        ayuda para partners, el porcentaje exacto depende de tu país, del tipo de alojamiento y del acuerdo que firmaste al
        darte de alta. Lo encuentras en ese acuerdo y en la extranet, en la pestaña Finanzas, en el informe de reservas.
      </P>
      <P>
        No hay una tarifa oficial única, así que los ejemplos de esta guía usan un 15 por ciento solo como número redondo.
        Cámbialo por el tuyo. El resto refleja las páginas de Booking.com y las fuentes europeas a octubre de 2026; las
        condiciones cambian, así que compruébalo siempre en tu extranet.
      </P>
      <P>
        Conviene ser justos con lo que compra la comisión. Booking.com dice que promociona los alojamientos en buscadores en
        45 idiomas y a través de más de 17.500 afiliados, además de su propia base de viajeros. Para una casa rural o un
        pequeño hostal sin presupuesto de marketing, ese alcance es real, sobre todo con viajeros extranjeros. Y solo pagas
        cuando hay reserva.
      </P>

      <H2>Sobre qué se calcula</H2>
      <P>
        La comisión se aplica al importe total de la reserva: la tarifa más los cargos adicionales que cobres, como limpieza o
        servicio, y se aplica tras el check-out. Booking.com no cobra comisión sobre impuestos locales, como una tasa
        turística municipal, pero en la mayoría de países sí la cobra sobre el IVA. Tus Condiciones generales de entrega
        indican lo que se aplica en tu caso.
      </P>
      <Ul>
        <Li><B>Pagas comisión</B> por estancias completadas, reservas no reembolsables o parcialmente reembolsables (aunque el huésped no venga), cargos por cancelación o no presentación que cobres y overbookings.</Li>
        <Li><B>No pagas</B> si renuncias al cargo por cancelación o no presentación, o si marcas la tarjeta del huésped como no válida.</Li>
        <Li><B>Ojo al plazo:</B> las cancelaciones y los no presentados se marcan en la extranet en las 48 horas siguientes al check-out. Si no, pagas la comisión completa.</Li>
        <Li><B>El porcentaje se fija</B> en el momento de la reserva. Si tu comisión cambió, las reservas antiguas conservan la anterior.</Li>
      </Ul>

      <H2>Cuándo se paga: factura mensual o descuento en el pago</H2>
      <P>
        Si cobras tú a los huéspedes, Booking.com te envía una factura al mes con todas las reservas cuyo check-out fue el
        mes anterior. Hay que pagarla en 14 días, y una factura impagada puede llevar al cierre temporal del alojamiento en
        la plataforma.
      </P>
      <P>
        Con <B>Payments by Booking.com</B>, la plataforma cobra al huésped y te paga a ti. Cuando gestiona todos tus cobros,
        descuenta la comisión y las tarifas de cada pago. Darse de alta no tiene coste, pero si cobras por transferencia
        bancaria se aplica una tarifa de servicio de pago, un porcentaje de cada reserva completada que depende de dónde
        esté tu alojamiento. A cambio, Booking.com gestiona contracargos y reembolsos. Consulta la tarifa exacta en la ayuda
        financiera de tu extranet.
      </P>

      <H2>Lo que sube el coste real</H2>
      <Ul>
        <Li><B>Alojamientos preferentes:</B> más visibilidad en los resultados y un distintivo, a cambio de lo que Booking.com llama un pequeño aumento de comisión. No publica una cifra única, y exige, entre otros requisitos, una puntuación de comentarios de al menos 7 sobre 10.</Li>
        <Li><B>Visibilidad extra (Visibility Booster):</B> una comisión más alta que eliges para fechas concretas, para subir en el ranking esas noches. La documentación técnica de Booking.com la describe como una sustitución de la comisión, fecha a fecha.</Li>
        <Li><B>Genius:</B> no suma comisión, pero implica un descuento del 10 por ciento en tu tipo de habitación más barato y más reservado. Booking.com confirma que el descuento Genius estándar lo financia el alojamiento.</Li>
      </Ul>
      <P>
        Todos son opcionales y puedes salir de cualquiera. Si tu informe de reservas muestra un porcentaje mayor que el del
        contrato, revisa si alguno está activado.
      </P>

      <H2>Ejemplos por cada 100 de valor de reserva</H2>
      <P>
        Usamos un 15 por ciento de comisión base y, para los programas, 3 puntos más. Son ilustraciones, no cifras de
        Booking.com. El 10 por ciento de Genius es el nivel estándar del programa.
      </P>
      <Table
        caption="Lo que te queda de una reserva anunciada a 100 (tarifas de ejemplo)"
        head={['Situación', 'Paga el huésped', 'Comisión', 'Te queda']}
        rows={[
          ['Comisión base del 15 por ciento', '100', '15', '85'],
          ['Un programa suma 3 puntos (18 por ciento)', '100', '18', '82'],
          ['Huésped Genius, 10 por ciento de descuento', '90', '13,5', '76,5'],
          ['Huésped Genius con programa activo', '90', '16,2', '73,8'],
        ]}
      />
      <P>
        Fíjate en la tercera fila: descuento y comisión se suman. El huésped Genius paga 90, la comisión se calcula sobre
        esos 90 y te quedas 76,5. Frente a tu precio anunciado, el canal te cuesta 23,5, no 15. Las tarifas de pago, si las
        hay, van aparte.
      </P>
      <Note title="Qué pasa al combinar canales">
        <p>
          Si 70 de cada 100 de tu facturación anual llegan por Booking.com al 15 por ciento y 30 son reservas directas, la
          comisión media sobre todo es de 10,5 por cada 100. Con mitad y mitad, baja a 7,5. Las reservas directas también
          cuestan (la web, el cobro con tarjeta), pero suelen costar menos y las controlas tú.
        </p>
      </Note>

      <H2>El IVA de la comisión en España</H2>
      <P>
        Las facturas de comisión las emite Booking.com B.V., una sociedad registrada en Ámsterdam. La Agencia Tributaria
        explica que, cuando un empresario establecido en el territorio del IVA español recibe un servicio de un empresario
        establecido en otro país, la operación está sujeta al IVA español y la liquida el cliente mediante la inversión del
        sujeto pasivo, con carácter general en el modelo 303. Si el prestador está en otro Estado miembro, además se informa
        en el modelo 349. Ese IVA se puede deducir cuando se cumplen los requisitos.
      </P>
      <P>
        Cómo te afecta depende de tu situación: no es lo mismo un hostal o una casa rural dados de alta como actividad que
        una vivienda de uso turístico gestionada como particular. Antes de la próxima declaración, pregúntale a tu gestor
        cómo debes tratar estas facturas.
      </P>

      <H2>Tu libertad de precio en Europa</H2>
      <P>
        El 13 de mayo de 2024, la Comisión Europea designó a Booking como guardián de acceso según el Reglamento de Mercados
        Digitales, y desde el 14 de noviembre de 2024 Booking.com tiene que cumplir sus obligaciones. Una de ellas, el
        artículo 5, apartado 3, obliga a permitir que los alojamientos ofrezcan precios, disponibilidad o condiciones
        distintas en otros canales, incluida su propia web.
      </P>
      <P>
        En una ficha del 28 de septiembre de 2026, la Comisión indica que Booking.com ha retirado las cláusulas de paridad de
        sus condiciones en el Espacio Económico Europeo y no usa precios externos en su ranking por defecto ni para entrar
        en Genius o en Alojamientos preferentes. En la práctica, puedes premiar a quien reserva directo con mejor precio o
        un pequeño detalle.
      </P>

      <H2>Equilibrar los canales</H2>
      <P>
        Dejar Booking.com rara vez es buena idea para un alojamiento pequeño: te trae huéspedes a los que no llegarías solo.
        Lo útil es dejar de pagar comisión por quien ya te conoce: el huésped que repite, el que viene recomendado, el que te
        encuentra en el mapa y busca tu web.
      </P>
      <Ul>
        <Li>Mantén Booking.com para que te descubran, sobre todo en temporada baja.</Li>
        <Li>Haz que tu web acepte reservas, para que quien busca tu nombre reserve allí.</Li>
        <Li>Cuéntales a tus huéspedes que la próxima vez pueden reservar directo, y dales un motivo.</Li>
      </Ul>
      <P>
        <A to="/es/direct/">Likwiid Direct</A> es un motor de reservas sin comisiones que añade un calendario de reservas a la
        web que ya tienes, con los cobros en tu propia cuenta. Importa las fechas ocupadas de cualquier plataforma que
        exporte un calendario iCal, así que convive con tu anuncio en Booking.com; esas sincronizaciones se actualizan cada
        cierto tiempo, no al instante. Antes de elegir cualquier motor de reservas, echa un vistazo a nuestra guía con{' '}
        <A to="/es/guides/booking-engine-questions/">las preguntas que hacerle a un motor de reservas</A>.
      </P>
    </GuideLayout>
  )
}
