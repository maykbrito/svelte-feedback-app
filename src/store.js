import { writable } from 'svelte/store';

/* Example
const count = writable(0);
console.log($count); // logs 0

count.set(1);
console.log($count); // logs 1

$count = 2;
console.log($count); // logs 2
*/

export const quotes = writable([{
    "id": 0,
    "quote": "Sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    "author": "Winston Churchill"
},
{
    "id": 1,
    "quote": "Um homem pode ser tão grande quanto ele queira ser. Se você acredita em si mesmo e tem coragem, determinação, dedicação, iniciativa competitiva e se você está disposto a sacrificar as pequenas coisas da vida e pagar o preço pelas coisas que valem a pena, isso pode ser feito.",
    "author": "Vince Lombardi"
},
{
    "id": 2,
    "quote": "Não deixe que o medo de perder seja maior que a excitação de vencer.",
    "author": "Robert Kiyosaki"
},
{
    "id": 3,
    "quote": "Na minha experiência, há só uma motivação, e isso é o desejo. Nenhuma razão ou princípio contêm ele ou se levantam contra ele.",
    "author": "Jane Smiley"
},
{
    "id": 4,
    "quote": "Dificuldades reais podem ser superadas; apenas as imaginárias são insuperáveis.",
    "author": "Theodore N. Vail"
},
{
    "id": 5,
    "quote": "A fortuna fica ao lado daquele que ousa.",
    "author": "Virgil"
},
{
    "id": 6,
    "quote": "aqueles que são loucos o suficiente para pensar que podem mudar o mundo são os que o fazem",
    "author": "Anonymous"
},
{
    "id": 7,
    "quote": "Pessoas raramente obtém sucesso a menos que se divirtam com o que fazem.",
    "author": "Dale Carnegie"
},
{
    "id": 8,
    "quote": "Não tenha medo de desistir do bom para ir ao grande",
    "author": "John D. Rockefeller"
},
{
    "id": 9,
    "quote": "Você tem que acordar cada manhã com determinação se você quer ir para a cama com satisfação.",
    "author": "George Lorimer"
},
{
    "id": 10,
    "quote": "Há dois tipos de pessoas que dirão que você não pode fazer diferença nesse mundo: aquelas que tem medo de tentar e aquelas que temem que você consiga.",
    "author": "Ray Goforth"
},
{
    "id": 11,
    "quote": "Você deve esperar grandes coisas de você mesmo antes de poder faze-las",
    "author": "Michael Jordan"
},
{
    "id": 12,
    "quote": "Ninguém pode fazer você se sentir inferior sem o seu consentimento.",
    "author": "Eleanor Roosevelt"
},
{
    "id": 13,
    "quote": "Pessoas bem sucedidas fazer o que pessoas não mal-sucedidas não estão dispostas a fazer. Não desejam que seja mais fácil, mas que sejam melhores.",
    "author": "Jim Rohn"
},
{
    "id": 14,
    "quote": "Conhecimento é estar ciente do que você pode fazer. Sabedoria é saber quando não fazer.",
    "author": "Anonymous "
},
{
    "id": 15,
    "quote": "Se você não esta disposto a arriscar o habitual, você terá que se contentar com o normal",
    "author": "Jim Rohn"
},
{
    "id": 16,
    "quote": "Pegue uma ideia. Faça dessa única ideia a sua vida - pense nela, sonhe com ela, viva essa ideia. Deixe o cérebro, os músculos, os nervos, todas as partes do seu corpo, estarem cheios dessa ideia, e apenas deixe todas as outras ideias em paz. Este é o caminho para o sucesso.",
    "author": "Swami Vivekananda"
},
{
    "id": 17,
    "quote": "A razão número um para as pessoas que falham na vida é porque ouvem seus amigos, família e vizinhos.",
    "author": "Napoleon Hill"
},
{
    "id": 18,
    "quote": "Nada no mundo é mais comum que pessoas mal-sucedidas com talento.",
    "author": "Anonymous"
},
{
    "id": 19,
    "quote": "A função da liderança é produzir mais líderes, não seguidores.",
    "author": "Ralph Nader"
},
{
    "id": 20,
    "quote": "Para realizar grandes coisas, devemos não apenas agir, mas também sonhar, não apenas planejar, mas também acreditar",
    "author": " Anatole France"
},
{
    "id": 21,
    "quote": "Boas coisas vem para as pessoas que esperam, mas coisas ainda melhores vêm para aquelas que vão e buscam.",
    "author": "Anonymous"
},
{
    "id": 22,
    "quote": "Bem-aventurados aqueles que podem dar sem lembrar e levar sem esquecer.",
    "author": "Anonymous"
},
{
    "id": 23,
    "quote": "Não levante sua voz, melhore seu argumento.",
    "author": "Anonymous"
},
{
    "id": 24,
    "quote": "O sucesso é ... conhecer o seu propósito na vida, crescer para alcançar o seu potencial máximo e semear as sementes que beneficiam os outros.",
    "author": " John C. Maxwell"
},
{
    "id": 25,
    "quote": "O sucesso é gostar de você mesmo, gostar do que você faz e gostar de como você faz isso.",
    "author": "Maya Angelou"
},
{
    "id": 26,
    "quote": "O que nos parece como julgamentos amargos são muitas vezes bênçãos disfarçadas",
    "author": " Oscar Wilde"
},
{
    "id": 27,
    "quote": "Oportunidades não acontecem, você as cria.",
    "author": "Chris Grosser"
},
{
    "id": 28,
    "quote": "O significado da vida é encontrar o seu dom. O propósito da vida é entregá-lo.",
    "author": "Anonymous"
},
{
    "id": 29,
    "quote": "A vida não é sobre encontrar a si mesmo. A vida é sobre criar você mesmo.",
    "author": "Lolly Daskal"
},
{
    "id": 30,
    "quote": "Eu não falhei. Apenas encontrei 10.000 maneiras que não funcionam.",
    "author": "Thomas A. Edison"
},
{
    "id": 31,
    "quote": "As coisas funcionam melhor para aqueles que fazem o melhor de como as coisas funcionam.",
    "author": "John Wooden"
},
{
    "id": 32,
    "quote": "Grandes mentes discutem ideias; mentes comuns discutem eventos; mentes pequenas discutem pessoas.",
    "author": "Eleanor Roosevelt"
},
{
    "id": 33,
    "quote": "Se você quer alcançar a excelência, pode chegar lá hoje. A partir deste segundo, pare de fazer um trabalho menos que excelente",
    "author": "Thomas J. Watson"
},
{
    "id": 34,
    "quote": "Empresários de sucesso são doadores e não tomadores de energia positiva.",
    "author": "Anonymous"
},
{
    "id": 35,
    "quote": "Se você não pode explicar isso simplesmente, você não entende bem o suficiente. ",
    "author": "Albert Einstein"
},
{
    "id": 36,
    "quote": "Para viver uma vida criativa, devemos perder o medo de estar errado.",
    "author": "Anonymous"
},
{
    "id": 37,
    "quote": "É melhor falhar na originalidade do que ter sucesso na imitação.",
    "author": "Herman Melville"
},
{
    "id": 38,
    "quote": "Nosso maior medo não deve ser o fracasso, mas o sucesso nas coisas da vida que realmente não importam.",
    "author": "Francis Chan"
},
{
    "id": 39,
    "quote": "Você mede o tamanho da conquista pelos obstáculos que você teve que superar para alcançar seus objetivos.",
    "author": "Booker T. Washington"
},
{
    "id": 40,
    "quote": "Nenhuma obra-prima foi criada por um artista preguiçoso.",
    "author": " Anonymous"
},
{
    "id": 41,
    "quote": "Um verdadeiro empreendedor é alguém que não tem rede de segurança por baixo deles.",
    "author": "Henry Kravis"
},
{
    "id": 42,
    "quote": "Coragem é resistência ao medo, domínio do medo - não ausência de medo",
    "author": "Mark Twain"
},
{
    "id": 43,
    "quote": "Todos os nossos sonhos podem se tornar realidade se tivermos coragem de persegui-los.",
    "author": "Walt Disney"
},
{
    "id": 44,
    "quote": "Quando eu me atrevo a ser poderoso - para usar minha força no serviço da minha visão, então torna-se cada vez menos importante se eu tenho medo.",
    "author": "Audre Lorde"
},
{
    "id": 45,
    "quote": "Pensar deve se tornar seu ativo de capital, não importa os altos e baixos que você encontra em sua vida.",
    "author": "Dr. APJ Kalam "
},
{
    "id": 46,
    "quote": "Seja miserável ou se motive. O que quer que tenha que ser feito, é sempre sua escolha.",
    "author": "Wayne Dyer"
},
{
    "id": 47,
    "quote": "Quando você pára de perseguir as coisas erradas, você dá as coisas certas a chance de pegar você.",
    "author": "Lolly Daskal"
},
{
    "id": 48,
    "quote": "Eu não quero chegar ao fim da minha vida e descobrir que eu vivi apenas o comprimento dela. Eu quero ter vivido a largura também",
    "author": "Diane Ackerman"
},
{
    "id": 49,
    "quote": "Para ser bem sucedido, você deve aceitar todos os desafios que surgem em seu caminho. Você não pode simplesmente aceitar os que você gosta.",
    "author": "Mike Gafka"
},
{
    "id": 50,
    "quote": "Se você não valoriza seu tempo, nem os outros irão. Pare de doar seu tempo e talentos - comece a cobrar por isso.",
    "author": "Kim Garst"
},
{
    "id": 51,
    "quote": "Sempre que você se encontra do lado da maioria, é hora de parar e refletir.",
    "author": "Mark Twain"
},
{
    "id": 52,
    "quote": "A felicidade é uma borboleta que, quando perseguida, está sempre além de seu alcance, mas que, se você se sentar em silêncio, pode pousar em você.",
    "author": "Nathaniel Hawthorne"
},
{
    "id": 53,
    "quote": "Eu acho que quando você tem um interesse real na vida e uma vida curiosa, esse sono não é a coisa mais importante.",
    "author": "Martha Stewart "
},
{
    "id": 54,
    "quote": "Só adie para amanhã o que você esta disposto a morrer tendo deixado desfeito.",
    "author": "Pablo Picasso"
},
{
    "id": 55,
    "quote": "Tente não se tornar uma pessoa de sucesso, mas tente se tornar uma pessoa de valor. ",
    "author": "Albert Einstein"
},
{
    "id": 56,
    "quote": "O primeiro passo em direção ao sucesso é dado quando você se recusa a ser prisioneiro do ambiente no qual você inicialmente se encontra.",
    "author": "Mark Caine"
},
{
    "id": 57,
    "quote": "O único lugar que o sucesso vem antes do trabalho é no dicionário.",
    "author": "Vidal Sassoon"
},
{
    "id": 58,
    "quote": "Se você não conceber o seu próprio plano de vida, é provável que caia no plano de outra pessoa. E adivinha o que eles planejaram para você? Não muito.",
    "author": " Jim Rohn"
},
{
    "id": 59,
    "quote": "Você não pode conectar os pontos olhando para frente; você só pode conectá-los olhando para trás. Então você tem que confiar que os pontos de alguma forma se conectarão no seu futuro. Você tem que confiar em algo - seu intestino, destino, vida, karma, qualquer coisa. Essa abordagem nunca me decepcionou, e isso fez toda a diferença na minha vida.",
    "author": "Steve Jobs"
},
{
    "id": 60,
    "quote": "O caminho para o sucesso e o caminho para o fracasso são quase exatamente os mesmos.",
    "author": "Colin R. Davis"
},
{
    "id": 61,
    "quote": "Faça todos os dias uma coisa que o assuste.",
    "author": "Anonymous"
},
{
    "id": 62,
    "quote": "As pessoas costumam dizer que a motivação não dura. Bem, nem banho - é por isso que recomendamos diariamente.",
    "author": "Zig Ziglar"
},
{
    "id": 63,
    "quote": "Confie porque você está disposto a aceitar o risco, não porque é seguro ou certo.",
    "author": "Anonymous"
},
{
    "id": 64,
    "quote": "Não é o que você olha que importa, é o que você vê.",
    "author": "Anonymous"
},
{
    "id": 65,
    "quote": "Se você realmente quer algo, não espere - se ensine a ser impaciente.",
    "author": "Gurbaksh Chahal"
},
{
    "id": 66,
    "quote": "Se você fizer o que você sempre fez, você terá o que sempre conseguiu.",
    "author": "Anonymous"
},
{
    "id": 67,
    "quote": "O sucesso é a soma de pequenos esforços, repetidos dia após dia.",
    "author": "Robert Collier"
},
{
    "id": 68,
    "quote": "Pessoas que conseguem ter sucesso. Quanto mais eles têm sucesso, mais eles querem ter sucesso, e mais eles encontram um caminho para ter sucesso. Da mesma forma, quando alguém está falhando, a tendência é entrar em uma espiral descendente que pode até se tornar uma profecia auto-realizável.",
    "author": "Tony Robbins"
},
{
    "id": 69,
    "quote": "Pequenas mentes são domadas e subjugadas pelo infortúnio; mas grandes mentes se erguem acima dela.",
    "author": "Washington Irving"
},
{
    "id": 70,
    "quote": "Não deixe o que você não pode fazer interferir com o que você pode fazer.",
    "author": "John R. Wooden"
},
{
    "id": 71,
    "quote": "Sucesso não consiste em nunca cometer erros, mas em nunca fazer o mesmo pela segunda vez.",
    "author": "George Bernard Shaw"
},
{
    "id": 72,
    "quote": "Todo o segredo de uma vida bem-sucedida é descobrir qual é o destino de cada um e, então, fazer.",
    "author": "Henry Ford"
},
{
    "id": 73,
    "quote": "Ao olharmos para o próximo século, os líderes serão aqueles que capacitarão os outros.",
    "author": "Bill Gates"
},
{
    "id": 74,
    "quote": "Motivação é o que te faz começar. Hábito é o que te mantém seguindo em frente.",
    "author": "Jim Ryun"
},
{
    "id": 75,
    "quote": "Qual é o ponto de estar vivo se você não tentar fazer algo notável?.",
    "author": "Anonymous"
},
{
    "id": 76,
    "quote": "Você pode ter que lutar uma batalha mais de uma vez para vencê-la",
    "author": "Margaret Thatcher"
},
{
    "id": 77,
    "quote": "Um homem de sucesso é aquele que pode estabelecer uma base sólida com os tijolos que outros jogaram nele.",
    "author": "David Brinkley"
},
{
    "id": 78,
    "quote": "Se você está atravessando o inferno, continue.",
    "author": "Winston Churchill"
},
{
    "id": 79,
    "quote": "Se você quer alcançar a grandeza, pare de pedir permissão.",
    "author": "Anonymous"
},
{
    "id": 80,
    "quote": "Apenas quando a lagarta pensava que o mundo estava acabando, ele se transformou em uma borboleta.",
    "author": "Proverb"
},
{
    "id": 81,
    "quote": "A razão pela qual a maioria das pessoas nunca alcança seus objetivos é que eles não os definem, nem os consideram seriamente como críveis ou viáveis. Os vencedores podem dizer para onde estão indo, o que planejam fazer no caminho e quem compartilhará a aventura com eles.",
    "author": "Denis Watiley"
},
{
    "id": 82,
    "quote": "A distância entre a insanidade e a genialidade é medida apenas pelo sucesso.",
    "author": "Bruce Feirstein"
},
{
    "id": 83,
    "quote": "O ponto de partida de toda conquista é o desejo.",
    "author": "Napolean Hill"
},
{
    "id": 84,
    "quote": "A maioria das coisas importantes no mundo foi realizada por pessoas que continuaram tentando quando parecia não haver ajuda.",
    "author": "Dale Carnegie"
},
{
    "id": 85,
    "quote": "A falha é o tempero que dá ao sucesso o seu .",
    "author": "Truman Capote"
},
{
    "id": 86,
    "quote": "O seu problema não é o problema. A sua reação é o problema.",
    "author": "Anonymous"
},
{
    "id": 87,
    "quote": "Todo progresso ocorre fora da zona de conforto.",
    "author": "Michael John Bobak"
},
{
    "id": 88,
    "quote": "Se você quiser fazer uma mudança permanente, pare de se concentrar no tamanho dos seus problemas e comece a focar no seu tamanho!",
    "author": "T. Harv Eker"
},
{
    "id": 89,
    "quote": "Desenvolver o sucesso a partir de suas falhas. O desânimo e fracasso são dois dos degraus mais seguro para o sucesso.",
    "author": "Dale Carnegie"
},
{
    "id": 90,
    "quote": "O guerreiro de sucesso é um homem médio, mas com um foco apurado como um raio laser.",
    "author": "Bruce Lee"
},
{
    "id": 91,
    "quote": "A melhor razão para começar uma organização é fazer sentido; para criar um produto ou serviço para tornar o mundo um lugar melhor.",
    "author": "Guy Kawasaki"
},
{
    "id": 92,
    "quote": "Inovação distingue um líder de um seguidor.",
    "author": "Steve Jobs"
},
{
    "id": 93,
    "quote": "Eu descobri que quanto mais eu trabalho, mais sorte eu pareço ter",
    "author": "Thomas Jefferson"
},
{
    "id": 94,
    "quote": "Sempre que você vê uma pessoa de sucesso, você só vê as glórias públicas, nunca os sacrifícios privados para alcançá-los..",
    "author": "Vaibhav Shah"
},
{
    "id": 95,
    "quote": "Nós nos tornamos o que pensamos a maior parte do tempo, e esse é o segredo mais estranho.",
    "author": "Earl Nightingale"
},
{
    "id": 96,
    "quote": "A persistência é o caminho do êxito.",
    "author": "Charles Chaplin"
},
{
    "id": 97,
    "quote": "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.",
    "author": "José de Alencar"
},
{
    "id": 98,
    "quote": "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.",
    "author": "tumblr"
},
{
    "id": 99,
    "quote": "Só existe um êxito: a capacidade de levar a vida que se quer.",
    "author": "Cristopher Morley"
},
{
    "id": 100,
    "quote": "A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.",
    "author": "F. Scott Fitzgerald"
},
{
    "id": 101,
    "quote": "A coragem não é ausência do medo; é a persistência apesar do medo.",
    "author": "Desconhecido"
},
{
    "id": 102,
    "quote": "O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.",
    "author": "Max Weber"
},
{
    "id": 103,
    "quote": "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
    "author": "Friedrich Nietzsche"
},
{
    "id": 104,
    "quote": "Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada.",
    "author": "Oscar Wilde"
},
{
    "id": 105,
    "quote": "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
    "author": "Augusto Branco"
},
{
    "id": 106,
    "quote": "Creia em si, mas não duvide sempre dos outros.",
    "author": "Machado de Assis"
},
{
    "id": 107,
    "quote": "Dois homens não podem passar meia hora juntos sem que um conquiste uma evidente superioridade em relação ao outro.",
    "author": "Samuel Johnson"
},
{
    "id": 108,
    "quote": "As únicas grandes companhias que conseguirão ter êxito são aquelas que consideram os seus produtos obsoletos antes que os outros o façam.",
    "author": "Bill Gates"
},
{
    "id": 109,
    "quote": "Talento é dom, é graça. E sucesso nada tem haver com sorte, mas com determinação e trabalho.",
    "author": "Augusto Branco"
},
{
    "id": 110,
    "quote": "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!",
    "author": "Desconhecido"
},
{
    "id": 111,
    "quote": "Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem.",
    "author": "Peter Drucker"
},
{
    "id": 112,
    "quote": "Nenhum mentiroso tem uma memória suficientemente boa para ser um mentiroso de êxito.",
    "author": "Abraham Lincoln"
},
{
    "id": 113,
    "quote": "Estar decidido, acima de qualquer coisa, é o segredo do êxito.",
    "author": "Henry Ford"
},
{
    "id": 114,
    "quote": "Para obter êxito no mundo temos de parecer loucos mas sermos espertos.",
    "author": "Barão de Montesquieu"
},
{
    "id": 115,
    "quote": "A disciplina é a mãe do êxito.",
    "author": "Ésquilo"
},
{
    "id": 116,
    "quote": "O segredo do êxito na vida de um homem está em preparar-se para aproveitar a ocasião, quando ela se apresenta.",
    "author": "Benjamin Disraeli"
},
{
    "id": 117,
    "quote": "A disciplina é a alma de um exército; torna grandes os pequenos contingentes, proporciona êxito aos fracos, e estima todos.",
    "author": "George Washington"
},
{
    "id": 118,
    "quote": "O êxito começa no exato momento em que o homem decide o que quer e começa a trabalhar para consegui-lo.",
    "author": "Roberto Flávio C. Silva"
},
{
    "id": 119,
    "quote": "A raiz do mal reside no fato de se insistir demasiadamente que no êxito da competição está a principal fonte de felicidade.",
    "author": "Bertrand Russell"
},
{
    "id": 120,
    "quote": "O êxito parece doce a quem não o alcança.",
    "author": "Emily Dickinson"
},
{
    "id": 121,
    "quote": "A persistência realiza o impossível.",
    "author": "Provérbio Chinês"
},
{
    "id": 122,
    "quote": "Persistência é a irmã gêmea da excelência. Uma é a mãe da qualidade, a outra é a mãe do tempo.",
    "author": "Marabel Morgan"
},
{
    "id": 123,
    "quote": "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.",
    "author": "Martin Luther King"
},
{
    "id": 124,
    "quote": "Eu escolho um homem que não duvide de minha coragem, que não me acredite inocente, que tenha a coragem de me tratar como uma mulher.",
    "author": "Anaïs Nin"
},
{
    "id": 125,
    "quote": "As pessoas não carecem de força, carecem de determinação.",
    "author": "Victor Hugo"
},
{
    "id": 126,
    "quote": "A verdadeira esperança é uma qualidade, uma determinação heróica da alma. E a mais elevada forma de esperança é o desespero superado.",
    "author": "Georges Bernanos"
},
{
    "id": 127,
    "quote": "Da amizade entre mulheres Dizem-se amigas... Beijam-se... Mas qual! Haverá quem nisso creia? Salvo se uma das duas, por sinal, For muito velha, ou muito feia...",
    "author": "Mario Quintana"
},
{
    "id": 128,
    "quote": "Conserve os olhos fixos num ideal sublime, e lute sempre pelo que deseja, pois só os fracos desistem e só quem luta é digno de vida.",
    "author": "Desconhecido"
},
{
    "id": 129,
    "quote": "Tudo deveria se tornar o mais simples possível, mas não simplificado.",
    "author": "Albert Einstein"
},
{
    "id": 130,
    "quote": "Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.",
    "author": "São Francisco de Assis"
},
{
    "id": 131,
    "quote": "O erro acontece de vários modos, enquanto ser correto é possível apenas de um modo.",
    "author": "Aristóteles"
},
{
    "id": 132,
    "quote": "Não é possível ser bom pela metade.",
    "author": "Léon Tolstoi"
},
{
    "id": 133,
    "quote": "O milagre não prova o impossível; serve, apenas, como confirmação do que é possível.",
    "author": "Textos Judaicos"
},
{
    "id": 134,
    "quote": "O êxito da vida não se mede pelo caminho que você conquistou, mas sim pelas dificuldades que superou no caminho.",
    "author": "Abraham Lincoln"
},
{
    "id": 135,
    "quote": "A impaciência é um grande obstáculo para o bom êxito.",
    "author": "Napoleão Bonaparte"
},
{
    "id": 136,
    "quote": "Não procure ser um homem com êxito, e sim um homem com valores.",
    "author": "Albert Einstein"
},
{
    "id": 137,
    "quote": "O êxito é fácil de obter. O difícil é merecê-lo.",
    "author": "Albert Camus"
},
{
    "id": 138,
    "quote": "O êxito na vida não significa apenas ser bem sucedido, mas também sobrepor-se aos fracassos.",
    "author": "Maxwell Maltz"
},
{
    "id": 139,
    "quote": "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "author": "Roberto Shinyashiki"
},
{
    "id": 140,
    "quote": "A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.",
    "author": "Oliver Goldsmith"
},
{
    "id": 141,
    "quote": "Transportai um punhado de terra todos os dias e fareis uma montanha.",
    "author": "Confúcio"
},
{
    "id": 142,
    "quote": "Seja como os pássaros que, ao pousarem um instante sobre ramos muito leves, sentem-nos ceder, mas cantam! Eles sabem que possuem asas.",
    "author": "Victor Hugo"
},
{
    "id": 143,
    "quote": "A força não provém da capacidade física. Provém de uma vontade indomável.",
    "author": "Mahatma Gandhi"
},
{
    "id": 144,
    "quote": "O número dos que nos invejam confirma as nossas capacidades.",
    "author": "Oscar Wilde"
},
{
    "id": 145,
    "quote": "Nas pessoas de capacidade limitada, a modéstia não passa de mera honestidade, mas em quem possui grande talento, é hipocrisia.",
    "author": "Arthur Schopenhauer"
},
{
    "id": 146,
    "quote": "Quem sabe concentrar-se numa coisa e insistir nela como único objetivo, obtém a capacidade de fazer qualquer coisa.",
    "author": "Mahatma Gandhi"
},
{
    "id": 147,
    "quote": "É capaz quem pensa que é capaz.",
    "author": "Buda"
},
{
    "id": 148,
    "quote": "O ser capaz mora perto da necessidade.",
    "author": "Pitágoras"
},
{
    "id": 149,
    "quote": "LEGÍTIMA APROPRIAÇÃO Copio e assino essa frase encontrada no velho Schopenhauer: \"A soma de barulho que uma pessoa pode suportar está na razão inversa de sua capacidade mental\".",
    "author": "Mario Quintana"
},
{
    "id": 150,
    "quote": "A capacidade pouco vale sem oportunidade.",
    "author": "Napoleão Bonaparte"
},
{
    "id": 151,
    "quote": "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
    "author": "Cynthia Kersey"
},
{
    "id": 152,
    "quote": "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
    "author": "Daniel Godri"
},
{
    "id": 153,
    "quote": "Quer você acredite que consiga fazer uma coisa ou não, você está certo.",
    "author": "Henry Ford"
},
{
    "id": 154,
    "quote": "Acredite em si. Engate a mente na sua boa estrela e reconheça que a sua luz interior o conduzirá sempre para cima e para frente.",
    "author": "Desconhecido"
},
{
    "id": 155,
    "quote": "Ninguém é assim tão velho que não acredite que poderá viver por mais um ano.",
    "author": "Cícero"
},
{
    "id": 156,
    "quote": "Jamais desista das pessoas que ama. Jamais desista de ser feliz. Lute sempre pelos seus sonhos. Seja profundamente apaixonado pela vida. Pois a vida é um espetáculo imperdível.",
    "author": "Augusto Cury"
},
{
    "id": 157,
    "quote": "Deus, ao criar o homem, superestimou a Sua capacidade.",
    "author": "Oscar Wilde"
},
{
    "id": 158,
    "quote": "Inteligência é a capacidade de se adaptar à mudança.",
    "author": "Stephen Hawking"
},
{
    "id": 159,
    "quote": "Maravilhas nunca faltaram ao mundo; o que sempre falta é a capacidade de senti-las e admirá-las.",
    "author": "Mario Quintana"
},
{
    "id": 160,
    "quote": "Capacidade de saber cada vez mais sobre cada vez menos, até saber tudo sobre nada.",
    "author": "Millôr Fernandes"
},
{
    "id": 161,
    "quote": "A liderança é a capacidade de conseguir que as pessoas façam o que não querem fazer e gostem de o fazer.",
    "author": "Harry Truman"
},
{
    "id": 162,
    "quote": "O amor é a arte de criar algo com a ajuda da capacidade do outro.",
    "author": "Bertolt Brecht"
},
{
    "id": 163,
    "quote": "Tato é a capacidade de se descrever os outros tal como eles se julgam.",
    "author": "Abraham Lincoln"
},
{
    "id": 164,
    "quote": "A sabedoria dos homens é proporcional não à sua experiência mas à sua capacidade de adquirir experiência.",
    "author": "George Bernard Shaw"
},
{
    "id": 165,
    "quote": "Os grandes homens estão muitas vezes solitários. Mas essa solidão é parte da sua capacidade de criar. O caráter, assim como a fotografia, desenvolve-se no escuro.",
    "author": "Youssuf Karsh"
},
{
    "id": 166,
    "quote": "Nenhuma paixão pode, como o medo, tão efectivamente roubar o espírito da capacidade de agir e pensar.",
    "author": "Edmund Burke"
},
{
    "id": 167,
    "quote": "Pensamento duplo indica a capacidade de ter na mente, ao mesmo tempo, duas opiniões contraditórias e aceitar ambas.",
    "author": "George Orwell"
},
{
    "id": 168,
    "quote": "A marca de uma inteligência de primeira ordem é a capacidade de ter duas ideias opostas presentes no espírito ao mesmo tempo e nem por isso deixar de funcionar.",
    "author": "F. Scott Fitzgerald"
},
{
    "id": 169,
    "quote": "[Sobre o Xadrez] Jogo chinês que aumenta a capacidade de jogar xadrez.",
    "author": "Millôr Fernandes"
},
{
    "id": 170,
    "quote": "Usa a capacidade que tens. A floresta ficaria mais silenciosa se só o melhor pássaro cantasse.",
    "author": "Henry Van Dyke"
},
{
    "id": 171,
    "quote": "Querer vencer significa já ter percorrido metade do caminho.",
    "author": "Paderewsky"
},
{
    "id": 172,
    "quote": "Não somos sempre o que queremos, mas o que as circunstâncias nos permitem ser.",
    "author": "Marquês de Maricá"
},
{
    "id": 173,
    "quote": "Felicidade não é ter o que você quer, é querer o que você tem. (Livro: Quem mexeu no meu queijo?)",
    "author": "Spencer Johnson"
},
{
    "id": 174,
    "quote": "A única forma de chegar ao impossível é acreditar que é possível.",
    "author": "Alice no País das Maravilhas"
},
{
    "id": 175,
    "quote": "Não se pode ensinar nada a um homem; só é possivel ajudá-lo a encontrar a coisa dentro de si.",
    "author": "Galileu Galilei"
},
{
    "id": 176,
    "quote": "Não é possível convencer um crente de coisa alguma, pois suas crenças não se baseiam em evidências; baseiam-se numa profunda necessidade de acreditar.",
    "author": "Carl Sagan"
},
{
    "id": 177,
    "quote": "Só é possível ensinar uma criança a amar, amando-a.",
    "author": "Johann Goethe"
},
{
    "id": 178,
    "quote": "Não se pode acreditar que é possível ser feliz procurando a infelicidade alheia.",
    "author": "Sêneca"
},
{
    "id": 179,
    "quote": "Por sabedoria entendo a arte de tornar a vida mais agradável e feliz possível.",
    "author": "Arthur Schopenhauer"
},
{
    "id": 180,
    "quote": "É possível amar e não ser feliz, é possível ser feliz e não amar, mas amar e simultaneamente ser feliz, isso seria milagre.",
    "author": "Honoré de Balzac"
},
{
    "id": 181,
    "quote": "O mais belo estado da vida é a dependência livre e voluntária: e como seria ela possível sem amor?",
    "author": "Johann Goethe"
},
{
    "id": 182,
    "quote": "A um homem bom não é possível que ocorra nenhum mal, nem em vida nem em morte.",
    "author": "Sócrates"
},
{
    "id": 183,
    "quote": "Como se fosse possível matar o tempo sem ferir a eternidade.",
    "author": "Henry David Thoreau"
},
{
    "id": 184,
    "quote": "O homem que empenha todo o seu trabalho e imaginação em oferecer por um dólar o mais possível, em vez de menos, está condenado ao sucesso.",
    "author": "Henry Ford"
},
{
    "id": 185,
    "quote": "Os outros são realmente terríveis. A única sociedade possível é a de nós mesmos.",
    "author": "Oscar Wilde"
},
{
    "id": 186,
    "quote": "Não é possível chorar e pensar ao mesmo tempo, pois cada pensamento absorve uma lágrima.",
    "author": "Jules Renard"
},
{
    "id": 187,
    "quote": "É inútil dizer \"estamos a fazer o possível\". Precisamos de fazer o que é necessário.",
    "author": "Winston Churchill"
},
{
    "id": 188,
    "quote": "Não é a linguagem de programação que define o programador, mas sim sua lógica.",
    "author": "David Ribeiro Guilherme"
},
{
    "id": 189,
    "quote": "Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.",
    "author": "James Cameron"
},
{
    "id": 190,
    "quote": "Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo!",
    "author": "Winston Churchill"
},
{
    "id": 191,
    "quote": "[Em arte] o impossível verosímil é preferível ao possível não acreditável.",
    "author": "Aristóteles"
},
{
    "id": 192,
    "quote": "Como é possível que, sendo as criancinhas tão inteligentes, a maioria das pessoas sejam tão tolas? A educação deve ter algo a ver com isso!",
    "author": "Alexandre Dumas (filho)"
},
{
    "id": 193,
    "quote": "Para que resulte o possível deve ser tentado o impossível.",
    "author": "Hermann Hesse"
},
{
    "id": 194,
    "quote": "É possível mudar nossas vidas e a atitude daqueles que nos cercam simplesmente mudando a nós mesmos.",
    "author": "Rudolf Dreikurs"
},
{
    "id": 195,
    "quote": "Basta ajuizar bem para bem fazer, e julgar o melhor que nos seja possível para fazermos também o nosso melhor.",
    "author": "René Descartes"
},
{
    "id": 196,
    "quote": "Se fosse possível somente deslizar para os braços da mulher e no entanto não cair nas suas mãos.",
    "author": "Henry de Montherlant"
},
{
    "id": 197,
    "quote": "Sem passar da porta de casa, é possível saber o que acontece no mundo... Quanto mais longe se busca o saber, menos se aprende.",
    "author": "Lao-Tsé"
},
{
    "id": 198,
    "quote": "Como é possível esperar que a humanidade ouça conselhos, se nem sequer ouve as advertências.",
    "author": "Jonathan Swift"
},
{
    "id": 199,
    "quote": "Divide as dificuldades que tenhas de examinar em tantas partes quantas for possível, para uma melhor solução.",
    "author": "René Descartes"
},
{
    "id": 200,
    "quote": "É-nos possível viver sozinhos, desde que seja à espera de alguém.",
    "author": "Gilbert Cesbron"
},
{
    "id": 201,
    "quote": "Pedir demasiado é a maneira mais segura de receber ainda menos do que é possível.",
    "author": "Bertrand Russell"
},
{
    "id": 202,
    "quote": "Com leis ruins e funcionários bons ainda é possível governar. Mas com funcionários ruins as melhores leis não servem para nada.",
    "author": "Otto von Bismarck"
},
{
    "id": 203,
    "quote": "Contra os ataques é possível nos defendermos: contra o elogio não se pode fazer nada.",
    "author": "Sigmund Freud"
},
{
    "id": 204,
    "quote": "Visto que o fundamento da propriedade é a utilidade, onde não houver utilidade possível não pode existir propriedade.",
    "author": "Jean Jacques Rousseau"
},
{
    "id": 205,
    "quote": "O que mais desespera, não é o impossível. Mas o possível não alcançado.",
    "author": "Robert Mallet"
},
{
    "id": 206,
    "quote": "Terrível é que não é possível viver com as mulheres, nem sem elas.",
    "author": "George [Lord] Byron"
},
{
    "id": 207,
    "quote": "A imaginação é a rainha do real e o possível é uma das províncias do real.",
    "author": "Charles Baudelaire"
},
{
    "id": 208,
    "quote": "Penso que é indispensável fazer um grande mal momentâneo para que venha a ser possível um grande bem duradouro.",
    "author": "Denis Diderot"
},
{
    "id": 209,
    "quote": "Somente nas infelicidades é possível conhecer os verdadeiros amigos.",
    "author": "Públio Siro"
},
{
    "id": 210,
    "quote": "É possível ser jovem sem ter dinheiro, mas não se pode ser velho sem ele.",
    "author": "Tennessee Williams"
},
{
    "id": 211,
    "quote": "Ama-se a vitória difícil, porque a derrota lhe preenchia quase todo o espaço possível. E foi com o que restava que se venceu em todo ele.",
    "author": "Vergílio Ferreira"
},
{
    "id": 212,
    "quote": "Sem o amor-próprio nenhuma vida é possível, nem sequer a mais leve decisão, só desespero e rigidez.",
    "author": "Hugo Hofmannsthal"
},
{
    "id": 213,
    "quote": "É preciso escrever o mais possível como se falasse e não falar demais como se escrevesse.",
    "author": "Charles Saint-Beuve"
},
{
    "id": 214,
    "quote": "Não sendo possível fazer-se com que aquilo que é justo seja forte, faz-se com que o que é forte seja justo.",
    "author": "Blaise Pascal"
},
{
    "id": 215,
    "quote": "É possível guardar na mente um milhão de fatos e ainda assim ser totalmente sem educação.",
    "author": "Alec Bourne"
},
{
    "id": 216,
    "quote": "Verifiquei que, aos homens, se devia agradecer o menos possível, porque o reconhecimento que lhes testemunhamos os convence, facilmente, de que estão a fazer de mais!",
    "author": "Benjamin Constant"
},
{
    "id": 217,
    "quote": "Você tem que acordar cada manhã com determinação se você pretende ir para a cama com satisfação.",
    "author": "George Lorimer"
},
{
    "id": 218,
    "quote": "Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade.",
    "author": "Confúcio"
},
{
    "id": 219,
    "quote": "Procure ser um homem de valor, em vez de ser um homem de sucesso.",
    "author": "Albert Einstein"
},
{
    "id": 220,
    "quote": "Conhecer o homem - esta é a base de todo o sucesso.",
    "author": "Charles Chaplin"
},
{
    "id": 221,
    "quote": "O sucesso é um professor perverso. Ele seduz as pessoas inteligentes e as faz pensar que jamais vão cair.",
    "author": "Bill Gates"
},
{
    "id": 222,
    "quote": "Vamos agradecer aos idiotas. Não fosse por eles não faríamos tanto sucesso.",
    "author": "Mark Twain"
},
{
    "id": 223,
    "quote": "O termômetro do sucesso é apenas a inveja dos descontentes.",
    "author": "Salvador Dalí"
},
{
    "id": 224,
    "quote": "Em todas as coisas o sucesso depende de uma preparação prévia, e sem tal preparação o falhanço é certo.",
    "author": "Confúcio"
},
{
    "id": 225,
    "quote": "O sucesso é uma consequência e não um objetivo.",
    "author": "Gustave Flaubert"
},
{
    "id": 226,
    "quote": "Há poucos homens capazes de prestar homenagem ao sucesso de um amigo, sem qualquer inveja.",
    "author": "Ésquilo"
},
{
    "id": 227,
    "quote": "Para ter sucesso neste mundo não basta ser estúpido, é preciso também ter boas maneiras.",
    "author": "Voltaire"
},
{
    "id": 228,
    "quote": "A moderação é uma coisa fatal (...). Nada tem mais sucesso do que o excesso.",
    "author": "Oscar Wilde"
},
{
    "id": 229,
    "quote": "O segredo do sucesso é a constância do propósito.",
    "author": "Benjamin Disraeli"
},
{
    "id": 230,
    "quote": "Uma paixão forte por qualquer objeto assegurará o sucesso, porque o desejo pelo objetivo mostrará os meios.",
    "author": "William Hazlitt"
},
{
    "id": 231,
    "quote": "O sucesso torna as pessoas modestas, amigáveis e tolerantes; é o fracasso que as faz ásperas e ruins.",
    "author": "W. Somerset Maugham"
},
{
    "id": 232,
    "quote": "Saber quando se deve esperar é o grande segredo do sucesso.",
    "author": "Xavier Maistre"
},
{
    "id": 233,
    "quote": "Levei vinte anos para fazer sucesso da noite para o dia.",
    "author": "Eddie Cantor"
},
{
    "id": 234,
    "quote": "Eu preferiria ser um fracasso em algo que amo do que um sucesso em algo que odeio.",
    "author": "George Burns"
},
{
    "id": 235,
    "quote": "Tudo o que é preciso na vida é ignorância e confiança; depois, o sucesso está garantido.",
    "author": "Mark Twain"
},
{
    "id": 236,
    "quote": "A confiança em si mesmo é o primeiro segredo do sucesso.",
    "author": "Ralph Waldo Emerson"
},
{
    "id": 237,
    "quote": "O sucesso tem sido sempre um grande mentiroso.",
    "author": "Friedrich Nietzsche"
},
{
    "id": 238,
    "quote": "Que sua colheita seja abundante e eterna e o sorriso da felicidade e do sucesso enfeite os seus lábios.",
    "author": "Lauro Trevisan"
},
{
    "id": 239,
    "quote": "O segredo do sucesso é ofender o maior número de pessoas.",
    "author": "George Bernard Shaw"
},
{
    "id": 240,
    "quote": "Os homens que se tornam arrogantes com o sucesso têm o mau hábito de odiarem aqueles a quem ofenderam.",
    "author": "Sêneca"
},
{
    "id": 241,
    "quote": "A chave do sucesso da Sony e para tudo nos negócios é...não seguir os outros.",
    "author": "Masura Ibuki"
},
{
    "id": 242,
    "quote": "O sucesso é uma viagem, não um ponto de destino.",
    "author": "Bem Sweetland"
},
{
    "id": 243,
    "quote": "Quando sobes a montanha do sucesso não encontras um amigo.",
    "author": "Mark Twain"
},
{
    "id": 244,
    "quote": "O sucesso e o amor preferem o corajoso.",
    "author": "Ovídio"
},
{
    "id": 245,
    "quote": "Eu sei o preço do sucesso: dedicação, trabalho duro, e uma incessante devoção às coisas que você quer ver acontecer.",
    "author": "Frank Lloyd Wright"
},
{
    "id": 246,
    "quote": "O fracasso e o sucesso são impostores. Ninguém fracassa tanto como imagina. Ninguém tem tanto sucesso como imagina.",
    "author": "Rudyard Kipling"
},
{
    "id": 247,
    "quote": "Recompense o sucesso e o fracasso igualmente - puna a inatividade.",
    "author": "David Kelley"
},
{
    "id": 248,
    "quote": "O maior orador do mundo é o sucesso.",
    "author": "Napoleão Bonaparte"
},
{
    "id": 249,
    "quote": "Perseguir, sem cessar, uma meta: Este é o segredo do sucesso.",
    "author": "Anna Pavlova"
},
{
    "id": 250,
    "quote": "Você nunca alcança o sucesso verdadeiro a menos que você goste do que está fazendo.",
    "author": "Dale Carnegie"
},
{
    "id": 251,
    "quote": "O sucesso é construído de 99 por cento de fracasso.",
    "author": "Soichiro Honda"
},
{
    "id": 252,
    "quote": "Sucesso é saber a diferença entre perseguir as pessoas e fazer com que as pessoas fiquem do seu lado.",
    "author": "Desconhecido"
},
{
    "id": 253,
    "quote": "Um dos segredos do sucesso é se recusar a deixar que reveses temporários nos derrotem.",
    "author": "Mary Kay"
},
{
    "id": 254,
    "quote": "O sucesso encoraja-os: eles podem porque pensam que podem.",
    "author": "Virgílio"
},
{
    "id": 255,
    "quote": "O único critério infalível de sabedoria para as mentes banais - sucesso.",
    "author": "Edmund Burke"
},
{
    "id": 256,
    "quote": "O sucesso é a soma de pequenos esforços - repetidos dia sim, e no outro dia também.",
    "author": "Robert Collier"
},
{
    "id": 257,
    "quote": "A disciplina é a parte mais importante do sucesso.",
    "author": "Truman Capote"
},
{
    "id": 258,
    "quote": "Parecer o que se é, é um crime; parecer o que não se é, um sucesso.",
    "author": "Madame Émile Girardin"
},
{
    "id": 259,
    "quote": "Os malvados que têm sucesso são insuportáveis.",
    "author": "Ésquilo"
},
{
    "id": 260,
    "quote": "A disciplina é a mãe do sucesso.",
    "author": "Ésquilo"
},
{
    "id": 261,
    "quote": "A sorte existe. O que mais pode explicar o sucesso de nossos concorrentes?",
    "author": "Gen Matejka"
},
{
    "id": 262,
    "quote": "Uma auto-imagem forte e positiva é a melhor preparação possível para o  sucesso.",
    "author": "Joyce Brothers"
},
{
    "id": 263,
    "quote": "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
    "author": "Mark Twain"
},
{
    "id": 264,
    "quote": "O amor é uma flor delicada, mas é preciso ter coragem de ir colhê-la à beira de um precipício.",
    "author": "Stendhal"
},
{
    "id": 265,
    "quote": "Ser profundamente amado por alguém nos dá força; amar alguém profundamente nos dá coragem.",
    "author": "Lao-Tse"
},
{
    "id": 266,
    "quote": "A coragem é a primeira das qualidades humanas porque garante todas as outras.",
    "author": "Aristóteles"
},
{
    "id": 267,
    "quote": "Saber o que é correto e não o fazer é falta de coragem.",
    "author": "Confúcio"
},
{
    "id": 268,
    "quote": "Quem perde seus bens perde muito; quem perde um amigo perde mais; mas quem perde a coragem perde tudo.",
    "author": "Miguel de Cervantes"
},
{
    "id": 269,
    "quote": "Pois a coragem cresce com a ocasião.",
    "author": "William Shakespeare"
},
{
    "id": 270,
    "quote": "Os homens semeiam na terra o que colherão na vida espiritual: os frutos da sua coragem ou da sua fraqueza.",
    "author": "Allan Kardec"
},
{
    "id": 271,
    "quote": "Todos os homens têm medo. Quem não tem medo não é normal; isso nada tem a ver com a coragem.",
    "author": "Jean-Paul Sartre"
},
{
    "id": 272,
    "quote": "A vida se contrai e se expande proporcionalmente à coragem do indivíduo.",
    "author": "Anaïs Nin"
},
{
    "id": 273,
    "quote": "A verdadeira coragem está em fazermos sem testemunha o que seríamos capazes de fazer diante de todo mundo.",
    "author": "François La Rochefoucauld"
},
{
    "id": 274,
    "quote": "Você ganha força, coragem e confiança através de cada experiência em que você realmente para e encara o medo de frente.",
    "author": "Eleanor Roosevelt"
},
{
    "id": 275,
    "quote": "O amor é uma bela flor à beira de um precipício. É necessário ter muita coragem para a ir colher.",
    "author": "Stendhal"
},
{
    "id": 276,
    "quote": "É preciso impor a si mesmo algumas metas para se ter a coragem de alcançá-las.",
    "author": "Benito Mussolini"
},
{
    "id": 277,
    "quote": "A maior prova de coragem é suportar as derrotas sem perder o ânimo.",
    "author": "Robert Ingersoll"
},
{
    "id": 278,
    "quote": "A coragem conduz às estrelas, e o medo à morte.",
    "author": "Sêneca"
},
{
    "id": 279,
    "quote": "A bravura provém do sangue, a coragem provém do pensamento.",
    "author": "Napoleão Bonaparte"
},
{
    "id": 280,
    "quote": "Aqueles que têm coragem para amar deveriam ter coragem para sofrer.",
    "author": "Anthony Trollope"
},
{
    "id": 281,
    "quote": "Frequentemente é necessário mais coragem para ousar fazer certo do que temer fazer errado.",
    "author": "Abraham Lincoln"
},
{
    "id": 282,
    "quote": "Eu não tenho nenhuma coragem, mas procedo como se a tivesse, o que talvez venha dar ao mesmo.",
    "author": "Gustave Flaubert"
},
{
    "id": 283,
    "quote": "Devemos construir diques de coragem para conter a correnteza do medo.",
    "author": "Martin Luther King"
},
{
    "id": 284,
    "quote": "Coragem é manter a classe sob pressão.",
    "author": "John Kennedy"
},
{
    "id": 285,
    "quote": "Nada inspira mais coragem ao medroso do que o medo alheio.",
    "author": "Umberto Eco"
},
{
    "id": 286,
    "quote": "A coragem significa um forte desejo de viver, sob a forma de disposição para morrer.",
    "author": "G. K. Chesterton"
},
{
    "id": 287,
    "quote": "Coragem... pequeno soldado do imenso exército. Os teus livros são as tuas armas, a tua classe é a tua esquadra, o campo de batalha é a terra inteira, e a vitória é a civilização humana.",
    "author": "Edmondo Amicis"
},
{
    "id": 288,
    "quote": "Muitos talentos se perdem por falta de um pouco de coragem.",
    "author": "Sydney Smith"
}
])