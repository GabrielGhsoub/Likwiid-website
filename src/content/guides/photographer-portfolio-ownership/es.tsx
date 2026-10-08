import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Google Search Central: Migraciones y traslados de sitios (consultado en octubre de 2026)',
    href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  },
  {
    label: 'Google Search Central: Metadatos de imágenes en Google Imágenes (consultado en octubre de 2026)',
    href: 'https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata',
  },
  {
    label: 'IPTC: Photo Metadata User Guide (consultado en octubre de 2026)',
    href: 'https://www.iptc.org/std/photometadata/documentation/userguide/',
  },
  {
    label: 'web.dev: Learn Images, imágenes adaptables (consultado en octubre de 2026)',
    href: 'https://web.dev/learn/images/responsive-images',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="photographer-portfolio-ownership" lang="es" sources={sources}>
      <Summary>
        <Li>En una plataforma de suscripción tus fotos siguen siendo tuyas, pero casi todo lo que las rodea es alquilado: el diseño, las galerías, las herramientas para clientes y, a menudo, la dirección web.</Li>
        <Li>Una web entregada como archivos en tu propio dominio se va contigo. A cambio, los cambios y el mantenimiento corren de tu cuenta o de quien contrates.</Li>
        <Li>Registra el dominio a tu nombre desde el primer día y no cambies las URLs a la ligera. Eso protege tu posicionamiento más que cualquier plataforma.</Li>
        <Li>Compara el coste a varios años, no al mes, y reconoce lo que una suscripción incluye de verdad.</Li>
      </Summary>

      <H2>Qué es tuyo de verdad</H2>
      <P>
        Elijas lo que elijas, los derechos de tus fotografías son tuyos. Una plataforma seria solo se queda con la licencia
        que necesita para mostrarlas. Lo que importa es todo lo demás: el aspecto que tus clientes reconocen, la estructura de
        galerías que te ha costado tardes enteras, los textos que te traen solicitudes de presupuesto, las selecciones y
        comentarios de tus clientes y la dirección que la gente tiene guardada.
      </P>
      <P>
        <B>En una plataforma de suscripción</B>, todo eso vive dentro de su software. Lo usas mientras pagas. Si dejas de
        pagar, o si la plataforma cambia sus planes, quita una función o cierra, te quedas con tus archivos de imagen y con lo
        que puedas exportar. El resto toca rehacerlo.
      </P>
      <P>
        <B>Con una web entregada como archivos</B>, las páginas, los estilos, el código de las galerías y los textos pasan a
        ser tuyos. Los subes al hosting que elijas, bajo tu propio dominio. Si cambias de hosting, copias los archivos. Nada
        deja de funcionar porque se acabe un contrato.
      </P>

      <Table
        caption="Dónde queda cada cosa"
        head={['', 'Plataforma de suscripción', 'Archivos en tu dominio']}
        rows={[
          ['Fotos y derechos de autor', 'Tuyos', 'Tuyos'],
          ['Diseño y código de galerías', 'Alquilados mientras pagas', 'Tuyos'],
          ['Hosting', 'Incluido', 'Tu propia cuenta, elegida por ti'],
          ['Actualizaciones y soporte', 'Incluidos', 'Cosa tuya, o pagados cuando hagan falta'],
          ['Irte', 'Exportas lo que la plataforma permita', 'Copias los archivos a otro sitio'],
        ]}
      />

      <H2>Portabilidad: qué te llevas si te vas</H2>
      <P>
        Antes de casarte con una plataforma, prueba la salida. Muchos fotógrafos descubren lo que no se puede exportar el día
        que quieren marcharse. Pregunta, o comprueba con una cuenta de prueba, si puedes sacar:
      </P>
      <Ul>
        <Li>Tus galerías en su orden original, con títulos y pies de foto, no solo una carpeta de imágenes sueltas.</Li>
        <Li>Las galerías de clientes, con las fotos favoritas que eligió cada uno y las notas que dejaron.</Li>
        <Li>Los textos de las páginas, las entradas del blog y sus fechas de publicación.</Li>
        <Li>Una lista con todas las URLs, para poder redirigirlas más adelante.</Li>
        <Li>Los mensajes del formulario de contacto y los pedidos de copias, si la plataforma los guarda.</Li>
      </Ul>
      <P>
        Las selecciones de clientes merecen especial cuidado. Para un fotógrafo de bodas, la lista de fotos que la pareja ha
        elegido para el álbum es material de trabajo. Si solo existe dentro de una plataforma, guarda una copia aparte.
      </P>

      <H2>Tu dominio y tus URLs</H2>
      <P>
        La decisión más rentable es tener tu dominio desde el principio, registrado a tu nombre y en un registrador al que
        entres tú. Si tu portfolio vive en un subdominio de la plataforma, cada enlace que te haya dado una revista, una finca
        de bodas o un cliente contento apunta a una dirección que no controlas. Si te mudas, esos enlaces se rompen.
      </P>
      <P>
        Con dominio propio puedes cambiar el software que hay detrás sin cambiar la dirección. Lo importante entonces es que
        cada página conserve su URL. Si la de una galería tiene que cambiar, pon una redirección permanente de la antigua a la
        nueva. La guía de Google sobre traslados de sitios recomienda redirecciones permanentes en el servidor, mantenerlas al
        menos un año y contar con que las posiciones en el buscador oscilen durante un tiempo.
      </P>
      <Note title="Una costumbre sencilla">
        <p>
          Antes de cualquier rediseño o mudanza, exporta la lista de URLs actuales. Después, abre cada una y comprueba que
          lleva a la página correcta y no a la portada.
        </p>
      </Note>

      <H2>El coste a varios años</H2>
      <P>
        Comparar una cuota mensual con un pago único lleva a error, porque compran cosas distintas en plazos distintos. Haz
        las cuentas de ambas opciones para los años que piensas mantener la web.
      </P>
      <P>
        <B>Una suscripción</B> es una cuota recurrente que se suma cada año que sigues y que suele subir con el tiempo. A
        cambio incluye hosting, actualizaciones de seguridad, funciones nuevas y soporte. Si estás empezando, si no quieres
        ninguna responsabilidad técnica o si cambias a menudo de enfoque, es una opción sensata que aporta valor real.
      </P>
      <P>
        <B>Una web de pago único</B> tiene un coste inicial mayor y luego gastos pequeños: el hosting (muchas veces gratis o
        casi, para una web entregada como archivos) y la renovación anual del dominio. Sé justo al comparar: los cambios
        futuros también cuestan. Una sección nueva, una función o un rediseño suponen pagar a un desarrollador o dedicarle tu
        tiempo. Cuantos más años mantengas la web sin grandes cambios, más suele compensar el pago único. En Likwiid estamos
        preparando una calculadora sencilla para ayudarte con esta comparación.
      </P>

      <H2>Selección de fotos, venta de copias y reservas</H2>
      <P>
        Estas funciones suelen decidir la elección, así que revísalas con detalle vayas por donde vayas:
      </P>
      <Ul>
        <Li><B>Selección por el cliente:</B> galería privada por cliente, marcar favoritas, notas en las fotos y un límite que respete el número de fotos incluidas en el paquete.</Li>
        <Li><B>Venta de copias:</B> quién fija tamaños y precios, y si el dinero entra directamente en tu propia cuenta de cobro o pasa antes por otros.</Li>
        <Li><B>Reservas:</B> si el cliente puede ver tu disponibilidad y reservar desde tu web, sin que lo manden a otra dirección.</Li>
      </Ul>
      <P>
        Con una suscripción, pregunta si entran en tu plan o solo en uno superior. Con una web de pago único, pregunta si forman
        parte de la entrega o son trabajo extra más adelante.
      </P>

      <H2>Calidad de imagen, velocidad y derechos de autor</H2>
      <P>
        Un portfolio se juzga en los primeros segundos, muchas veces desde el móvil. Subir exportaciones a resolución completa
        y dejar que el navegador las reduzca hace que las páginas vayan lentas. Lo correcto es generar varios tamaños de cada
        foto y dejar que el navegador elija el que encaja con la pantalla, en formatos modernos como WebP o AVIF, como explica
        el curso de imágenes adaptables de web.dev.
      </P>
      <P>
        Fíjate también en los metadatos. El aviso de copyright, el autor y la línea de crédito van dentro del archivo según el
        estándar IPTC, y Google Imágenes puede mostrarlos junto a la foto. El IPTC indica que la información de derechos nunca
        debería eliminarse de los archivos. Algunos sistemas borran todos los metadatos para ahorrar peso, así que sube una
        foto de prueba y revisa la versión redimensionada que la web sirve realmente.
      </P>

      <H2>Lista de comprobación antes de decidir</H2>
      <Ul>
        <Li>¿El dominio está registrado a mi nombre y puedo trasladarlo sin pedir permiso a nadie?</Li>
        <Li>¿Puedo exportar hoy mismo galerías, selecciones de clientes, textos y la lista de URLs?</Li>
        <Li>En los años que pienso mantener la web, ¿cuánto pago en total, contando los cambios probables?</Li>
        <Li>¿Quién se encarga de actualizaciones y problemas, y con qué rapidez lo necesito?</Li>
        <Li>¿La selección de fotos, la venta de copias y las reservas encajan con cómo me compran mis clientes?</Li>
        <Li>¿Las fotos se sirven al tamaño adecuado, en formatos modernos y con los datos de copyright intactos?</Li>
        <Li>¿La web está en los idiomas que hablan mis clientes?</Li>
      </Ul>
      <P>
        Si la mayoría de respuestas apuntan a comodidad y poco mantenimiento, una suscripción te encaja bien. Si apuntan a
        control, duración y una dirección estable, merece la pena plantearse en serio tener los archivos.
      </P>

      <H2>Dónde encaja Likwiid Frame</H2>
      <P>
        <A to="/es/frame/">Likwiid Frame</A> es nuestro motor de portfolio para fotógrafos. Se entrega como archivos que son
        tuyos, en tu propio dominio, con un único pago, sin suscripción y sin comisiones. Incluye selección de fotos por el
        cliente, una tienda de copias conectada a tu propia cuenta de cobro, reservas con un calendario de Likwiid Direct
        integrado, páginas en varios idiomas y fotos servidas al tamaño justo conservando los datos de copyright. Si quieres
        comentar qué camino encaja con tu trabajo, <A to="/es/contact/">escríbenos</A>.
      </P>
    </GuideLayout>
  )
}
