import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const RESPOND_URL = 'https://www.airbnb.es/help/article/28'

export default function Guide() {
  return (
    <GuideLayout
      slug="request-vs-instant-booking"
      lang="es"
      sources={[
        {
          label: 'Airbnb, Centro de ayuda: Responder a una solicitud de reserva de tu alojamiento (consultado en octubre de 2026)',
          href: RESPOND_URL,
        },
      ]}
    >
      <Summary>
        <Li>Con la solicitud de reserva revisas cada reserva antes de confirmarla. Con la reserva instantánea se confirma en el acto.</Li>
        <Li>La reserva instantánea le pide menos al huésped. La solicitud te pide más a ti: contestar rápido, siempre.</Li>
        <Li>Pocas habitaciones y acogida personal suelen ir mejor con solicitudes. Turnos fijos con aforo cerrado, con reserva instantánea.</Li>
        <Li>No tienes que elegir para siempre: muchos propietarios combinan las dos según fechas, antelación o tipo de reserva.</Li>
      </Summary>

      <H2>Qué significa cada modo para el huésped y para ti</H2>
      <P>
        Con la <B>solicitud de reserva</B>, el huésped elige fechas u horario, número de personas y extras, y te envía la
        solicitud. Todavía no hay nada confirmado. Tú la lees y aceptas, propones otra fecha o la rechazas. Mientras tanto,
        el huésped espera tu respuesta para cerrar sus planes.
      </P>
      <P>
        Con la <B>reserva instantánea</B>, el huésped ve lo que está libre, lo elige y la reserva queda confirmada al
        momento, normalmente con un pago o una señal en ese mismo paso. Tú te enteras después. Tu trabajo ya no es decidir
        reserva por reserva, sino fijar las reglas de antemano: qué fechas están abiertas, cuánta antelación necesitas, qué
        condiciones aplicas.
      </P>
      <P>
        Ninguno es mejor en general. Simplemente ponen el esfuerzo en sitios distintos: uno en el día a día, solicitud a
        solicitud; el otro en el calendario y las reglas, que se hacen una vez y bien.
      </P>

      <H2>Lo que ganas y lo que pierdes</H2>
      <P>
        Hoy casi todo el mundo está acostumbrado a reservar una habitación o una clase en un par de toques. Un formulario que
        acaba en "te contestaremos" es un paso atrás, y hay quien sigue buscando mientras espera. A cambio, la solicitud te
        da un control que la reserva instantánea no te da: sabes quién viene antes de comprometerte.
      </P>
      <Table
        caption="Comparativa de los dos modos"
        head={['', 'Solicitud de reserva', 'Reserva instantánea']}
        rows={[
          ['Para el huésped', 'Espera respuesta y puede seguir buscando', 'Certeza inmediata'],
          ['Control sobre quién reserva', 'Total: decides cada caso', 'A través de reglas fijadas antes'],
          ['Calendario', 'Se puede revisar a mano antes de confirmar', 'Tiene que estar bien siempre'],
          ['Tu obligación', 'Contestar rápido a cada solicitud', 'Respetar toda reserva que el calendario admita'],
          ['Cuándo se paga', 'Después de que confirmes', 'En el momento de reservar'],
        ]}
      />
      <P>
        El calendario es lo que más propietarios subestiman. Si tu casa rural también está en plataformas y los calendarios
        se conectan mediante enlaces que se actualizan cada cierto tiempo, y no al instante, la reserva instantánea puede
        dejar que dos huéspedes se queden la misma noche en el hueco entre actualizaciones. Con solicitudes, lo detectas
        antes de decir que sí.
      </P>
      <P>
        El momento del pago también cuenta. Con la reserva instantánea el huésped pone dinero al reservar, lo que filtra a
        los que solo miran. Con la solicitud no se paga nada hasta que confirmas, así que necesitas un siguiente paso claro
        para el pago; si no, un huésped ya aceptado todavía puede echarse atrás.
      </P>

      <H2>Cuándo encaja la solicitud de reserva</H2>
      <P>
        Piensa en una casa rural en Asturias con cuatro habitaciones, donde la dueña recibe en persona a cada huésped y solo
        puede hacer la entrada a ciertas horas. Dos habitaciones comparten baño, la casa no está pensada para niños pequeños
        y prefiere hablar antes con quien se queda una semana o más. Aquí la solicitud tiene todo el sentido: cada reserva es
        una conversación, y una reserva equivocada cuesta más que una reserva lenta.
      </P>
      <Ul>
        <Li>Pocas unidades, donde un solo error pesa mucho.</Li>
        <Li>Llegadas que hay que coordinar: entrega de llaves, llegada tarde, pista de montaña o barco.</Li>
        <Li>Grupos, mascotas, celebraciones o estancias largas que conviene ver antes de aceptar.</Li>
        <Li>Un calendario compartido con otros canales que todavía no puedes mantener perfectamente al día.</Li>
        <Li>Propuestas a medida: visitas privadas, menús especiales, paquetes de varios días.</Li>
      </Ul>

      <H2>Cuándo encaja la reserva instantánea</H2>
      <P>
        Ahora piensa en un club de pádel con cuatro pistas y turnos de hora y media, o en un estudio de yoga con doce
        esterillas por clase. Cada turno es el mismo producto, el aforo es fijo y nadie necesita pasar un filtro para jugar
        un partido o apuntarse a una clase. Hacer esperar una respuesta a quien quiere pista a las ocho de la tarde solo añade
        fricción, y el turno puede quedarse vacío mientras la solicitud duerme en el móvil.
      </P>
      <Ul>
        <Li>Productos estándar: el mismo tipo de habitación, la misma clase, la misma duración.</Li>
        <Li>Un aforo fijo que el sistema cuenta por ti.</Li>
        <Li>Poca antelación: gente que reserva para esta noche o mañana por la mañana.</Li>
        <Li>Un calendario que vive en un solo sitio, para que lo que aparece libre esté libre de verdad.</Li>
        <Li>Condiciones claras que estás dispuesto a aplicar sin negociar cada caso.</Li>
      </Ul>

      <H2>Fórmulas mixtas</H2>
      <P>Muchos negocios acaban en un punto intermedio. Algunas combinaciones habituales:</P>
      <Ul>
        <Li>
          <B>Instantánea para unas cosas, solicitud para otras.</B> Las dobles se reservan al momento, la suite familiar o
          la casa entera pasa por solicitud. Las clases de grupo son instantáneas, las particulares van por solicitud.
        </Li>
        <Li>
          <B>Según antelación o temporada.</B> Las reservas con tiempo son instantáneas, las de última hora van por
          solicitud porque necesitas saber si podrás estar. O al revés en temporada alta, cuando quieres llenar cada hueco
          cuanto antes.
        </Li>
        <Li>
          <B>Solicitud con plazo de respuesta.</B> Mantienes las solicitudes, pero dices en la página cuándo tendrá noticias
          el huésped, por ejemplo en pocas horas durante el día. Una promesa clara le quita casi toda la incomodidad a la
          espera.
        </Li>
        <Li>
          <B>Instantánea con señal.</B> Confirmas al momento, pero cobras una parte del total con tarjeta para que la
          reserva tenga compromiso. Nuestra guía sobre{' '}
          <A to="/es/guides/direct-booking-deposits/">cómo cobrar una señal en las reservas directas</A> explica cómo fijar
          el porcentaje y redactar las condiciones.
        </Li>
        <Li>
          <B>Lista de espera cuando se llena.</B> En clases y pistas, un turno completo no tiene por qué cerrar la
          conversación. La lista de espera recoge a quien se quedaría la plaza si alguien se da de baja.
        </Li>
      </Ul>

      <H2>Contestar solicitudes: rapidez y saber decir que no</H2>
      <P>
        Si eliges solicitudes, la rapidez de tu respuesta es parte de lo que vendes. Un huésped que recibe respuesta en una
        hora se siente atendido; uno que no sabe nada hasta el día siguiente puede haber reservado ya en otro sitio. Como
        referencia, una de las grandes plataformas de alojamiento da a los anfitriones{' '}
        <Ext href={RESPOND_URL}>24 horas para aceptar o rechazar una solicitud</Ext>, y pasado ese plazo la solicitud
        caduca, a octubre de 2026. En tu propia web nadie te impone plazos, así que fija el tuyo y dilo en la página.
      </P>
      <P>
        Rechazar también es parte del trabajo. Di que no pronto, explica el motivo en una frase cuando puedas y ofrece una
        alternativa si la tienes: otras fechas, otra habitación, un alojamiento conocido de la zona. Un no claro hoy es más
        amable que un quizás vago mañana.
      </P>
      <Note title="Ejemplo de respuesta para rechazar">
        <p>
          Gracias por tu solicitud del 12 al 15 de mayo. Por desgracia no podemos alojar a un grupo de seis personas esas
          fechas, porque nuestra habitación más grande es para cuatro. Sí tenemos dos habitaciones libres a partir del 19 de
          mayo, por si tus fechas son flexibles. En cualquier caso, ojalá podamos recibirte en otra ocasión.
        </p>
      </Note>
      <P>
        Ten preparadas unas cuantas respuestas así para adaptarlas: aceptar, proponer otra fecha, rechazar. Lo que eran diez
        minutos pasan a ser dos, y contestar rápido se vuelve realista incluso en un día lleno.
      </P>

      <H2>Cómo funciona en Likwiid Direct</H2>
      <P>
        <A to="/es/direct/">Likwiid Direct</A> ofrece los dos modos, y cambias de uno a otro desde el panel de propietario.
        En modo solicitud, el huésped elige fechas, número de personas y extras, ve un total estimado y envía la solicitud;
        no se reserva ni se cobra nada hasta que confirmas, propones otra fecha o rechazas desde el panel. En reserva
        instantánea, el huésped paga con tarjeta una señal, un porcentaje del total, en tu propia cuenta de pagos, y ve la
        señal y el resto a pagar a la llegada antes de pagar.
      </P>
      <P>
        Para actividades, cada turno tiene un aforo, el huésped ve cuántas plazas quedan y se abre una lista de espera cuando
        el turno se llena. Reglas como la estancia mínima y la antelación necesaria se aplican en los dos modos, y tus
        condiciones de cancelación y pago aparecen en el último paso: nadie puede reservar ni enviar una solicitud sin marcar
        que las ha leído.
      </P>
    </GuideLayout>
  )
}
