import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

export default function Guide() {
  return (
    <GuideLayout
      slug="direct-booking-deposits"
      lang="pt"
      sources={[
        {
          label: 'Diário da República: Código Civil, artigo 442.º, Sinal (consultado em outubro de 2026)',
          href: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075-59065106',
        },
        {
          label: 'Diário da República: Código Civil, versão consolidada, artigo 440.º, Antecipação do cumprimento (consultado em outubro de 2026)',
          href: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075',
        },
        {
          label: 'Jornal Oficial da UE (eur-lex.europa.eu): Diretiva 2011/83/UE relativa aos direitos dos consumidores, artigo 16.º (consultado em outubro de 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32011L0083',
        },
        {
          label: 'Jornal Oficial da UE (eur-lex.europa.eu): Diretiva (UE) 2015/2366 relativa aos serviços de pagamento, artigo 97.º (consultado em outubro de 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32015L2366',
        },
      ]}
    >
      <Summary>
        <Li>O sinal é o meio-termo: compromete o hóspede sem o assustar com o valor total meses antes da estadia.</Li>
        <Li>O pagamento total serve prazos curtos e atividades com lugares contados. A garantia de cartão é a opção que menos protege.</Li>
        <Li>Em Portugal, o Código Civil dá ao sinal efeitos próprios, nos dois sentidos. Diga por escrito que o valor é pago a título de sinal.</Li>
        <Li>Escreva a política de cancelamento em linguagem simples e peça ao hóspede que a aceite antes de pagar.</Li>
        <Li>Decida as regras de reembolso antes do primeiro cancelamento, não no meio dele.</Li>
      </Summary>

      <H2>Porque é que uma reserva direta precisa de uma regra de pagamento</H2>
      <P>
        Numa grande plataforma, é a plataforma que decide quando se cobra o cartão e o que acontece num cancelamento. No seu
        próprio site, essas decisões passam a ser suas, e uma reserva sem dinheiro associado é apenas uma promessa.
      </P>
      <P>
        Uma regra de pagamento clara faz duas coisas: afasta os pedidos que nunca foram sérios e dá-lhe uma base quando um
        hóspede desiste na véspera. Para um alojamento local, uma casa de turismo rural ou uma escola de surf, há três formas
        habituais de o fazer.
      </P>

      <H2>Sinal, pagamento total ou garantia de cartão</H2>
      <P>
        <B>O sinal</B> é uma parte do total, paga no momento da reserva. O restante paga-se mais tarde: à chegada, no
        check-out ou num número de dias combinado antes da estadia. É a escolha mais comum em alojamento local e pequenos
        hotéis, porque pede um compromisso real sem exigir tudo com meses de antecedência.
      </P>
      <P>
        <B>O pagamento total</B> significa que o hóspede paga tudo ao reservar. Funciona bem para reservas de última hora,
        para atividades com lugares limitados (uma aula, um passeio de barco, um campo de padel) e para tarifas não
        reembolsáveis. É mais simples de gerir, mas há hóspedes que hesitam em pagar um valor alto a uma casa que nunca
        viram.
      </P>
      <P>
        <B>A garantia de cartão</B> significa que o hóspede deixa os dados do cartão e nada é cobrado, a não ser que cancele
        tarde ou não apareça. É a opção mais confortável para o hóspede e a que menos o protege a si: uma retenção no cartão
        caduca em dias e, na União Europeia, os pagamentos eletrónicos à distância exigem, em regra, autenticação forte do
        cliente. Um número de cartão enviado por email não é uma garantia em que possa confiar.
      </P>
      <Table
        caption="O que cada opção significa para si e para o hóspede"
        head={['', 'Sinal', 'Pagamento total', 'Garantia de cartão']}
        rows={[
          ['Compromisso do hóspede', 'Médio a alto', 'Alto', 'Baixo'],
          ['Proteção contra cancelamento tardio', 'Até ao valor do sinal', 'Total, se as condições o previrem', 'Só se a cobrança posterior resultar'],
          ['Atrito na reserva', 'Baixo', 'Mais alto', 'O mais baixo'],
          ['Trabalho para si', 'Cobrar o restante', 'Tratar dos reembolsos', 'Correr atrás de cobranças falhadas'],
        ]}
      />

      <H2>O que diz o Código Civil sobre o sinal</H2>
      <P>
        Em Portugal, «sinal» não é só uma palavra do dia a dia. O artigo 440.º do Código Civil diz que, quando se entrega
        antecipadamente parte do que é devido, essa entrega vale como antecipação do cumprimento, a não ser que as partes lhe
        queiram dar o carácter de sinal. Ou seja, o efeito depende do que fica combinado.
      </P>
      <P>
        Quando há sinal, o artigo 442.º prevê que o valor entregue é descontado no preço. Se quem pagou o sinal deixar de
        cumprir por causa que lhe seja imputável, quem o recebeu pode ficar com ele. Se for quem recebeu o sinal a falhar, a
        outra parte pode exigir o dobro do que pagou. Na ausência de estipulação em contrário, não há lugar a outra
        indemnização para além disso.
      </P>
      <P>
        Na prática, para um alojamento isto sugere duas coisas. Primeiro, se quer que o valor funcione como sinal, escreva-o
        assim nas condições: «paga a título de sinal». Segundo, a regra vale nos dois sentidos: se for o alojamento a cancelar
        uma reserva confirmada, o hóspede pode ter direito a mais do que a simples devolução. A sua política de cancelamento
        pode, e normalmente deve, ser mais generosa do que a lei, por exemplo com cancelamento gratuito até uma certa data.
      </P>
      <Note title="Informação geral">
        <p>
          Este texto é informação geral e não aconselhamento jurídico. Cada caso tem os seus detalhes; confirme a redação das
          suas condições com o seu contabilista ou advogado.
        </p>
      </Note>

      <H2>Que valor deve ter o sinal</H2>
      <P>
        Não há um número certo para todos. Uma boa forma de decidir é perguntar quanto perde quando um hóspede cancela tarde.
        Se um quarto cancelado uma semana antes costuma voltar a ser reservado, um sinal pequeno chega. Se uma vaga numa
        atividade quase nunca se volta a preencher, o sinal deve cobrir mais.
      </P>
      <P>
        Pense por cada 100 de valor da reserva. Com um sinal de 30 por cento, o hóspede paga 30 ao reservar e 70 à chegada.
        Se cancelar dentro do prazo de cancelamento tardio, fica com os 30, nos termos das suas condições. Se cancelar antes
        desse prazo, devolve os 30 ou guarda-os como crédito para outra data, conforme o que as condições disserem.
      </P>
      <P>
        Mostre também o valor antes de o hóspede se comprometer: um sinal que só aparece no último passo faz perder reservas.
      </P>

      <H2>Como escrever uma política de cancelamento que se entende</H2>
      <P>
        Uma boa política responde a três perguntas em poucas linhas: até quando se pode cancelar sem custos, o que se perde
        depois disso e o que acontece se o hóspede não aparecer. Evite linguagem jurídica e palavras vagas como «razoável».
        Eis um exemplo que pode adaptar:
      </P>
      <Note title="Exemplo de texto">
        <p>
          No momento da reserva é pago, a título de sinal, 30 por cento do valor total. O restante é pago à chegada. Pode
          cancelar sem custos até 14 dias antes da data de chegada e devolvemos o sinal na totalidade. Se cancelar depois
          dessa data, ou se não comparecer, o sinal não é devolvido. Não cobramos nada para além do sinal.
        </p>
      </Note>
      <P>
        Ajuste os números à sua realidade. Depois, coloque a política onde o hóspede a vê no momento de decidir e peça-lhe que
        confirme, com uma caixa de seleção, que a leu. É essa confirmação que pode mostrar se um hóspede contestar mais tarde a
        cobrança junto do banco.
      </P>

      <H2>Reembolsos, créditos e alterações de datas</H2>
      <P>
        Muitos proprietários assumem que o hóspede tem sempre 14 dias para desistir de uma compra feita online. No alojamento
        para fins não residenciais e nas atividades de lazer com data marcada, não é assim: a diretiva europeia dos direitos
        dos consumidores exclui esses contratos do direito de livre resolução. Em regra, é a sua política de cancelamento que
        define o que acontece, o que torna ainda mais importante escrevê-la bem.
      </P>
      <P>
        Decida as regras antes do primeiro cancelamento, porque decidir sob pressão dá respostas inconsistentes. As escolhas
        habituais são o reembolso total fora do prazo, nenhum reembolso dentro dele e um crédito para outra estadia como
        meio-termo de boa vontade. O crédito mantém o valor e a relação com o hóspede, mas diga durante quanto tempo é válido.
      </P>
      <P>
        Se recebe na sua própria conta de pagamentos, os reembolsos saem dessa mesma conta. Confirme com o seu prestador como
        funcionam os reembolsos parciais e se as comissões do pagamento original são devolvidas.
      </P>

      <H2>O que dizer aos hóspedes</H2>
      <Ul>
        <Li>O valor do sinal e do restante, em números e antes do pagamento, não só em percentagem.</Li>
        <Li>Quando e como se paga o restante: à chegada, por cartão, por transferência bancária.</Li>
        <Li>O prazo de cancelamento como regra concreta (14 dias antes da chegada), não como promessa vaga.</Li>
        <Li>O que acontece ao sinal num cancelamento tardio ou numa não comparência.</Li>
        <Li>A quem pedir uma alteração de datas e se uma alteração conta como cancelamento.</Li>
      </Ul>
      <P>
        Repita o essencial na mensagem de confirmação. Os hóspedes raramente voltam à página de reserva, mas procuram na caixa
        de correio.
      </P>

      <H2>Como funciona no Likwiid Direct</H2>
      <P>
        O <A to="/pt/direct/">Likwiid Direct</A> cobra um sinal em percentagem, por cartão, no momento da reserva imediata,
        diretamente para a sua própria conta de pagamentos, e mostra ao hóspede o sinal e o valor a pagar à chegada antes de
        ele pagar. As suas condições de cancelamento e de pagamento aparecem no último passo, e ninguém consegue reservar sem
        confirmar que as leu. No painel do proprietário ficam as reservas, os hóspedes e os respetivos créditos.
      </P>
      <P>
        Se ainda não quer receber pagamentos online, o Direct também funciona em modo de pedido: o hóspede envia um pedido com
        datas e extras, nada é cobrado e o proprietário confirma à mão. O nosso guia sobre{' '}
        <A to="/pt/guides/request-vs-instant-booking/">pedido de reserva ou reserva imediata</A> explica quando faz sentido
        cada um.
      </P>
    </GuideLayout>
  )
}
