import type { DirectMarketContent } from '../types'

const pt: DirectMarketContent = {
  market: 'padel-clubs',
  lang: 'pt',
  docTitle: 'Reservas de campos de padel sem comissões | Likwiid',
  description:
    'Reservas de campos no site do seu clube: horários por campo, lista de espera para as horas de ponta, regras de antecedência e de cancelamento. Sem comissões.',
  crumb: 'Clubes de padel',
  eyebrow: 'Likwiid Direct para clubes de padel',
  h1: 'Reservas de campos de padel no site do seu clube.',
  intro: [
    'Muitos clubes ainda recebem reservas por WhatsApp e numa folha de cálculo partilhada, ou através de uma aplicação intermediária que fica com a relação com o jogador e cobra por cada reserva.',
    'O Likwiid Direct leva a reserva de campos para o site que já tem. O jogador escolhe a hora e o campo, vê quanto custa e reserva em poucos toques. O clube define os campos, os horários e as regras, e cada reserva chega diretamente a si.',
  ],
  demo: 'atelier-likwiid',
  ctaDemo: 'Experimente a demo mais próxima',
  ctaTalk: 'Fale connosco',
  demoNote:
    'Ainda não existe uma demo de padel. A mais próxima é o Atelier Likwiid, um estúdio fictício que marca sessões por horário, com lugares disponíveis e lista de espera. O pagamento é simulado e não é cobrado nenhum valor.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'O que complica hoje',
      items: [
        'Pedidos de reserva espalhados entre WhatsApp, Instagram e telefonemas, respondidos entre jogos.',
        'O campo das 19h00 reservado duas vezes porque duas pessoas mexeram na mesma folha.',
        'Cancelamentos em cima da hora nas horas de ponta, que deixam um campo vazio e por pagar.',
        'Aplicações intermediárias que ficam com uma parte de cada reserva e com o contacto do jogador.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Como corre uma reserva de campo',
      items: [
        { title: 'Escolher o dia e a hora', desc: 'O jogador vê os horários livres do dia. Quando todos os campos estão ocupados, a hora aparece como esgotada.' },
        { title: 'Escolher o campo', desc: 'Interior ou exterior, campo central ou lateral: cada campo aparece à parte, com o seu próprio preço.' },
        { title: 'Juntar o que precisa', desc: 'Aluguer de raquete ou um tubo de bolas, por jogador ou por reserva, adicionados com um clique.' },
        { title: 'Confirmar ou enviar um pedido', desc: 'Um sinal por cartão confirma o campo no momento. Em modo de pedido, a reserva fica à espera da sua aprovação.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'O que o Likwiid Direct trata pelo clube',
      items: [
        { title: 'Campos e horários', desc: 'Cada campo tem os seus horários e o seu preço por marcação. Uma hora só aparece esgotada quando todos os campos estão reservados.' },
        { title: 'Lista de espera para as horas de ponta', desc: 'Com todos os campos ocupados, o jogador inscreve-se na lista de espera em vez de lhe enviar mensagens. Nada é cobrado, e oferece a vaga a partir do painel quando abrir uma.' },
        { title: 'Cancelamentos com regras', desc: 'Define a antecedência mínima para cancelar. Com aviso suficiente, o sinal passa a crédito para outra reserva; em cima da hora, fica para o clube.' },
        { title: 'Antecedência e períodos fechados', desc: 'A antecedência mínima para reservar e datas fechadas para férias, obras ou um fim de semana de torneio.' },
        { title: 'As suas condições, aceites primeiro', desc: 'As condições de cancelamento e de pagamento aparecem no último passo, e ninguém reserva sem assinalar que as leu.' },
        { title: 'Um painel para a receção', desc: 'Reservas para pesquisar e exportar, pedidos para aprovar ou recusar e um calendário onde bloqueia datas com um clique.' },
      ],
    },
    {
      kind: 'proof',
      id: 'proof',
      title: 'Já construímos reservas de padel',
      body: 'Para um cliente no Líbano construímos uma plataforma de padel completa: os jogadores reservam campos, encontram jogos ao seu nível e jogam em ligas, e os organizadores gerem tudo num portal web. Está publicada na App Store e no Google Play. O Likwiid Direct é a versão mais leve dessa ideia: reservas de campos no seu próprio site, sem aplicação para instalar.',
      linkLabel: 'Ver o caso de estudo de reservas de padel',
      to: '/work/padel-booking',
    },
  ],
  faqTitle: 'Perguntas que os clubes nos fazem',
  faq: [
    {
      q: 'Os jogadores têm de instalar uma aplicação ou criar conta?',
      a: 'Não. Reservam no site do clube, no browser de qualquer telemóvel, só com o nome e o contacto. Não há conta para criar.',
    },
    {
      q: 'Podemos manter o site que temos?',
      a: 'Sim. O Likwiid Direct entra no site atual com uma tag de script e uma div, seja em WordPress, Wix ou feito à mão. Se também precisar de um site novo, também o fazemos.',
    },
    {
      q: 'Os jogadores podem pagar quando reservam?',
      a: 'O clube decide. Um sinal por cartão confirma o campo no momento da reserva, ou o modo de pedido deixa o jogador pedir um campo sem pagar enquanto o clube confirma cada um. Muda entre os dois no painel do proprietário.',
    },
    {
      q: 'Gere ligas e procura de parceiros de jogo?',
      a: 'Não. O Likwiid Direct serve para reservar campos. As ligas e a procura de jogadores do mesmo nível são o que construímos na plataforma de padel acima, e isso é um projeto à parte, de que falamos com todo o gosto.',
    },
    {
      q: 'Cobram comissão sobre as reservas?',
      a: 'Não. Não há comissão sobre nenhuma reserva. Fale-nos do seu clube e explicamos o que implica pô-lo a funcionar.',
    },
  ],
  closingTitle: 'Conte-nos como o seu clube reserva hoje',
  closingBody:
    'Envie-nos os campos, o horário de funcionamento e a forma como os jogadores reservam agora. Respondemos em 24 horas com a forma como o Likwiid Direct encaixaria, e com o que não faria.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tudo o que o Likwiid Direct faz',
  breadcrumbLabel: 'Navegação estrutural',
}

export default pt
