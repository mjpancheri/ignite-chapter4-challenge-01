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
        title: 'America',
        subtitle: 'O continente mais abrangente',
        description: 'Bla bla bla',
        paises: 10,
        linguas: 10,
        imgHome: '/images/europe.png',
        imgBanner: '/images/europe-banner.png',
        cities: [
          {
            name: 'Londres',
            country: 'Reino Unido',
            img: '/images/londres.png',
            flag: '/images/flags/england.svg',
          },
        ]
      },
      {
        id: 2,
        title: 'Africa',
        subtitle: 'O continente mais diversificado',
        description: 'Bla bla bla',
        paises: 10,
        linguas: 10,
        imgHome: '/images/europe.png',
        imgBanner: '/images/europe-banner.png',
        cities: [
          {
            name: 'Londres',
            country: 'Reino Unido',
            img: '/images/londres.png',
            flag: '/images/flags/england.svg',
          },
        ]
      },
      {
        id: 3,
        title: 'Asia',
        subtitle: 'O maior continente',
        description: 'Bla bla bla',
        paises: 10,
        linguas: 10,
        imgHome: '/images/europe.png',
        imgBanner: '/images/europe-banner.png',
        cities: [
          {
            name: 'Londres',
            country: 'Reino Unido',
            img: '/images/londres.png',
            flag: '/images/flags/england.svg',
          },
        ]
      },
      {
        id: 4,
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
        id: 5,
        title: 'Oceania',
        subtitle: 'O continente mais exotico',
        description: 'Bla bla bla',
        paises: 10,
        linguas: 10,
        imgHome: '/images/europe.png',
        imgBanner: '/images/europe-banner.png',
        cities: [
          {
            name: 'Londres',
            country: 'Reino Unido',
            img: '/images/londres.png',
            flag: '/images/flags/england.svg',
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