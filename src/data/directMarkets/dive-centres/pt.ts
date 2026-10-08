import type { DirectMarketContent } from '../types'

const pt: DirectMarketContent = {
  market: 'dive-centres',
  lang: 'pt',
  docTitle: 'Reservas para centros de mergulho sem comissões | Likwiid',
  description:
    'Reservas de mergulhos e cursos no site do seu centro: lugares por saída, cursos de vários dias, aluguer de equipamento e certificações pedidas antes de mergulhar.',
  crumb: 'Centros de mergulho',
  eyebrow: 'Likwiid Direct para centros de mergulho',
  h1: 'Reservas de mergulhos e cursos, com a papelada tratada antes de o barco sair.',
  intro: [
    'Uma reserva de mergulho nunca é só uma data. Precisa da certificação do mergulhador, do equipamento que vai alugar e, por vezes, de uma declaração médica, e normalmente recolhe tudo por email, uma pergunta de cada vez, ou ao balcão na manhã do mergulho.',
    'O Likwiid Direct recebe reservas de mergulhos, batismos e cursos no site do seu centro. Mantém um número de lugares por saída e por curso, pede os documentos que cada atividade exige e envia cada reserva diretamente para si, sem passar por uma plataforma que fica com uma parte.',
  ],
  demo: 'escuela-likwiid',
  ctaDemo: 'Experimente a demo mais próxima',
  ctaTalk: 'Fale connosco',
  demoNote:
    'Ainda não existe uma demo de mergulho. A mais próxima é a Escuela Likwiid, uma escola de vela fictícia, em espanhol e inglês, com cursos de vários dias, lugares por sessão e um passo de documentos. Os ficheiros ficam no seu browser e o pagamento é simulado.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Onde as reservas de mergulho correm mal',
      items: [
        'Um mergulhador reserva um mergulho mais fundo do que a certificação permite, e só se descobre ao balcão.',
        'O equipamento necessário só é comunicado na manhã do mergulho, ou nem chega a ser.',
        'Um curso de três dias é reservado como um mergulho isolado, e as datas perdem-se nas mensagens.',
        'O vento cancela a saída de barco e é preciso reembolsar ou remarcar cada mergulhador à mão.',
        'As plataformas de reservas ficam com uma comissão sobre cada mergulho e cada curso.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Como corre uma reserva de mergulho',
      items: [
        { title: 'Escolher a atividade', desc: 'Um mergulho de lazer, um batismo ou um curso, cada um com as suas datas, horários e lugares.' },
        { title: 'Escolher a data', desc: 'Os mergulhos mostram as horas de saída. Os cursos mostram as sessões, com todos os dias do curso incluídos.' },
        { title: 'Juntar o equipamento', desc: 'Equipamento completo, fato ou lanterna, por mergulhador ou por reserva, para saber o que preparar.' },
        { title: 'Enviar os documentos', desc: 'A certificação ou a declaração médica que a atividade pede, com a indicação de durante quanto tempo são guardadas.' },
        { title: 'Sinal ou pedido', desc: 'Um sinal por cartão garante o lugar, ou a reserva fica como pedido até o centro a verificar e confirmar.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'O que o Likwiid Direct trata pelo seu centro',
      items: [
        { title: 'Lugares por saída e por curso', desc: 'Cada saída de barco e cada curso tem o seu número de lugares. O mergulhador vê quantos restam e entra na lista de espera quando esgota.' },
        { title: 'Cursos de vários dias, numa só reserva', desc: 'Um curso de três dias é uma única reserva com as três datas, e não três mergulhos marcados à parte.' },
        { title: 'Documentos antes do mergulho', desc: 'Cada atividade indica os documentos de que precisa. O mergulhador envia-os ao reservar, e o centro marca cada um como recebido ou verificado no painel.' },
        { title: 'Aluguer de equipamento como opção', desc: 'O equipamento alugado entra na reserva com o seu preço, por mergulhador ou por reserva, e conta para o total e para o sinal.' },
        { title: 'Cancelamentos por mau tempo em crédito', desc: 'Cancele uma saída no painel e os mergulhadores inscritos recebem crédito para outra data, em vez de reembolsos a tratar um a um.' },
        { title: 'O ponto de encontro na confirmação', desc: 'A confirmação diz onde se encontram, com um link para o mapa, e pode incluir um vídeo de briefing.' },
      ],
    },
    {
      kind: 'panel',
      id: 'limits',
      title: 'O que não decide por si',
      paragraphs: [
        'O Likwiid Direct não verifica uma certificação nos registos de uma agência de formação nem avalia se alguém está apto para mergulhar. Recolhe a certificação e a declaração e põe-nas à sua frente antes do dia.',
        'Para os mergulhos que pedem mais atenção, use o modo de pedido: o mergulhador envia a reserva com os documentos, o centro verifica-os e só depois a confirma. A decisão fica consigo e com os seus instrutores.',
      ],
    },
  ],
  faqTitle: 'Perguntas que os centros de mergulho nos fazem',
  faq: [
    {
      q: 'Verifica o nível de certificação automaticamente?',
      a: 'Não. Pede a certificação de que cada atividade precisa e mostra-a com a reserva. Quem decide é o centro e os seus instrutores, e o modo de pedido permite confirmar só depois de ver.',
    },
    {
      q: 'É possível reservar um curso de vários dias?',
      a: 'Sim. Um curso é configurado em sessões que podem durar vários dias, e cada sessão é uma única reserva com todas as datas e o seu próprio número de lugares.',
    },
    {
      q: 'O que acontece quando o mau tempo cancela uma saída?',
      a: 'Cancela a saída no painel do proprietário e os mergulhadores inscritos recebem crédito para usar noutra data, sem reembolsos para tratar à mão.',
    },
    {
      q: 'Durante quanto tempo são guardados os documentos?',
      a: 'É o centro que define quantos dias depois da atividade são apagados, e o passo de envio informa o mergulhador antes de enviar o que quer que seja.',
    },
    {
      q: 'Cobram comissão sobre as reservas?',
      a: 'Não. Não há comissão sobre nenhum mergulho nem curso. Fale-nos do seu centro e explicamos o que implica pô-lo a funcionar.',
    },
  ],
  closingTitle: 'Conte-nos como o seu centro reserva hoje',
  closingBody:
    'Envie-nos as suas saídas, os seus cursos e o que pede aos mergulhadores antes de virem. Respondemos em 24 horas com a forma como o Likwiid Direct encaixaria, e com o que não faria.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tudo o que o Likwiid Direct faz',
  breadcrumbLabel: 'Navegação estrutural',
}

export default pt
