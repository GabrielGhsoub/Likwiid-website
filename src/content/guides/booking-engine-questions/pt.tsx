import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, H3, Li, P, Summary, Table, Ul } from '../../../components/guides/prose'

const GDPR_ROLES = 'https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en'

export default function Guide() {
  return (
    <GuideLayout
      slug="booking-engine-questions"
      lang="pt"
      sources={[
        {
          label: 'Comissão Europeia: Application of the GDPR, papéis de responsável pelo tratamento e subcontratante, em inglês (consultado em outubro de 2026)',
          href: GDPR_ROLES,
        },
      ]}
    >
      <Summary>
        <Li>Pergunte sobre que valor incide a comissão, não só a percentagem: só o alojamento, ou também extras, IVA, taxa turística e reservas canceladas.</Li>
        <Li>Saiba em que conta cai o dinheiro, quando chega até si e quem trata de reembolsos e contestações de pagamento.</Li>
        <Li>A lista de hóspedes deve ser sua: sem marketing por parte do fornecedor e com exportação que pode fazer sozinho, a qualquer momento.</Li>
        <Li>Leia as condições de saída antes da lista de funcionalidades: duração, pré-aviso, renovação automática, dados e domínio.</Li>
        <Li>A sincronização por iCal atualiza de tempos a tempos. É útil, mas não é instantânea.</Li>
      </Summary>

      <P>
        Nas demonstrações, todos os motores de reservas parecem iguais. As diferenças aparecem depois: na primeira fatura,
        no primeiro reembolso, na primeira reserva duplicada ou no dia em que quer mudar. Estas são as perguntas a fazer
        antes de assinar, com o que deve esperar ouvir, seja num alojamento local, num pequeno hotel ou numa empresa de
        aulas de surf.
      </P>

      <H2>Custos: quanto paga e sobre que valor</H2>
      <P>
        Uma comissão baixa pode sair mais cara do que uma alta se incidir sobre uma parte maior de cada reserva. Peça a
        tabela de custos por escrito e pergunte:
      </P>
      <Ul>
        <Li>Há uma comissão (percentagem), um valor fixo por reserva, ou as duas coisas?</Li>
        <Li>Incide só sobre o preço do quarto ou da atividade, ou também sobre o pequeno-almoço, transfers, taxa de limpeza, IVA e a taxa turística municipal que cobra por conta da câmara?</Li>
        <Li>É cobrada em reservas canceladas, ou sobre o sinal que fica consigo após um cancelamento tardio?</Li>
        <Li>Há custo de instalação, mensalidade, ou um plano que sobe de escalão à medida que o volume cresce?</Li>
        <Li>As comissões do processamento de cartões estão incluídas, ou são cobradas à parte pelo prestador de pagamentos?</Li>
      </Ul>
      <P>
        Um exemplo mostra porque é que a base importa. Imagine uma reserva de 100 no total: 80 de alojamento, 15 de extras
        e 5 de taxa turística. Com uma comissão ilustrativa de 10 por cento:
      </P>
      <Table
        caption="A mesma percentagem, bases diferentes: custo por cada 100 de valor da reserva (comissão ilustrativa de 10 por cento)"
        head={['A comissão incide sobre', 'Valor considerado', 'Custo']}
        rows={[
          ['Só o alojamento', '80', '8'],
          ['Alojamento e extras', '95', '9,5'],
          ['Tudo, incluindo taxa turística', '100', '10'],
        ]}
      />
      <P>
        A taxa turística não é receita sua: cobra-a e entrega-a ao município. Pagar comissão sobre ela é pagar sobre dinheiro
        que nunca foi seu. Uma boa resposta soa assim: <B>"A comissão é esta percentagem, só sobre o alojamento, nunca sobre
        impostos, e nada em reservas canceladas."</B>
      </P>

      <H2>Pagamentos: em que conta e quem guarda o dinheiro</H2>
      <P>
        Alguns motores de reservas obrigam a usar o prestador de pagamentos deles; outros deixam ligar uma conta em seu
        nome. A diferença nota-se em três pontos.
      </P>
      <Ul>
        <Li><B>Dependência.</B> Se tem de usar o prestador do fornecedor, fica com as condições dele, e mudar obriga a montar os pagamentos de raiz.</Li>
        <Li><B>Quem guarda o dinheiro.</B> O pagamento do hóspede entra na sua conta, ou é o fornecedor que o recebe e lhe transfere mais tarde? Pergunte quando são feitas as transferências e o que acontece ao dinheiro pendente se o fornecedor tiver um problema.</Li>
        <Li><B>Reembolsos e contestações.</B> Quem faz o reembolso, e de que saldo sai? Quando um hóspede contesta um pagamento junto do banco, quem responde, com que provas, e quem paga a eventual taxa?</Li>
      </Ul>
      <P>
        Uma boa resposta: <B>"Os pagamentos entram diretamente na sua conta, as transferências seguem o calendário do seu
        prestador, os reembolsos são feitos por si, e o registo da reserva e as condições aceites ficam disponíveis se houver
        uma contestação."</B>
      </P>

      <H2>Dados dos hóspedes: de quem são?</H2>
      <P>
        À luz do RGPD, quem recebe a reserva decide, em regra, para quê e como os dados do hóspede são usados, e por isso é
        o <B>responsável pelo tratamento</B>. Um motor de reservas que guarda as reservas por sua conta é um{' '}
        <B>subcontratante</B>: segundo a <Ext href={GDPR_ROLES}>Comissão Europeia</Ext>, trata dados pessoais apenas em nome
        do responsável, com base num contrato e só mediante instruções documentadas. A Comissão dá até o exemplo de um
        subcontratado que usou os contactos dos clientes para o seu próprio marketing e, por isso, passou também a ser
        responsável pelo tratamento.
      </P>
      <P>Pergunte, portanto:</P>
      <Ul>
        <Li>Existe um acordo de tratamento de dados, e posso lê-lo antes de assinar?</Li>
        <Li>Podem enviar emails aos meus hóspedes, mostrar-lhes outros alojamentos ou usar os dados deles para fins próprios?</Li>
      </Ul>
      <P>
        A resposta certa é um acordo curto e legível e um não claro ao marketing junto dos seus hóspedes. Isto é informação
        geral, não aconselhamento jurídico.
      </P>

      <H2>Sincronização de calendários e canais</H2>
      <P>
        Se também vende nas grandes plataformas, é a sincronização que evita reservas duplicadas. O <B>iCal</B> é um feed de calendário: um lado publica as datas ocupadas e o outro lê-as segundo o seu próprio
        horário. Pode ligar feeds nos dois sentidos, mas cada um só transporta datas bloqueadas (sem preços nem dados de
        hóspedes) e só se atualiza na leitura seguinte. Uma reserva feita agora pode só bloquear a data noutro lado depois da
        próxima atualização. <B>Uma ligação a um channel manager</B> é uma ligação bidirecional pensada para trocar
        disponibilidade, preços e reservas entre sistemas.
      </P>
      <Ul>
        <Li>Que método usa para cada plataforma onde vendo?</Li>
        <Li>De quanto em quanto tempo são atualizados os calendários importados, e consigo ver quando foi a última sincronização?</Li>
        <Li>Se mesmo assim houver uma reserva duplicada, quem é avisado e qual é o procedimento?</Li>
      </Ul>
      <P>Uma boa resposta é honesta quanto aos tempos. Desconfie de quem chame "tempo real" a um feed iCal.</P>

      <H2>Sair: contrato, dados e domínio</H2>
      <P>Talvez nunca queira sair, mas a facilidade com que pode fazê-lo diz muito sobre o negócio.</P>
      <H3>Contrato</H3>
      <P>
        Pergunte a duração, o prazo de pré-aviso, se renova automaticamente, se há custos de saída e se os preços podem
        mudar a meio do contrato. Boa resposta: contrato mensal ou anual, pré-aviso curto, sem custos de saída e alterações de
        preço anunciadas com antecedência.
      </P>
      <H3>Exportação de dados</H3>
      <P>
        Consegue exportar as reservas e a lista de hóspedes sozinho, a qualquer momento, sem abrir um pedido ao suporte? Em
        que formato? Um ficheiro de folha de cálculo (CSV) é o mínimo útil. Confirme que a exportação inclui reservas
        futuras e sinais já pagos. Depois pergunte o que acontece aos seus dados quando sair: durante quanto tempo ficam
        guardados e se são apagados a pedido. A Comissão lembra que o contrato com o subcontratante tem de indicar o que
        acontece aos dados pessoais quando o contrato termina.
      </P>
      <H3>Domínio e website</H3>
      <P>
        A página de reservas fica no seu domínio ou num endereço do fornecedor? Quem registou o domínio, e em nome de
        quem? Se foi o fornecedor a fazer o website, fica com ele quando sair? Páginas e ligações no seu
        domínio constroem a sua presença nos motores de pesquisa; no domínio de outro, constroem a dele, e partem-se quando
        sai. Boa resposta: o domínio está em seu nome e a página de reservas vive no seu site.
      </P>

      <H2>O que o hóspede vê e quem lhe responde</H2>
      <Ul>
        <Li><B>Idiomas.</B> Todos os passos estão na língua do hóspede, incluindo as condições e o email de confirmação?</Li>
        <Li><B>Telemóvel.</B> Faça uma reserva de teste no seu próprio telemóvel, do início ao fim, antes de assinar.</Li>
        <Li><B>Acessibilidade.</B> É possível reservar só com o teclado e com um leitor de ecrã? Pergunte se testam segundo as diretrizes WCAG.</Li>
        <Li><B>Suporte.</B> Quem responde: uma pessoa, um robô, um revendedor? Em que língua, em que dias e com que rapidez na época alta?</Li>
      </Ul>

      <H2>A lista de verificação</H2>
      <P>Imprima e leve-a para a reunião com o fornecedor.</P>
      <Ul>
        <Li>Comissão ou valor fixo, e sobre quê: extras, IVA, taxa turística, cancelamentos?</Li>
        <Li>Instalação, mensalidade, custos por volume; comissões de cartão incluídas ou não</Li>
        <Li>A minha conta de pagamentos ou a do fornecedor; quando recebo</Li>
        <Li>Quem trata de reembolsos e contestações</Li>
        <Li>Acordo de tratamento de dados; sem marketing aos meus hóspedes</Li>
        <Li>Exportação feita por mim, formato, e os meus dados depois de sair</Li>
        <Li>Duração, pré-aviso, renovação automática, custos de saída</Li>
        <Li>Método de sincronização, intervalo, procedimento para reservas duplicadas</Li>
        <Li>Página de reservas no meu domínio; domínio e site em meu nome</Li>
        <Li>Idiomas, teste no telemóvel, acessibilidade, suporte</Li>
      </Ul>

      <H2>Como o Likwiid Direct responde a estas perguntas</H2>
      <P>
        Estas são as nossas respostas no <A to="/pt/direct/">Likwiid Direct</A>. O Direct não cobra comissão. Integra-se no website que já tem, no seu domínio, ou construímos o
        site à volta dele. O sinal pago com cartão entra na sua própria conta de pagamentos e a lista de hóspedes continua a
        ser sua. No painel do proprietário pode pesquisar e exportar as reservas. Escolhe entre o modo de pedido, em que nada
        é cobrado e confirma cada reserva à mão, e a reserva imediata com sinal por cartão.
      </P>
      <P>
        A sincronização de calendários usa iCal, por isso não é instantânea: os feeds atualizam-se periodicamente e o
        calendário mostra quando foi a última sincronização. O Direct não é um channel manager e é um produto novo: as
        demonstrações públicas usam alojamentos fictícios. Se ainda está a comparar a venda direta com as comissões das
        plataformas, o nosso guia sobre{' '}
        <A to="/pt/guides/booking-com-commission-costs/">quanto custa realmente a comissão das plataformas</A> faz as
        contas. E se quiser fazer-nos estas perguntas, <A to="/pt/contact/">fale connosco</A>.
      </P>
    </GuideLayout>
  )
}
