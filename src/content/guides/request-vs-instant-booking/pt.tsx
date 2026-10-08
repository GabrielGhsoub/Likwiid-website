import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const RESPOND_URL = 'https://www.airbnb.pt/help/article/28'

export default function Guide() {
  return (
    <GuideLayout
      slug="request-vs-instant-booking"
      lang="pt"
      sources={[
        {
          label: 'Airbnb, Central de Ajuda: Como responder a um pedido para reservar o seu alojamento (consultado em outubro de 2026)',
          href: RESPOND_URL,
        },
      ]}
    >
      <Summary>
        <Li>O pedido de reserva permite-lhe ver cada reserva antes de a confirmar. A reserva imediata confirma no momento.</Li>
        <Li>A reserva imediata pede menos ao hóspede. O pedido de reserva pede mais a si: tem de responder depressa, sempre.</Li>
        <Li>Poucos quartos e receção pessoal costumam pedir pedidos. Horários fixos com lotação definida costumam pedir reserva imediata.</Li>
        <Li>Não tem de escolher de uma vez por todas: muitos proprietários combinam os dois por datas, antecedência ou tipo de reserva.</Li>
      </Summary>

      <H2>O que muda para o hóspede e para si</H2>
      <P>
        No <B>pedido de reserva</B>, o hóspede escolhe as datas ou o horário, o número de pessoas e os extras, e envia o
        pedido. Ainda não há nada confirmado. O proprietário lê, e aceita, propõe outra data ou recusa. Até lá, o hóspede
        fica à espera da resposta para fechar os seus planos.
      </P>
      <P>
        Na <B>reserva imediata</B>, o hóspede vê o que está livre, escolhe e a reserva fica logo confirmada, normalmente com
        um pagamento ou um sinal no mesmo momento. O proprietário só sabe depois. O trabalho deixa de ser decidir reserva a
        reserva e passa a ser definir as regras com antecedência: que datas estão abertas, quanta antecedência precisa,
        quais são as condições.
      </P>
      <P>
        Nenhum dos modelos é melhor em abstrato. Simplesmente colocam o esforço em sítios diferentes: um no dia a dia,
        pedido a pedido; o outro no calendário e nas regras, feitos uma vez e bem feitos.
      </P>

      <H2>O que se ganha e o que se perde</H2>
      <P>
        Hoje, a maioria das pessoas está habituada a reservar um quarto ou uma aula em poucos toques. Um formulário que
        termina com "entraremos em contacto" é um passo atrás, e há quem continue a procurar noutro lado enquanto espera.
        Em contrapartida, o pedido dá-lhe um controlo que a reserva imediata não dá: sabe quem vem antes de se comprometer.
      </P>
      <Table
        caption="Comparação entre os dois modelos"
        head={['', 'Pedido de reserva', 'Reserva imediata']}
        rows={[
          ['Para o hóspede', 'Espera pela resposta e pode continuar a procurar', 'Certeza imediata'],
          ['Controlo sobre quem reserva', 'Total: decide cada caso', 'Através de regras definidas antes'],
          ['Calendário', 'Pode ser verificado à mão antes de confirmar', 'Tem de estar sempre certo'],
          ['A sua obrigação', 'Responder depressa a cada pedido', 'Cumprir todas as reservas que o calendário aceite'],
          ['Quando se paga', 'Depois de confirmar', 'No momento da reserva'],
        ]}
      />
      <P>
        O calendário é o ponto que mais proprietários subestimam. Se o seu alojamento local também está em plataformas e os
        calendários estão ligados por ficheiros que se atualizam de tempos a tempos, e não ao segundo, a reserva imediata
        pode deixar dois hóspedes ficar com a mesma noite no intervalo entre atualizações. Com pedidos, apanha o problema
        antes de dizer que sim.
      </P>
      <P>
        O momento do pagamento também conta. Na reserva imediata, o hóspede compromete dinheiro ao reservar, o que afasta os
        curiosos. No pedido, nada é pago até confirmar, por isso precisa de um passo seguinte claro para o pagamento, senão
        um hóspede já aceite ainda pode desistir.
      </P>

      <H2>Quando faz sentido o pedido de reserva</H2>
      <P>
        Imagine uma casa de hóspedes no Douro com quatro quartos, em que é a dona que recebe cada hóspede e só consegue
        fazer check-in a certas horas. Dois quartos partilham casa de banho, a casa não é pensada para crianças pequenas e
        ela gosta de falar com quem fica uma semana ou mais. Aqui, o pedido faz todo o sentido: cada reserva é uma
        conversa, e uma reserva errada custa mais do que uma reserva lenta.
      </P>
      <Ul>
        <Li>Poucas unidades, onde um único erro pesa muito.</Li>
        <Li>Chegadas que exigem coordenação: entrega de chaves, chegada tardia, estrada de serra ou travessia de barco.</Li>
        <Li>Grupos, animais, eventos ou estadias longas que convém ver antes de aceitar.</Li>
        <Li>Um calendário partilhado com outros canais que ainda não consegue manter perfeitamente sincronizado.</Li>
        <Li>Propostas à medida: visitas privadas, menus especiais, pacotes de vários dias.</Li>
      </Ul>

      <H2>Quando faz sentido a reserva imediata</H2>
      <P>
        Agora pense num clube de padel com quatro campos e reservas de uma hora, ou num estúdio de pilates com doze lugares
        por aula. Cada horário é o mesmo produto, a lotação é fixa e ninguém precisa de ser avaliado para jogar ou fazer uma
        aula. Obrigar quem quer um campo às sete da tarde a esperar por uma resposta só cria atrito, e o horário pode ficar
        por vender enquanto o pedido está parado no telemóvel.
      </P>
      <Ul>
        <Li>Produtos padronizados: o mesmo tipo de quarto, a mesma aula, a mesma duração.</Li>
        <Li>Uma lotação fixa que o sistema conta por si.</Li>
        <Li>Pouca antecedência: quem reserva para hoje à noite ou amanhã de manhã.</Li>
        <Li>Um calendário que vive num só sítio, para que o que aparece livre esteja mesmo livre.</Li>
        <Li>Condições claras que está disposto a aplicar sem discutir caso a caso.</Li>
      </Ul>

      <H2>Soluções mistas</H2>
      <P>Muitos negócios acabam a meio caminho. Algumas combinações frequentes:</P>
      <Ul>
        <Li>
          <B>Imediata para umas coisas, pedido para outras.</B> Os quartos duplos reservam-se logo, a suite familiar ou a
          casa inteira passa por pedido. As aulas de grupo são imediatas, as aulas particulares são por pedido.
        </Li>
        <Li>
          <B>Por antecedência ou época.</B> Reservas com tempo são imediatas, as de última hora passam por pedido porque
          precisa de saber se está lá para receber. Ou o contrário na época alta, quando quer preencher cada intervalo
          depressa.
        </Li>
        <Li>
          <B>Pedido com prazo de resposta.</B> Mantém os pedidos, mas diz na página quando o hóspede vai ter notícias, por
          exemplo em poucas horas durante o dia. Uma promessa clara tira quase todo o incómodo da espera.
        </Li>
        <Li>
          <B>Imediata com sinal.</B> Confirma logo, mas cobra uma parte do total por cartão para que a reserva tenha
          compromisso. O nosso guia sobre{' '}
          <A to="/pt/guides/direct-booking-deposits/">como cobrar um sinal nas reservas diretas</A> explica como definir o
          valor e redigir as condições.
        </Li>
        <Li>
          <B>Lista de espera quando está cheio.</B> Nas aulas e nos campos, um horário esgotado não tem de ser o fim da
          conversa. A lista de espera guarda quem ficaria com um lugar se alguém desistir.
        </Li>
      </Ul>

      <H2>Responder a pedidos: rapidez e saber dizer que não</H2>
      <P>
        Se escolher pedidos, a rapidez da resposta faz parte do que vende. Um hóspede que recebe resposta dentro de uma hora
        sente-se bem tratado; um que só tem notícias no dia seguinte pode já ter reservado noutro lado. Como referência, uma
        das grandes plataformas de alojamento dá aos anfitriões{' '}
        <Ext href={RESPOND_URL}>24 horas para aceitar ou recusar um pedido</Ext>, findas as quais o pedido expira, em
        outubro de 2026. No seu próprio site ninguém impõe prazos, por isso defina o seu e diga-o na página.
      </P>
      <P>
        Recusar faz parte do trabalho. Diga que não depressa, explique porquê numa frase quando puder e ofereça uma
        alternativa se a tiver: outras datas, outro quarto, um alojamento amigo ali perto. Um não claro hoje é mais
        simpático do que um talvez vago amanhã.
      </P>
      <Note title="Exemplo de resposta a recusar">
        <p>
          Obrigado pelo seu pedido para 12 a 15 de maio. Infelizmente não conseguimos receber um grupo de seis pessoas nessas
          datas, porque o nosso maior quarto é para quatro. Temos dois quartos livres a partir de 19 de maio, se as suas
          datas forem flexíveis. Em qualquer caso, esperamos recebê-lo numa próxima ocasião.
        </p>
      </Note>
      <P>
        Tenha algumas respostas destas prontas a adaptar: aceitar, propor outra data, recusar. Uma tarefa de dez minutos
        passa a ser de dois, e responder depressa torna-se realista mesmo num dia cheio.
      </P>

      <H2>Como funciona no Likwiid Direct</H2>
      <P>
        O <A to="/pt/direct/">Likwiid Direct</A> tem os dois modelos, e pode passar de um para o outro no painel do proprietário. No
        modo de pedido, o hóspede escolhe datas, número de pessoas e extras, vê um total estimado e envia o pedido; nada fica
        reservado e nada é cobrado até o proprietário confirmar, propor outra data ou recusar no painel. Na reserva imediata,
        o hóspede paga por cartão um sinal, uma percentagem do total, para a sua própria conta de pagamentos, e vê o sinal e
        o valor a pagar à chegada antes de pagar.
      </P>
      <P>
        Para atividades, cada horário tem uma lotação, o hóspede vê quantos lugares restam e abre-se uma lista de espera
        quando o horário fica cheio. Regras como a estadia mínima e a antecedência necessária aplicam-se nos dois modelos, e
        as condições de cancelamento e pagamento aparecem no último passo: ninguém reserva nem envia um pedido sem confirmar
        que as leu.
      </P>
    </GuideLayout>
  )
}
