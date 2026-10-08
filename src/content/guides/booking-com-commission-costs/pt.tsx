import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Booking.com for Partners: Como funciona a sua comissão (consultado em outubro de 2026)',
    href: 'https://partner.booking.com/pt/ajuda/comiss%C3%A3o-fatura%C3%A7%C3%A3o-e-impostos/faturas/como-funciona-sua-comiss%C3%A3o',
  },
  {
    label: 'Booking.com for Partners: Joining Payments by Booking.com, em inglês (consultado em outubro de 2026)',
    href: 'https://partner.booking.com/en-gb/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom',
  },
  {
    label: 'Booking.com for Partners: Understanding the Preferred Partner Programme, em inglês (consultado em outubro de 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-preferred-partner-programme',
  },
  {
    label: 'Booking.com for Partners: Understanding the Genius marketing programme, em inglês (consultado em outubro de 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-genius-marketing-programme',
  },
  {
    label: 'Booking.com Developers: Get property commission, comissão contratada e Visibility Booster (consultado em outubro de 2026)',
    href: 'https://developers.booking.com/connectivity/docs/b_xml-getcommissionoverride',
  },
  {
    label: 'Comissão Europeia: Comissão designa a Booking como controlador de acesso, IP/24/2561, 13 de maio de 2024',
    href: 'https://ec.europa.eu/commission/presscorner/detail/pt/ip_24_2561',
  },
  {
    label: 'Comissão Europeia, DMA: Booking must comply with all relevant obligations under the DMA, 14 de novembro de 2024',
    href: 'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en',
  },
  {
    label: 'Comissão Europeia, DMA: ficha informativa sobre a liberdade de preços de quem usa o Booking.com, 28 de setembro de 2026',
    href: 'https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en',
  },
  {
    label: 'Autoridade Tributária e Aduaneira: Informação vinculativa, processo 25603, artigo 53.º do CIVA, 25 de março de 2024',
    href: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/informacoes_vinculativas/despesa/civa/Documents/PIV_25603.pdf',
  },
  {
    label: 'A sua Europa (União Europeia): IVA transfronteiriço, compra de serviços noutro país da UE (consultado em outubro de 2026)',
    href: 'https://europa.eu/youreurope/business/finance-and-tax/vat/cross-border-vat/index_pt.htm',
  },
  {
    label: 'GLEIF: registo da entidade Booking.com B.V., Amesterdão, Países Baixos (consultado em outubro de 2026)',
    href: 'https://search.gleif.org/#/record/7245009ZP4X4SZC79G88',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="booking-com-commission-costs" lang="pt" sources={sources}>
      <Summary>
        <Li>A comissão do Booking.com é uma percentagem definida no seu contrato. Varia com o país, o tipo de alojamento e o acordo assinado, por isso o número que conta é o que aparece na sua extranet.</Li>
        <Li>Incide sobre o total pago pelo hóspede, incluindo taxas de limpeza e, na maioria dos países, o IVA. A taxa turística municipal fica de fora.</Li>
        <Li>Os programas Parceiro Preferido e Aumento de Visibilidade somam comissão. O Genius não soma comissão, mas o desconto é pago por si.</Li>
        <Li>Em Portugal, mesmo um alojamento local no regime de isenção do artigo 53.º pode ter de autoliquidar IVA sobre a comissão.</Li>
        <Li>Desde 2024, as regras europeias garantem que pode oferecer um preço melhor no seu próprio site.</Li>
      </Summary>

      <H2>O que é a comissão e o que paga</H2>
      <P>
        O Booking.com não cobra para anunciar. Cobra uma percentagem de cada reserva que lhe envia. Segundo as páginas de
        apoio aos parceiros, a percentagem exata depende do país, do tipo de alojamento e do acordo assinado na adesão. Está
        no seu contrato e na extranet, no separador Finanças, no relatório de reservas.
      </P>
      <P>
        Não existe uma taxa oficial única, por isso os exemplos deste guia usam 15 por cento apenas como número redondo.
        Substitua-o pelo seu. O resto do texto reflete as páginas do Booking.com e as fontes europeias em outubro de 2026; as
        condições mudam, por isso confirme sempre na extranet.
      </P>
      <P>
        É justo dizer o que a comissão compra. O Booking.com afirma promover os alojamentos em motores de busca em 45 línguas
        e através de mais de 17.500 parceiros afiliados, além da sua própria base de viajantes. Para um alojamento local sem
        orçamento de marketing, esse alcance é real, sobretudo para hóspedes estrangeiros que nunca o encontrariam de outra
        forma. E só paga quando há reserva.
      </P>

      <H2>Sobre que valores incide</H2>
      <P>
        A comissão aplica-se ao valor total da reserva: a tarifa mais as taxas adicionais que cobra, como limpeza ou serviço,
        e é aplicada depois do check-out. O Booking.com não cobra comissão sobre impostos locais, como a taxa turística
        municipal, mas na maioria dos países cobra sobre o IVA. Os seus Termos Gerais de Prestação (TGP) dizem o que se
        aplica ao seu caso.
      </P>
      <Ul>
        <Li><B>Paga comissão</B> sobre estadias concluídas, reservas não reembolsáveis ou parcialmente reembolsáveis (mesmo que o hóspede não venha), taxas de cancelamento ou de não comparência que cobre, e reservas em excesso (overbooking).</Li>
        <Li><B>Não paga</B> quando prescinde da taxa de cancelamento ou de não comparência, ou quando marca o cartão do hóspede como inválido.</Li>
        <Li><B>Atenção ao prazo:</B> cancelamentos e não comparências têm de ser registados na extranet até 48 horas após o check-out. Caso contrário, paga a comissão completa.</Li>
        <Li><B>A percentagem fica fixada</B> no momento da reserva. Se a sua comissão mudou, as reservas antigas mantêm a anterior.</Li>
      </Ul>

      <H2>Quando se paga: fatura mensal ou desconto no pagamento</H2>
      <P>
        Se recebe os pagamentos dos hóspedes diretamente, o Booking.com envia uma fatura por mês, com todas as reservas cujo
        check-out foi no mês anterior. A fatura deve ser paga em 14 dias, e faturas em atraso podem levar ao fecho temporário
        do alojamento na plataforma.
      </P>
      <P>
        Com o <B>Payments by Booking.com</B>, é a plataforma que cobra ao hóspede e lhe transfere o valor. Quando trata de
        todos os pagamentos, desconta a comissão e as taxas de cada transferência. A adesão não tem custo inicial, mas se
        recebe por transferência bancária aplica-se uma taxa de serviço de pagamento, em percentagem de cada reserva
        concluída, que depende da localização do alojamento. Em contrapartida, o Booking.com trata de estornos e reembolsos.
        Confirme a taxa exata na página de ajuda financeira da extranet.
      </P>

      <H2>O que faz subir o custo real</H2>
      <Ul>
        <Li><B>Parceiro Preferido:</B> mais destaque nos resultados e um selo, em troca do que o Booking.com chama um pequeno aumento de comissão. Não publica um valor único, e exige, entre outros critérios, uma pontuação de avaliações de pelo menos 7 em 10.</Li>
        <Li><B>Aumento de Visibilidade (Visibility Booster):</B> uma comissão mais alta que escolhe para datas concretas, para subir no ranking nessas noites. A documentação técnica do Booking.com descreve-o como uma substituição da comissão, data a data.</Li>
        <Li><B>Genius:</B> não acrescenta comissão, mas obriga a um desconto de 10 por cento no seu tipo de quarto mais barato e mais procurado. O Booking.com confirma que o desconto Genius padrão é financiado pelo alojamento.</Li>
      </Ul>
      <P>
        Todos são opcionais e pode sair de qualquer um. Se o relatório de reservas mostrar uma percentagem acima da do
        contrato, verifique se algum está ativo.
      </P>

      <H2>Exemplos por cada 100 de valor da reserva</H2>
      <P>
        Os exemplos usam 15 por cento de comissão base e, nos programas, mais 3 pontos. São ilustrações, não números do
        Booking.com. Os 10 por cento do Genius são o nível padrão do programa.
      </P>
      <Table
        caption="Quanto fica consigo numa reserva anunciada a 100 (taxas de exemplo)"
        head={['Situação', 'O hóspede paga', 'Comissão', 'Fica consigo']}
        rows={[
          ['Comissão base de 15 por cento', '100', '15', '85'],
          ['Programa soma 3 pontos (18 por cento)', '100', '18', '82'],
          ['Hóspede Genius, 10 por cento de desconto', '90', '13,5', '76,5'],
          ['Hóspede Genius com programa ativo', '90', '16,2', '73,8'],
        ]}
      />
      <P>
        Repare na terceira linha: o desconto e a comissão somam-se. O hóspede Genius paga 90, a comissão incide sobre esses
        90 e fica com 76,5. Face ao preço anunciado, o canal custa-lhe 23,5, não 15. As taxas de pagamento, se as tiver,
        acrescem.
      </P>
      <Note title="O efeito de misturar canais">
        <p>
          Se 70 de cada 100 da sua faturação anual vêm do Booking.com a 15 por cento e 30 vêm de reservas diretas, a
          comissão média sobre tudo é de 10,5 por cada 100. Com metade e metade, desce para 7,5. As reservas diretas também
          têm custos (o site, as taxas do cartão), mas costumam ser menores e controla-os.
        </p>
      </Note>

      <H2>IVA da comissão em Portugal: fale com o seu contabilista</H2>
      <P>
        As faturas de comissão são emitidas pela Booking.com B.V., uma empresa registada em Amesterdão. Pelas regras
        europeias, quem compra serviços para a sua atividade a um prestador de outro país da UE liquida o IVA como se fosse
        o vendedor: é a autoliquidação.
      </P>
      <P>
        Para o alojamento local há um ponto que surpreende muita gente. Numa informação vinculativa de março de 2024, a
        Autoridade Tributária analisou o caso de um sujeito passivo com atividade de alojamento mobilado para turistas, no
        regime especial de isenção do artigo 53.º do CIVA, que recebia faturas de comissão de uma plataforma de reservas com IVA a autoliquidar, e que incluía esse
        imposto nos campos 16 e 17 do quadro 06 da declaração periódica. Ou seja, estar isento de IVA nas suas estadias não
        significa que a comissão fique fora do IVA. Se e como pode deduzir esse imposto depende do seu enquadramento:
        confirme com o seu contabilista certificado.
      </P>
      <P>
        Se ainda está a organizar o registo do seu alojamento, o nosso guia sobre o{' '}
        <A to="/pt/guides/portugal-local-lodging-rnal/">registo nacional de alojamento local</A> explica os passos.
      </P>

      <H2>Liberdade de preço na Europa</H2>
      <P>
        A 13 de maio de 2024, a Comissão Europeia designou a Booking como controlador de acesso ao abrigo do Regulamento
        dos Mercados Digitais, e desde 14 de novembro de 2024 o Booking.com tem de cumprir as respetivas obrigações. Uma
        delas, o artigo 5.º, n.º 3, obriga a permitir que os alojamentos ofereçam preços, disponibilidade ou condições
        diferentes noutros canais, incluindo o próprio site.
      </P>
      <P>
        Numa ficha de 28 de setembro de 2026, a Comissão indica que o Booking.com retirou as cláusulas de paridade dos seus
        termos no Espaço Económico Europeu e não usa preços externos no ranking por defeito nem na elegibilidade para o
        Genius ou o Parceiro Preferido. Na prática, pode recompensar quem reserva diretamente com um preço melhor ou uma
        pequena oferta.
      </P>

      <H2>Equilibrar os canais</H2>
      <P>
        Sair do Booking.com raramente é a melhor decisão para um alojamento local. Ele traz hóspedes que sozinho não
        alcançaria. O objetivo útil é deixar de pagar comissão por hóspedes que já o conhecem: quem regressa, quem vem por
        recomendação, quem o encontra no mapa e procura o seu site.
      </P>
      <Ul>
        <Li>Mantenha o Booking.com para ser descoberto, sobretudo na época baixa.</Li>
        <Li>Torne o seu site reservável, para que quem pesquisa o nome do alojamento reserve lá.</Li>
        <Li>Diga aos hóspedes que da próxima vez podem reservar diretamente, e dê-lhes um motivo.</Li>
      </Ul>
      <P>
        O <A to="/pt/direct/">Likwiid Direct</A> é um motor de reservas sem comissões que acrescenta um calendário de
        reservas ao site que já tem, com os pagamentos a entrar na sua própria conta. Importa as datas ocupadas de qualquer
        plataforma que exporte um calendário iCal, por isso funciona ao lado do seu anúncio no Booking.com; essas
        sincronizações são periódicas, não instantâneas. Antes de escolher qualquer motor de reservas, veja o nosso guia
        com{' '}
        <A to="/pt/guides/booking-engine-questions/">as perguntas a fazer a um motor de reservas</A>.
      </P>
    </GuideLayout>
  )
}
