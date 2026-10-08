import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

export default function Guide() {
  return (
    <GuideLayout
      slug="direct-booking-deposits"
      lang="es"
      sources={[
        {
          label: 'BOE: Código Civil, texto consolidado, artículo 1454 (consultado en octubre de 2026)',
          href: 'https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763#a1454',
        },
        {
          label: 'RAE, Diccionario panhispánico del español jurídico: arras penitenciales (consultado en octubre de 2026)',
          href: 'https://dpej.rae.es/lema/arras-penitenciales',
        },
        {
          label: 'RAE, Diccionario panhispánico del español jurídico: arras confirmatorias (consultado en octubre de 2026)',
          href: 'https://dpej.rae.es/lema/arras-confirmatorias',
        },
        {
          label: 'Diario Oficial de la UE (eur-lex.europa.eu): Directiva 2011/83/UE sobre los derechos de los consumidores, artículo 16 (consultado en octubre de 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011L0083',
        },
        {
          label: 'Diario Oficial de la UE (eur-lex.europa.eu): Directiva (UE) 2015/2366 sobre servicios de pago, artículo 97 (consultado en octubre de 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32015L2366',
        },
      ]}
    >
      <Summary>
        <Li>La señal es el punto medio: basta para que el huésped se comprometa y no tanto como para echarlo atrás.</Li>
        <Li>El pago completo encaja con reservas de última hora y actividades con plazas contadas. La garantía con tarjeta es la que menos te protege.</Li>
        <Li>En España, una señal puede ser unas arras que permiten desistir o un simple anticipo del precio. Escribe en tus condiciones cuál es.</Li>
        <Li>Redacta la política de cancelación con palabras sencillas y haz que el huésped la acepte antes de pagar.</Li>
        <Li>Decide tus reglas de reembolso antes de la primera cancelación, no durante.</Li>
      </Summary>

      <H2>Por qué una reserva directa necesita una regla de pago</H2>
      <P>
        En una gran plataforma, es la plataforma la que decide cuándo se cobra y qué pasa si el huésped cancela. En tu propia
        web, todo eso pasa a ser cosa tuya, y una reserva sin dinero de por medio es solo una promesa.
      </P>
      <P>
        Una regla de pago clara hace dos cosas: filtra las consultas que nunca iban en serio y te da algo a lo que agarrarte
        cuando alguien cancela la víspera. Tanto si llevas una casa rural como un pequeño hotel o una escuela de buceo, hay tres
        formas habituales de hacerlo.
      </P>

      <H2>Señal, pago completo o garantía con tarjeta</H2>
      <P>
        <B>La señal</B> es una parte del total que el huésped paga al reservar. El resto se paga después: a la llegada, a la
        salida o unos días antes de la estancia. Es lo más habitual en casas rurales, hostales y apartamentos turísticos, porque
        pide un compromiso real sin exigir todo el importe con meses de antelación.
      </P>
      <P>
        <B>El pago completo</B> significa que el huésped paga todo al reservar. Funciona bien con reservas de última hora, con
        actividades de plazas limitadas (una clase, una salida en barco, una pista de pádel) y con tarifas no reembolsables. Es
        más fácil de gestionar, aunque algunos huéspedes dudan antes de pagar una cantidad grande a un alojamiento que no
        conocen.
      </P>
      <P>
        <B>La garantía con tarjeta</B> consiste en que el huésped deja los datos de su tarjeta y no se cobra nada salvo que
        cancele tarde o no se presente. Es lo más cómodo para el huésped y lo que menos te protege a ti: una retención en la
        tarjeta caduca en días y, en la Unión Europea, los pagos electrónicos a distancia exigen por norma general autenticación
        reforzada del cliente. Un número de tarjeta enviado por correo no es una garantía fiable.
      </P>
      <Table
        caption="Qué supone cada opción para ti y para el huésped"
        head={['', 'Señal', 'Pago completo', 'Garantía con tarjeta']}
        rows={[
          ['Compromiso del huésped', 'Medio o alto', 'Alto', 'Bajo'],
          ['Protección ante cancelaciones tardías', 'Hasta el importe de la señal', 'Total, si tus condiciones lo prevén', 'Solo si el cobro posterior funciona'],
          ['Fricción al reservar', 'Baja', 'Más alta', 'La más baja'],
          ['Trabajo para ti', 'Cobrar el resto', 'Gestionar devoluciones', 'Perseguir cobros fallidos'],
        ]}
      />

      <H2>Arras y señal en el Código Civil</H2>
      <P>
        En España, la palabra «señal» tiene recorrido jurídico. El artículo 1454 del Código Civil dice que, si en una
        compraventa ha habido arras o señal, se puede rescindir el contrato perdiéndolas el comprador o devolviéndolas
        duplicadas el vendedor. Son las llamadas <B>arras penitenciales</B>: un modo de desistir pagando un precio conocido.
      </P>
      <P>
        Frente a ellas están las <B>arras confirmatorias</B>, que sirven para confirmar el contrato y funcionan como un
        anticipo a cuenta del precio. Con estas no hay un derecho a desistir a cambio de perder la señal: el contrato sigue en
        pie. Los tribunales no siempre han leído igual una señal entregada sin más explicación, así que lo prudente es no dejarlo
        a la interpretación.
      </P>
      <P>
        Para un alojamiento, la consecuencia práctica es sencilla. El artículo 1454 está pensado para la compraventa, de modo que
        conviene dejar escrito en tus condiciones qué pasa con la señal si cancela el huésped y qué pasa si cancelas tú. Y
        recuerda que, si pactas unas arras penitenciales, la regla funciona en los dos sentidos: quien las recibe y se echa
        atrás las devuelve duplicadas.
      </P>
      <Note title="Información general">
        <p>
          Esto es información general, no asesoramiento jurídico. Revisa la redacción de tus condiciones con tu gestor o tu
          abogado, y ten en cuenta que la normativa turística de tu comunidad autónoma también puede decir algo al respecto.
        </p>
      </Note>

      <H2>¿De cuánto debería ser la señal?</H2>
      <P>
        No hay una cifra universal. Una buena forma de decidir es preguntarte cuánto pierdes cuando alguien cancela tarde. Si una
        habitación que se cancela una semana antes suele volver a venderse, basta con una señal pequeña. Si una plaza en una
        actividad casi nunca se vuelve a llenar, la señal debería cubrir más.
      </P>
      <P>
        Piénsalo por cada 100 de importe de la reserva. Con una señal del 30 por ciento, el huésped paga 30 al reservar y 70 a la
        llegada. Si cancela dentro de tu plazo de cancelación, te quedas con esos 30 según tus condiciones. Si cancela antes,
        le devuelves los 30 o los guardas como crédito para otra fecha, lo que digan tus condiciones.
      </P>
      <P>
        Muestra también el importe antes de que el huésped se comprometa: una señal que aparece por sorpresa en el último paso
        hace perder reservas.
      </P>

      <H2>Cómo redactar una política de cancelación que se entienda</H2>
      <P>
        Una buena política responde a tres preguntas en pocas líneas: hasta cuándo se puede cancelar gratis, qué se pierde
        después y qué pasa si el huésped no se presenta. Evita el lenguaje jurídico y las palabras vagas como «razonable». Aquí
        tienes un ejemplo para adaptar:
      </P>
      <Note title="Ejemplo de redacción">
        <p>
          Al reservar se abona una señal del 30 por ciento del importe total. El resto se paga a la llegada. Puedes cancelar sin
          coste hasta 14 días antes de la llegada y te devolvemos la señal íntegra. Si cancelas después, o no te presentas, la
          señal no se devuelve. No cobramos nada más allá de la señal.
        </p>
      </Note>
      <P>
        Ajusta las cifras a tu caso. Después, coloca la política donde el huésped la vea en el momento de decidir y pídele que
        marque una casilla confirmando que la ha leído. Esa casilla es lo que podrás enseñar si más adelante el huésped reclama el
        cargo a su banco.
      </P>

      <H2>Devoluciones, créditos y cambios de fecha</H2>
      <P>
        Muchos propietarios dan por hecho que el huésped siempre tiene 14 días para desistir de una compra por internet. En el
        alojamiento no residencial y en las actividades de ocio con fecha concreta no es así: la directiva europea sobre los
        derechos de los consumidores excluye esos contratos del derecho de desistimiento. Por regla general, lo que pasa al
        cancelar lo marca tu política, y por eso merece la pena escribirla bien.
      </P>
      <P>
        Decide tus reglas antes de la primera cancelación, porque decidir con prisas da respuestas incoherentes. Lo habitual es
        devolver todo fuera del plazo, nada dentro de él y ofrecer un crédito para otra estancia como gesto intermedio. El
        crédito conserva el dinero y la relación con el huésped, pero indica cuánto tiempo es válido.
      </P>
      <P>
        Si cobras en tu propia cuenta de pagos, las devoluciones salen de esa misma cuenta. Comprueba con tu proveedor cómo
        funcionan las devoluciones parciales y si te reintegra sus comisiones del cobro original.
      </P>

      <H2>Qué contarle al huésped</H2>
      <Ul>
        <Li>El importe de la señal y del resto, en cifras y antes de pagar, no solo como porcentaje.</Li>
        <Li>Cuándo y cómo se paga el resto: a la llegada, con tarjeta, por transferencia.</Li>
        <Li>El plazo de cancelación como regla concreta (14 días antes de la llegada), no como una promesa vaga.</Li>
        <Li>Qué pasa con la señal si cancela tarde o no se presenta.</Li>
        <Li>A quién escribir para cambiar fechas y si un cambio cuenta como cancelación.</Li>
      </Ul>
      <P>
        Repite lo esencial en el mensaje de confirmación. El huésped rara vez vuelve a la página de reserva, pero sí busca en su
        correo.
      </P>

      <H2>Cómo lo resuelve Likwiid Direct</H2>
      <P>
        <A to="/es/direct/">Likwiid Direct</A> cobra una señal en porcentaje con tarjeta en el momento de la reserva instantánea,
        directamente en tu propia cuenta de pagos, y le muestra al huésped la señal y el resto a pagar a la llegada antes de que
        pague. Tus condiciones de cancelación y de pago aparecen en el último paso, y nadie puede reservar sin marcar que las ha
        leído. En el panel de propietario tienes las reservas, los huéspedes y sus créditos.
      </P>
      <P>
        Si todavía no quieres cobrar nada online, Direct también funciona en modo solicitud: el huésped envía una solicitud con
        fechas y extras, no se cobra nada y tú confirmas a mano. Nuestra guía sobre{' '}
        <A to="/es/guides/request-vs-instant-booking/">solicitud de reserva o reserva instantánea</A> explica cuándo encaja cada
        una.
      </P>
    </GuideLayout>
  )
}
