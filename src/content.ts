const FUNDACAO = 2003

export const site = {
  nome: 'Estância Grill',
  descricao:
    'Rodízio de carnes e buffet completo em Barão Geraldo, Campinas. Aberto todos os dias, das 11h às 23h.',
  fundacao: FUNDACAO,
  anos: new Date().getFullYear() - FUNDACAO,
  endereco: {
    rua: 'Av. Albino José Barbosa de Oliveira, 271',
    bairro: 'Jardim Santa Genebra II — Barão Geraldo',
    cidade: 'Campinas — SP',
    cep: '13084-008',
    completo:
      'Av. Albino José Barbosa de Oliveira, 271, Jardim Santa Genebra II, Campinas - SP, 13084-008',
  },
  telefones: [
    { rotulo: '(19) 3289-1511', link: '+551932891511' },
    { rotulo: '(19) 3289-8697', link: '+551932898697' },
  ],
  horario: { abertura: 11, fechamento: 23, dias: 'Todos os dias' },
  totais: { cortes: 25, buffet: 35 },
}

export const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.endereco.completo,
)}`

export const cortes = [
  {
    nome: 'Picanha',
    origem: 'Bovino',
    descricao:
      'O corte-assinatura da casa. Capa de gordura selada no calor alto e fatiada na mesa, uma volta por vez.',
  },
  {
    nome: 'Fraldinha',
    origem: 'Bovino',
    descricao:
      'Fibras longas e sabor acentuado. Assada em peça inteira para manter o suco antes de ir ao espeto.',
  },
  {
    nome: 'Costela',
    origem: 'Bovino',
    descricao:
      'Brasa lenta por horas, na distância certa do carvão, até a carne soltar do osso sem esforço.',
  },
  {
    nome: 'Maminha',
    origem: 'Bovino',
    descricao:
      'A maciez da alcatra com marmoreio suave. Corte magro que pede ponto curto e sal grosso.',
  },
  {
    nome: 'Cupim',
    origem: 'Bovino',
    descricao:
      'Gordura entremeada que só se resolve no tempo. Assado longo até a fibra ceder por completo.',
  },
  {
    nome: 'Alcatra',
    origem: 'Bovino',
    descricao:
      'Uniforme do miolo à ponta, sem excesso de gordura. O corte de referência para calibrar o ponto.',
  },
  {
    nome: 'Costela de cordeiro',
    origem: 'Cordeiro',
    descricao:
      'Selada rápido em calor direto. Temperada apenas com sal e alecrim, servida no osso.',
  },
  {
    nome: 'Linguiça artesanal',
    origem: 'Suíno',
    descricao:
      'Moída na casa e defumada no carvão. Primeira do rodízio a chegar, e a que mede a brasa do dia.',
  },
  {
    nome: 'Coração de frango',
    origem: 'Aves',
    descricao:
      'Espeto curto, calor alto e giro constante. Clássico que não sai do rodízio desde 2003.',
  },
  {
    nome: 'Lombo com parmesão',
    origem: 'Suíno',
    descricao:
      'Selado por fora e finalizado com queijo gratinado direto na brasa, servido ainda borbulhando.',
  },
]

export const pontos = [
  {
    nome: 'Mal passado',
    temperatura: 52,
    descricao: 'Núcleo vermelho e macio, com crosta selada por fora. Máxima suculência.',
  },
  {
    nome: 'Ao ponto para mal',
    temperatura: 57,
    descricao: 'Centro rosado e quente, com as bordas já firmes. O pedido mais comum da casa.',
  },
  {
    nome: 'Ao ponto',
    temperatura: 63,
    descricao: 'Rosa uniforme de ponta a ponta e suco claro. O equilíbrio entre sabor e textura.',
  },
  {
    nome: 'Ao ponto para bem',
    temperatura: 68,
    descricao: 'Apenas um véu rosado no centro. A fibra começa a firmar sem perder o suco.',
  },
  {
    nome: 'Bem passado',
    temperatura: 73,
    descricao: 'Cozido por inteiro, sem rosado. Exige controle de calor para não ressecar.',
  },
]

export const buffet = [
  {
    titulo: 'Saladas e folhas',
    itens: ['Mix de folhas', 'Rúcula e agrião', 'Tomate italiano', 'Palmito', 'Grão-de-bico', 'Tabule'],
  },
  {
    titulo: 'Frios e antepastos',
    itens: ['Queijos curados', 'Salames', 'Azeitonas', 'Berinjela em conserva', 'Pães da casa'],
  },
  {
    titulo: 'Quentes e guarnições',
    itens: ['Arroz e feijão tropeiro', 'Farofa na manteiga', 'Polenta frita', 'Mandioca', 'Batata rústica'],
  },
  {
    titulo: 'Culinária japonesa',
    itens: ['Sashimi', 'Niguiri', 'Uramaki', 'Hot roll', 'Gunkan'],
  },
]

export const estrutura = [
  {
    titulo: 'Valet',
    descricao: 'Estacionamento próprio com manobrista na entrada, sem fila na calçada.',
  },
  {
    titulo: 'Espaço kids',
    descricao: 'Área infantil com monitoria, à vista do salão. Almoço de família sem revezamento.',
  },
  {
    titulo: 'Salão climatizado',
    descricao: 'Ambiente amplo e climatizado o ano inteiro, com acústica pensada para conversa.',
  },
  {
    titulo: 'Grupos e eventos',
    descricao: 'Mesas grandes para confraternizações e reservas para grupos mediante consulta.',
  },
]
