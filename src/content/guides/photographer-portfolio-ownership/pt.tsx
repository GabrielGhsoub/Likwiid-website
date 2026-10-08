import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Google Search Central: Mudanças e migrações de sites (consultado em outubro de 2026)',
    href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  },
  {
    label: 'Google Search Central: Metadados de imagens no Google Imagens (consultado em outubro de 2026)',
    href: 'https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata',
  },
  {
    label: 'IPTC: Photo Metadata User Guide (consultado em outubro de 2026)',
    href: 'https://www.iptc.org/std/photometadata/documentation/userguide/',
  },
  {
    label: 'web.dev: Learn Images, imagens responsivas (consultado em outubro de 2026)',
    href: 'https://web.dev/learn/images/responsive-images',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="photographer-portfolio-ownership" lang="pt" sources={sources}>
      <Summary>
        <Li>Numa plataforma por subscrição, as fotografias continuam a ser suas, mas quase tudo à volta delas é alugado: o design, as galerias, as ferramentas para clientes e muitas vezes o próprio endereço.</Li>
        <Li>Um site entregue em ficheiros, no seu domínio, vai consigo para onde for. Em troca, as alterações e a manutenção ficam a seu cargo, ou de quem contratar.</Li>
        <Li>Registe o domínio em seu nome desde o primeiro dia e mantenha os endereços das páginas estáveis. Isso protege a sua posição no Google mais do que qualquer plataforma.</Li>
        <Li>Compare o custo ao longo de vários anos, não ao mês, e reconheça com justiça o que uma subscrição inclui.</Li>
      </Summary>

      <H2>O que é realmente seu</H2>
      <P>
        Seja qual for a solução, os direitos de autor das suas fotografias são sempre seus. Uma plataforma séria fica apenas
        com a licença de que precisa para as mostrar. A questão está no resto: o aspeto que os seus clientes reconhecem, a
        organização das galerias que lhe custou serões, os textos que trazem pedidos de orçamento, as escolhas e comentários
        dos clientes e o endereço que as pessoas guardaram nos favoritos.
      </P>
      <P>
        <B>Numa plataforma por subscrição</B>, tudo isso vive dentro do software da plataforma. Pode usá-lo enquanto paga.
        Se deixar de pagar, ou se a plataforma mudar os planos, retirar uma funcionalidade ou fechar, fica com os ficheiros
        das imagens e com o que conseguir exportar. O resto volta a ser construído.
      </P>
      <P>
        <B>Com um site entregue em ficheiros</B>, as páginas, os estilos, o código das galerias e os textos passam para as
        suas mãos. Coloca-os num alojamento à sua escolha, no seu domínio. Se mudar de alojamento, copia os ficheiros. Nada
        deixa de funcionar porque um contrato terminou.
      </P>

      <Table
        caption="Onde fica cada coisa"
        head={['', 'Plataforma por subscrição', 'Ficheiros no seu domínio']}
        rows={[
          ['Fotografias e direitos de autor', 'Seus', 'Seus'],
          ['Design e código das galerias', 'Alugados enquanto paga', 'Seus'],
          ['Alojamento', 'Incluído', 'Conta própria, escolhida por si'],
          ['Atualizações e apoio', 'Incluídos', 'A seu cargo, ou pagos quando precisar'],
          ['Sair', 'Exporta o que a plataforma permitir', 'Copia os ficheiros para outro lado'],
        ]}
      />

      <H2>Portabilidade: o que leva consigo</H2>
      <P>
        Antes de se comprometer com uma plataforma, teste a saída. Muitos fotógrafos só descobrem o que não se pode exportar
        no dia em que querem mudar. Pergunte, ou experimente numa conta de teste, se consegue tirar de lá:
      </P>
      <Ul>
        <Li>As galerias pela ordem original, com títulos e legendas, e não apenas uma pasta de imagens soltas.</Li>
        <Li>As galerias de clientes, incluindo as fotografias que cada cliente escolheu e as notas que deixou.</Li>
        <Li>Os textos das páginas, os artigos do blogue e as respetivas datas.</Li>
        <Li>A lista de todos os endereços de página, para poder fazer redirecionamentos mais tarde.</Li>
        <Li>Os pedidos de contacto e as encomendas de impressões, se a plataforma os guardar.</Li>
      </Ul>
      <P>
        As escolhas dos clientes merecem cuidado especial. Para um fotógrafo de casamentos, a lista de fotografias que os
        noivos escolheram para o álbum é informação de trabalho. Se só existir dentro de uma plataforma, guarde uma cópia
        noutro sítio.
      </P>

      <H2>O seu domínio e os seus endereços</H2>
      <P>
        A decisão mais útil de todas é ter o domínio desde o início, registado em seu nome, num registador onde entra com as
        suas próprias credenciais. Se o portfólio estiver num subdomínio da plataforma, todos os links que uma revista, uma
        quinta de eventos ou um cliente satisfeito lhe deram apontam para um endereço que não controla. Se mudar, esses links
        deixam de funcionar.
      </P>
      <P>
        Com domínio próprio, pode trocar o software por trás sem trocar o endereço. A partir daí, o importante é manter
        estável o endereço de cada página. Se o URL de uma galeria tiver de mudar, crie um redirecionamento permanente do
        endereço antigo para o novo. As orientações da Google para mudanças de site recomendam redirecionamentos permanentes
        no servidor, mantê-los pelo menos um ano e contar com oscilações temporárias nas posições de pesquisa durante a
        mudança.
      </P>
      <Note title="Um hábito simples">
        <p>
          Antes de um redesign ou de uma mudança, exporte a lista dos endereços atuais. Depois da mudança, abra cada um e
          confirme que vai dar à página certa, e não à página inicial.
        </p>
      </Note>

      <H2>O custo ao longo de vários anos</H2>
      <P>
        Comparar uma mensalidade com um pagamento único engana, porque compram coisas diferentes em prazos diferentes. Faça
        as contas aos dois para o número de anos em que pensa manter o site.
      </P>
      <P>
        <B>Uma subscrição</B> é um valor recorrente que se acumula a cada ano e que tende a subir com o tempo. Em troca,
        inclui alojamento, atualizações de segurança, novas funcionalidades e apoio. Para quem está a começar, para quem não
        quer qualquer responsabilidade técnica ou para quem muda muitas vezes de rumo, é uma escolha sensata e com valor real.
      </P>
      <P>
        <B>Um site pago uma vez</B> tem um custo inicial maior e depois custos pequenos: o alojamento (muitas vezes gratuito
        ou quase, para um site entregue em ficheiros) e a renovação anual do domínio. Seja justo na comparação: as alterações
        futuras também custam. Uma secção nova, uma funcionalidade ou um redesign significam pagar a um programador ou gastar
        o seu tempo. Quanto mais tempo mantiver o site sem grandes mudanças, mais tende a compensar o pagamento único. A
        Likwiid está a preparar uma calculadora simples para ajudar nesta comparação.
      </P>

      <H2>Provas para clientes, venda de impressões e marcações</H2>
      <P>
        Estas funcionalidades costumam decidir a escolha. Verifique-as ao pormenor, seja qual for o caminho:
      </P>
      <Ul>
        <Li><B>Seleção pelo cliente:</B> galeria privada por cliente, escolha de favoritas, notas nas fotografias e um limite que respeite o número de fotografias incluídas no pacote.</Li>
        <Li><B>Venda de impressões:</B> quem define tamanhos e preços, e se os pagamentos entram diretamente na sua conta de pagamentos ou passam primeiro por terceiros.</Li>
        <Li><B>Marcações:</B> se o cliente consegue ver a disponibilidade e marcar a partir do seu site, sem ser enviado para outro endereço.</Li>
      </Ul>
      <P>
        Numa subscrição, pergunte se estão incluídas no seu plano ou só num plano superior. Num site pago uma vez, pergunte se
        fazem parte da entrega ou se são trabalho extra mais tarde.
      </P>

      <H2>Qualidade de imagem, rapidez e direitos de autor</H2>
      <P>
        Um portfólio é julgado nos primeiros segundos, muitas vezes no telemóvel. Carregar exportações em resolução máxima e
        deixar o browser reduzi-las torna as páginas lentas. Uma boa solução gera vários tamanhos de cada fotografia e deixa o
        browser escolher o que serve ao ecrã, em formatos modernos como WebP ou AVIF, tal como explica o curso de imagens
        responsivas do web.dev.
      </P>
      <P>
        Veja também o que acontece aos metadados. O aviso de direitos de autor, o autor e a linha de crédito ficam guardados
        dentro do ficheiro segundo a norma IPTC, e o Google Imagens pode mostrá-los junto da fotografia. A orientação do IPTC
        é que a informação de direitos de autor nunca deve ser retirada dos ficheiros. Alguns sistemas apagam todos os
        metadados para poupar espaço, por isso carregue uma fotografia de teste e analise a versão redimensionada que o site
        serve de facto.
      </P>

      <H2>Lista de verificação antes de escolher</H2>
      <Ul>
        <Li>O domínio está registado em meu nome e posso transferi-lo sem pedir autorização a ninguém?</Li>
        <Li>Consigo exportar hoje as galerias, as escolhas dos clientes, os textos e a lista de endereços?</Li>
        <Li>Nos anos em que conto manter o site, quanto pago no total, incluindo as alterações prováveis?</Li>
        <Li>Quem trata das atualizações e dos problemas, e com que rapidez preciso que sejam resolvidos?</Li>
        <Li>A seleção pelo cliente, a venda de impressões e as marcações funcionam como os meus clientes compram?</Li>
        <Li>As fotografias são servidas no tamanho certo, em formatos modernos, com os direitos de autor intactos?</Li>
        <Li>O site existe nas línguas dos meus clientes, incluindo português de Portugal?</Li>
      </Ul>
      <P>
        Se a maioria das respostas apontar para comodidade e pouca manutenção, uma subscrição serve bem. Se apontar para
        controlo, longevidade e um endereço estável, vale a pena considerar a sério ter os ficheiros.
      </P>

      <H2>Onde entra o Likwiid Frame</H2>
      <P>
        O <A to="/pt/frame/">Likwiid Frame</A> é o nosso motor de portfólio para fotógrafos. É entregue em ficheiros que
        ficam seus, no seu domínio, pago uma vez, sem subscrição e sem comissões. Inclui seleção de fotografias pelo cliente,
        uma loja de impressões ligada à sua própria conta de pagamentos, marcações através de um calendário Likwiid Direct
        integrado, páginas em várias línguas (português europeu incluído) e fotografias servidas no tamanho certo, com os
        dados de direitos de autor preservados. Se quiser conversar sobre o caminho que melhor serve o seu trabalho,{' '}
        <A to="/pt/contact/">fale connosco</A>.
      </P>
    </GuideLayout>
  )
}
