import { ProjectItem, TestimonialItem, FAQItem } from '../types';

export const BRAND = {
  name: 'Nexus Digital',
  tagline: '🍔 Seu hambúrguer é irresistível. Seu site também precisa ser',
  headline: 'Sites que dão fome e geram pedidos para hamburguerias.',
  subheadline:
    'Criamos sites de alto padrão e alta conversão desenvolvidos exclusivamente para hamburguerias. Apresente seus burgers com qualidade gourmet, aumente seu faturamento e receba pedidos direto no WhatsApp sem pagar comissões de delivery.',
  location: 'São Paulo, Brasil',
  phoneDisplay: '(11) 91796-0101',
  phoneRaw: '5511917960101',
  whatsappUrl:
    'https://wa.me/5511917960101?text=Ol%C3%A1%2C+Nexus+Digital%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+o+site+da+minha+hamburgueria.',
  instagramHandle: 'marketingdigital202615',
  instagramUrl: 'https://instagram.com/marketingdigital202615',
  stats: [
    { value: '+100', label: 'Vendas e Projetos Entregues' },
    { value: 'Mesmo Dia', label: 'Prazo Recorde de Entrega' },
    { value: '0%', label: 'Taxa sobre seus Pedidos' },
    { value: '6 Meses', label: 'Especialização Contínua' },
  ],
  aboutSummary:
    'Há 6 meses, nasceu a Nexus Digital com um propósito: transformar a presença online das hamburguerias através de sites modernos, profissionais e estratégicos. Em pouco tempo, já conquistamos a marca de +100 vendas, ajudando negócios a apresentarem seus produtos de forma mais atrativa, fortalecerem sua marca e oferecerem uma experiência digital à altura do seu sabor.',
};

export const SERVICES = [
  {
    number: '01',
    title: 'Cardápio Digital Irresistível',
    subtitle: 'Fotografia & Visual que Abre o Apetite',
    description:
      'Apresentamos seus burgers, combos e acompanhamentos com destaque visual primoroso, descrições gastronômicas irresistíveis e personalização de ponto da carne e adicionais que elevam o ticket médio.',
    highlights: [
      'Visual gastronômico de alta definição',
      'Seleção de adicionais e adicionamento de bebidas/combos',
      'Carregamento instantâneo em 4G no celular',
    ],
  },
  {
    number: '02',
    title: 'Pedidos Direto no WhatsApp (0% Taxas)',
    subtitle: 'Mais Lucro Líquido no Seu Bolso',
    description:
      'O cliente monta o pedido completo, adiciona o endereço de entrega, forma de pagamento e envia a mensagem 100% pronta e calculada direto para o WhatsApp da sua hamburgueria.',
    highlights: [
      'Sem pagar comissões de 12% a 27% para plataformas de marketplace',
      'Mensagem formatada com itens, adicionais e valor total',
      'Base de dados e contato do cliente fica com a sua marca',
    ],
  },
  {
    number: '03',
    title: 'Design Mobile-First Ultra Rápido',
    subtitle: 'Criado para Quem Tem Fome na Palma da Mão',
    description:
      'Mais de 92% dos clientes pedem pelo smartphone. Criamos uma navegação intuitiva, botões de toque generosos e arquitetura pensada para o cliente pedir em menos de 60 segundos.',
    highlights: [
      'Interface limpa e adaptada para todas as telas',
      'Navegação fluida sem travamentos',
      'Compatível com iOS, Android e navegadores modernos',
    ],
  },
  {
    number: '04',
    title: 'SEO Local & Presença em São Paulo e Brasil',
    subtitle: 'Seja Encontrado por Quem Procura Hambúrguer Perto',
    description:
      'Otimização técnica para o Google Maps e busca orgânica. Estruturamos os dados do seu negócio para atrair clientes do seu bairro e região que estão buscando o melhor hambúrguer agora.',
    highlights: [
      'Integração com Google Meu Negócio e localização',
      'Palavras-chave focadas no seu bairro e especialidade',
      'Link único e elegante para colocar na bio do Instagram',
    ],
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Entrega no Mesmo Dia',
    tagline: 'Velocidade Imbatível',
    description:
      'Entendemos a urgência do ramo alimentício. Você não pode perder vendas esperando semanas por uma agência tradicional. Com nossa metodologia ágil, seu site entra no ar no mesmo dia.',
    icon: 'Zap',
  },
  {
    title: 'Especialização Exclusiva em Hamburguerias',
    tagline: 'Foco no Seu Modelo de Negócio',
    description:
      'Não criamos sites genéricos de dentista ou advocacia. Estudamos a fundo a jornada do cliente de hambúrguer: o apelo visual da carne suculenta, queijo derretido e combos que aumentam o ticket.',
    icon: 'Flame',
  },
  {
    title: 'Mudanças Ilimitadas à Sua Vontade',
    tagline: 'Flexibilidade Total Sem Burocracia',
    description:
      'Lançou um burger especial do mês? Quer ajustar os preços, trocar fotos ou alterar o horário de atendimento? Nossos sites são totalmente sujeitos a mudanças de acordo com a sua vontade.',
    icon: 'Sliders',
  },
  {
    title: 'Padrão Visual de Alto Nível',
    tagline: 'Autoridade e Valor de Marca',
    description:
      'Seu hambúrguer é artesanal e saboroso; seu site precisa transparecer a mesma qualidade. Transmitimos profissionalismo corporativo que justifica preços nobres e gera confiança imediata.',
    icon: 'Award',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'smash-burger-house',
    name: 'Smash House Burger',
    neighborhood: 'Pinheiros',
    city: 'São Paulo, SP',
    tagline: 'Especialistas em Ultra Smash Crocante e Molho Secreto',
    highlightMetric: '+184%',
    metricLabel: 'Aumento em pedidos diretos no WhatsApp em 60 dias',
    description:
      'Reformulação completa da presença digital: de uma página básica para um cardápio interativo que gerou economia de mais de R$ 3.800 no primeiro mês em taxas de aplicativos.',
    category: 'smash',
    colorTheme: '#0A2540',
    features: ['Cardápio Interativo com Fotos', 'Checkout Direto no WhatsApp', 'Link Único para Instagram'],
    mockMenu: [
      {
        name: 'Duplo Smash Cheddar Bacon',
        description: '2x blend 90g prensado com crostinha, cheddar inglês derretido e fatias de bacon artesanal.',
        price: 'R$ 38,90',
        tag: 'Mais Pedido',
      },
      {
        name: 'Smash Onion Crispy',
        description: 'Blend smash prensado com cebola fininha na chapa, queijo prato e maionese defumada.',
        price: 'R$ 34,90',
      },
      {
        name: 'Batata Rústica com Alecrim & Páprica',
        description: 'Batatas rústicas cortadas à mão, sequinhas e crocantes com molho de queijo.',
        price: 'R$ 18,00',
      },
    ],
  },
  {
    id: 'artisan-truffle-lab',
    name: 'Artisan Burger Lab',
    neighborhood: 'Itaim Bibi',
    city: 'São Paulo, SP',
    tagline: 'Burgers Gourmet com Carnes Nobres e Ingredientes Selecionados',
    highlightMetric: '+42%',
    metricLabel: 'Crescimento no ticket médio por pedido via cardápio próprio',
    description:
      'Hamburgueria de alta gastronomia com foco em experiência sensorial. O site foi projetado com estética sóbria e elegante, valorizando cortes angus e queijos importados.',
    category: 'artesanal',
    colorTheme: '#103459',
    features: ['Seleção de Ponto da Carne', 'Adicionais Premium Integrados', 'Página de Reservas e Eventos'],
    mockMenu: [
      {
        name: 'The Truffle Royale',
        description: 'Blend Angus 180g, queijo brie maçaricado, cogumelos salteados e aioli trufado em pão brioche.',
        price: 'R$ 49,90',
        tag: 'Assinatura',
      },
      {
        name: 'Black Smoked Burger',
        description: 'Pão brioche com infusão de carvão ativado, queijo gouda defumado e geleia de bacon.',
        price: 'R$ 46,00',
      },
      {
        name: 'Mini Churros com Doce de Leite Viçosa',
        description: '6 unidades com canela e açúcar acompanhados de doce de leite artesanal quente.',
        price: 'R$ 22,00',
      },
    ],
  },
  {
    id: 'smoke-and-fire',
    name: 'Smoke & Fire BBQ Burgers',
    neighborhood: 'Moema',
    city: 'São Paulo, SP',
    tagline: 'Defumação Low & Slow com Blends de Costela e Brisket',
    highlightMetric: 'R$ 4.500/mês',
    metricLabel: 'Economia média direta em comissões de marketplace',
    description:
      'Operação focada em delivery rápido que precisava de um site simples para fidelizar os clientes do bairro através do WhatsApp próprio com clube de fidelidade.',
    category: 'dark-kitchen',
    colorTheme: '#06182B',
    features: ['Entrega no mesmo dia da contratação', 'Integração com Bairro e Raio de Entrega', 'Fidelidade WhatsApp'],
    mockMenu: [
      {
        name: 'Brisket Burger Defumado',
        description: 'Hambúrguer 160g coberto com brisket desfiado defumado por 12 horas e barbecue artesanal.',
        price: 'R$ 44,90',
        tag: 'Especial BBQ',
      },
      {
        name: 'Costela Melt Cheese',
        description: 'Blend 100% costela bovina, creme de queijo minas padrão e cebola caramelizada na cerveja preta.',
        price: 'R$ 39,90',
      },
      {
        name: 'Onion Rings Empanadas na Cerveja',
        description: 'Anéis de cebola gigantes extra crocantes servidos com molho ranch da casa.',
        price: 'R$ 19,90',
      },
    ],
  },
  {
    id: 'brutal-burger-co',
    name: 'Brutal Burger Co.',
    neighborhood: 'Santana',
    city: 'São Paulo, SP',
    tagline: 'Porções Generosas e Combos Imbatíveis para a Família',
    highlightMetric: '+3.200',
    metricLabel: 'Acessos mensais orgânicos no Google na Zona Norte de SP',
    description:
      'Criado com foco em SEO local e combos para grupos. Os clientes encontram a hamburgueria nas buscas do Google e finalizam o pedido no WhatsApp em poucos cliques.',
    category: 'delivery',
    colorTheme: '#0A2540',
    features: ['Otimização SEO Local no Google', 'Combos Família com Seleção Rápida', 'QR Code para Mesas do Salão'],
    mockMenu: [
      {
        name: 'Combo Brutal Duplo + Batata + Refri',
        description: 'Burger duplo, batata frita média crocante e refrigerante gelado à sua escolha.',
        price: 'R$ 48,90',
        tag: 'Melhor Custo-Benefício',
      },
      {
        name: 'Brutal Chicken Crispy',
        description: 'Sobrecoxa marinada e empanada super crocante, salada coleslaw e maionese verde artesanal.',
        price: 'R$ 32,90',
      },
      {
        name: 'Milkshake de Nutella com Ninho 500ml',
        description: 'Sorvete de baunilha artesanal batido com Nutella pura e finalizado com leite Ninho.',
        price: 'R$ 24,00',
      },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    author: 'Carlos Silveira',
    role: 'Fundador & Mestre Hamburgueiro',
    restaurant: 'Smash House Burger',
    location: 'Pinheiros, São Paulo',
    quote:
      'O site ficou pronto no mesmo dia em que enviamos o cardápio e as fotos. Na primeira semana, 35% dos clientes que antes pediam pelos aplicativos começaram a pedir direto no nosso WhatsApp. O investimento no site se pagou em menos de 5 dias só com a economia das taxas.',
    outcome: 'Economia de R$ 3.800 no 1º mês',
    metric: '+184% pedidos diretos',
    avatarInitials: 'CS',
  },
  {
    id: '2',
    author: 'Renata Farias',
    role: 'Sócia-proprietária',
    restaurant: 'Artisan Burger Lab',
    location: 'Itaim Bibi, São Paulo',
    quote:
      'A gente estava cansada de ver 23% do nosso faturamento indo embora em comissão de marketplace. A Nexus Digital entendeu a essência premium da nossa hamburgueria. O site é rápido, sofisticado e os clientes sempre elogiam a facilidade para montar os lanches.',
    outcome: 'Elevação da percepção de valor',
    metric: '+42% no ticket médio',
    avatarInitials: 'RF',
  },
  {
    id: '3',
    author: 'Matheus Prado',
    role: 'Chef Executivo & Proprietário',
    restaurant: 'Smoke & Fire Burgers',
    location: 'Moema, São Paulo',
    quote:
      'O diferencial deles aceitarem mudanças e atualizações sempre que criamos um burger sazonal não tem preço. Outras agências cobravam fortuna por cada vírgula alterada. Com a Nexus, mandamos mensagem no WhatsApp e eles ajustam na hora.',
    outcome: 'Agilidade sem custos extras',
    metric: '100% de flexibilidade',
    avatarInitials: 'MP',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a entrega no mesmo dia?',
    answer:
      'Como somos ultra especializados no nicho de hamburguerias, temos uma metodologia validada e estrutura pronta. Assim que você nos envia seu logotipo, cardápio, fotos e horários de funcionamento, nossa equipe monta e publica o seu site no ar em questão de horas.',
  },
  {
    question: 'Como o site próprio me ajuda a parar de pagar taxas abusivas de delivery?',
    answer:
      'Aplicativos de entrega chegam a cobrar de 12% a 27% por cada pedido que sai da sua cozinha. Com o site próprio da Nexus Digital, o cliente faz o pedido no seu endereço digital e envia diretamente para o seu WhatsApp comercial. Toda a receita daquele pedido fica com você, com 0% de comissões para terceiros.',
  },
  {
    question: 'E se eu quiser mudar preços, fotos ou itens do cardápio depois?',
    answer:
      'Esse é um dos nossos maiores diferenciais: nossos sites são sujeitos a mudanças de acordo com a sua vontade. Sempre que você tiver novos produtos, reajustes ou promoções sazonais, basta nos avisar pelo WhatsApp que aplicamos as atualizações sem dor de cabeça.',
  },
  {
    question: 'O site funciona bem no celular dos meus clientes?',
    answer:
      'Sim, com excelência. Mais de 90% dos pedidos de comida ocorrem via smartphone. Nossos sites são desenvolvidos com tecnologia mobile-first: carregam em menos de 1 segundo, têm botões fáceis para os dedos e navegação fluida em qualquer aparelho.',
  },
  {
    question: 'Como o cliente me paga pelos pedidos?',
    answer:
      'Você tem total controle. O cliente finaliza o pedido escolhendo se quer pagar via PIX, Cartão na Entrega ou Dinheiro com troco. Os dados já chegam organizados no WhatsApp com a chave PIX da sua hamburgueria ou instruções.',
  },
  {
    question: 'Atendem hamburguerias apenas de São Paulo ou de outros estados também?',
    answer:
      'Nossa sede é em São Paulo, mas atendemos hamburguerias, dark kitchens e operações de delivery de todo o Brasil. Toda a comunicação e envio de materiais é feita de forma prática e ágil via WhatsApp.',
  },
];
