import { NextApiRequest, NextApiResponse } from "next";

export type ContinentData = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  paises: number;
  linguas: number;
  imgHome: string;
  imgBanner: string;
  cities: {
    name: string;
    country: string;
    img: string;
    flag: string;
  }[],
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const continents: ContinentData[] = [
      {
        id: 1,
        title: 'América do Norte',
        subtitle: 'O continente com os destinos mais desejados',
        description: 'A América do Norte reúne países com características bem distintas e com muita diversidade cultural.',
        paises: 37,
        linguas: 6,
        imgHome: '/images/north-america.png',
        imgBanner: '/images/north-america-banner.png',
        cities: [
          {
            name: 'Beverly Hills',
            country: 'Estados Unidos',
            img: '/images/beverly-hills.png',
            flag: '/images/flags/usa.png',
          },
          {
            name: 'Cozumel',
            country: 'México',
            img: '/images/cozumel.png',
            flag: '/images/flags/mexico.png',
          },
          {
            name: 'New York',
            country: 'Estados Unidos',
            img: '/images/new-york.png',
            flag: '/images/flags/usa.png',
          },
          {
            name: 'Shediac',
            country: 'Canadá',
            img: '/images/shediac.png',
            flag: '/images/flags/canada.png',
          },
          {
            name: 'Toronto',
            country: 'Canadá',
            img: '/images/toronto.png',
            flag: '/images/flags/canada.png',
          },
        ]
      },
      {
        id: 2,
        title: 'América do Sul',
        subtitle: 'O continente com maior abundância de recursos naturais',
        description: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.',
        paises: 18,
        linguas: 29,
        imgHome: '/images/south-america.png',
        imgBanner: '/images/south-america-banner.png',
        cities: [
          {
            name: 'Rio de Janeiro',
            country: 'Brasil',
            img: '/images/riodejaneiro.png',
            flag: '/images/flags/brasil.png',
          },
          {
            name: 'Santigo',
            country: 'Chile',
            img: '/images/santiago.png',
            flag: '/images/flags/chile.png',
          },
          {
            name: 'São Paulo',
            country: 'Brasil',
            img: '/images/sao-paulo.png',
            flag: '/images/flags/brasil.png',
          },
        ]
      },
      {
        id: 3,
        title: 'África',
        subtitle: 'O continente mais diversificado',
        description: 'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.',
        paises: 51,
        linguas: 17,
        imgHome: '/images/africa.png',
        imgBanner: '/images/africa-banner.png',
        cities: [
          {
            name: 'Gizé',
            country: 'Egito',
            img: '/images/gize.png',
            flag: '/images/flags/egito.png',
          },
          {
            name: 'Phalaborwa',
            country: 'Africa do Sul',
            img: '/images/phalaborwa.png',
            flag: '/images/flags/south-africa.png',
          },
        ]
      },
      {
        id: 4,
        title: 'Ásia',
        subtitle: 'O maior continente',
        description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.',
        paises: 49,
        linguas: 37,
        imgHome: '/images/europe.png',
        imgBanner: '/images/europe-banner.png',
        cities: [
          {
            name: 'Mumbai',
            country: 'Índia',
            img: '/images/mumbai.png',
            flag: '/images/flags/india.png',
          },
          {
            name: 'Pequim',
            country: 'China',
            img: '/images/pequim.png',
            flag: '/images/flags/china.png',
          },
          {
            name: 'Seul',
            country: 'Coréa do Sul',
            img: '/images/seul.png',
            flag: '/images/flags/south-korea.png',
          },
          {
            name: 'Toquio',
            country: 'Japão',
            img: '/images/tokyo.png',
            flag: '/images/flags/japan.png',
          },
        ]
      },
      {
        id: 5,
        title: 'Europa',
        subtitle: 'O continente mais antigo',
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        paises: 50,
        linguas: 60,
        imgHome: '/images/europe.png',
        imgBanner: '/images/europe-banner.png',
        cities: [
          {
            name: 'Londres',
            country: 'Reino Unido',
            img: '/images/londres.png',
            flag: '/images/flags/england.svg',
          },
          {
            name: 'París',
            country: 'França',
            img: '/images/paris.png',
            flag: '/images/flags/france.svg',
          },
          {
            name: 'Roma',
            country: 'Italia',
            img: '/images/roma.png',
            flag: '/images/flags/italy.svg',
          },
          {
            name: 'Praga',
            country: 'Republica Tcheca',
            img: '/images/praga.png',
            flag: '/images/flags/czech.svg',
          },
          {
            name: 'Amsterdã',
            country: 'Holanda',
            img: '/images/amsterda.png',
            flag: '/images/flags/holand.svg',
          },
        ]
      },
      {
        id: 6,
        title: 'Oceania',
        subtitle: 'O continente mais exotico',
        description: 'Embora grande parte das ilhas seja de origem vulcânica ou formada por atóis coralígenos, as características físicas do continente oceânico são muito variadas. Trata-se um continente sem nenhuma fronteira terrestre entre seus 14 países constituintes.',
        paises: 14,
        linguas: 20,
        imgHome: '/images/europe.png',
        imgBanner: '/images/europe-banner.png',
        cities: [
          {
            name: 'Hobart',
            country: 'Austrália',
            img: '/images/hobart.png',
            flag: '/images/flags/australia.png',
          },
          {
            name: 'Matamata',
            country: 'Nova Zelândia',
            img: '/images/matamata.png',
            flag: '/images/flags/new-zealand.png',
          },
          {
            name: 'Melbourne',
            country: 'Austrália',
            img: '/images/melbourne.png',
            flag: '/images/flags/australia.png',
          },
          {
            name: 'Sidnei',
            country: 'Austrália',
            img: '/images/sidney.png',
            flag: '/images/flags/australia.png',
          },
        ]
      },
    ];

    return res.status(200).json(continents);
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method not allowed');
  }
}