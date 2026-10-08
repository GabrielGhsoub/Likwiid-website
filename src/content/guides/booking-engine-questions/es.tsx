import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, H3, Li, P, Summary, Table, Ul } from '../../../components/guides/prose'

const GDPR_ROLES = 'https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en'

export default function Guide() {
  return (
    <GuideLayout
      slug="booking-engine-questions"
      lang="es"
      sources={[
        {
          label: 'Comisión Europea: Application of the GDPR, funciones de responsable y encargado del tratamiento, en inglés (consultado en octubre de 2026)',
          href: GDPR_ROLES,
        },
      ]}
    >
      <Summary>
        <Li>Pregunta sobre qué importe se calcula la comisión, no solo el porcentaje: solo el alojamiento, o también extras, IVA, tasa turística y reservas canceladas.</Li>
        <Li>Averigua en qué cuenta entra el dinero, cuándo te llega y quién gestiona devoluciones y contracargos.</Li>
        <Li>La lista de huéspedes tiene que ser tuya: sin marketing del proveedor y con una exportación que puedas hacer tú mismo cuando quieras.</Li>
        <Li>Lee las condiciones de salida antes que la lista de funciones: duración, preaviso, renovación automática, tus datos y tu dominio.</Li>
        <Li>La sincronización por iCal se actualiza cada cierto tiempo. Es útil, pero no es instantánea.</Li>
      </Summary>

      <P>
        En la demo, todos los motores de reservas parecen buenos. Las diferencias de verdad aparecen después: en la primera
        factura, en la primera devolución, en la primera reserva duplicada o el día que quieres cambiarte. Estas son las
        preguntas que conviene hacer antes de firmar, y cómo suena una buena respuesta, tengas una casa rural, un hostal o
        pistas de pádel.
      </P>

      <H2>Costes: cuánto pagas y sobre qué</H2>
      <P>
        Una comisión baja puede salir más cara que una alta si se calcula sobre una parte mayor de cada reserva. Pide las
        tarifas por escrito y pregunta:
      </P>
      <Ul>
        <Li>¿Hay una comisión (un porcentaje), una tarifa fija por reserva, o ambas?</Li>
        <Li>¿Se aplica solo al precio de la habitación o de la actividad, o también al desayuno, los traslados, la limpieza, el IVA y la tasa turística que cobras en nombre de la administración, allí donde existe?</Li>
        <Li>¿Se cobra en reservas canceladas, o sobre la señal que te quedas tras una cancelación tardía?</Li>
        <Li>¿Hay cuota de alta, cuota mensual, o un plan que sube de tramo cuando aumenta tu volumen?</Li>
        <Li>¿Las comisiones por pago con tarjeta van incluidas, o las cobra aparte el proveedor de pagos?</Li>
      </Ul>
      <P>
        Un ejemplo para ver por qué importa la base. Piensa en una reserva de 100 en total: 80 de alojamiento, 15 de extras y
        5 de tasa turística. Con una comisión ilustrativa del 10 por ciento:
      </P>
      <Table
        caption="Mismo porcentaje, distinta base: coste por cada 100 de valor de la reserva (comisión ilustrativa del 10 por ciento)"
        head={['La comisión se calcula sobre', 'Importe base', 'Coste']}
        rows={[
          ['Solo el alojamiento', '80', '8'],
          ['Alojamiento y extras', '95', '9,5'],
          ['Todo, tasa turística incluida', '100', '10'],
        ]}
      />
      <P>
        La tasa turística no es un ingreso tuyo: la cobras y la entregas. Pagar comisión por ella es pagar por un dinero que
        nunca fue tuyo. Una buena respuesta suena así: <B>"La comisión es este porcentaje, solo sobre el alojamiento, nunca
        sobre impuestos, y nada en reservas canceladas."</B>
      </P>

      <H2>Pagos: en qué cuenta y quién tiene el dinero</H2>
      <P>
        Algunos motores de reservas te obligan a usar su pasarela de pago; otros te dejan conectar una cuenta a tu nombre.
        La diferencia se nota en tres cosas.
      </P>
      <Ul>
        <Li><B>Dependencia.</B> Si tienes que usar la pasarela del proveedor, aceptas sus condiciones, y cambiarte supone montar los cobros desde cero.</Li>
        <Li><B>Quién tiene el dinero.</B> ¿El pago del huésped entra en tu cuenta, o lo cobra el proveedor y te lo transfiere más tarde? Pregunta cada cuánto se hacen las transferencias y qué pasa con el dinero pendiente si el proveedor tiene un problema.</Li>
        <Li><B>Devoluciones y contracargos.</B> ¿Quién hace la devolución y de qué saldo sale? Cuando un huésped reclama un cargo a su banco, ¿quién responde, con qué pruebas, y quién paga la posible comisión?</Li>
      </Ul>
      <P>
        Una buena respuesta: <B>"Los pagos entran directamente en tu cuenta, las transferencias siguen el calendario de tu
        proveedor, las devoluciones las haces tú, y el registro de la reserva y las condiciones aceptadas están ahí si alguien
        reclama un cargo."</B>
      </P>

      <H2>Datos de los huéspedes: ¿de quién son?</H2>
      <P>
        Según el RGPD, quien recibe la reserva decide normalmente para qué y cómo se usan los datos del huésped, así que es
        el <B>responsable del tratamiento</B>. Un motor de reservas que guarda las reservas por ti es un{' '}
        <B>encargado del tratamiento</B>: como explica la <Ext href={GDPR_ROLES}>Comisión Europea</Ext>, trata los datos
        personales solo por cuenta del responsable, con un contrato y siguiendo únicamente sus instrucciones documentadas.
        La Comisión pone incluso el ejemplo de un subcontratista que usó los contactos de los clientes para su propio
        marketing y, con ello, pasó a ser también responsable.
      </P>
      <P>Así que pregunta:</P>
      <Ul>
        <Li>¿Hay un contrato de encargo del tratamiento, y puedo leerlo antes de firmar?</Li>
        <Li>¿Podéis enviar emails a mis huéspedes, enseñarles otros alojamientos o usar sus datos para vuestros fines?</Li>
      </Ul>
      <P>
        La respuesta que buscas es un contrato breve y legible y un no rotundo al marketing dirigido a tus huéspedes. Esto es
        información general, no asesoramiento jurídico.
      </P>

      <H2>Sincronización de calendarios y canales</H2>
      <P>
        Si también vendes en grandes plataformas, la sincronización decide si tendrás reservas duplicadas. <B>iCal</B> es un feed de calendario: un lado publica sus fechas ocupadas y el otro las lee según su propio horario.
        Puedes enlazar feeds en los dos sentidos, pero cada uno solo lleva fechas bloqueadas (ni precios ni datos de
        huéspedes) y solo se actualiza en la siguiente lectura. Una reserva hecha ahora puede no bloquear la fecha en otro
        sitio hasta la próxima actualización. <B>Una conexión con un channel manager</B> es un enlace bidireccional pensado
        para intercambiar disponibilidad, tarifas y reservas entre sistemas.
      </P>
      <Ul>
        <Li>¿Qué método usáis para cada plataforma en la que vendo?</Li>
        <Li>¿Cada cuánto se actualizan los calendarios importados, y puedo ver cuándo fue la última sincronización?</Li>
        <Li>Si aun así hay una reserva duplicada, ¿a quién se avisa y cuál es el procedimiento?</Li>
      </Ul>
      <P>Una buena respuesta es sincera con los tiempos. Desconfía de quien llame "tiempo real" a un feed iCal.</P>

      <H2>Irte: contrato, datos y dominio</H2>
      <P>Puede que nunca quieras irte, pero lo fácil que sea hacerlo dice mucho del acuerdo.</P>
      <H3>Contrato</H3>
      <P>
        Pregunta la duración, el plazo de preaviso, si se renueva automáticamente, si hay penalización por salida y si los
        precios pueden cambiar durante el contrato. Buena respuesta: contrato mensual o anual, preaviso corto, sin
        penalización y cambios de precio avisados con antelación.
      </P>
      <H3>Exportar tus datos</H3>
      <P>
        ¿Puedes exportar tú mismo las reservas y la lista de huéspedes, cuando quieras, sin abrir una incidencia? ¿En qué
        formato? Una hoja de cálculo (CSV) es el mínimo útil. Comprueba que la exportación incluye las reservas futuras y las
        señales ya cobradas. Después pregunta qué pasa con tus datos cuando te vayas: cuánto tiempo se conservan y si se
        borran a petición tuya. La Comisión recuerda que el contrato con el encargado debe indicar qué ocurre con los datos
        personales cuando termina.
      </P>
      <H3>Dominio y web</H3>
      <P>
        ¿La página de reservas está en tu dominio o en una dirección del proveedor? ¿Quién registró tu dominio y a nombre
        de quién? Si el proveedor te hizo la web, ¿te la quedas al irte? Las páginas y los enlaces en
        tu dominio construyen tu posicionamiento en buscadores; en el dominio de otro construyen el suyo, y se rompen cuando
        te vas. Buena respuesta: el dominio está a tu nombre y la página de reservas vive en tu web.
      </P>

      <H2>Lo que ve el huésped y quién te atiende</H2>
      <Ul>
        <Li><B>Idiomas.</B> ¿Todos los pasos están en el idioma del huésped, incluidas las condiciones y el email de confirmación?</Li>
        <Li><B>Móvil.</B> Haz una reserva de prueba en tu propio móvil, de principio a fin, antes de firmar.</Li>
        <Li><B>Accesibilidad.</B> ¿Se puede reservar solo con teclado y con un lector de pantalla? Pregunta si prueban según las pautas WCAG.</Li>
        <Li><B>Soporte.</B> ¿Quién contesta: una persona, un bot, un distribuidor? ¿En qué idioma, qué días y con qué rapidez en temporada alta?</Li>
      </Ul>

      <H2>La lista para llevar a la reunión</H2>
      <P>Imprímela y tenla delante cuando hables con el comercial.</P>
      <Ul>
        <Li>Comisión o tarifa fija, y sobre qué: extras, IVA, tasa turística, cancelaciones</Li>
        <Li>Cuota de alta, cuota mensual, costes por volumen; comisiones de tarjeta incluidas o no</Li>
        <Li>Mi propia cuenta de pagos o la del proveedor; cuándo me llega el dinero</Li>
        <Li>Quién gestiona devoluciones y contracargos</Li>
        <Li>Contrato de encargo del tratamiento; sin marketing a mis huéspedes</Li>
        <Li>Exportación por mi cuenta, formato, y mis datos cuando me vaya</Li>
        <Li>Duración, preaviso, renovación automática, penalización por salida</Li>
        <Li>Método de sincronización, frecuencia, procedimiento ante reservas duplicadas</Li>
        <Li>Página de reservas en mi dominio; dominio y web a mi nombre</Li>
        <Li>Idiomas, prueba en móvil, accesibilidad, soporte</Li>
      </Ul>

      <H2>Cómo responde Likwiid Direct a estas preguntas</H2>
      <P>
        Estas son nuestras respuestas con <A to="/es/direct/">Likwiid Direct</A>. Direct no cobra comisión. Se integra en la web que ya tienes, en tu dominio, o construimos la web
        a su alrededor. La señal pagada con tarjeta entra en tu propia cuenta de pagos y tu lista de huéspedes sigue siendo
        tuya. Desde el panel de propietario puedes buscar y exportar tus reservas. Tú eliges entre el modo solicitud, en el
        que no se cobra nada y confirmas a mano, y la reserva instantánea con señal por tarjeta.
      </P>
      <P>
        La sincronización de calendarios funciona por iCal, así que no es instantánea: los feeds se actualizan cada cierto
        tiempo y el calendario muestra cuándo fue la última sincronización. Direct no es un channel manager y es un producto
        nuevo: las demos públicas usan alojamientos ficticios. Si aún estás comparando la venta directa con las
        comisiones de las plataformas, nuestra guía sobre{' '}
        <A to="/es/guides/booking-com-commission-costs/">lo que cuesta de verdad la comisión de las plataformas</A> hace
        las cuentas. Y si quieres hacernos estas mismas preguntas, <A to="/es/contact/">escríbenos</A>.
      </P>
    </GuideLayout>
  )
}
