const plug = 'https://live.staticflickr.com/65535/52034884657_1aa7ed551e_o.png';

export const typesSort = {
  DEFAULT: 'Default',
  BY_NAME: 'By name',
  CHEAPER_AT_FIRST: 'Cheaper at first',
  MORE_EXPENSIVE_AT_FIRST: 'More expensive at first',
  NUMBER_OF_PIECES: 'Number of pieces',
  WEIGHT: 'Weight',
};

export const backEnd = {
  typesSort: {
    DEFAULT: 'Default',
    BY_NAME: 'By name',
    CHEAPER_AT_FIRST: 'Cheaper at first',
    MORE_EXPENSIVE_AT_FIRST: 'More expensive at first',
    NUMBER_OF_PIECES: 'Number of pieces',
    WEIGHT: 'Weight',
  },
  categories: [
    {
      id: '1',
      name: 'pizza',
      fullName: 'Pizza',
      icon: '',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52035928573_8a9b96128e_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035928553_a13fa36197_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52034838872_b5a0d9f7fd_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036128934_201550cc69_o.jpg',
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.NUMBER_OF_PIECES,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '2',
      name: 'sets',
      fullName: 'Sets',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52035928408_45bf82455b_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036128789_e61d007a91_o.jpg',
      },
      largeImage: {
        x1: plug,
        x2: plug,
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.NUMBER_OF_PIECES,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '3',
      name: 'wok',
      fullName: 'WOK',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036397415_7687cb3b7a_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52034838682_859ae3f29b_o.jpg',
      },
      largeImage: {
        x1: plug,
        x2: plug,
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '4',
      name: 'rolls',
      fullName: 'Rolls',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52035879356_2eba7a52a0_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036397585_3504137820_o.jpg',
      },
      largeImage: {
        x1: plug,
        x2: plug,
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.NUMBER_OF_PIECES,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '5',
      name: 'sushi',
      fullName: 'Sushi',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036128739_227aa5a0ba_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036397430_e2e1211164_o.jpg',
      },
      largeImage: {
        x1: plug,
        x2: plug,
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '6',
      name: 'salads',
      fullName: 'Salads',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036397560_49bfcb111a_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036128814_02cf70207b_o.jpg',
      },
      largeImage: {
        x1: plug,
        x2: plug,
      },
      soon: true,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '7',
      name: 'soups',
      fullName: 'Soups',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52034838737_baccdfe524_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035879266_d03c45d071_o.jpg',
      },
      largeImage: {
        x1: plug,
        x2: plug,
      },
      soon: true,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '8',
      name: 'cornDog',
      fullName: 'Corn dog',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036129084_949f1c0c4a_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036397790_75763f8dac_o.jpg',
      },
      largeImage: {
        x1: plug,
        x2: plug,
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '9',
      name: 'drinks',
      fullName: 'Drinks',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52035879506_ed8d0c40cc_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036129044_44c7a0c6dd_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52035928588_5172b75867_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035879456_d0ed25b7f4_o.jpg',
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.WEIGHT,
      ],
    },
    {
      id: '10',
      name: 'promotions',
      fullName: 'Promotions',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036397685_527edd2ca8_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035928533_0bd914d6d0_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52036397640_b165c1f56e_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036397610_367cbb0ca8_o.jpg',
      },
      soon: false,
      typesSort: [
        typesSort.DEFAULT,
        typesSort.BY_NAME,
        typesSort.CHEAPER_AT_FIRST,
        typesSort.MORE_EXPENSIVE_AT_FIRST,
        typesSort.WEIGHT,
      ],
    },
  ],
  products: [
    {
      id: '1',
      fullName: 'Salomon set',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1050',
      chunks: '30',
      price: '50',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52037240110_a270e6f209_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035680922_944b78259b_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52037286780_eef6aaeeaa_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035727357_dcddf78d9b_o.jpg',
      },
    },
    {
      id: '2',
      fullName: 'Philadelphia LOVE set',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1000',
      chunks: '40',
      price: '47',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036767688_a9297b5f3e_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036717481_528111f972_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52036814568_d573e26f65_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52037019699_a7e25069e0_o.jpg',
      },
    },
    {
      id: '3',
      fullName: 'Set "5 Philadelphia"',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1120',
      chunks: '40',
      price: '49',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036973579_dc345d80c9_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036717426_7740107298_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52037019634_f25d04366e_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035727302_49b38f13d2_o.jpg',
      },
    },
    {
      id: '4',
      fullName: 'Philadelphia and salmon set',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1260',
      chunks: '36',
      price: '55',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036717511_da705d680a_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036767698_db93f78852_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52036763981_4ecc925ffe_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035727402_8e97bc8d8b_o.jpg',
      },
    },
    {
      id: '5',
      fullName: 'Set "6 Philadelphia"',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1320',
      chunks: '46',
      price: '58',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52035680902_93c0215c85_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52037240055_29d45e61e9_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52036814468_232f06e1a0_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036814448_30dec364a5_o.jpg',
      },
    },
    {
      id: '6',
      fullName: 'Top set',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1020',
      chunks: '40',
      price: '47',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52037240045_a6b93be226_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035680882_37f9bc8796_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52037019599_e67080553d_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036763891_b4e6575744_o.jpg',
      },
    },
    {
      id: '7',
      fullName: 'Kamikaze set',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1200',
      chunks: '52',
      price: '56',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52036767708_c58f41f524_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035680957_352a95c46d_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52036764006_eb04ff8007_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035727422_cc3715f885_o.jpg',
      },
    },
    {
      id: '8',
      fullName: 'Set "4 Philadelphia"',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1100',
      chunks: '32',
      price: '58',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52037240095_e22ae7ea76_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036767648_da66d88ff5_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52035727347_03e9a4c1e2_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52036763931_6e5b6fefdd_o.jpg',
      },
    },
    {
      id: '9',
      fullName: 'Yakuza set',
      categoryId: '2',
      compositionId: ['3', '4'],
      weight: '1270',
      chunks: '50',
      price: '50',
      smallImage: {
        x1: 'https://live.staticflickr.com/65535/52037240015_f087cf7005_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035680832_8242610c48_o.jpg',
      },
      largeImage: {
        x1: 'https://live.staticflickr.com/65535/52036763876_5330d0375c_o.jpg',
        x2: 'https://live.staticflickr.com/65535/52035727237_bc47f34db8_o.jpg',
      },
    },
  ],
};