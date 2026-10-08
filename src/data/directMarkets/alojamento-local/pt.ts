import type { DirectMarketContent } from '../types'

const pt: DirectMarketContent = {
  market: 'alojamento-local',
  lang: 'pt',
  docTitle: 'Reservas diretas para alojamento local sem comissões | Likwiid',
  description:
    'Motor de reservas sem comissões no site do seu alojamento local: sinal por cartão ou pedido, extras, estadia mínima e datas sincronizadas com as plataformas.',
  crumb: 'Alojamento local',
  eyebrow: 'Likwiid Direct para alojamento local',
  h1: 'Reservas diretas para o seu alojamento local, sem comissão para ninguém.',
  intro: [
    'Quem gere um alojamento local conhece o ciclo: o hóspede descobre a casa numa plataforma, a comissão sai da sua margem, e no ano seguinte o mesmo hóspede volta a reservar pelo mesmo intermediário. O site da casa, quando existe, fica-se por um formulário de contacto e um número de telemóvel.',
    'O Likwiid Direct transforma esse site num sítio onde se reserva de facto. O hóspede escolhe as datas, o quarto ou a casa inteira e os extras, e paga um sinal ou envia-lhe um pedido. Tudo com o seu nome, na sua conta de pagamentos e sem comissão por reserva.',
  ],
  demo: 'quinta-likwiid',
  ctaDemo: 'Experimente a demo ao vivo',
  ctaTalk: 'Fale connosco',
  demoNote:
    'A Quinta Likwiid é uma casa de hóspedes fictícia no Douro. Existe para que possa percorrer exatamente o motor que construiríamos para si. O pagamento é simulado e não é cobrado nenhum valor.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'O que pesa num alojamento local',
      items: [
        'A comissão das plataformas sobre cada estadia, mesmo quando o hóspede já conhecia a casa.',
        'Hóspedes que voltam todos os anos e continuam a reservar através de um intermediário.',
        'Pedidos por email e WhatsApp que precisam de três ou quatro mensagens só para saber datas, pessoas e extras.',
        'O receio de uma reserva duplicada quando a casa está anunciada em vários sítios ao mesmo tempo.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Como corre uma reserva direta',
      items: [
        { title: 'Datas e alojamento', desc: 'O hóspede escolhe as datas e o quarto, o estúdio ou a casa inteira, e só vê o que está livre e cumpre as suas regras.' },
        { title: 'Extras', desc: 'Pequeno-almoço, transfer do aeroporto ou uma prova de vinhos, por pessoa, por noite ou por estadia, com o total sempre à vista.' },
        { title: 'Dados e condições', desc: 'Nome e contacto, sem conta para criar, e as suas condições de cancelamento aceites antes de avançar.' },
        { title: 'Sinal ou pedido', desc: 'Um sinal por cartão confirma a estadia e o restante paga-se à chegada. Em modo de pedido, nada fica reservado até confirmar.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'O que o Likwiid Direct trata por si',
      items: [
        { title: 'Datas sincronizadas com as plataformas', desc: 'Importa as datas ocupadas de qualquer plataforma que exporte um feed iCal e exporta as suas. A sincronização não é instantânea, e o calendário mostra quando foi a última.' },
        { title: 'Estadia mínima e preços por época', desc: 'Um mínimo de noites por casa ou por quarto, um preço para agosto e outro para novembro, dias livres entre reservas e períodos de encerramento.' },
        { title: 'Sinal por cartão, restante à chegada', desc: 'O mesmo sinal que já pede por transferência, cobrado no momento em que o hóspede se decide.' },
        { title: 'Modo de pedido', desc: 'Para quem prefere confirmar cada reserva pessoalmente: o pedido chega com datas, pessoas e extras, e confirma, propõe outra data ou recusa.' },
        { title: 'Na língua do hóspede', desc: 'Cada passo, cada etiqueta e cada preço em português, inglês, espanhol ou francês, conforme o hóspede escolher.' },
        { title: 'Um painel com a sua marca', desc: 'Pedidos para aprovar, reservas para pesquisar e exportar e um calendário que bloqueia com um clique.' },
      ],
    },
    {
      kind: 'panel',
      id: 'local',
      title: 'O que a lei pede, e onde o site ajuda',
      paragraphs: [
        'O número de registo do alojamento local tem de constar da publicidade da casa, e isso inclui o seu próprio site. Quando instalamos o motor, confirmamos que o número está à vista nas páginas onde se reserva, tal como a ligação ao Livro de Reclamações Eletrónico.',
        'A comunicação de hóspedes estrangeiros, os boletins de alojamento, continua a fazer-se no SIBA, dentro do prazo legal. O Likwiid Direct guarda o nome e o contacto de cada reserva, mas não faz essa comunicação por si.',
        'A taxa turística é municipal: cada câmara decide se a cobra, quanto e em que condições. Pode explicá-la nas condições que o hóspede aceita antes de reservar.',
      ],
      note: 'Isto é um resumo, não aconselhamento jurídico. As regras mudam e variam de município para município: confirme com a sua câmara municipal e com o Turismo de Portugal.',
    },
  ],
  faqTitle: 'Perguntas de quem gere alojamento local',
  faq: [
    {
      q: 'Tenho de deixar as plataformas onde anuncio?',
      a: 'Não. O Likwiid Direct convive com elas: importa as datas ocupadas por iCal e exporta as suas, para que uma reserva direta feche a data nos outros sítios. Como a sincronização não é instantânea, pode deixar dias livres entre reservas como margem.',
    },
    {
      q: 'Como recebo o sinal?',
      a: 'Na sua própria conta de pagamentos, por cartão, no momento da reserva. O restante paga-se à chegada, como hoje. Se preferir não cobrar nada online, use o modo de pedido.',
    },
    {
      q: 'Posso manter o site que tenho?',
      a: 'Sim. O motor entra no site atual com uma tag de script e uma div, em WordPress, Wix ou feito à mão. Se o site precisar de ser refeito, também o fazemos.',
    },
    {
      q: 'Cobram comissão sobre as reservas?',
      a: 'Não. Não há comissão sobre nenhuma reserva. Fale-nos do seu alojamento e explicamos o que implica pô-lo a funcionar.',
    },
  ],
  closingTitle: 'Conte-nos sobre o seu alojamento',
  closingBody:
    'Quantos quartos ou casas tem, onde anuncia hoje e como recebe os sinais. Respondemos em 24 horas com a forma como o Likwiid Direct encaixaria, e com o que não faria.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tudo o que o Likwiid Direct faz',
  breadcrumbLabel: 'Navegação estrutural',
}

export default pt
