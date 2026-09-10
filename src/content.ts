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
  whatsapp: { rotulo: '(19) 99645-7547', numero: '5519996457547' },
  horario: { abertura: 11, fechamento: 23, dias: 'Todos os dias' },
  totais: { cortes: 25, buffet: 35 },
}

export const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.endereco.completo,
)}`

export const whatsappUrl = `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(
  `Olá! Gostaria de fazer uma reserva na ${site.nome}.`,
)}`

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3Ij7SUpkJ2ap2OebWSuLS9qG5ri'
const foto = (arquivo: string) => `${CDN}/${arquivo}.png`

export const cortes = [
  {
    nome: 'Picanha',
    origem: 'Bovino',
    descricao:
      'O corte-assinatura da casa. Capa de gordura selada no calor alto e fatiada na mesa, uma volta por vez.',
    foto: foto('hf_20260909_233656_39d04ff1-1e5f-46c1-b634-719df0c5e29a'),
  },
  {
    nome: 'Fraldinha',
    origem: 'Bovino',
    descricao:
      'Fibras longas e sabor acentuado. Assada em peça inteira para manter o suco antes de ir ao espeto.',
    foto: foto('hf_20260909_233656_14deaeb2-b3fc-4136-8ca6-1df8d0834aff'),
  },
  {
    nome: 'Costela',
    origem: 'Bovino',
    descricao:
      'Brasa lenta por horas, na distância certa do carvão, até a carne soltar do osso sem esforço.',
    foto: foto('hf_20260909_233656_d893772a-7cf0-4473-8b70-8ac9adfdff3e'),
  },
  {
    nome: 'Maminha',
    origem: 'Bovino',
    descricao:
      'A maciez da alcatra com marmoreio suave. Corte magro que pede ponto curto e sal grosso.',
    foto: foto('hf_20260909_233656_fd3d8aa1-ef01-4512-b658-67158e3f6d3f'),
  },
  {
    nome: 'Cupim',
    origem: 'Bovino',
    descricao:
      'Gordura entremeada que só se resolve no tempo. Assado longo até a fibra ceder por completo.',
    foto: foto('hf_20260909_233656_5be0d502-cde7-4cef-a4f1-068a7d5e9c43'),
  },
  {
    nome: 'Alcatra',
    origem: 'Bovino',
    descricao:
      'Uniforme do miolo à ponta, sem excesso de gordura. O corte de referência para calibrar o ponto.',
    foto: foto('hf_20260909_233656_075a747b-43be-4389-8da8-59d5239cba2a'),
  },
  {
    nome: 'Costela de cordeiro',
    origem: 'Cordeiro',
    descricao:
      'Selada rápido em calor direto. Temperada apenas com sal e alecrim, servida no osso.',
    foto: foto('hf_20260909_233656_1f5c791b-580c-42d3-ae34-67e7ca5d0672'),
  },
  {
    nome: 'Linguiça artesanal',
    origem: 'Suíno',
    descricao:
      'Moída na casa e defumada no carvão. Primeira do rodízio a chegar, e a que mede a brasa do dia.',
    foto: foto('hf_20260909_233656_011f06a6-5cae-4532-922b-1f66f8014c22'),
  },
  {
    nome: 'Coração de frango',
    origem: 'Aves',
    descricao:
      'Espeto curto, calor alto e giro constante. Clássico que não sai do rodízio desde 2003.',
    foto: foto('hf_20260909_233656_94b64192-95bb-4ed2-adb8-4f449debab98'),
  },
  {
    nome: 'Lombo com parmesão',
    origem: 'Suíno',
    descricao:
      'Selado por fora e finalizado com queijo gratinado direto na brasa, servido ainda borbulhando.',
    foto: foto('hf_20260909_233656_506004ef-c7d7-423c-989e-d16ba6032c38'),
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
    titulo: 'Culinária japonesa',
    itens: ['Sashimi', 'Niguiri', 'Uramaki', 'Hot roll', 'Gunkan'],
    foto: foto('hf_20260909_233826_ee4919bd-7f27-4c56-832c-a9806e258624'),
  },
  {
    titulo: 'Quentes e guarnições',
    itens: ['Arroz e feijão tropeiro', 'Farofa na manteiga', 'Polenta frita', 'Mandioca', 'Batata rústica'],
    foto: foto('hf_20260909_233827_e32178fa-7e3e-401f-82d1-3167710cab03'),
  },
  {
    titulo: 'Frios e antepastos',
    itens: ['Queijos curados', 'Salames', 'Azeitonas', 'Berinjela em conserva', 'Pães da casa'],
    foto: foto('hf_20260909_233827_f004131d-31a1-4e11-ba5b-3fd38382d35c'),
  },
  {
    titulo: 'Saladas e folhas',
    itens: ['Mix de folhas', 'Rúcula e agrião', 'Tomate italiano', 'Palmito', 'Grão-de-bico', 'Tabule'],
    foto: foto('hf_20260909_233827_96e81f66-0155-45b7-b701-78f01e1218ec'),
  },
]

export const estrutura = [
  {
    titulo: 'Estacionamento gratuito',
    descricao: 'Estacionamento próprio e gratuito, sem fila na calçada.',
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
    titulo: 'Empresas e grupos',
    descricao:
      'Mesas grandes para confraternização de empresa, aniversário e turma de amigos. Reserva mediante consulta.',
  },
]
