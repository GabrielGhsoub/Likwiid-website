import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, Li, Note, P, Summary, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label:
      'Diário da República: Decreto-Lei n.º 76/2024, de 23 de outubro, com a republicação do Decreto-Lei n.º 128/2014 (consultado em outubro de 2026)',
    href: 'https://files.diariodarepublica.pt/1s/2024/10/20600/0000300031.pdf',
  },
  {
    label: 'Diário da República: Lei n.º 56/2023, de 6 de outubro, Mais Habitação (consultado em outubro de 2026)',
    href: 'https://files.diariodarepublica.pt/1s/2023/10/19400/0000200050.pdf',
  },
  {
    label:
      'Portal das Finanças: Decreto-Lei n.º 57/2024, de 10 de setembro, que revoga a contribuição extraordinária sobre o alojamento local (consultado em outubro de 2026)',
    href: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/diplomas_legislativos/Documents/Decreto_Lei_57_2024.pdf',
  },
  {
    label: 'Diário da República: Decreto-Lei n.º 151/2026, de 30 de julho (consultado em outubro de 2026)',
    href: 'https://files.diariodarepublica.pt/1s/2026/07/14600/0001000012.pdf',
  },
  {
    label: 'Turismo de Portugal: Guia técnico Alojamento Local, regime jurídico, janeiro de 2025 (consultado em outubro de 2026)',
    href: 'https://business.turismodeportugal.pt/SiteCollectionDocuments/alojamento-local/guia-alojamento-local-jan-2025.pdf',
  },
  {
    label: 'Turismo de Portugal: Estabelecimentos de Alojamento Local, registo (consultado em outubro de 2026)',
    href: 'https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/default.aspx',
  },
  {
    label: 'Turismo de Portugal: Alojamento local, livro de reclamações eletrónico (consultado em outubro de 2026)',
    href: 'https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/livro-de-reclamacoes-eletronico-al.aspx',
  },
  {
    label: 'gov.pt: Guia Alojamento Local (consultado em outubro de 2026)',
    href: 'https://www.gov.pt/guias/alojamento-local',
  },
  {
    label: 'gov.pt: Alojamento local, registo da atividade (consultado em outubro de 2026)',
    href: 'https://www.gov.pt/servicos/alojamento-local-registo-da-atividade',
  },
  {
    label: 'SIBA: Sistema de Informação de Boletins de Alojamento (consultado em outubro de 2026)',
    href: 'https://siba.ssi.gov.pt/',
  },
  {
    label:
      'Diário da República: Regulamento n.º 1135/2022, segunda alteração ao Regulamento da Taxa Municipal Turística do Porto (consultado em outubro de 2026)',
    href: 'https://files.diariodarepublica.pt/2s/2022/11/226000000/0032300328.pdf',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="portugal-local-lodging-rnal" lang="pt" sources={sources}>
      <Summary>
        <Li>Para explorar um alojamento local tem de o registar antes, por comunicação prévia com prazo no Balcão Único Eletrónico.</Li>
        <Li>O número de registo tem de aparecer na publicidade e nos anúncios, e a maioria das modalidades exige uma placa junto à entrada.</Li>
        <Li>Hóspedes estrangeiros são comunicados no SIBA, o seguro de responsabilidade civil é obrigatório e o livro de reclamações existe em papel e eletrónico.</Li>
        <Li>Desde novembro de 2024 os municípios têm mais poder para definir regras locais, como áreas de contenção e suspensões de novos registos. Confirme sempre junto da sua câmara.</Li>
      </Summary>

      <Note title="Antes de começar">
        <p>
          Atualizado em outubro de 2026. Este guia é informação geral, não aconselhamento jurídico; as regras mudam e variam por
          município: confirme sempre junto da sua câmara municipal e do Turismo de Portugal.
        </p>
      </Note>

      <H2>O que é o alojamento local</H2>
      <P>
        O regime está no Decreto-Lei n.º 128/2014, de 29 de agosto, alterado várias vezes. O alojamento local presta alojamento
        temporário, nomeadamente a turistas, mediante remuneração. Um imóvel que reúna os requisitos de empreendimento turístico não
        pode ser explorado como alojamento local. Há quatro modalidades:
      </P>
      <Ul>
        <Li>
          <B>Moradia</B>: um edifício autónomo, de caráter unifamiliar.
        </Li>
        <Li>
          <B>Apartamento</B>: uma fração autónoma ou parte de prédio de utilização independente.
        </Li>
        <Li>
          <B>Estabelecimento de hospedagem</B>: as unidades são quartos; pode chamar-se hostel se predominar o dormitório.
        </Li>
        <Li>
          <B>Quartos</B>: na residência do titular, que é o seu domicílio fiscal, com um máximo de três quartos.
        </Li>
      </Ul>
      <P>Fora das modalidades quartos e hostel, a capacidade máxima é de nove quartos e 27 utentes.</P>

      <H2>Como se faz o registo</H2>
      <P>
        O registo é feito por <B>comunicação prévia com prazo</B> dirigida ao presidente da câmara municipal, através do Balcão Único
        Eletrónico. Segundo o{' '}
        <Ext href="https://www.gov.pt/servicos/alojamento-local-registo-da-atividade">serviço de registo no gov.pt</Ext>, pode fazê-lo
        online ou num balcão do município onde fica o alojamento. A comunicação inclui, entre outros elementos, a autorização de
        utilização do imóvel, a identificação do titular, a capacidade, um contacto de emergência, um termo de responsabilidade e a
        declaração de início de atividade nas Finanças (CAE 55201 ou 55204).
      </P>
      <P>
        A câmara pode opor-se no prazo de <B>60 dias</B>, ou de <B>90 dias</B> em áreas de contenção, por exemplo por instrução
        incorreta, por violar restrições municipais ou por falta de autorização de utilização adequada. Sem oposição, o pedido recebe
        o número de registo, e o documento do Balcão Único Eletrónico com esse número é o único título válido de abertura ao público.
      </P>
      <P>
        Os registos ficam no{' '}
        <Ext href="https://rnt.turismodeportugal.pt/RNT/_default.aspx">Registo Nacional de Alojamento Local (RNAL)</Ext>, onde o
        Turismo de Portugal publica, entre outros dados, o nome, a capacidade e a validade do seguro. Alterações aos dados e o fim da
        exploração comunicam-se no Balcão Único Eletrónico em 10 dias.
      </P>

      <H2>O número de registo: anúncios, site e placa</H2>
      <P>
        A publicidade e a documentação comercial têm de indicar o nome ou logótipo do alojamento e o número de registo: cada anúncio
        nas plataformas e também o seu próprio site. As plataformas que comercializam alojamento estão obrigadas a exibir o número.
        Anunciar um alojamento sem registo, ou com registo desatualizado, é contraordenação grave.
      </P>
      <P>
        O alojamento identifica-se como alojamento local e não pode usar estrelas nem a classificação dos empreendimentos turísticos.
        Nas modalidades apartamento, estabelecimento de hospedagem e quartos é obrigatória uma <B>placa identificativa</B> junto à
        entrada; nos hostels, no exterior do edifício, junto à entrada principal. O modelo está no anexo do decreto-lei.
      </P>

      <H2>Hóspedes estrangeiros e taxa turística</H2>
      <P>
        A estadia de cidadãos estrangeiros, incluindo de outros países da União Europeia, é comunicada através de boletins de
        alojamento. Desde o fim do SEF, segundo o Turismo de Portugal, a comunicação é feita à{' '}
        <B>Unidade de Coordenação de Fronteiras e Estrangeiros (UCFE)</B>, até três dias úteis após a entrada e três dias úteis após a
        saída. O meio eletrónico é o <Ext href="https://siba.ssi.gov.pt/">SIBA</Ext>, onde o alojamento local se regista como
        utilizador com o número RNAL. Também existe boletim em papel, entregue à GNR ou à PSP.
      </P>
      <P>
        A <B>taxa municipal turística</B> é municipal: cada município que a aplica define no seu regulamento o valor, as isenções e a
        forma de entrega. No Porto, por exemplo, o{' '}
        <Ext href="https://files.diariodarepublica.pt/2s/2022/11/226000000/0032300328.pdf">regulamento publicado em 2022</Ext>{' '}
        atribui a liquidação e cobrança a quem explora o alojamento e dá 30 dias após a atribuição do número RNAL para o registo na
        plataforma da taxa. Confirme as regras em vigor na sua câmara.
      </P>

      <H2>Seguro, livro de reclamações e outras obrigações</H2>
      <P>
        É obrigatório um <B>seguro de responsabilidade civil extracontratual</B> que cubra danos a hóspedes e a terceiros, com o
        capital mínimo fixado na lei, e, em propriedade horizontal, um seguro contra danos de incêndio com origem na unidade. A câmara
        pode pedir o comprovativo, a entregar em três dias, e a falta de seguro válido é fundamento de cancelamento do registo.
      </P>
      <P>
        O <B>livro de reclamações</B> é obrigatório em papel e em formato eletrónico, na plataforma{' '}
        <Ext href="https://www.livroreclamacoes.pt/">livroreclamacoes.pt</Ext>, e o seu site deve dar acesso visível e destacado ao
        livro eletrónico. A lei exige ainda:
      </P>
      <Ul>
        <Li>
          Um <B>livro de informações</B> em português, inglês e pelo menos mais duas línguas, com regras da casa, resíduos, ruído e o
          contacto do responsável.
        </Li>
        <Li>Até 10 utentes: extintor, manta de incêndio, primeiros socorros e o número 112 em local visível.</Li>
      </Ul>

      <H2>O que mudou entre 2023 e 2026</H2>
      <P>
        <B>Mais Habitação.</B> A Lei n.º 56/2023, de 6 de outubro, suspendeu novos registos de apartamentos e de estabelecimentos de
        hospedagem em fração autónoma, exceto no interior, deu aos registos uma duração de cinco anos renovável, tornou o número de
        registo intransmissível e criou a contribuição extraordinária sobre o alojamento local (CEAL). O Decreto-Lei n.º 57/2024, de 10
        de setembro, revogou a CEAL com efeitos a 31 de dezembro de 2023.
      </P>
      <P>
        <B>Decreto-Lei n.º 76/2024.</B> Publicado a 23 de outubro e em vigor desde 1 de novembro de 2024, revogou a suspensão nacional,
        a duração de cinco anos e a renovação dos registos. A transmissão do registo voltou a ser a regra, mas os municípios podem
        limitá-la para novos registos de moradias e apartamentos em áreas de contenção, salvo casos como sucessão ou divórcio. Os
        municípios podem aprovar um regulamento do alojamento local, com áreas de contenção e as novas áreas de crescimento
        sustentável, suspender novos registos em zonas delimitadas até um ano enquanto o preparam e criar um provedor do alojamento
        local. Com mais de 1000 registos, a assembleia municipal tem de decidir se exerce esse poder. O condomínio pode opor-se à
        atividade numa fração, por mais de metade da permilagem e com base em perturbações reiteradas, mas decide o presidente da
        câmara.
      </P>
      <P>
        <B>Decreto-Lei n.º 151/2026.</B> Publicado a 30 de julho de 2026, dá até 31 de dezembro de 2026 aos municípios com mais de
        1000 registos no fim de 2025 para decidirem sobre o regulamento, e permite prorrogar ou repetir, uma única vez, a suspensão
        de novos registos, nunca para além dessa data. Os registos válidos anteriores não são afetados.
      </P>

      <H2>Lista prática antes de abrir</H2>
      <Ul>
        <Li>Confirme na câmara se o imóvel fica numa área de contenção ou de crescimento sustentável, ou numa zona com novos registos suspensos.</Li>
        <Li>Verifique a autorização de utilização do imóvel e, se for o caso, o regulamento do condomínio.</Li>
        <Li>Declare o início de atividade nas Finanças e faça a comunicação prévia com prazo no Balcão Único Eletrónico.</Li>
        <Li>Contrate o seguro de responsabilidade civil (e o de incêndio, em propriedade horizontal) e entregue o comprovativo.</Li>
        <Li>Coloque a placa, o livro de reclamações, o livro de informações e o equipamento de segurança.</Li>
        <Li>Registe-se no SIBA e, se o município cobrar taxa turística, na plataforma municipal.</Li>
        <Li>Mostre o número RNAL em todos os anúncios e no seu site, e atualize os dados em 10 dias sempre que algo mude.</Li>
      </Ul>

      <H2>O RNAL e as condições no seu site de reservas</H2>
      <P>
        Nas reservas diretas, o seu site é também a sua publicidade: mostre ali o número RNAL, o acesso ao livro de reclamações
        eletrónico e condições claras. <A to="/pt/direct/">O Likwiid Direct</A> integra-se no site que já tem, sem comissões, e mostra
        as condições de cancelamento e pagamento no último passo: ninguém reserva sem confirmar que as leu. Os textos editam-se no
        painel do proprietário. Se quer comparar com o custo das plataformas, leia o guia sobre{' '}
        <A to="/pt/guides/booking-com-commission-costs/">comissões do Booking.com</A>, ou{' '}
        <A to="/pt/contact/">fale connosco</A>.
      </P>
    </GuideLayout>
  )
}
