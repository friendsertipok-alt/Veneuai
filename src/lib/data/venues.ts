export interface Venue {
  id: string;
  name: string;
  category: string;
  mood: string[];
  withWhom: string[];
  budget: "Free" | "$" | "$$" | "$$$";
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  address: string;
  avgCheck: string;
  mapUrl: string;
  rating: number;
  tags: string[];
}

export const venues: Venue[] = [
  {
    "id": "1",
    "name": "Фудмолл «Депо Москва»",
    "category": "Кафе",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Огромный гастрономический кластер с десятками кухонь мира. Живая, шумная, веселая.",
    "fullDescription": "Огромный гастрономический кластер с десятками кухонь мира. Живая, шумная, веселая.\n\nПочему подходит:\n• Можно выбрать любую еду (азиатская, итальянская, фастфуд)\n• Не нужно бронировать\n• Отлично для ДР",
    "image": "/venues/extracted/extracted_p1_______________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_______________________1.jpeg",
      "/venues/extracted/extracted_p1_______________________2.jpeg",
      "/venues/extracted/extracted_p1_______________________3.jpeg"
    ],
    "address": "ул. Лесная, 20с3",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "кафе",
      "чилл"
    ]
  },
  {
    "id": "2",
    "name": "White Rabbit",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Премиум-ресторан с панорамным видом на Москву.",
    "fullDescription": "Премиум-ресторан с панорамным видом на Москву.\n\nПочему подходит:\n• Для красивого ДР / свидания\n• Авторская кухня\n• Красивый интерьер",
    "image": "/venues/extracted/extracted_p1_White_Rabbit_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_White_Rabbit_1.jpeg",
      "/venues/extracted/extracted_p1_White_Rabbit_2.jpeg",
      "/venues/extracted/extracted_p1_White_Rabbit_3.jpeg"
    ],
    "address": "Смоленская площадь, 3",
    "avgCheck": "4000–7000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "3",
    "name": "Noor Bar",
    "category": "Бар",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Модный бар с диджеями, танцами и коктейлями.",
    "fullDescription": "Модный бар с диджеями, танцами и коктейлями.\n\nПочему подходит:\n• Отлично для вечеринки\n• После 22:00 работает как клуб",
    "image": "/venues/extracted/extracted_p1_Noor_Bar_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Noor_Bar_1.jpeg",
      "/venues/extracted/extracted_p1_Noor_Bar_2.jpeg",
      "/venues/extracted/extracted_p1_Noor_Bar_3.jpeg"
    ],
    "address": "Тверская, 23/1",
    "avgCheck": "2500–3000",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "бар",
      "активность"
    ]
  },
  {
    "id": "4",
    "name": "Mari Vanna",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$",
    "description": "Уют «как у бабушки дома», советский стиль.",
    "fullDescription": "Уют «как у бабушки дома», советский стиль.\n\nПочему подходит:\n• Нестандартный формат\n• Красивый интерьер\n• Фото\n• локация",
    "image": "/venues/extracted/extracted_p1_Mari_Vanna_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Mari_Vanna_1.jpeg",
      "/venues/extracted/extracted_p1_Mari_Vanna_2.jpeg",
      "/venues/extracted/extracted_p1_Mari_Vanna_3.jpeg"
    ],
    "address": "Спиридоньевский пер., 10А",
    "avgCheck": "2000–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "5",
    "name": "City Space Bar",
    "category": "Бар",
    "mood": [
      "Романтика",
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Панорамный бар на высоте — вечерний вид на город.",
    "fullDescription": "Панорамный бар на высоте — вечерний вид на город.\n\nПочему подходит:\n• Романтика / день рождения\n• Коктейли + вау\n• вид\n• Более спокойный, чем клуб",
    "image": "/venues/extracted/extracted_p1_City_Space_Bar_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_City_Space_Bar_1.jpeg",
      "/venues/extracted/extracted_p1_City_Space_Bar_2.jpeg",
      "/venues/extracted/extracted_p1_City_Space_Bar_3.jpeg"
    ],
    "address": "Космодамианская наб., 52с6",
    "avgCheck": "3000–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "бар",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "6",
    "name": "Ritmo X Giardino",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$$",
    "description": "Небольшая городская кофейня с акцентом на specialty coffee и спокойную посадку.",
    "fullDescription": "Небольшая городская кофейня с акцентом на specialty coffee и спокойную посадку.\n\nПочему подходит:\n• Хорошо для работы\n• Спокойная атмосфера\n• Уютный формат",
    "image": "/venues/extracted/extracted_p1_Ritmo_X_Giardino_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Ritmo_X_Giardino_1.jpeg",
      "/venues/extracted/extracted_p1_Ritmo_X_Giardino_2.jpeg",
      "/venues/extracted/extracted_p1_Ritmo_X_Giardino_3.jpeg",
      "/venues/extracted/extracted_p1_Ritmo_X_Giardino_4.jpeg",
      "/venues/extracted/extracted_p1_Ritmo_X_Giardino_5.jpeg",
      "/venues/extracted/extracted_p1_Ritmo_X_Giardino_6.jpeg",
      "/venues/extracted/extracted_p1_Ritmo_X_Giardino_7.jpeg"
    ],
    "address": "Малая Никитская ул., 12, стр. 12, Москва (",
    "avgCheck": "через главные ворота усадьбы, либо через книжный, магазин Пиотровский)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "7",
    "name": "Вареничная №1",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Семья"
    ],
    "budget": "$",
    "description": "Советский ретро-стиль, уютно.",
    "fullDescription": "Советский ретро-стиль, уютно.\n\nПочему подходит:\n• недорого\n• национальная кухня\n• спокойный ДР",
    "image": "/venues/extracted/extracted_p1_____________1_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_____________1_1.jpeg",
      "/venues/extracted/extracted_p1_____________1_2.jpeg",
      "/venues/extracted/extracted_p1_____________1_3.jpeg"
    ],
    "address": "улица Арбат, 29",
    "avgCheck": "800–1200 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "8",
    "name": "Skuratov Coffee roasters",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Минимализм, стильный дизайн, кофейная культура.",
    "fullDescription": "Минимализм, стильный дизайн, кофейная культура.\n\nПочему подходит:\n• популярно среди студентов\n• эстетика + хороший кофе\n• удобно работать",
    "image": "/venues/extracted/extracted_p1_Skuratov_Coffee_roasters_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Skuratov_Coffee_roasters_1.jpeg",
      "/venues/extracted/extracted_p1_Skuratov_Coffee_roasters_2.jpeg",
      "/venues/extracted/extracted_p1_Skuratov_Coffee_roasters_3.jpeg"
    ],
    "address": "много точек, Калашный пер.5",
    "avgCheck": "400–900 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "9",
    "name": "ABC Coffee Roasters",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Светлое пространство, европейский стиль.",
    "fullDescription": "Светлое пространство, европейский стиль.\n\nПочему подходит:\n• бранчи\n• фотогенично\n• спокойный формат",
    "image": "/venues/extracted/extracted_p1_ABC_Coffee_Roasters_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_ABC_Coffee_Roasters_1.jpeg",
      "/venues/extracted/extracted_p1_ABC_Coffee_Roasters_2.jpeg",
      "/venues/extracted/extracted_p1_ABC_Coffee_Roasters_3.jpeg",
      "/venues/extracted/extracted_p1_ABC_Coffee_Roasters_4.jpeg"
    ],
    "address": "Много точек, например 2-я Звенигородская ул., 12, стр. 1",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "10",
    "name": "Eggsellent",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$",
    "description": "Ярко, модно, бранч-место.",
    "fullDescription": "Ярко, модно, бранч-место.\n\nПочему подходит:\n• завтраки весь день\n• очень “инстаграмно”\n• популярно у молодежи",
    "image": "/venues/extracted/extracted_p1_Eggsellent_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Eggsellent_1.jpeg",
      "/venues/extracted/extracted_p1_Eggsellent_2.jpeg",
      "/venues/extracted/extracted_p1_Eggsellent_3.jpeg",
      "/venues/extracted/extracted_p1_Eggsellent_4.jpeg",
      "/venues/extracted/extracted_p1_Eggsellent_5.jpeg"
    ],
    "address": "Большая Садовая ул., 5, корп. 2, Москва",
    "avgCheck": "1000–1800 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "11",
    "name": "Pims",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Современный чайный бар.",
    "fullDescription": "Современный чайный бар.\n\nПочему подходит:\n• необычные напитки\n• быстро и модно\n• для молодежи",
    "image": "/venues/extracted/extracted_p1_Pims_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Pims_1.jpeg",
      "/venues/extracted/extracted_p1_Pims_2.jpeg",
      "/venues/extracted/extracted_p1_Pims_3.jpeg",
      "/venues/extracted/extracted_p1_Pims_4.jpeg"
    ],
    "address": "много точек (например Рождественский бул., 1, Москва)",
    "avgCheck": "500–900 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "12",
    "name": "Surf Coffee",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Свобода, серф-культура, неформально.",
    "fullDescription": "Свобода, серф-культура, неформально.\n\nПочему подходит:\n• популярное место\n• легко собраться компанией\n• недорого",
    "image": "/venues/extracted/extracted_p1_Surf_Coffee_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Surf_Coffee_1.jpeg",
      "/venues/extracted/extracted_p1_Surf_Coffee_2.jpeg",
      "/venues/extracted/extracted_p1_Surf_Coffee_3.jpeg",
      "/venues/extracted/extracted_p1_Surf_Coffee_4.jpeg",
      "/venues/extracted/extracted_p1_Surf_Coffee_5.jpeg",
      "/venues/extracted/extracted_p1_Surf_Coffee_6.jpeg",
      "/venues/extracted/extracted_p1_Surf_Coffee_7.jpeg"
    ],
    "address": "много точек (например: Мясницкая улица, 24/7с1, Неглинная ул., 14, стр. 1А)",
    "avgCheck": "500–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "13",
    "name": "Gentle Cafe",
    "category": "Кафе",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$$$",
    "description": "Светлый luxury-минимализм.",
    "fullDescription": "Светлый luxury-минимализм.\n\nПочему подходит:\n• очень стильное место\n• популярно в Instagram\n• подходит для фото и ДР",
    "image": "/venues/extracted/extracted_p1_Gentle_Cafe_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Gentle_Cafe_1.jpeg",
      "/venues/extracted/extracted_p1_Gentle_Cafe_2.jpeg",
      "/venues/extracted/extracted_p1_Gentle_Cafe_3.jpeg"
    ],
    "address": "Тверской бул., 3, Москва",
    "avgCheck": "2000–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "кафе",
      "эстетика"
    ]
  },
  {
    "id": "14",
    "name": "Yauza Place",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Креативное пространство + еда + музыка.",
    "fullDescription": "Креативное пространство + еда + музыка.\n\nПочему подходит:\n• и поесть, и потусить\n• часто мероприятия\n• современная публика",
    "image": "/venues/extracted/extracted_p1_Yauza_Place_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Yauza_Place_1.jpeg",
      "/venues/extracted/extracted_p1_Yauza_Place_2.jpeg",
      "/venues/extracted/extracted_p1_Yauza_Place_3.jpeg"
    ],
    "address": "Яузский бул., 12, Москва",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "15",
    "name": "Blanc",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Зелень, дворик, европейский стиль.",
    "fullDescription": "Зелень, дворик, европейский стиль.\n\nПочему подходит:\n• летняя атмосфера\n• фотогенично\n• подходит для ДР",
    "image": "/venues/extracted/extracted_p1_Blanc_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Blanc_1.jpeg",
      "/venues/extracted/extracted_p1_Blanc_2.jpeg",
      "/venues/extracted/extracted_p1_Blanc_3.jpeg"
    ],
    "address": "Хохловский переулок, 7-9с5",
    "avgCheck": "3000–6000₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "16",
    "name": "Sage",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$",
    "description": "Современный fine dining.",
    "fullDescription": "Современный fine dining.\n\nПочему подходит:\n• гастрономический опыт\n• стиль + кухня",
    "image": "/venues/extracted/extracted_p1_Sage_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Sage_1.jpeg",
      "/venues/extracted/extracted_p1_Sage_2.jpeg",
      "/venues/extracted/extracted_p1_Sage_3.jpeg",
      "/venues/extracted/extracted_p1_Sage_4.jpeg"
    ],
    "address": "1-я Тверская-Ямская ул., 21",
    "avgCheck": "4000–6000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "17",
    "name": "Ava Bistro",
    "category": "Кафе",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Европейский современный ресторан.",
    "fullDescription": "Европейский современный ресторан.\n\nПочему подходит:\n• модное место\n• подходит для ДР\n• стильный интерьер",
    "image": "/venues/extracted/extracted_p1_Ava_Bistro_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Ava_Bistro_1.jpeg",
      "/venues/extracted/extracted_p1_Ava_Bistro_2.jpeg",
      "/venues/extracted/extracted_p1_Ava_Bistro_3.jpeg",
      "/venues/extracted/extracted_p1_Ava_Bistro_4.jpeg",
      "/venues/extracted/extracted_p1_Ava_Bistro_5.jpeg",
      "/venues/extracted/extracted_p1_Ava_Bistro_6.jpeg"
    ],
    "address": "Цветной бульвар, д. 2 — Москва, ЦАО",
    "avgCheck": "3000–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "18",
    "name": "Центральный рынок на Трубной",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Гастромаркет нового формата, современный и оживлённый.",
    "fullDescription": "Гастромаркет нового формата, современный и оживлённый.\n\nПочему подходит:\n• Большой выбор кухонь\n• Удобно для компании\n• Популярное городское место",
    "image": "/venues/extracted/extracted_p1______________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1______________________________1.jpeg",
      "/venues/extracted/extracted_p1______________________________2.jpeg",
      "/venues/extracted/extracted_p1______________________________3.jpeg"
    ],
    "address": "Рождественский бульвар, 1",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "19",
    "name": "Zavarka (бар)",
    "category": "Бар",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Современный бар с активной вечерней жизнью.",
    "fullDescription": "Современный бар с активной вечерней жизнью.\n\nПочему подходит:\n• Подходит для дня рождения\n• Музыка и вечеринки\n• Популярно среди молодежи",
    "image": "/venues/extracted/extracted_p1_Zavarka_______1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Zavarka_______1.jpeg",
      "/venues/extracted/extracted_p1_Zavarka_______2.jpeg",
      "/venues/extracted/extracted_p1_Zavarka_______3.jpeg"
    ],
    "address": "Рочдельская ул., 15, стр. 30, Москва",
    "avgCheck": "3000–6000₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "бар",
      "активность"
    ]
  },
  {
    "id": "20",
    "name": "Flaner",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$",
    "description": "Минимализм, европейский стиль.",
    "fullDescription": "Минимализм, европейский стиль.\n\nПочему подходит:\n• Спокойный отдых\n• Эстетичный интерьер",
    "image": "/venues/extracted/extracted_p1_Flaner_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Flaner_1.jpeg",
      "/venues/extracted/extracted_p1_Flaner_2.jpeg",
      "/venues/extracted/extracted_p1_Flaner_3.jpeg",
      "/venues/extracted/extracted_p1_Flaner_4.jpeg",
      "/venues/extracted/extracted_p1_Flaner_5.jpeg",
      "/venues/extracted/extracted_p1_Flaner_6.jpeg"
    ],
    "address": "Кривоколенный пер., 7, Москва",
    "avgCheck": "1500–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "21",
    "name": "Mátes",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Модное молодежное место.",
    "fullDescription": "Модное молодежное место.\n\nПочему подходит:\n• Популярно у студентов\n• Подходит для бранча",
    "image": "/venues/extracted/extracted_p1_M_tes_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_M_tes_1.jpeg",
      "/venues/extracted/extracted_p1_M_tes_2.jpeg",
      "/venues/extracted/extracted_p1_M_tes_3.jpeg",
      "/venues/extracted/extracted_p1_M_tes_4.jpeg",
      "/venues/extracted/extracted_p1_M_tes_5.jpeg"
    ],
    "address": "mates: ул. М.Бронная, 16, ул. Мантулинская, 5с11, Шаболовка, 19, Ходынский бульвар, 4, ТЦ Авиапарк, этаж 2, Большая Грузинская ул., 76, стр. 2, Центральный федеральный округ, Московская область, Одинцовский городской округ, территориальное управление Новоивановское",
    "avgCheck": "1500–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "22",
    "name": "Layerz Bakery",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Современная пекарня.",
    "fullDescription": "Современная пекарня.\n\nПочему подходит:\n• Десерты и кофе\n• Хорошо для короткой встречи",
    "image": "/venues/extracted/extracted_p1_Layerz_Bakery_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Layerz_Bakery_1.jpeg",
      "/venues/extracted/extracted_p1_Layerz_Bakery_2.jpeg",
      "/venues/extracted/extracted_p1_Layerz_Bakery_3.jpeg",
      "/venues/extracted/extracted_p1_Layerz_Bakery_4.jpeg"
    ],
    "address": "Новослободская ул., 73, стр. 1",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "23",
    "name": "Сюр (Sur Bar)",
    "category": "Бар",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Современный коктейльный бар с эстетикой минимализма и приглушённым светом.",
    "fullDescription": "Современный коктейльный бар с эстетикой минимализма и приглушённым светом.\n\nПочему подходит:\n• Подходит для вечернего отдыха\n• Стильные коктейли и подача\n• Популярное место в центре",
    "image": "/venues/extracted/extracted_p1______Sur_Bar__1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1______Sur_Bar__1.jpeg",
      "/venues/extracted/extracted_p1______Sur_Bar__2.jpeg",
      "/venues/extracted/extracted_p1______Sur_Bar__3.jpeg"
    ],
    "address": "Большой Трёхсвятительский переулок, 2/1, стр. 8",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "бар",
      "эстетика"
    ]
  },
  {
    "id": "24",
    "name": "Powerhouse Moscow",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Музыка и творческое пространство.",
    "fullDescription": "Музыка и творческое пространство.\n\nПочему подходит:\n• Живые концерты\n• Неформальная обстановка",
    "image": "/venues/extracted/extracted_p1_Powerhouse_Moscow_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Powerhouse_Moscow_1.jpeg",
      "/venues/extracted/extracted_p1_Powerhouse_Moscow_2.jpeg",
      "/venues/extracted/extracted_p1_Powerhouse_Moscow_3.jpeg"
    ],
    "address": "Гончарная улица, 7/4с1",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "25",
    "name": "Simach",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Клубный бар с активной жизнью.",
    "fullDescription": "Клубный бар с активной жизнью.\n\nПочему подходит:\n• Тусовки\n• Много людей",
    "image": "/venues/extracted/extracted_p1_Simach_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Simach_1.jpeg",
      "/venues/extracted/extracted_p1_Simach_2.jpeg",
      "/venues/extracted/extracted_p1_Simach_3.jpeg",
      "/venues/extracted/extracted_p1_Simach_4.jpeg"
    ],
    "address": "Тверской бул., 13, стр. 1",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "26",
    "name": "Дом Культур",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Городское пространство с ресторанной частью, мероприятиями и современной публикой.",
    "fullDescription": "Городское пространство с ресторанной частью, мероприятиями и современной публикой.\n\nПочему подходит:\n• Живая атмосфера\n• Часто проходят события\n• Подходит для вечерних встреч",
    "image": "/venues/extracted/extracted_p1_____________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_____________1.jpeg",
      "/venues/extracted/extracted_p1_____________2.jpeg",
      "/venues/extracted/extracted_p1_____________3.jpeg",
      "/venues/extracted/extracted_p1_____________4.jpeg",
      "/venues/extracted/extracted_p1_____________5.jpeg",
      "/venues/extracted/extracted_p1_____________6.jpeg",
      "/venues/extracted/extracted_p1_____________7.jpeg"
    ],
    "address": "Большой Сухаревский пер., 25, стр. 1",
    "avgCheck": "1500–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "27",
    "name": "Хлебозавод №9",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Городское пространство, стрит-культура.",
    "fullDescription": "Городское пространство, стрит-культура.\n\nПочему подходит:\n• Прогулка и еда\n• Много локаций",
    "image": "/venues/extracted/extracted_p1_____________9_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_____________9_1.jpeg",
      "/venues/extracted/extracted_p1_____________9_2.jpeg",
      "/venues/extracted/extracted_p1_____________9_3.jpeg"
    ],
    "address": "Новодмитровская улица , 1с1",
    "avgCheck": "800–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "28",
    "name": "Флакон",
    "category": "Место",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Дизайн-завод, арт-среда.",
    "fullDescription": "Дизайн-завод, арт-среда.\n\nПочему подходит:\n• Креативные активности\n• Много заведений",
    "image": "/venues/extracted/extracted_p1________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1________1.jpeg",
      "/venues/extracted/extracted_p1________2.jpeg",
      "/venues/extracted/extracted_p1________3.jpeg"
    ],
    "address": "Большая Новодмитровская улица, 36",
    "avgCheck": "1000–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "активность",
      "эстетика"
    ]
  },
  {
    "id": "29",
    "name": "Bistro Trompette",
    "category": "Кафе",
    "mood": [
      "Романтика",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Небольшое европейское бистро с винной атмосферой и камерной посадкой.",
    "fullDescription": "Небольшое европейское бистро с винной атмосферой и камерной посадкой.\n\nПочему подходит:\n• Подходит для ужина\n• Небольшое и атмосферное место\n• Хорошо для свидания",
    "image": "/venues/extracted/extracted_p1_Bistro_Trompette_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Bistro_Trompette_1.jpeg",
      "/venues/extracted/extracted_p1_Bistro_Trompette_2.jpeg",
      "/venues/extracted/extracted_p1_Bistro_Trompette_3.jpeg",
      "/venues/extracted/extracted_p1_Bistro_Trompette_4.jpeg",
      "/venues/extracted/extracted_p1_Bistro_Trompette_5.jpeg",
      "/venues/extracted/extracted_p1_Bistro_Trompette_6.jpeg"
    ],
    "address": "Трубная ул., 26, корп. 1",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "кафе",
      "романтика",
      "эстетика"
    ]
  },
  {
    "id": "30",
    "name": "Folk",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$",
    "description": "Современная гастрономия.",
    "fullDescription": "Современная гастрономия.\n\nПочему подходит:\n• Необычная кухня\n• Эстетика",
    "image": "/venues/extracted/extracted_p1_Folk_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Folk_1.jpeg",
      "/venues/extracted/extracted_p1_Folk_2.jpeg",
      "/venues/extracted/extracted_p1_Folk_3.jpeg"
    ],
    "address": "Цветной бульвар, 2",
    "avgCheck": "3000–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "31",
    "name": "Smash Point",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Маленькая бургерная с трендовыми smash-бургерами.",
    "fullDescription": "Маленькая бургерная с трендовыми smash-бургерами.\n\nПочему подходит:\n• Трендовый формат бургеров\n• Быстро и вкусно",
    "image": "/venues/extracted/extracted_p1_Smash_Point_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Smash_Point_1.jpeg",
      "/venues/extracted/extracted_p1_Smash_Point_2.jpeg",
      "/venues/extracted/extracted_p1_Smash_Point_3.jpeg",
      "/venues/extracted/extracted_p1_Smash_Point_4.jpeg",
      "/venues/extracted/extracted_p1_Smash_Point_5.jpeg"
    ],
    "address": "Большая Бронная, 25с3",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "32",
    "name": "Billy (бильярд-клуб)",
    "category": "Место",
    "mood": [
      "Чилл",
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Бильярд + бар + расслабленный вечер.",
    "fullDescription": "Бильярд + бар + расслабленный вечер.\n\nПочему подходит:\n• Активный отдых\n• Можно провести ДР",
    "image": "/venues/extracted/extracted_p1_Billy________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Billy________________1.jpeg",
      "/venues/extracted/extracted_p1_Billy________________2.jpeg",
      "/venues/extracted/extracted_p1_Billy________________3.jpeg",
      "/venues/extracted/extracted_p1_Billy________________4.jpeg",
      "/venues/extracted/extracted_p1_Billy________________5.jpeg"
    ],
    "address": "Неглинная ул., 29с1",
    "avgCheck": "2000–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл",
      "активность"
    ]
  },
  {
    "id": "33",
    "name": "Здрасьте",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$",
    "description": "Уютное современное кафе.",
    "fullDescription": "Уютное современное кафе.\n\nПочему подходит:\n• Завтраки\n• Спокойная встреча",
    "image": "/venues/extracted/extracted_p1__________1.png",
    "images": [
      "/venues/extracted/extracted_p1__________1.png",
      "/venues/extracted/extracted_p1__________2.png",
      "/venues/extracted/extracted_p1__________3.png"
    ],
    "address": "много адресов (например, ул. Уточкина, д. 5, корп. 1, просп. Лихачёва, д. 12, корп. 4, Дубининская ул., д. 59А)",
    "avgCheck": "1500–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "34",
    "name": "Bageatteria",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Европейская сэндвичная.",
    "fullDescription": "Европейская сэндвичная.\n\nПочему подходит:\n• Для завтраков\n• Быстро перекусить\n• Современно и просто",
    "image": "/venues/extracted/extracted_p1_Bageatteria_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Bageatteria_1.jpeg",
      "/venues/extracted/extracted_p1_Bageatteria_2.jpeg",
      "/venues/extracted/extracted_p1_Bageatteria_3.jpeg",
      "/venues/extracted/extracted_p1_Bageatteria_4.jpeg"
    ],
    "address": "несколько адресов (например, Лесная улица 20, стр.3 в Депо)",
    "avgCheck": "1000–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "35",
    "name": "Drinkit",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Технологичная кофейня нового формата.",
    "fullDescription": "Технологичная кофейня нового формата.\n\nПочему подходит:\n• Быстро\n• Современно",
    "image": "/venues/extracted/extracted_p1_Drinkit_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Drinkit_1.jpeg",
      "/venues/extracted/extracted_p1_Drinkit_2.jpeg",
      "/venues/extracted/extracted_p1_Drinkit_3.jpeg"
    ],
    "address": "много точек (например, Лубянский пр., 25, стр. 1)",
    "avgCheck": "350–700 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "36",
    "name": "DeLaura",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Стильный ресторан с современным интерьером и расслабленной атмосферой.",
    "fullDescription": "Стильный ресторан с современным интерьером и расслабленной атмосферой.\n\nПочему подходит:\n• Красивое пространство\n• Подходит для ужина\n• Центровая локация",
    "image": "/venues/extracted/extracted_p1_DeLaura_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_DeLaura_1.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_2.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_3.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_4.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_5.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_6.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_7.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_8.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_9.jpeg",
      "/venues/extracted/extracted_p1_DeLaura_10.jpeg"
    ],
    "address": "ул. Покровка, 6, Москва",
    "avgCheck": "2000–4500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "37",
    "name": "Stars Coffee",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Современная кофейня.",
    "fullDescription": "Современная кофейня.\n\nПочему подходит:\n• Работа и встречи\n• Удобно, быстро и комфортно",
    "image": "/venues/extracted/extracted_p1_Stars_Coffee_1.png",
    "images": [
      "/venues/extracted/extracted_p1_Stars_Coffee_1.png",
      "/venues/extracted/extracted_p1_Stars_Coffee_2.jpeg",
      "/venues/extracted/extracted_p1_Stars_Coffee_3.png"
    ],
    "address": "много адресов (например, Тверская ул., 8, корп. 1, стр. 3, Москва)",
    "avgCheck": "500–1000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "38",
    "name": "Frank by Basta",
    "category": "Место",
    "mood": [
      "Чилл",
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Мясной бар с музыкой и активной атмосферой.",
    "fullDescription": "Мясной бар с музыкой и активной атмосферой.\n\nПочему подходит:\n• Для хорошего времяпровождения\n• Весёлая компания",
    "image": "/venues/extracted/extracted_p1_Frank_by_Basta_1.png",
    "images": [
      "/venues/extracted/extracted_p1_Frank_by_Basta_1.png",
      "/venues/extracted/extracted_p1_Frank_by_Basta_2.png",
      "/venues/extracted/extracted_p1_Frank_by_Basta_3.png"
    ],
    "address": "несколько адресов (например, ул. Лесная, 20с3)",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл",
      "активность"
    ]
  },
  {
    "id": "39",
    "name": "Cochonnet",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Современное гастробистро с авторской кухней и винной картой.",
    "fullDescription": "Современное гастробистро с авторской кухней и винной картой.\n\nПочему подходит:\n• Подходит для гастро\n• ужина\n• Хорошая винная карта\n• Атмосферное пространство",
    "image": "/venues/extracted/extracted_p1_Cochonnet_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Cochonnet_1.jpeg",
      "/venues/extracted/extracted_p1_Cochonnet_2.jpeg",
      "/venues/extracted/extracted_p1_Cochonnet_3.jpeg",
      "/venues/extracted/extracted_p1_Cochonnet_4.jpeg",
      "/venues/extracted/extracted_p1_Cochonnet_5.jpeg",
      "/venues/extracted/extracted_p1_Cochonnet_6.jpeg"
    ],
    "address": "ул. Крымский Вал, 9, стр. 11, Москва",
    "avgCheck": "1000–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "40",
    "name": "Substance Bistro",
    "category": "Кафе",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "современное стильное кафе, акцент на десерты и визуал",
    "fullDescription": "современное стильное кафе, акцент на десерты и визуал\n\nПочему подходит:\n• фотогенично, подходит для встреч и ДР",
    "image": "/venues/extracted/extracted_p1_Substance_Bistro_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Substance_Bistro_1.jpeg",
      "/venues/extracted/extracted_p1_Substance_Bistro_2.jpeg",
      "/venues/extracted/extracted_p1_Substance_Bistro_3.jpeg",
      "/venues/extracted/extracted_p1_Substance_Bistro_4.jpeg"
    ],
    "address": "Красноказарменная ул., 19; Крымский вал 9, павильон 5 (я запуталась точно ли их 2)",
    "avgCheck": "1000–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "кафе",
      "эстетика"
    ]
  },
  {
    "id": "41",
    "name": "Steak It Easy",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "современный стейк-хаус",
    "fullDescription": "современный стейк-хаус\n\nПочему подходит:\n• мясная кухня, подходит для ужина, празднования ДР, свиданий",
    "image": "/venues/extracted/extracted_p1_Steak_It_Easy_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Steak_It_Easy_1.jpeg",
      "/venues/extracted/extracted_p1_Steak_It_Easy_2.jpeg",
      "/venues/extracted/extracted_p1_Steak_It_Easy_3.jpeg",
      "/venues/extracted/extracted_p1_Steak_It_Easy_4.jpeg"
    ],
    "address": "Лесная ул., 9; Пресненская наб., 2, улица Новый Арбат д.21, ул. Мясницкая д.7/11",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "42",
    "name": "Grace Bistro",
    "category": "Кафе",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$",
    "description": "элегантный ресторан, спокойный интерьер",
    "fullDescription": "элегантный ресторан, спокойный интерьер\n\nПочему подходит:\n• свидания, красивый ужин",
    "image": "/venues/extracted/extracted_p1_Grace_Bistro_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Grace_Bistro_1.jpeg",
      "/venues/extracted/extracted_p1_Grace_Bistro_2.jpeg",
      "/venues/extracted/extracted_p1_Grace_Bistro_3.jpeg",
      "/venues/extracted/extracted_p1_Grace_Bistro_4.jpeg"
    ],
    "address": "ул. Спиридоновка, 25/20 строение 1",
    "avgCheck": "3000–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "43",
    "name": "Senti Menti",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$",
    "description": "уютное европейское кафе",
    "fullDescription": "уютное европейское кафе\n\nПочему подходит:\n• спокойный отдых, встречи",
    "image": "/venues/extracted/extracted_p1_Senti_Menti_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Senti_Menti_1.jpeg",
      "/venues/extracted/extracted_p1_Senti_Menti_2.jpeg",
      "/venues/extracted/extracted_p1_Senti_Menti_3.jpeg",
      "/venues/extracted/extracted_p1_Senti_Menti_4.jpeg"
    ],
    "address": "ул. Солянка, 1/2с1, Москва",
    "avgCheck": "1500–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "44",
    "name": "Papandopulo",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "средиземноморский ресторан",
    "fullDescription": "средиземноморский ресторан\n\nПочему подходит:\n• ужин, встречи",
    "image": "/venues/extracted/extracted_p1_Papandopulo_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Papandopulo_1.jpeg",
      "/venues/extracted/extracted_p1_Papandopulo_2.jpeg",
      "/venues/extracted/extracted_p1_Papandopulo_3.jpeg",
      "/venues/extracted/extracted_p1_Papandopulo_4.jpeg"
    ],
    "address": "2-я Звенигородская ул., 12, стр. 23",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "45",
    "name": "KULEK",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "уличная еда",
    "fullDescription": "уличная еда\n\nПочему подходит:\n• быстро и недорого",
    "image": "/venues/extracted/extracted_p1_KULEK_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_KULEK_1.jpeg",
      "/venues/extracted/extracted_p1_KULEK_2.jpeg",
      "/venues/extracted/extracted_p1_KULEK_3.png"
    ],
    "address": "ул. Большая Никитская, 23/14/9 (Основной и самый известный филиал)",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "46",
    "name": "Smart Day",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один"
    ],
    "budget": "$$",
    "description": "уютная, тихо",
    "fullDescription": "уютная, тихо\n\nПочему подходит:\n• работа и встречи",
    "image": "/venues/extracted/extracted_p1_Smart_Day_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Smart_Day_1.jpeg",
      "/venues/extracted/extracted_p1_Smart_Day_2.jpeg",
      "/venues/extracted/extracted_p1_Smart_Day_3.jpeg",
      "/venues/extracted/extracted_p1_Smart_Day_4.jpeg"
    ],
    "address": "площадь Спартаковская, 16/15с2",
    "avgCheck": "1000–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "47",
    "name": "Raw To Go",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "healthy food",
    "fullDescription": "healthy food\n\nПочему подходит:\n• быстро и полезно",
    "image": "/venues/extracted/extracted_p1_Raw_To_Go_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_Raw_To_Go_1.jpeg",
      "/venues/extracted/extracted_p1_Raw_To_Go_2.jpeg",
      "/venues/extracted/extracted_p1_Raw_To_Go_3.jpeg",
      "/venues/extracted/extracted_p1_Raw_To_Go_4.jpeg"
    ],
    "address": "Цветной бульвар, 15, стр. 1; Большой Патриарший пер., 12, стр. 1; Лесная ул., 10-16; Новорязанская ул., 23, стр. 1 и т.д",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "48",
    "name": "Мидийное место",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "морской ресторан",
    "fullDescription": "морской ресторан\n\nПочему подходит:\n• ужин, компания, празднование ДР",
    "image": "/venues/extracted/extracted_p1________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1________________1.jpeg",
      "/venues/extracted/extracted_p1________________2.jpeg",
      "/venues/extracted/extracted_p1________________3.jpeg",
      "/venues/extracted/extracted_p1________________4.jpeg"
    ],
    "address": "улица Сретенка, 21/28c1",
    "avgCheck": "2000–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "49",
    "name": "HookahPlace Ultima",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$$",
    "description": "премиум кальянная",
    "fullDescription": "премиум кальянная\n\nПочему подходит:\n• отдых компанией",
    "image": "/venues/extracted/extracted_p1_HookahPlace_Ultima_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_HookahPlace_Ultima_1.jpeg",
      "/venues/extracted/extracted_p1_HookahPlace_Ultima_2.jpeg",
      "/venues/extracted/extracted_p1_HookahPlace_Ultima_3.jpeg",
      "/venues/extracted/extracted_p1_HookahPlace_Ultima_4.jpeg"
    ],
    "address": "Малая Никитская ул., 24, стр. 1, Москва",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "50",
    "name": "ProShaker",
    "category": "Место",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "Коктейльная студия и пространство для барных мастер-классов.",
    "fullDescription": "Коктейльная студия и пространство для барных мастер-классов.\n\nПочему подходит:\n• Интерактивный формат\n• Подходит для вечера с друзьями\n• Можно научиться готовить коктейли",
    "image": "/venues/extracted/extracted_p1_ProShaker_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p1_ProShaker_1.jpeg",
      "/venues/extracted/extracted_p1_ProShaker_2.jpeg",
      "/venues/extracted/extracted_p1_ProShaker_3.jpeg",
      "/venues/extracted/extracted_p1_ProShaker_4.jpeg",
      "/venues/extracted/extracted_p1_ProShaker_5.jpeg",
      "/venues/extracted/extracted_p1_ProShaker_6.jpeg",
      "/venues/extracted/extracted_p1_ProShaker_7.jpeg",
      "/venues/extracted/extracted_p1_ProShaker_8.jpeg"
    ],
    "address": "улица 1905 года, 10с1, Москва",
    "avgCheck": "от 4900 за мастер-класс",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "активность",
      "эстетика"
    ]
  },
  {
    "id": "51",
    "name": "Dodgy Сэндвич",
    "category": "Кафе",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Небольшое уличное кафе с неформальной атмосферой и акцентом на быстрый перекус.",
    "fullDescription": "Небольшое уличное кафе с неформальной атмосферой и акцентом на быстрый перекус.\n\nПочему подходит:\n• вкусные сэндвичи\n• быстро и недорого\n• подходит для компании",
    "image": "/venues/extracted/extracted_p2_Dodgy_________1.png",
    "images": [
      "/venues/extracted/extracted_p2_Dodgy_________1.png",
      "/venues/extracted/extracted_p2_Dodgy_________2.jpeg",
      "/venues/extracted/extracted_p2_Dodgy_________3.jpeg",
      "/venues/extracted/extracted_p2_Dodgy_________4.jpeg",
      "/venues/extracted/extracted_p2_Dodgy_________5.jpeg",
      "/venues/extracted/extracted_p2_Dodgy_________6.jpeg"
    ],
    "address": "Долгоруковская, 27с1; Ананьевский переулок, 4/2с1; Покровка, 9с1",
    "avgCheck": "700–1000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "кафе",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "52",
    "name": "Pasta Queen",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "Итальянский casual с акцентом на пасту и яркую подачу.",
    "fullDescription": "Итальянский casual с акцентом на пасту и яркую подачу.\n\nПочему подходит:\n• любителям пасты\n• модное место\n• подходит для ужина",
    "image": "/venues/extracted/extracted_p2_Pasta_Queen_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Pasta_Queen_1.jpeg",
      "/venues/extracted/extracted_p2_Pasta_Queen_2.jpeg",
      "/venues/extracted/extracted_p2_Pasta_Queen_3.jpeg",
      "/venues/extracted/extracted_p2_Pasta_Queen_4.jpeg",
      "/venues/extracted/extracted_p2_Pasta_Queen_5.jpeg"
    ],
    "address": "Новослободская ул., 21 / Кузнецкий Мост, 19с1",
    "avgCheck": "1200–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "53",
    "name": "Loona",
    "category": "Место",
    "mood": [
      "Романтика",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Стильный ресторан с вечерней атмосферой и мягким светом.",
    "fullDescription": "Стильный ресторан с вечерней атмосферой и мягким светом.\n\nПочему подходит:\n• романтика\n• ужин / день рождения\n• красивый интерьер",
    "image": "/venues/extracted/extracted_p2_Loona_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Loona_1.jpeg",
      "/venues/extracted/extracted_p2_Loona_2.jpeg",
      "/venues/extracted/extracted_p2_Loona_3.jpeg",
      "/venues/extracted/extracted_p2_Loona_4.jpeg",
      "/venues/extracted/extracted_p2_Loona_5.jpeg"
    ],
    "address": "HYPERLINK \"https://yandex.ru/maps/213/moscow/house/tverskoy_bulvar_24s1/Z04YcAdjTkMCQFtvfXt3c35kYw==/\" \\o \"Москва, Тверской бульвар, 24, стр. 1, 125009 на карте Москвы\"Тверской бул., 24, стр. 1",
    "avgCheck": "2000–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "романтика",
      "эстетика"
    ]
  },
  {
    "id": "54",
    "name": "Kaifuso",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Современное азиатское место с расслабленной и модной атмосферой.",
    "fullDescription": "Современное азиатское место с расслабленной и модной атмосферой.\n\nПочему подходит:\n• азиатская кухня\n• встречи с друзьями\n• стильное пространство",
    "image": "/venues/extracted/extracted_p2_Kaifuso_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Kaifuso_1.jpeg",
      "/venues/extracted/extracted_p2_Kaifuso_2.jpeg",
      "/venues/extracted/extracted_p2_Kaifuso_3.jpeg",
      "/venues/extracted/extracted_p2_Kaifuso_4.jpeg",
      "/venues/extracted/extracted_p2_Kaifuso_5.jpeg",
      "/venues/extracted/extracted_p2_Kaifuso_6.jpeg"
    ],
    "address": "ул. Кузнецкий Мост, 6/3с3",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "55",
    "name": "Инта",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$$",
    "description": "Минималистичный, оригинальный бар.",
    "fullDescription": "Минималистичный, оригинальный бар.\n\nПочему подходит:\n• спокойный отдых\n• красивая и комфортная обстановка",
    "image": "/venues/extracted/extracted_p2______1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2______1.jpeg",
      "/venues/extracted/extracted_p2______2.jpeg",
      "/venues/extracted/extracted_p2______3.jpeg",
      "/venues/extracted/extracted_p2______4.jpeg"
    ],
    "address": "ул. Остоженка, 14/2",
    "avgCheck": "1000–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "56",
    "name": "Sip Coffee",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Небольшая specialty-кофейня с акцентом на кофе.",
    "fullDescription": "Небольшая specialty-кофейня с акцентом на кофе.\n\nПочему подходит:\n• качественный кофе\n• работа / учеба\n• тихая атмосфера",
    "image": "/venues/extracted/extracted_p2_Sip_Coffee_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Sip_Coffee_1.jpeg",
      "/venues/extracted/extracted_p2_Sip_Coffee_2.jpeg",
      "/venues/extracted/extracted_p2_Sip_Coffee_3.jpeg",
      "/venues/extracted/extracted_p2_Sip_Coffee_4.jpeg",
      "/venues/extracted/extracted_p2_Sip_Coffee_5.jpeg",
      "/venues/extracted/extracted_p2_Sip_Coffee_6.jpeg"
    ],
    "address": "Газетный пер., 3",
    "avgCheck": "600–900 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "57",
    "name": "Pods (кальян-бар)",
    "category": "Бар",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Современное пространство с технологичным и минималистичным дизайном.",
    "fullDescription": "Современное пространство с технологичным и минималистичным дизайном.\n\nПочему подходит:\n• быстро и удобно\n• современный формат\n• встречи и работа",
    "image": "/venues/extracted/extracted_p2_Pods______________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Pods______________1.jpeg",
      "/venues/extracted/extracted_p2_Pods______________2.jpeg",
      "/venues/extracted/extracted_p2_Pods______________3.jpeg",
      "/venues/extracted/extracted_p2_Pods______________4.jpeg"
    ],
    "address": "ул. Грузинский Вал, 11, стр. 3",
    "avgCheck": "600–1200 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "бар",
      "эстетика"
    ]
  },
  {
    "id": "58",
    "name": "Brooms",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$",
    "description": "Креативное место с необычной концепцией и молодежной аудиторией.",
    "fullDescription": "Креативное место с необычной концепцией и молодежной аудиторией.\n\nПочему подходит:\n• необычный опыт\n• встречи с друзьями\n• атмосферно",
    "image": "/venues/extracted/extracted_p2_Brooms_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Brooms_1.jpeg",
      "/venues/extracted/extracted_p2_Brooms_2.jpeg",
      "/venues/extracted/extracted_p2_Brooms_3.jpeg",
      "/venues/extracted/extracted_p2_Brooms_4.jpeg"
    ],
    "address": "Ленинский пр-т, 95",
    "avgCheck": "1000–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "59",
    "name": "Аллея МГУ - Университетская площадь, Москва (территория МГУ на Ленинских горах)",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Аллея МГУ - Университетская площадь, Москва (территория МГУ на Ленинских горах)",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p2_________________________________________________________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_________________________________________________________________________________1.jpeg",
      "/venues/extracted/extracted_p2_________________________________________________________________________________2.jpeg",
      "/venues/extracted/extracted_p2_________________________________________________________________________________3.jpeg",
      "/venues/extracted/extracted_p2_________________________________________________________________________________4.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "60",
    "name": "Парк Хуамин (Улица Вильгельма Пика, дом 14, Москва)",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Парк Хуамин (Улица Вильгельма Пика, дом 14, Москва)",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p2_________________________________________14__________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_________________________________________14__________1.jpeg",
      "/venues/extracted/extracted_p2_________________________________________14__________2.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "61",
    "name": "Аптекарский огород (Проспект Мира, дом 26, строение 1, Москва )",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Аптекарский огород (Проспект Мира, дом 26, строение 1, Москва )",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p2________________________________________26___________1___________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2________________________________________26___________1___________1.jpeg",
      "/venues/extracted/extracted_p2________________________________________26___________1___________2.jpeg",
      "/venues/extracted/extracted_p2________________________________________26___________1___________3.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "62",
    "name": "Парк Горького (Крымский Вал, дом 9, Москва )",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Парк Горького (Крымский Вал, дом 9, Москва )",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p2__________________________________9___________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2__________________________________9___________1.jpeg",
      "/venues/extracted/extracted_p2__________________________________9___________2.jpeg",
      "/venues/extracted/extracted_p2__________________________________9___________3.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "63",
    "name": "Бирюлевский дендропарк (Липецкая улица, 5а, Москва )",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Бирюлевский дендропарк (Липецкая улица, 5а, Москва )",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p2_________________________________________5____________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_________________________________________5____________1.jpeg",
      "/venues/extracted/extracted_p2_________________________________________5____________2.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "64",
    "name": "Moró",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "Ресторан средиземноморской кухни с акцентом на Грецию, Турцию и Италию. Здесь большая открытая кухня с печью и готовк...",
    "fullDescription": "Ресторан средиземноморской кухни с акцентом на Грецию, Турцию и Италию. Здесь большая открытая кухня с печью и готовкой на открытом огне, уютно и шумно в хорошем смысле. Посадка плотная, но собеседника слышно отлично .\n\nПочему подходит:\n• вкусные мезе и пахлава\n• открытая кухня\n• проект Аркадия Новикова",
    "image": "/venues/extracted/extracted_p2_Mor__1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Mor__1.jpeg",
      "/venues/extracted/extracted_p2_Mor__2.jpeg",
      "/venues/extracted/extracted_p2_Mor__3.jpeg",
      "/venues/extracted/extracted_p2_Mor__4.jpeg",
      "/venues/extracted/extracted_p2_Mor__5.jpeg"
    ],
    "address": "Большая Дмитровка, 5/6с3",
    "avgCheck": "2200 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "65",
    "name": "Dream Aero",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Аттракцион-симулятор полета на настоящем авиатренажере Boeing. Профессиональные пилоты-инструкторы помогают освоить у...",
    "fullDescription": "Аттракцион-симулятор полета на настоящем авиатренажере Boeing. Профессиональные пилоты-инструкторы помогают освоить управление. Очень реалистично — от взлета до посадки, можно \"полетать\" над разными аэропортами мира .\n\nПочему подходит:\n• необычный опыт\n• яркие эмоции\n• отличный подарок",
    "image": "/venues/extracted/extracted_p2_Dream_Aero_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Dream_Aero_1.jpeg",
      "/venues/extracted/extracted_p2_Dream_Aero_2.jpeg",
      "/venues/extracted/extracted_p2_Dream_Aero_3.jpeg"
    ],
    "address": "Пресненская наб., 2 (6 этаж)",
    "avgCheck": "5000–10000 ₽ (полет на симуляторе)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "66",
    "name": "Сплетни",
    "category": "Место",
    "mood": [
      "Чилл",
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Караоке-бар и лаундж-ресторан от Анны Асти. Днем — спокойный ресторан, после полуночи — танцпол с диджеями и шоу-прог...",
    "fullDescription": "Караоке-бар и лаундж-ресторан от Анны Асти. Днем — спокойный ресторан, после полуночи — танцпол с диджеями и шоу-программой. Работает до 6 утра. Авторские коктейли, кухня фьюжн .\n\nПочему подходит:\n• караоке и танцы до утра\n• тусовочное место\n• центр города",
    "image": "/venues/extracted/extracted_p2_________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_________1.jpeg",
      "/venues/extracted/extracted_p2_________2.jpeg",
      "/venues/extracted/extracted_p2_________3.jpeg",
      "/venues/extracted/extracted_p2_________4.jpeg"
    ],
    "address": "Кузнецкий Мост, 3с2",
    "avgCheck": "3000–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл",
      "активность"
    ]
  },
  {
    "id": "67",
    "name": "Московский Планетарий",
    "category": "Место",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "$",
    "description": "Научно-просветительский центр с Большим Звездным залом под куполом, обсерваторией и интерактивным музеем «Лунариум». ...",
    "fullDescription": "Научно-просветительский центр с Большим Звездным залом под куполом, обсерваторией и интерактивным музеем «Лунариум». Полнокупольные фильмы о космосе, удобные кресла, можно лежать и смотреть на звезды .\n\nПочему подходит:\n• познавательно и красиво\n• подходит всем возрастам\n• отличный вариант для свидания",
    "image": "/venues/extracted/extracted_p2_______________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_______________________1.jpeg",
      "/venues/extracted/extracted_p2_______________________2.jpeg",
      "/venues/extracted/extracted_p2_______________________3.jpeg",
      "/venues/extracted/extracted_p2_______________________4.jpeg",
      "/venues/extracted/extracted_p2_______________________5.jpeg"
    ],
    "address": "Садовая-Кудринская, 5с1",
    "avgCheck": "700–1500 ₽ (билет на программу)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "активность",
      "эстетика"
    ]
  },
  {
    "id": "68",
    "name": "Good Night Show",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Ивент-команда, которая проводит развлекательные шоу в формате телевизионных игр: «Студия союз», «Где логика?», «Импро...",
    "fullDescription": "Ивент-команда, которая проводит развлекательные шоу в формате телевизионных игр: «Студия союз», «Где логика?», «Импровизация». Можно приехать в их студию или заказать выезд на праздник .\n\nПочему подходит:\n• уникальный формат\n• идеально для компании друзей\n• профессиональный ведущий и диджей",
    "image": "/venues/extracted/extracted_p2_Good_Night_Show_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Good_Night_Show_1.jpeg",
      "/venues/extracted/extracted_p2_Good_Night_Show_2.jpeg",
      "/venues/extracted/extracted_p2_Good_Night_Show_3.jpeg"
    ],
    "address": "Денисовский переулок, 30с1",
    "avgCheck": "от 15000 ₽ (проведение шоу на мероприятии)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "69",
    "name": "Aroma",
    "category": "Место",
    "mood": [
      "Романтика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Спрятанный во дворе ресторан с камерной атмосферой. Изысканная кухня, акцент на ароматы и подачу.",
    "fullDescription": "Спрятанный во дворе ресторан с камерной атмосферой. Изысканная кухня, акцент на ароматы и подачу.\n\nПочему подходит:\n• скрытый двор — не все найдут\n• романтично\n• интересная кухня",
    "image": "/venues/extracted/extracted_p2_Aroma_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Aroma_1.jpeg",
      "/venues/extracted/extracted_p2_Aroma_2.jpeg",
      "/venues/extracted/extracted_p2_Aroma_3.jpeg",
      "/venues/extracted/extracted_p2_Aroma_4.jpeg",
      "/venues/extracted/extracted_p2_Aroma_5.jpeg"
    ],
    "address": "Большая Никитская ул., 46/17с1 (м. Баррикадная)",
    "avgCheck": "1500–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "романтика"
    ]
  },
  {
    "id": "70",
    "name": "Brera",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Итальянский ресторан в центре Москвы. Акцент на качественные продукты и домашнюю пасту.",
    "fullDescription": "Итальянский ресторан в центре Москвы. Акцент на качественные продукты и домашнюю пасту.\n\nПочему подходит:\n• итальянская кухня\n• хорошо для ужина\n• стильный интерьер",
    "image": "/venues/extracted/extracted_p2_Brera_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Brera_1.jpeg",
      "/venues/extracted/extracted_p2_Brera_2.jpeg",
      "/venues/extracted/extracted_p2_Brera_3.jpeg",
      "/venues/extracted/extracted_p2_Brera_4.jpeg",
      "/venues/extracted/extracted_p2_Brera_5.jpeg",
      "/venues/extracted/extracted_p2_Brera_6.jpeg",
      "/venues/extracted/extracted_p2_Brera_7.jpeg",
      "/venues/extracted/extracted_p2_Brera_8.jpeg"
    ],
    "address": "Большая Никитская, 24/1с1",
    "avgCheck": "2000–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "71",
    "name": "Loro",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Дорогой, современный ресторан на Большой Никитской. Лаконичный интерьер, качественная еда, хорошая винная карта.",
    "fullDescription": "Дорогой, современный ресторан на Большой Никитской. Лаконичный интерьер, качественная еда, хорошая винная карта.\n\nПочему подходит:\n• центр города\n• винная карта\n• подходит для встреч",
    "image": "/venues/extracted/extracted_p2_Loro_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Loro_1.jpeg",
      "/venues/extracted/extracted_p2_Loro_2.jpeg",
      "/venues/extracted/extracted_p2_Loro_3.jpeg",
      "/venues/extracted/extracted_p2_Loro_4.jpeg",
      "/venues/extracted/extracted_p2_Loro_5.jpeg",
      "/venues/extracted/extracted_p2_Loro_6.jpeg"
    ],
    "address": "Большая Никитская, 21/18с1",
    "avgCheck": "2500–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "72",
    "name": "Государственная Третьяковская галерея",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "Free",
    "description": "Главный музей русского искусства: Репин, Васнецов, Шишкин, Серов, Левитан, иконы Древней Руси и знаменитый историческ...",
    "fullDescription": "Главный музей русского искусства: Репин, Васнецов, Шишкин, Серов, Левитан, иконы Древней Руси и знаменитый исторический фасад.\n\nПочему подходит:\n• Один из лучших музеев России\n• Классическая культурная программа Москвы\n• Удобно гулять по Замоскворечью после посещения",
    "image": "/venues/extracted/extracted_p2_______________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_______________________________________1.jpeg",
      "/venues/extracted/extracted_p2_______________________________________2.jpeg",
      "/venues/extracted/extracted_p2_______________________________________3.jpeg",
      "/venues/extracted/extracted_p2_______________________________________4.jpeg",
      "/venues/extracted/extracted_p2_______________________________________5.jpeg",
      "/venues/extracted/extracted_p2_______________________________________6.jpeg"
    ],
    "address": "Лаврушинский переулок, 10",
    "avgCheck": "взрослый от 700 ₽, льготный от 350–400 ₽, дети до 6 лет бесплатно",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "73",
    "name": "Остров Мечты",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$$",
    "description": "Крупнейший крытый парк аттракционов России: горки, семейные зоны, шоу.",
    "fullDescription": "Крупнейший крытый парк аттракционов России: горки, семейные зоны, шоу.\n\nПочему подходит:\n• Подходит для всего, и ДР отметить, и просто весело время провести\n• Идеально для активного отдыха\n• Можно провести целый день\n• Подходит детям и взрослым",
    "image": "/venues/extracted/extracted_p2______________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2______________1.jpeg",
      "/venues/extracted/extracted_p2______________2.png",
      "/venues/extracted/extracted_p2______________3.png",
      "/venues/extracted/extracted_p2______________4.png",
      "/venues/extracted/extracted_p2______________5.png",
      "/venues/extracted/extracted_p2______________6.png",
      "/venues/extracted/extracted_p2______________7.png"
    ],
    "address": "проспект Андропова, 1",
    "avgCheck": "от 2100 ₽ в будни, от 2900–3300 ₽ в выходные; льготные тарифы есть",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "74",
    "name": "Алмазный фонд",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "Free",
    "description": "Самый «дорогой» музей страны: императорские короны, драгоценные камни, царские регалии, уникальные самородки.",
    "fullDescription": "Самый «дорогой» музей страны: императорские короны, драгоценные камни, царские регалии, уникальные самородки.\n\nПочему подходит:\n• Уникальная коллекция мирового уровня\n• На территории Кремля\n• Очень эффектное место",
    "image": "/venues/extracted/extracted_p2_______________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_______________1.jpeg",
      "/venues/extracted/extracted_p2_______________2.jpeg",
      "/venues/extracted/extracted_p2_______________3.jpeg"
    ],
    "address": "расположен на территории Московского Кремля (в здании Оружейной палаты), вход через Боровицкие ворота / Александровский сад",
    "avgCheck": "взрослый 1000 ₽, студенты/пенсионеры 200 ₽, дети до 7 лет бесплатно (доступно только с экскурсией)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "75",
    "name": "Московский музей современного искусства (MMOMA)",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$$",
    "description": "Первый в России государственный музей, целиком посвящённый искусству XX и XXI веков, основан в 1999 году Зурабом Цере...",
    "fullDescription": "Первый в России государственный музей, целиком посвящённый искусству XX и XXI веков, основан в 1999 году Зурабом Церетели. Главное здание — исторический особняк XVIII века в стиле русского классицизма. Филиал в Ермолаевском переулке — пятиэтажный неоклассический особняк 1915 года с элементами итальянского Ренессанса. Внутри — светлые пространства, анфиладные залы, дореволюционные интерьеры. Во дворе музея — Парк скульптур Зураба Церетели, можно выпить кофе и отдохнуть.\n\nПочему подходит:\n• Уникальная коллекция русского авангарда и современного искусства\n• Пять площадок в историческом центре — всегда есть что посмотреть\n• Работает школа современного искусства и детская студия\n• Регулярно проходят биеннале, мастер\n• классы и лекции\n• Очень фотогенично — как внутри, так и в скульптурном дворе",
    "image": "/venues/extracted/extracted_p2__________________________________________MMOMA__1.png",
    "images": [
      "/venues/extracted/extracted_p2__________________________________________MMOMA__1.png",
      "/venues/extracted/extracted_p2__________________________________________MMOMA__2.jpeg",
      "/venues/extracted/extracted_p2__________________________________________MMOMA__3.jpeg",
      "/venues/extracted/extracted_p2__________________________________________MMOMA__4.jpeg",
      "/venues/extracted/extracted_p2__________________________________________MMOMA__5.jpeg",
      "/venues/extracted/extracted_p2__________________________________________MMOMA__6.jpeg",
      "/venues/extracted/extracted_p2__________________________________________MMOMA__7.jpeg"
    ],
    "address": "ул. Петровка, 25, стр. 1 (главное здание)",
    "avgCheck": "/ Билеты:",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "76",
    "name": "Croissant Atelier",
    "category": "Место",
    "mood": [
      "Романтика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "камерная европейская кофейня, спешелти-кофе, свежая выпечка и завтраки целый день",
    "fullDescription": "камерная европейская кофейня, спешелти-кофе, свежая выпечка и завтраки целый день\n\nПочему подходит:\n• уютное место для неспешных бесед в перерывах между прогулками по центру",
    "image": "/venues/extracted/extracted_p2_Croissant_Atelier_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Croissant_Atelier_1.jpeg",
      "/venues/extracted/extracted_p2_Croissant_Atelier_2.jpeg",
      "/venues/extracted/extracted_p2_Croissant_Atelier_3.jpeg",
      "/venues/extracted/extracted_p2_Croissant_Atelier_4.jpeg",
      "/venues/extracted/extracted_p2_Croissant_Atelier_5.jpeg",
      "/venues/extracted/extracted_p2_Croissant_Atelier_6.jpeg",
      "/venues/extracted/extracted_p2_Croissant_Atelier_7.jpeg"
    ],
    "address": "Климентовский пер., 9/1",
    "avgCheck": "средний чек 1000–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "77",
    "name": "Meltisss",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "флагманское пространство на Патриарших, корнеры на модных фудкортах и в парках, хрустящее печенье-кукис и яркие десерты",
    "fullDescription": "флагманское пространство на Патриарших, корнеры на модных фудкортах и в парках, хрустящее печенье-кукис и яркие десерты\n\nПочему подходит:\n• must\n• visit для сладкоежек и любителей «инстаграмных» мест, где подают тот самый тающий кукис с хрустящей корочкой",
    "image": "/venues/extracted/extracted_p2_Meltisss_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Meltisss_1.jpeg",
      "/venues/extracted/extracted_p2_Meltisss_2.jpeg",
      "/venues/extracted/extracted_p2_Meltisss_3.jpeg",
      "/venues/extracted/extracted_p2_Meltisss_4.jpeg",
      "/venues/extracted/extracted_p2_Meltisss_5.jpeg",
      "/venues/extracted/extracted_p2_Meltisss_6.jpeg"
    ],
    "address": "флагманское кафе — ул. Большая Бронная, 25, стр. 3 (м. «Пушкинская» / «Тверская»), корнер в Депо — ул. Лесная, 20, стр. 3, корнер 38 (м. «Менделеевская» / «Белорусская»), корнер Bobar x Meltisss — Театральный проезд, 5, стр. 1, ЦДМ, этаж -1 (м. «Лубянка» / «Кузнецкий Мост»), корнер в Парке Горького — ул. Крымский Вал, 9, стр. 39 (м. «Октябрьская» / «Парк Культуры»)",
    "avgCheck": "600-1200 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "78",
    "name": "Парк «Покровское-Стрешнево»",
    "category": "Место",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "Free",
    "description": "обширный лесной массив с заливными лугами, расслабляющая, очень красиво, уединенно",
    "fullDescription": "обширный лесной массив с заливными лугами, расслабляющая, очень красиво, уединенно\n\nПочему подходит:\n• идеальное место для уединенных и долгих пеших прогулок, бега или велопоездок на свежем воздухе вдали от городского шума.",
    "image": "/venues/extracted/extracted_p2_____________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_____________________________1.jpeg",
      "/venues/extracted/extracted_p2_____________________________2.jpeg",
      "/venues/extracted/extracted_p2_____________________________3.jpeg",
      "/venues/extracted/extracted_p2_____________________________4.jpeg",
      "/venues/extracted/extracted_p2_____________________________5.jpeg"
    ],
    "address": "Иваньковское шоссе, 6 (м. «Волоколамская» / «Тушинская»)",
    "avgCheck": "бесплатно",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "79",
    "name": "ЖК «Береговой»",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "Free",
    "description": "современный жилой квартал с благоустроенной набережной, беговыми и велодорожками",
    "fullDescription": "современный жилой квартал с благоустроенной набережной, беговыми и велодорожками\n\nПочему подходит:\n• отличный променад с видом на Москву\n• реку в рамках нового городского кластера «Большой Сити»",
    "image": "/venues/extracted/extracted_p2________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2________________1.jpeg",
      "/venues/extracted/extracted_p2________________2.jpeg",
      "/venues/extracted/extracted_p2________________3.jpeg",
      "/venues/extracted/extracted_p2________________4.jpeg"
    ],
    "address": "Береговой пр.3",
    "avgCheck": "свободный, бесплатный, круглосуточный",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "80",
    "name": "Шишкин Лес",
    "category": "Место",
    "mood": [
      "Романтика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "Free",
    "description": "тихий дачный поселок в окружении соснового бора, чистый воздух и неспешный ритм жизни",
    "fullDescription": "тихий дачный поселок в окружении соснового бора, чистый воздух и неспешный ритм жизни\n\nПочему подходит:\n• идеальное место для тех, кто ищет уединения и полной перезагрузки вдали от городской суеты",
    "image": "/venues/extracted/extracted_p2____________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2____________1.jpeg",
      "/venues/extracted/extracted_p2____________2.jpeg",
      "/venues/extracted/extracted_p2____________3.jpeg",
      "/venues/extracted/extracted_p2____________4.jpeg",
      "/venues/extracted/extracted_p2____________5.jpeg"
    ],
    "address": "пос. Шишкин Лес, 30",
    "avgCheck": "вход свободный",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "81",
    "name": "Few Horses",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "загородный ресторанный комплекс на территории коттеджного поселка, панорамные виды и каминный зал",
    "fullDescription": "загородный ресторанный комплекс на территории коттеджного поселка, панорамные виды и каминный зал\n\nПочему подходит:\n• идеальный вариант для неспешного уикенда с гастрономическим уклоном за пределами МКАД",
    "image": "/venues/extracted/extracted_p2_Few_Horses_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Few_Horses_1.jpeg",
      "/venues/extracted/extracted_p2_Few_Horses_2.jpeg",
      "/venues/extracted/extracted_p2_Few_Horses_3.jpeg",
      "/venues/extracted/extracted_p2_Few_Horses_4.jpeg",
      "/venues/extracted/extracted_p2_Few_Horses_5.jpeg",
      "/venues/extracted/extracted_p2_Few_Horses_6.jpeg"
    ],
    "address": "1-й пр., 3, КП Голицыно-3, д. Новосумино",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "82",
    "name": "Ривер Парк (Коломенское)",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "Free",
    "description": "благоустроенная набережная длиной около 1,5 км с пляжной зоной, рыбацкими мостиками и лодочной станцией",
    "fullDescription": "благоустроенная набережная длиной около 1,5 км с пляжной зоной, рыбацкими мостиками и лодочной станцией\n\nПочему подходит:\n• городской курорт на юге Москвы с отличной инфраструктурой для прогулок и отдыха у воды.",
    "image": "/venues/extracted/extracted_p2__________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2__________________________1.jpeg",
      "/venues/extracted/extracted_p2__________________________2.jpeg",
      "/venues/extracted/extracted_p2__________________________3.jpeg",
      "/venues/extracted/extracted_p2__________________________4.jpeg"
    ],
    "address": "ул. Корабельная, 17",
    "avgCheck": "свободный",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "83",
    "name": "Усадьба Марфино",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "псевдоготическая усадьба, старинный парк с прудами на высоком берегу реки Учи",
    "fullDescription": "псевдоготическая усадьба, старинный парк с прудами на высоком берегу реки Учи\n\nПочему подходит:\n• атмосферное и очень фотогеничное место Подмосковья, настоящее открытие для ценителей архитектуры и исторических усадеб.",
    "image": "/venues/extracted/extracted_p2_________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_________________1.jpeg",
      "/venues/extracted/extracted_p2_________________2.jpeg",
      "/venues/extracted/extracted_p2_________________3.jpeg",
      "/venues/extracted/extracted_p2_________________4.jpeg",
      "/venues/extracted/extracted_p2_________________5.jpeg"
    ],
    "address": "Московская область, городской округ Мытищи, село Марфино",
    "avgCheck": "от 50 ₽, для прохода требуется паспорт РФ",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "84",
    "name": "Парк Малевича",
    "category": "Место",
    "mood": [
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "Free",
    "description": "арт-пространство в окружении природы, инсталляции и галерея под открытым небом",
    "fullDescription": "арт-пространство в окружении природы, инсталляции и галерея под открытым небом\n\nПочему подходит:\n• место силы и вдохновения на Рублёвке для любителей современного искусства, можно взять в аренду велосипеды",
    "image": "/venues/extracted/extracted_p2_______________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_______________1.jpeg",
      "/venues/extracted/extracted_p2_______________2.jpeg",
      "/venues/extracted/extracted_p2_______________3.jpeg",
      "/venues/extracted/extracted_p2_______________4.jpeg",
      "/venues/extracted/extracted_p2_______________5.jpeg"
    ],
    "address": "Московская область, Одинцовский г.о., Рублёвский проезд",
    "avgCheck": "бесплатный",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "чилл",
      "активность"
    ]
  },
  {
    "id": "85",
    "name": "Усадьба Кусково",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "усадьба Шереметевых XVIII века, Голландский домик, гроты и французский регулярный парк",
    "fullDescription": "усадьба Шереметевых XVIII века, Голландский домик, гроты и французский регулярный парк\n\nПочему подходит:\n• возможность совершить путешествие в эпоху Просвещения и устроить аристократичный променад",
    "image": "/venues/extracted/extracted_p2_________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_________________1.jpeg",
      "/venues/extracted/extracted_p2_________________2.jpeg",
      "/venues/extracted/extracted_p2_________________3.jpeg",
      "/venues/extracted/extracted_p2_________________4.jpeg",
      "/venues/extracted/extracted_p2_________________5.jpeg",
      "/venues/extracted/extracted_p2_________________6.jpeg",
      "/venues/extracted/extracted_p2_________________7.jpeg",
      "/venues/extracted/extracted_p2_________________8.jpeg"
    ],
    "address": "ул. Юности, 2, стр. 1",
    "avgCheck": "от 150 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "86",
    "name": "Северный речной вокзал",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "Free",
    "description": "отреставрированный «порт пяти морей», парк с фонтанами и аллеями, красиво",
    "fullDescription": "отреставрированный «порт пяти морей», парк с фонтанами и аллеями, красиво\n\nПочему подходит:\n• уникальный архитектурный ансамбль для долгих прогулок и любования яхтами.",
    "image": "/venues/extracted/extracted_p2________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2________________________1.jpeg",
      "/venues/extracted/extracted_p2________________________2.jpeg",
      "/venues/extracted/extracted_p2________________________3.jpeg",
      "/venues/extracted/extracted_p2________________________4.jpeg"
    ],
    "address": "Ленинградское шоссе, 51",
    "avgCheck": "свободный",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "87",
    "name": "Ближняя дача",
    "category": "Место",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "Free",
    "description": "ухоженный лесной массив, искусственный водопад, цапли и ручные бурундуки",
    "fullDescription": "ухоженный лесной массив, искусственный водопад, цапли и ручные бурундуки\n\nПочему подходит:\n• красиво, тихо, уединенно, идеален для эко\n• прогулок",
    "image": "/venues/extracted/extracted_p2______________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2______________1.jpeg",
      "/venues/extracted/extracted_p2______________2.jpeg",
      "/venues/extracted/extracted_p2______________3.jpeg",
      "/venues/extracted/extracted_p2______________4.jpeg",
      "/venues/extracted/extracted_p2______________5.jpeg"
    ],
    "address": "Московская область, Липкинское шоссе, стр. 1",
    "avgCheck": "вход свободный",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "88",
    "name": "Набережная в Коломенском парке",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Набережная в Коломенском парке",
    "fullDescription": "\n\nПочему подходит:\n• лучшее место для созерцания закатов с видом на древние храмы и холмы",
    "image": "/venues/image1.jpeg",
    "images": [
      "/venues/image1.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "89",
    "name": "Квартал Lucky",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "Free",
    "description": "премиальный жилой квартал с арт-объектами и внутренними скверами",
    "fullDescription": "премиальный жилой квартал с арт-объектами и внутренними скверами\n\nПочему подходит:\n• тихий оазис в центре деловых будней рядом с парком «Красная Пресня»",
    "image": "/venues/extracted/extracted_p2_________Lucky_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_________Lucky_1.jpeg",
      "/venues/extracted/extracted_p2_________Lucky_2.jpeg",
      "/venues/extracted/extracted_p2_________Lucky_3.jpeg",
      "/venues/extracted/extracted_p2_________Lucky_4.jpeg"
    ],
    "address": "ул. 2-я Звенигородская, 12",
    "avgCheck": "вход свободный (жилой комплекс)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "90",
    "name": "Moscow Raceway",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Главная гоночная трасса России уровня FIA Grade 1. Здесь проходят трек-дни, гонки, автомобильные фестивали и заезды н...",
    "fullDescription": "Главная гоночная трасса России уровня FIA Grade 1. Здесь проходят трек-дни, гонки, автомобильные фестивали и заезды на суперкарах.\n\nПочему подходит:\n• Самая известная трасса страны\n• Настоящая атмосфера автоспорта\n• Подходит для необычного уикенда",
    "image": "/venues/extracted/extracted_p2_Moscow_Raceway_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Moscow_Raceway_1.jpeg",
      "/venues/extracted/extracted_p2_Moscow_Raceway_2.jpeg",
      "/venues/extracted/extracted_p2_Moscow_Raceway_3.jpeg",
      "/venues/extracted/extracted_p2_Moscow_Raceway_4.jpeg",
      "/venues/extracted/extracted_p2_Moscow_Raceway_5.jpeg",
      "/venues/extracted/extracted_p2_Moscow_Raceway_6.jpeg"
    ],
    "address": "39, Шелудьково, Московская область",
    "avgCheck": "от 5000",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "91",
    "name": "Стендовая стрельба «Румянцево»",
    "category": "Место",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Стендовая стрельба на открытой площадке с профессиональными инструкторами.",
    "fullDescription": "Стендовая стрельба на открытой площадке с профессиональными инструкторами.\n\nПочему подходит:\n• Необычный активный отдых\n• Подходит новичкам\n• Хороший вариант для компании",
    "image": "/venues/extracted/extracted_p2________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2________________________________1.jpeg",
      "/venues/extracted/extracted_p2________________________________2.jpeg",
      "/venues/extracted/extracted_p2________________________________3.jpeg",
      "/venues/extracted/extracted_p2________________________________4.jpeg",
      "/venues/extracted/extracted_p2________________________________5.jpeg"
    ],
    "address": "квартал 4, 2с10, Румянцево, Москва",
    "avgCheck": "от 5000 ₽ с инструктором",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "активность",
      "эстетика"
    ]
  },
  {
    "id": "92",
    "name": "Yudashkin Сад",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Элегантный ресторан-сад с красивым интерьером и спокойной атмосферой.",
    "fullDescription": "Элегантный ресторан-сад с красивым интерьером и спокойной атмосферой.\n\nПочему подходит:\n• Красивое пространство\n• Подходит для ужина и встреч\n• Центр Москвы",
    "image": "/venues/extracted/extracted_p2_Yudashkin_____1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Yudashkin_____1.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____2.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____3.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____4.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____5.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____6.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____7.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____8.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____9.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____10.jpeg",
      "/venues/extracted/extracted_p2_Yudashkin_____11.jpeg"
    ],
    "address": "Вознесенский переулок, 6/3, Москва",
    "avgCheck": "3000–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "93",
    "name": "Lilian’s",
    "category": "Место",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Стильный городской ресторан с европейским меню и камерной атмосферой.",
    "fullDescription": "Стильный городской ресторан с европейским меню и камерной атмосферой.\n\nПочему подходит:\n• Красивый интерьер\n• Подходит для ужина\n• Спокойная атмосфера",
    "image": "/venues/extracted/extracted_p2_Lilian_s_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Lilian_s_1.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_2.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_3.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_4.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_5.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_6.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_7.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_8.jpeg",
      "/venues/extracted/extracted_p2_Lilian_s_9.jpeg"
    ],
    "address": "ул. Маршала Бирюзова, 22, корп. 1, Москва",
    "avgCheck": "2000–4500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "94",
    "name": "That Place",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Современное городское кафе с минималистичным интерьером и молодой публикой.",
    "fullDescription": "Современное городское кафе с минималистичным интерьером и молодой публикой.\n\nПочему подходит:\n• Подходит для встреч\n• Хорошая атмосфера\n• Центр города",
    "image": "/venues/extracted/extracted_p2_That_Place_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_That_Place_1.jpeg",
      "/venues/extracted/extracted_p2_That_Place_2.jpeg",
      "/venues/extracted/extracted_p2_That_Place_3.jpeg",
      "/venues/extracted/extracted_p2_That_Place_4.jpeg",
      "/venues/extracted/extracted_p2_That_Place_5.jpeg",
      "/venues/extracted/extracted_p2_That_Place_6.jpeg",
      "/venues/extracted/extracted_p2_That_Place_7.jpeg"
    ],
    "address": "Подсосенский пер., 8, стр. 2, Москва,   Чистопрудный бул., 12, корп. 4 (временно не работает)",
    "avgCheck": "1500–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "95",
    "name": "Mamie Bistro",
    "category": "Кафе",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Французское бистро с элегантным интерьером и атмосферой парижского кафе.",
    "fullDescription": "Французское бистро с элегантным интерьером и атмосферой парижского кафе.\n\nПочему подходит:\n• Красивые завтраки\n• Французская эстетика\n• Подходит для свиданий",
    "image": "/venues/extracted/extracted_p2_Mamie_Bistro_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_Mamie_Bistro_1.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_2.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_3.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_4.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_5.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_6.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_7.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_8.jpeg",
      "/venues/extracted/extracted_p2_Mamie_Bistro_9.jpeg"
    ],
    "address": "Большая Никитская улица, 14/2с7, Москва",
    "avgCheck": "2500–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "кафе",
      "эстетика"
    ]
  },
  {
    "id": "96",
    "name": "J’PAN",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Популярное японское кафе с эстетикой токийского городского пространства.",
    "fullDescription": "Популярное японское кафе с эстетикой токийского городского пространства.\n\nПочему подходит:\n• Японская кухня\n• Молодая аудитория\n• Хорошо для casual\n• встреч",
    "image": "/venues/extracted/extracted_p2_J_PAN_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p2_J_PAN_1.jpeg",
      "/venues/extracted/extracted_p2_J_PAN_2.jpeg",
      "/venues/extracted/extracted_p2_J_PAN_3.jpeg",
      "/venues/extracted/extracted_p2_J_PAN_4.jpeg",
      "/venues/extracted/extracted_p2_J_PAN_5.jpeg",
      "/venues/extracted/extracted_p2_J_PAN_6.jpeg",
      "/venues/extracted/extracted_p2_J_PAN_7.jpeg",
      "/venues/extracted/extracted_p2_J_PAN_8.jpeg"
    ],
    "address": "ул. Чаянова, 22, стр. 4, Москва",
    "avgCheck": "1000–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "97",
    "name": "Bistro Meteorite",
    "category": "Кафе",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$",
    "description": "Современное бистро с минималистичным интерьером и авторской кухней.",
    "fullDescription": "Современное бистро с минималистичным интерьером и авторской кухней.\n\nПочему подходит:\n• Стильный интерьер\n• Подходит для спокойного ужина\n• Современная гастрономия",
    "image": "/venues/extracted/extracted_p3_Bistro_Meteorite_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Bistro_Meteorite_1.jpeg",
      "/venues/extracted/extracted_p3_Bistro_Meteorite_2.jpeg",
      "/venues/extracted/extracted_p3_Bistro_Meteorite_3.jpeg",
      "/venues/extracted/extracted_p3_Bistro_Meteorite_4.jpeg",
      "/venues/extracted/extracted_p3_Bistro_Meteorite_5.jpeg",
      "/venues/extracted/extracted_p3_Bistro_Meteorite_6.jpeg",
      "/venues/extracted/extracted_p3_Bistro_Meteorite_7.jpeg"
    ],
    "address": "ул. Покровка, 20/1с1",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "98",
    "name": "Alaska",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Гастробар с морепродуктами, коктейлями и атмосферой северной гастрономии.",
    "fullDescription": "Гастробар с морепродуктами, коктейлями и атмосферой северной гастрономии.\n\nПочему подходит:\n• Хороший бар\n• Подходит для вечернего выхода\n• Атмосферный интерьер",
    "image": "/venues/extracted/extracted_p3_Alaska_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Alaska_1.jpeg",
      "/venues/extracted/extracted_p3_Alaska_2.jpeg",
      "/venues/extracted/extracted_p3_Alaska_3.jpeg",
      "/venues/extracted/extracted_p3_Alaska_4.jpeg"
    ],
    "address": "Бобров переулок, 4с1, Москва",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "99",
    "name": "Brera",
    "category": "Место",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Небольшой ресторан в европейском стиле с камерной посадкой.",
    "fullDescription": "Небольшой ресторан в европейском стиле с камерной посадкой.\n\nПочему подходит:\n• Спокойная атмосфера\n• Центр Москвы\n• Хорошо для ужина",
    "image": "/venues/extracted/extracted_p3_Brera_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Brera_1.jpeg",
      "/venues/extracted/extracted_p3_Brera_2.jpeg",
      "/venues/extracted/extracted_p3_Brera_3.jpeg",
      "/venues/extracted/extracted_p3_Brera_4.jpeg",
      "/venues/extracted/extracted_p3_Brera_5.jpeg"
    ],
    "address": "Мерзляковский переулок, 15, Москва",
    "avgCheck": "1200-1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "100",
    "name": "Chère Maman",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$",
    "description": "Французское бистро с домашней атмосферой и европейской кухней.",
    "fullDescription": "Французское бистро с домашней атмосферой и европейской кухней.\n\nПочему подходит:\n• Уютно и спокойно\n• Хорошо для завтрака и ужина\n• Подходит для свиданий",
    "image": "/venues/extracted/extracted_p3_Ch_re_Maman_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Ch_re_Maman_1.jpeg",
      "/venues/extracted/extracted_p3_Ch_re_Maman_2.jpeg",
      "/venues/extracted/extracted_p3_Ch_re_Maman_3.jpeg",
      "/venues/extracted/extracted_p3_Ch_re_Maman_4.jpeg",
      "/venues/extracted/extracted_p3_Ch_re_Maman_5.jpeg",
      "/venues/extracted/extracted_p3_Ch_re_Maman_6.jpeg",
      "/venues/extracted/extracted_p3_Ch_re_Maman_7.jpeg"
    ],
    "address": "Трубная ул., 26, корп. 1",
    "avgCheck": "1500–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "101",
    "name": "Кафе «Рябчик»",
    "category": "Кафе",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Эстетичное кафе с расслабленной атмосферой.",
    "fullDescription": "Эстетичное кафе с расслабленной атмосферой.\n\nПочему подходит:\n• Очень красиво\n• Хорошо для встреч\n• Центр города",
    "image": "/venues/extracted/extracted_p3_______________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_______________1.jpeg",
      "/venues/extracted/extracted_p3_______________2.jpeg",
      "/venues/extracted/extracted_p3_______________3.jpeg",
      "/venues/extracted/extracted_p3_______________4.jpeg",
      "/venues/extracted/extracted_p3_______________5.jpeg",
      "/venues/extracted/extracted_p3_______________6.jpeg",
      "/venues/extracted/extracted_p3_______________7.jpeg"
    ],
    "address": "ул. Макаренко, 2/21с3",
    "avgCheck": "1500–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "102",
    "name": "Чапа",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Новое городское место с расслабленной атмосферой и авторским меню.",
    "fullDescription": "Новое городское место с расслабленной атмосферой и авторским меню.\n\nПочему подходит:\n• Тихий центр\n• Хорошо для неспешной прогулки и перекуса\n• Атмосферный интерьер\n• Но: еда только на вынос, может быть многолюдно из\n• за популярности этого места",
    "image": "/venues/extracted/extracted_p3______1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3______1.jpeg",
      "/venues/extracted/extracted_p3______2.jpeg",
      "/venues/extracted/extracted_p3______3.jpeg",
      "/venues/extracted/extracted_p3______4.png",
      "/venues/extracted/extracted_p3______5.jpeg",
      "/venues/extracted/extracted_p3______6.jpeg",
      "/venues/extracted/extracted_p3______7.png"
    ],
    "address": "улица Чаплыгина, 2, Москва",
    "avgCheck": "1000–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "103",
    "name": "Арт-усадьба «Веретьево»",
    "category": "Место",
    "mood": [
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$$",
    "description": "Арт-усадьба в лесу с дизайнерскими домами и творческой атмосферой.",
    "fullDescription": "Арт-усадьба в лесу с дизайнерскими домами и творческой атмосферой.\n\nПочему подходит:\n• Необычные домики\n• Тихая природа\n• Арт\n• атмосфера\n• Можно арендовать велосипеды, беговелы, весельные лодки, sup\n• борды, или сходить в баню.",
    "image": "/venues/extracted/extracted_p3_________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_________________________1.jpeg",
      "/venues/extracted/extracted_p3_________________________2.jpeg",
      "/venues/extracted/extracted_p3_________________________3.jpeg",
      "/venues/extracted/extracted_p3_________________________4.png",
      "/venues/extracted/extracted_p3_________________________5.png",
      "/venues/extracted/extracted_p3_________________________6.png"
    ],
    "address": "Московская область, Талдомский городской округ, деревня Веретьево",
    "avgCheck": "Взрослый билет в зоопарк (с 12 лет) – 1000",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл",
      "активность"
    ]
  },
  {
    "id": "104",
    "name": "Глэмпинг Villy Uley",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$$",
    "description": "Небольшой природный глэмпинг с уединённой атмосферой.",
    "fullDescription": "Небольшой природный глэмпинг с уединённой атмосферой.\n\nПочему подходит:\n• Тишина и лес\n• Красивые домики\n• Хорошо для перезагрузки",
    "image": "/venues/extracted/extracted_p3__________Villy_Uley_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3__________Villy_Uley_1.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_2.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_3.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_4.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_5.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_6.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_7.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_8.jpeg",
      "/venues/extracted/extracted_p3__________Villy_Uley_9.jpeg"
    ],
    "address": "Московская область, Ступино, Вертолётная улица",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "105",
    "name": "Share",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Современный ресторан с городской эстетикой и модной публикой.",
    "fullDescription": "Современный ресторан с городской эстетикой и модной публикой.\n\nПочему подходит:\n• Центр Москвы\n• Подходит для встреч\n• Стильное пространство",
    "image": "/venues/extracted/extracted_p3_Share_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Share_1.jpeg",
      "/venues/extracted/extracted_p3_Share_2.jpeg",
      "/venues/extracted/extracted_p3_Share_3.jpeg",
      "/venues/extracted/extracted_p3_Share_4.jpeg",
      "/venues/extracted/extracted_p3_Share_5.jpeg",
      "/venues/extracted/extracted_p3_Share_6.jpeg",
      "/venues/extracted/extracted_p3_Share_7.jpeg",
      "/venues/extracted/extracted_p3_Share_8.jpeg",
      "/venues/extracted/extracted_p3_Share_9.jpeg"
    ],
    "address": "Вознесенский переулок, 5с1, Москва",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "106",
    "name": "Лига Бариста – мастер-класс Латте-арт",
    "category": "Бар",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$$",
    "description": "На данном мастер-классе вы познакомитесь с кофе,  узнаете, как работать с оборудованием и инвентарем для приготовлени...",
    "fullDescription": "На данном мастер-классе вы познакомитесь с кофе,  узнаете, как работать с оборудованием и инвентарем для приготовления правильного espresso, научитесь взбивать молоко, правильно наносить рисунок в чашке с кофе и отработаете полученные знания на практике.\n\nПочему подходит:\n• Сможете узнать и научиться новому и поговорите про кофе.\n• Общий план мастер\n• класса:\n• Оборудование и инвентарь бариста\n• Правила работы с кофе\n• Приготовление качественного эспрессо для нанесения рисунков\n• Особенности работы с молоком\n• Основы работы с питчером\n• и другим инвентарем для латте\n• арт\n• Как правильно взбивать молоко\n• Вливание молока (основные особенности)\n• Базовый латте\n• арт\n• Закрепление на практике\n• Интерактивное общение",
    "image": "/venues/extracted/extracted_p3_______________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_______________________________________1.jpeg",
      "/venues/extracted/extracted_p3_______________________________________2.jpeg",
      "/venues/extracted/extracted_p3_______________________________________3.jpeg",
      "/venues/extracted/extracted_p3_______________________________________4.jpeg",
      "/venues/extracted/extracted_p3_______________________________________5.jpeg",
      "/venues/extracted/extracted_p3_______________________________________6.jpeg"
    ],
    "address": "Бауманская, 16, стр. 2",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "бар",
      "активность",
      "эстетика"
    ]
  },
  {
    "id": "107",
    "name": "Мастер-класс по тортикам — Meet Me Agency",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Творческий мастер-класс по декору и сборке бенто-тортов и десертов в уютной студии в центре Москвы.",
    "fullDescription": "Творческий мастер-класс по декору и сборке бенто-тортов и десертов в уютной студии в центре Москвы.\n\nПочему подходит:\n• Красивый и «инстаграмный» формат\n• Подходит для свидания и девичника\n• Можно забрать десерт с собой",
    "image": "/venues/extracted/extracted_p3____________________________Meet_Me_Agency_1.png",
    "images": [
      "/venues/extracted/extracted_p3____________________________Meet_Me_Agency_1.png",
      "/venues/extracted/extracted_p3____________________________Meet_Me_Agency_2.png",
      "/venues/extracted/extracted_p3____________________________Meet_Me_Agency_3.png",
      "/venues/extracted/extracted_p3____________________________Meet_Me_Agency_4.png"
    ],
    "address": "Никольская улица, 17с2, Москва",
    "avgCheck": "4000–8000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "108",
    "name": "Мастер-класс украшений из натуральных камней — Pelegrina Art",
    "category": "Место",
    "mood": [
      "Романтика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Камерная творческая студия, где можно создать собственное украшение из натуральных камней и фурнитуры.",
    "fullDescription": "Камерная творческая студия, где можно создать собственное украшение из натуральных камней и фурнитуры.\n\nПочему подходит:\n• Уникальное украшение своими руками\n• Медитативный творческий процесс\n• Подходит новичкам",
    "image": "/venues/extracted/extracted_p3________________________________________________Pelegrina_Art_1.png",
    "images": [
      "/venues/extracted/extracted_p3________________________________________________Pelegrina_Art_1.png",
      "/venues/extracted/extracted_p3________________________________________________Pelegrina_Art_2.png",
      "/venues/extracted/extracted_p3________________________________________________Pelegrina_Art_3.png"
    ],
    "address": "улица Сретенка, 27/1, Москва",
    "avgCheck": "3000–7000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "романтика"
    ]
  },
  {
    "id": "109",
    "name": "Мастер-класс «Луна-ночник» — Pelegrina Art",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Творческий мастер-класс по созданию интерьерного светильника в форме луны.",
    "fullDescription": "Творческий мастер-класс по созданию интерьерного светильника в форме луны.\n\nПочему подходит:\n• Необычный формат\n• Красивый предмет интерьера после мастер\n• класса\n• Подходит для уютного вечера",
    "image": "/venues/extracted/extracted_p3______________________________Pelegrina_Art_1.png",
    "images": [
      "/venues/extracted/extracted_p3______________________________Pelegrina_Art_1.png",
      "/venues/extracted/extracted_p3______________________________Pelegrina_Art_2.png",
      "/venues/extracted/extracted_p3______________________________Pelegrina_Art_3.png",
      "/venues/extracted/extracted_p3______________________________Pelegrina_Art_4.png",
      "/venues/extracted/extracted_p3______________________________Pelegrina_Art_5.png"
    ],
    "address": "улица Сретенка, 27/1, Москва",
    "avgCheck": "3500–7000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "110",
    "name": "Мастер-класс косметики своими руками - Makeup Kitchen",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Бьюти-студия, где участники создают косметику своими руками: бальзамы, помады, скрабы и другие средства.",
    "fullDescription": "Бьюти-студия, где участники создают косметику своими руками: бальзамы, помады, скрабы и другие средства.\n\nПочему подходит:\n• Интерактивный формат\n• Можно создать персональный продукт\n• Подходит для компании подруг",
    "image": "/venues/extracted/extracted_p3________________________________________Makeup_Kitchen_1.png",
    "images": [
      "/venues/extracted/extracted_p3________________________________________Makeup_Kitchen_1.png",
      "/venues/extracted/extracted_p3________________________________________Makeup_Kitchen_2.png",
      "/venues/extracted/extracted_p3________________________________________Makeup_Kitchen_3.png",
      "/venues/extracted/extracted_p3________________________________________Makeup_Kitchen_4.png"
    ],
    "address": "Автозаводская улица, 21к1, 3 подъезд, 3 этаж, Москва",
    "avgCheck": "3000–6000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "111",
    "name": "Мастер-класс духов своими руками - Makeup Kitchen",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Аромастудия с возможностью создать индивидуальный парфюм под руководством парфюмера.",
    "fullDescription": "Аромастудия с возможностью создать индивидуальный парфюм под руководством парфюмера.\n\nПочему подходит:\n• Очень необычный опыт\n• Индивидуальный аромат на память\n• Подходит для подарка или свидания",
    "image": "/venues/extracted/extracted_p3____________________________________Makeup_Kitchen_1.png",
    "images": [
      "/venues/extracted/extracted_p3____________________________________Makeup_Kitchen_1.png",
      "/venues/extracted/extracted_p3____________________________________Makeup_Kitchen_2.png",
      "/venues/extracted/extracted_p3____________________________________Makeup_Kitchen_3.png"
    ],
    "address": "Автозаводская улица, 21к1, 3 подъезд, 3 этаж, Москва",
    "avgCheck": "4000–8000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "112",
    "name": "Found Record Store & Pizzeria",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Комбинация винилового магазина, бара и пиццерии с расслабленной творческой атмосферой.",
    "fullDescription": "Комбинация винилового магазина, бара и пиццерии с расслабленной творческой атмосферой.\n\nПочему подходит:\n• Винил и музыка\n• Необычный формат пространства\n• Подходит для вечерних встреч",
    "image": "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_1.jpeg",
      "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_2.jpeg",
      "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_3.jpeg",
      "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_4.jpeg",
      "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_5.jpeg",
      "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_6.jpeg",
      "/venues/extracted/extracted_p3_Found_Record_Store___Pizzeria_7.jpeg"
    ],
    "address": "Цветной бульвар, 15с1, Москва",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "113",
    "name": "UDON noodles & drinks",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Современное азиатское кафе с акцентом на свежий удон собственного приготовления, японский стритфуд и расслабленную го...",
    "fullDescription": "Современное азиатское кафе с акцентом на свежий удон собственного приготовления, японский стритфуд и расслабленную городскую атмосферу.\n\nПочему подходит:\n• Несколько локаций по Москве\n• Подходит для быстрого ланча и casual\n• встреч\n• Можно комфортно работать за ноутбуком\n• Домашние лимонады и cold tea",
    "image": "/venues/extracted/extracted_p3_UDON_noodles___drinks_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_UDON_noodles___drinks_1.jpeg",
      "/venues/extracted/extracted_p3_UDON_noodles___drinks_2.jpeg",
      "/venues/extracted/extracted_p3_UDON_noodles___drinks_3.jpeg",
      "/venues/extracted/extracted_p3_UDON_noodles___drinks_4.jpeg",
      "/venues/extracted/extracted_p3_UDON_noodles___drinks_5.jpeg"
    ],
    "address": "Кузнецкий Мост, 19с1",
    "avgCheck": "800–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "114",
    "name": "Кафе «Культурный Код»",
    "category": "Кафе",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Городское кафе с интеллектуальной и творческой атмосферой, спокойным интерьером и комфортной посадкой для встреч и ра...",
    "fullDescription": "Городское кафе с интеллектуальной и творческой атмосферой, спокойным интерьером и комфортной посадкой для встреч и работы.\n\nПочему подходит:\n• Подходит для работы за ноутбуком\n• Спокойная атмосфера\n• Удобно для встреч и общения\n• Центр городской культурной среды",
    "image": "/venues/extracted/extracted_p3_______________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_______________________1.jpeg",
      "/venues/extracted/extracted_p3_______________________2.jpeg",
      "/venues/extracted/extracted_p3_______________________3.jpeg",
      "/venues/extracted/extracted_p3_______________________4.jpeg",
      "/venues/extracted/extracted_p3_______________________5.jpeg",
      "/venues/extracted/extracted_p3_______________________6.jpeg",
      "/venues/extracted/extracted_p3_______________________7.jpeg"
    ],
    "address": "Бауманская ул., 58/25с1",
    "avgCheck": "1000–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "кафе",
      "чилл"
    ]
  },
  {
    "id": "115",
    "name": "Ресторан «Своды»",
    "category": "Кафе",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Новый ресторан с современным интерьером и акцентом на архитектурное пространство.",
    "fullDescription": "Новый ресторан с современным интерьером и акцентом на архитектурное пространство.\n\nПочему подходит:\n• Стильный интерьер\n• Подходит для вечерних встреч\n• Современная гастрономия",
    "image": "/venues/extracted/extracted_p3__________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3__________________1.jpeg",
      "/venues/extracted/extracted_p3__________________2.jpeg",
      "/venues/extracted/extracted_p3__________________3.jpeg",
      "/venues/extracted/extracted_p3__________________4.jpeg",
      "/venues/extracted/extracted_p3__________________5.jpeg",
      "/venues/extracted/extracted_p3__________________6.jpeg"
    ],
    "address": "Кожевническая ул., 21, стр. 1, Москва",
    "avgCheck": "2500–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "кафе",
      "эстетика"
    ]
  },
  {
    "id": "116",
    "name": "Чтиво Дом",
    "category": "Место",
    "mood": [
      "Романтика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Камерное книжное пространство с кофейней и спокойной атмосферой.",
    "fullDescription": "Камерное книжное пространство с кофейней и спокойной атмосферой.\n\nПочему подходит:\n• Для любителей книг\n• Тихое место в городе\n• Подходит для работы и чтения",
    "image": "/venues/extracted/extracted_p3___________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3___________1.jpeg",
      "/venues/extracted/extracted_p3___________2.jpeg",
      "/venues/extracted/extracted_p3___________3.jpeg",
      "/venues/extracted/extracted_p3___________4.jpeg",
      "/venues/extracted/extracted_p3___________5.jpeg",
      "/venues/extracted/extracted_p3___________6.jpeg"
    ],
    "address": "Зубовский бул., 2, стр. 7, Москва",
    "avgCheck": "500–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "романтика",
      "чилл"
    ]
  },
  {
    "id": "117",
    "name": "САЛЮТ - вело-кафе",
    "category": "Кафе",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Велосипедное комьюнити-пространство с кофе, завтраками и спортивной атмосферой.",
    "fullDescription": "Велосипедное комьюнити-пространство с кофе, завтраками и спортивной атмосферой.\n\nПочему подходит:\n• Необычная концепция\n• Отличный кофе\n• Молодая городская публика",
    "image": "/venues/extracted/extracted_p3___________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3___________________1.jpeg",
      "/venues/extracted/extracted_p3___________________2.jpeg",
      "/venues/extracted/extracted_p3___________________3.jpeg",
      "/venues/extracted/extracted_p3___________________4.jpeg",
      "/venues/extracted/extracted_p3___________________5.jpeg",
      "/venues/extracted/extracted_p3___________________6.jpeg",
      "/venues/extracted/extracted_p3___________________7.jpeg"
    ],
    "address": "Страстной бульвар, 12с5, Москва",
    "avgCheck": "800–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "кафе",
      "активность"
    ]
  },
  {
    "id": "118",
    "name": "Roof180",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$$",
    "description": "Крыша",
    "fullDescription": "Крыша\n\nПочему подходит:\n• Красивые закаты\n• Видовая локация\n• Хорошо для вечера\n• Еще есть кино\n• бар (показы в Кинобаре проводятся на 18 человек.)",
    "image": "/venues/extracted/extracted_p3_Roof180_1.png",
    "images": [
      "/venues/extracted/extracted_p3_Roof180_1.png",
      "/venues/extracted/extracted_p3_Roof180_2.png",
      "/venues/extracted/extracted_p3_Roof180_3.png",
      "/venues/extracted/extracted_p3_Roof180_4.png",
      "/venues/extracted/extracted_p3_Roof180_5.png",
      "/venues/extracted/extracted_p3_Roof180_6.png",
      "/venues/extracted/extracted_p3_Roof180_7.png"
    ],
    "address": "ул. Новослободская 48, м. Новослободская",
    "avgCheck": "от 1800 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "119",
    "name": "PONO PLACE",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Креативное пространство с кофейней, событиями и расслабленной городской эстетикой.",
    "fullDescription": "Креативное пространство с кофейней, событиями и расслабленной городской эстетикой.\n\nПочему подходит:\n• Атмосферный интерьер\n• Подходит для встреч и работы\n• Центр Москвы",
    "image": "/venues/extracted/extracted_p3_PONO_PLACE_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_PONO_PLACE_1.jpeg",
      "/venues/extracted/extracted_p3_PONO_PLACE_2.jpeg",
      "/venues/extracted/extracted_p3_PONO_PLACE_3.jpeg",
      "/venues/extracted/extracted_p3_PONO_PLACE_4.jpeg",
      "/venues/extracted/extracted_p3_PONO_PLACE_5.jpeg",
      "/venues/extracted/extracted_p3_PONO_PLACE_6.jpeg",
      "/venues/extracted/extracted_p3_PONO_PLACE_7.jpeg"
    ],
    "address": "Кривоколенный переулок, 14с1, Москва",
    "avgCheck": "1500–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "120",
    "name": "«Веранда 32.05»",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Легендарная летняя веранда в саду «Эрмитаж» с расслабленной атмосферой.",
    "fullDescription": "Легендарная летняя веранда в саду «Эрмитаж» с расслабленной атмосферой.\n\nПочему подходит:\n• Один из самых атмосферных летников Москвы\n• Много зелени\n• Хорошо для свидания",
    "image": "/venues/extracted/extracted_p3__________32_05__1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3__________32_05__1.jpeg",
      "/venues/extracted/extracted_p3__________32_05__2.jpeg",
      "/venues/extracted/extracted_p3__________32_05__3.jpeg",
      "/venues/extracted/extracted_p3__________32_05__4.jpeg",
      "/venues/extracted/extracted_p3__________32_05__5.jpeg",
      "/venues/extracted/extracted_p3__________32_05__6.jpeg",
      "/venues/extracted/extracted_p3__________32_05__7.jpeg",
      "/venues/extracted/extracted_p3__________32_05__8.jpeg"
    ],
    "address": "сад «Эрмитаж», Каретный Ряд, 3, стр.1,  Москва",
    "avgCheck": "2000–4000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "121",
    "name": "City Beach Club",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Городской beach club с бассейнами, лежаками, музыкой и атмосферой отпуска в центре города.",
    "fullDescription": "Городской beach club с бассейнами, лежаками, музыкой и атмосферой отпуска в центре города.\n\nПочему подходит:\n• Летняя атмосфера\n• Подходит для отдыха компанией\n• DJ\n• сеты и вечеринки",
    "image": "/venues/extracted/extracted_p3_City_Beach_Club_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_City_Beach_Club_1.jpeg",
      "/venues/extracted/extracted_p3_City_Beach_Club_2.jpeg",
      "/venues/extracted/extracted_p3_City_Beach_Club_3.jpeg",
      "/venues/extracted/extracted_p3_City_Beach_Club_4.jpeg",
      "/venues/extracted/extracted_p3_City_Beach_Club_5.jpeg",
      "/venues/extracted/extracted_p3_City_Beach_Club_6.jpeg",
      "/venues/extracted/extracted_p3_City_Beach_Club_7.jpeg",
      "/venues/extracted/extracted_p3_City_Beach_Club_8.jpeg"
    ],
    "address": "Строгинское ш., 3, Москва",
    "avgCheck": "3000–8000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "122",
    "name": "«Вино и Хачапури»",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$",
    "description": "Уютный грузинский ресторан с домашней атмосферой, вином и традиционной кухней.",
    "fullDescription": "Уютный грузинский ресторан с домашней атмосферой, вином и традиционной кухней.\n\nПочему подходит:\n• Комфортная атмосфера\n• Подходит для долгих ужинов\n• Хорошая винная карта",
    "image": "/venues/extracted/extracted_p3___________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3___________________1.jpeg",
      "/venues/extracted/extracted_p3___________________2.jpeg",
      "/venues/extracted/extracted_p3___________________3.jpeg",
      "/venues/extracted/extracted_p3___________________4.jpeg"
    ],
    "address": "ул. Покровка, 21-23/25с1, Трубная ул., 20, ул. Солянка, 1/2 строение 1, Мясницкая ул., 13 строение 1, ул. Пятницкая, 3/4 строение 1, ул. Большая Дмитровка, 12/1с1",
    "avgCheck": "1500–3500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "123",
    "name": "Dream Beach Club",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Большой пляжный клуб с бассейнами, шезлонгами и курортной атмосферой.",
    "fullDescription": "Большой пляжный клуб с бассейнами, шезлонгами и курортной атмосферой.\n\nПочему подходит:\n• Атмосфера отпуска\n• Подходит для выходных\n• Музыка, коктейли и вечеринки",
    "image": "/venues/extracted/extracted_p3_Dream_Beach_Club_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Dream_Beach_Club_1.jpeg",
      "/venues/extracted/extracted_p3_Dream_Beach_Club_2.jpeg",
      "/venues/extracted/extracted_p3_Dream_Beach_Club_3.jpeg",
      "/venues/extracted/extracted_p3_Dream_Beach_Club_4.jpeg",
      "/venues/extracted/extracted_p3_Dream_Beach_Club_5.jpeg"
    ],
    "address": "проспект Андропова, 1, Москва",
    "avgCheck": "4000–10 000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "активность"
    ]
  },
  {
    "id": "124",
    "name": "Mina",
    "category": "Место",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$",
    "description": "Элегантный ресторан с современной подачей и атмосферой европейского city dining.",
    "fullDescription": "Элегантный ресторан с современной подачей и атмосферой европейского city dining.\n\nПочему подходит:\n• Красивый интерьер\n• Подходит для свиданий\n• Спокойная атмосфера",
    "image": "/venues/extracted/extracted_p3_Mina_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_Mina_1.jpeg",
      "/venues/extracted/extracted_p3_Mina_2.jpeg",
      "/venues/extracted/extracted_p3_Mina_3.jpeg",
      "/venues/extracted/extracted_p3_Mina_4.jpeg",
      "/venues/extracted/extracted_p3_Mina_5.jpeg",
      "/venues/extracted/extracted_p3_Mina_6.jpeg"
    ],
    "address": "Малая Никитская ул., 16/5, Москва",
    "avgCheck": "2500–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ]
  },
  {
    "id": "125",
    "name": "DNA",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Модное городское пространство с современной гастрономией и вечерней атмосферой.",
    "fullDescription": "Модное городское пространство с современной гастрономией и вечерней атмосферой.\n\nПочему подходит:\n• Подходит для вечерних встреч\n• Стильная публика\n• Современный интерьер",
    "image": "/venues/extracted/extracted_p3_DNA_1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_DNA_1.jpeg",
      "/venues/extracted/extracted_p3_DNA_2.jpeg",
      "/venues/extracted/extracted_p3_DNA_3.jpeg",
      "/venues/extracted/extracted_p3_DNA_4.jpeg",
      "/venues/extracted/extracted_p3_DNA_5.jpeg"
    ],
    "address": "Самокатная ул., 4, стр. 13, Москва",
    "avgCheck": "500–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "126",
    "name": "Кафе «Лицей»",
    "category": "Кафе",
    "mood": [
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Спокойное городское кафе с интеллигентной атмосферой и комфортной посадкой.",
    "fullDescription": "Спокойное городское кафе с интеллигентной атмосферой и комфортной посадкой.\n\nПочему подходит:\n• Хорошо для работы\n• Подходит для встреч\n• Уютная атмосфера\n• Сквер у Новодевичьего монастыря\n• Коротко: шедевр зодчества и скульптура с утятами из 90\n• х\n• Адрес: Новодевичий проезд,\n• Суперметалл\n• Коротко: минималистичный НИИ с бетоном и металлом\n• Адрес: 2\n• я Бауманская, 9/23\n• Набережная у ГЭС\n• 2\n• Коротко: футуризм и искусство в советской электростанции\n• Адрес: Болотная набережная, 15\n• Высотка на Котельнической набережной\n• Коротко: третий по высоте сталинский небоскреб\n• Адрес: Котельническая набережная, 1\n• Монумент покорителям космоса\n• Коротко: след взлетающей ракеты\n• Адрес: Проспект мира, 111\n• Остоженка\n• Коротко: новостройки и исторические особняки\n• Адрес: от площади Пречистенские Ворота до Крымской площади\n• «Пресня Сити» и «Зотов»\n• Коротко: бывший хлебозавод на фоне трех небоскребов\n• Адрес: Ходынская, 2\n• Вернисаж в Измайлово\n• Коротко: блошиный рынок в декорациях псевдорусского зодчества\n• Адрес: Измайловское шоссе, 73Ж\n• Библиотека\n• читальня Пушкина\n• Коротко: литературный сало\n• Адрес: Спартаковская, 9, стр. 3\n• Дом Мельникова\n• Коротко: авангардный памятник неочевидной формы\n• Адрес: Кривоарбатский переулок, 10",
    "image": "/venues/extracted/extracted_p3______________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3______________1.jpeg",
      "/venues/extracted/extracted_p3______________2.jpeg",
      "/venues/extracted/extracted_p3______________3.jpeg",
      "/venues/extracted/extracted_p3______________4.jpeg",
      "/venues/extracted/extracted_p3______________5.jpeg",
      "/venues/extracted/extracted_p3______________6.png",
      "/venues/extracted/extracted_p3______________7.jpeg",
      "/venues/extracted/extracted_p3______________8.jpeg",
      "/venues/extracted/extracted_p3______________9.jpeg",
      "/venues/extracted/extracted_p3______________10.jpeg",
      "/venues/extracted/extracted_p3______________11.jpeg",
      "/venues/extracted/extracted_p3______________12.jpeg",
      "/venues/extracted/extracted_p3______________13.jpeg",
      "/venues/extracted/extracted_p3______________14.jpeg",
      "/venues/extracted/extracted_p3______________15.jpeg",
      "/venues/extracted/extracted_p3______________16.jpeg",
      "/venues/extracted/extracted_p3______________17.jpeg",
      "/venues/extracted/extracted_p3______________18.jpeg",
      "/venues/extracted/extracted_p3______________19.jpeg",
      "/venues/extracted/extracted_p3______________20.jpeg",
      "/venues/extracted/extracted_p3______________21.png",
      "/venues/extracted/extracted_p3______________22.jpeg",
      "/venues/extracted/extracted_p3______________23.jpeg",
      "/venues/extracted/extracted_p3______________24.jpeg",
      "/venues/extracted/extracted_p3______________25.jpeg",
      "/venues/extracted/extracted_p3______________26.jpeg",
      "/venues/extracted/extracted_p3______________27.jpeg",
      "/venues/extracted/extracted_p3______________28.jpeg",
      "/venues/extracted/extracted_p3______________29.jpeg",
      "/venues/extracted/extracted_p3______________30.jpeg",
      "/venues/extracted/extracted_p3______________31.jpeg",
      "/venues/extracted/extracted_p3______________32.jpeg",
      "/venues/extracted/extracted_p3______________33.jpeg",
      "/venues/extracted/extracted_p3______________34.jpeg"
    ],
    "address": "Ленинградское ш., 16А, стр. 1, Москва",
    "avgCheck": "700–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "кафе",
      "чилл",
      "активность"
    ]
  },
  {
    "id": "127",
    "name": "Андреевский ставропигиальный мужской монастырь",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Андреевский ставропигиальный мужской монастырь",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p3________________________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3________________________________________________1.jpeg",
      "/venues/extracted/extracted_p3________________________________________________2.jpeg",
      "/venues/extracted/extracted_p3________________________________________________3.jpeg"
    ],
    "address": "Андреевская наб., 2 (ст. м. Ленинский проспект)",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "128",
    "name": "Николо-Перервинский монастырь",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Николо-Перервинский монастырь",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p3_______________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_______________________________1.jpeg",
      "/venues/extracted/extracted_p3_______________________________2.jpeg",
      "/venues/extracted/extracted_p3_______________________________3.jpeg"
    ],
    "address": "Шоссейная ул., 82, стр. 9 (ст. м. Печатники)",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "129",
    "name": "Иоанно-Предтеченский монастырь",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Иоанно-Предтеченский монастырь",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p3________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3________________________________1.jpeg",
      "/venues/extracted/extracted_p3________________________________2.jpeg",
      "/venues/extracted/extracted_p3________________________________3.jpeg",
      "/venues/extracted/extracted_p3________________________________4.jpeg",
      "/venues/extracted/extracted_p3________________________________5.jpeg"
    ],
    "address": "Малый Ивановский пер., 2, стр. 33 (ст. м. Китай-город)",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "130",
    "name": "Главный храм Вооружённых Сил России, Собор Воскресения Христова",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Главный храм Вооружённых Сил России, Собор Воскресения Христова",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p3_________________________________________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_________________________________________________________________1.jpeg",
      "/venues/extracted/extracted_p3_________________________________________________________________2.jpeg",
      "/venues/extracted/extracted_p3_________________________________________________________________3.jpeg",
      "/venues/extracted/extracted_p3_________________________________________________________________4.jpeg",
      "/venues/extracted/extracted_p3_________________________________________________________________5.jpeg"
    ],
    "address": "Московская область, Одинцовский городской округ, 55-й километр Минского шоссе",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "131",
    "name": "Кофейня «17 75»",
    "category": "Кафе",
    "mood": [
      "Романтика",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$$",
    "description": "камерное арт-пространство под сводами исторического дворца XVIII века с изразцовой барной стойкой и выставками",
    "fullDescription": "камерное арт-пространство под сводами исторического дворца XVIII века с изразцовой барной стойкой и выставками\n\nПочему подходит:\n• чтобы выпить фирменный «Раф Орлов» или «Дворянский краш» с десертом в самом сердце дворцового ансамбля, любуясь через стрельчатые окна на Оперный дом и Виноградные ворота",
    "image": "/venues/extracted/extracted_p3__________17_75__1.png",
    "images": [
      "/venues/extracted/extracted_p3__________17_75__1.png",
      "/venues/extracted/extracted_p3__________17_75__2.png",
      "/venues/extracted/extracted_p3__________17_75__3.png",
      "/venues/extracted/extracted_p3__________17_75__4.png"
    ],
    "address": "ул. Дольская, 1, стр. 13, Малый дворец (м. «Царицыно», «Орехово»)",
    "avgCheck": "средний чек 550–1000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "кафе",
      "романтика",
      "эстетика"
    ]
  },
  {
    "id": "132",
    "name": "Заповедник «Журавлиная родина»",
    "category": "Место",
    "mood": [
      "Чилл"
    ],
    "withWhom": [
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Заповедник «Журавлиная родина»",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p3________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3________________________________1.jpeg",
      "/venues/extracted/extracted_p3________________________________2.jpeg",
      "/venues/extracted/extracted_p3________________________________3.jpeg"
    ],
    "address": "Московская область, Талдомский городской округ, Государственный природный заказник областного значения Журавлиная родина",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "место",
      "чилл"
    ]
  },
  {
    "id": "133",
    "name": "Воробьевы Горы",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Воробьевы Горы",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p3________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3________________1.jpeg",
      "/venues/extracted/extracted_p3________________2.jpeg",
      "/venues/extracted/extracted_p3________________3.jpeg"
    ],
    "address": "Адрес: ул. Косыгина, 28, Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "134",
    "name": "Александровский сад",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Александровский сад",
    "fullDescription": "",
    "image": "/venues/extracted/extracted_p3_____________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_____________________1.jpeg",
      "/venues/extracted/extracted_p3_____________________2.jpeg",
      "/venues/extracted/extracted_p3_____________________3.jpeg"
    ],
    "address": "(ст. м. Александровский сад)",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "135",
    "name": "Государственный Дарвиновский музей",
    "category": "Место",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "budget": "$$",
    "description": "крупнейший в Европе музей теории эволюции с интерактивным центром и палеопарком",
    "fullDescription": "крупнейший в Европе музей теории эволюции с интерактивным центром и палеопарком\n\nПочему подходит:\n• чтобы увидеть динозавров, пройти «Путём эволюции» и погулять по крыше с видом на Москву\n• Wi\n• Fi: есть",
    "image": "/venues/extracted/extracted_p3____________________________________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3____________________________________1.jpeg",
      "/venues/extracted/extracted_p3____________________________________2.jpeg",
      "/venues/extracted/extracted_p3____________________________________3.jpeg",
      "/venues/extracted/extracted_p3____________________________________4.jpeg",
      "/venues/extracted/extracted_p3____________________________________5.jpeg"
    ],
    "address": "ул. Вавилова, 57 (м. «Академическая»)",
    "avgCheck": "стандартный 600 ₽, льготный 250 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "активность",
      "эстетика"
    ]
  },
  {
    "id": "136",
    "name": "Музей Холодной войны в Бункер-42 на Таганке",
    "category": "Место",
    "mood": [
      "Эстетика"
    ],
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "budget": "$$",
    "description": "бывший секретный командный пункт дальней авиации на глубине 65 метров, воссоздающий эпоху ядерного противостояния",
    "fullDescription": "бывший секретный командный пункт дальней авиации на глубине 65 метров, воссоздающий эпоху ядерного противостояния\n\nПочему подходит:\n• возможность спуститься на 18 этажей под землю, увидеть кабинет Сталина и своими глазами оценить масштаб исторических событий, необычный опыт",
    "image": "/venues/extracted/extracted_p3_______________________________42____________1.jpeg",
    "images": [
      "/venues/extracted/extracted_p3_______________________________42____________1.jpeg",
      "/venues/extracted/extracted_p3_______________________________42____________2.jpeg",
      "/venues/extracted/extracted_p3_______________________________42____________3.jpeg",
      "/venues/extracted/extracted_p3_______________________________42____________4.jpeg"
    ],
    "address": "5-й Котельнический пер., 11 (м. «Таганская»)",
    "avgCheck": "от 600 ₽ (стоимость зависит от экскурсии)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "место",
      "эстетика"
    ]
  },
  {
    "id": "137",
    "name": "Центровая локация",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Центровая локация",
    "fullDescription": "",
    "image": "/venues/image1.jpeg",
    "images": [
      "/venues/image1.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "138",
    "name": "Музыка, коктейли и вечеринки",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "budget": "$$",
    "description": "Отличный выбор в категории Место: Музыка, коктейли и вечеринки",
    "fullDescription": "",
    "image": "/venues/image1.jpeg",
    "images": [
      "/venues/image1.jpeg"
    ],
    "address": "Москва",
    "avgCheck": "Уточняйте на месте",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.5,
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ]
  },
  {
    "id": "139",
    "name": "REBEL (Винный бар)",
    "category": "Бар",
    "mood": [
      "Эстетика",
      "Романтика"
    ],
    "withWhom": [
      "Свидание",
      "Один"
    ],
    "budget": "$$",
    "description": "Эклектичный интерьер с элементами панка и классики, винный бар. необычное вишневое пиво...",
    "fullDescription": "Эклектичный интерьер с элементами панка и классики, винный бар. необычное вишневое пиво вкусная кухня в необычной подаче подойдет для свидания или встреч с друзьями",
    "image": "/venues/image1.jpeg",
    "images": [
      "/venues/image1.jpeg",
      "/venues/image2.jpeg",
      "/venues/image3.jpeg"
    ],
    "address": "Большой Трёхсвятительский переулок, 2/1с8",
    "avgCheck": "1500–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "необычное",
      "вишневое",
      "пиво"
    ]
  },
  {
    "id": "140",
    "name": "Sartoria Lamberti (ресторан)",
    "category": "Кафе",
    "mood": [
      "Романтика"
    ],
    "withWhom": [
      "Свидание"
    ],
    "budget": "$$$",
    "description": "Роскошный интерьер, концепция ателье-ресторана, высокая кухня. ресторан при отеле (Ритц-Карлтон)...",
    "fullDescription": "Роскошный интерьер, концепция ателье-ресторана, высокая кухня. ресторан при отеле (Ритц-Карлтон) именная вышивка на салфетках/платках (можно забрать с собой) стиль и статус",
    "image": "/venues/image4.jpeg",
    "images": [
      "/venues/image4.jpeg",
      "/venues/image5.jpeg",
      "/venues/image6.jpeg"
    ],
    "address": "Тверская улица, 3",
    "avgCheck": "3500–6000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "ресторан",
      "отеле",
      "(Ритц-Карлтон)"
    ]
  },
  {
    "id": "141",
    "name": "Shortlist. Books & Spirits",
    "category": "Бар",
    "mood": [
      "Эстетика",
      "Романтика"
    ],
    "withWhom": [
      "Свидание",
      "Один"
    ],
    "budget": "$$",
    "description": "Бар и книжный магазин, эстетика интеллектуального отдыха. коктейли и книги...",
    "fullDescription": "Бар и книжный магазин, эстетика интеллектуального отдыха. коктейли и книги стильная мебель, уютный свет идеально для свиданий",
    "image": "/venues/image7.jpeg",
    "images": [
      "/venues/image7.jpeg",
      "/venues/image8.jpeg",
      "/venues/image9.jpeg"
    ],
    "address": "Петровка, 26с3",
    "avgCheck": "1500–2500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "коктейли",
      "книги",
      "стильная"
    ]
  },
  {
    "id": "142",
    "name": "ГЭС-2",
    "category": "Место",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Просторное белое здание, много света, современное искусство. бесплатно (по регистрации)...",
    "fullDescription": "Просторное белое здание, много света, современное искусство. бесплатно (по регистрации) березовая роща внутри очень фотогенично",
    "image": "/venues/image10.jpeg",
    "images": [
      "/venues/media/image10.jpeg",
      "/venues/image11.jpeg",
      "/venues/image12.jpeg"
    ],
    "address": "Болотная набережная, 15",
    "avgCheck": "Бесплатно (вход)",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "бесплатно",
      "регистрации)",
      "березовая"
    ]
  },
  {
    "id": "143",
    "name": "Bloom-n-Brew",
    "category": "Кафе",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Минимализм, много света, бетонные стены, свежие цветы. спешелти кофе...",
    "fullDescription": "Минимализм, много света, бетонные стены, свежие цветы. спешелти кофе спокойный минимализм подходит для работы за ноутбуком",
    "image": "/venues/image13.jpeg",
    "images": [
      "/venues/image13.jpeg",
      "/venues/image14.jpeg",
      "/venues/image15.jpeg"
    ],
    "address": "Нижняя Красносельская улица, 35с50",
    "avgCheck": "500–1000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "спешелти",
      "кофе",
      "спокойный"
    ]
  },
  {
    "id": "144",
    "name": "Underdog",
    "category": "Кафе",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$",
    "description": "Гаражная эстетика, стрит-фуд, неформальная обстановка. очень популярно у молодежи...",
    "fullDescription": "Гаражная эстетика, стрит-фуд, неформальная обстановка. очень популярно у молодежи вкусные бургеры и хот-доги атмосфера Берлина или Нью-Йорка",
    "image": "/venues/image19.jpeg",
    "images": [
      "/venues/image19.jpeg",
      "/venues/image20.jpeg",
      "/venues/image21.jpeg"
    ],
    "address": "Маросейка, 6/8с1",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "очень",
      "популярно",
      "молодежи"
    ]
  },
  {
    "id": "145",
    "name": "Lobby Moscow",
    "category": "Кафе",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "budget": "$$",
    "description": "Арт-консьерж и кофейня, очень дорогой и стильный вид. искусство + кофе...",
    "fullDescription": "Арт-консьерж и кофейня, очень дорогой и стильный вид. искусство + кофе идеальное место для красивых фото тихая роскошь",
    "image": "/venues/image22.jpeg",
    "images": [
      "/venues/image22.jpeg",
      "/venues/image23.jpeg",
      "/venues/image24.jpeg"
    ],
    "address": "Варварка, 3",
    "avgCheck": "1000–2000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "искусство",
      "кофе",
      "идеальное"
    ]
  },
  {
    "id": "146",
    "name": "KM20 (ресторан)",
    "category": "Кафе",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$$",
    "description": "Светлое пространство, европейский стиль. бранчи фотогенично спокойный формат...",
    "fullDescription": "Светлое пространство, европейский стиль. бранчи фотогенично спокойный формат",
    "image": "/venues/image25.jpeg",
    "images": [
      "/venues/image25.jpeg",
      "/venues/image26.jpeg",
      "/venues/image27.jpeg"
    ],
    "address": "Столешников переулок, 2",
    "avgCheck": "800–1500 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.8,
    "tags": [
      "бранчи",
      "фотогенично",
      "спокойный"
    ]
  },
  {
    "id": "147",
    "name": "Pims (чайный бар)",
    "category": "Бар",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "budget": "$",
    "description": "Современный чайный бар. необычные напитки быстро и модно для молодежи...",
    "fullDescription": "Современный чайный бар. необычные напитки быстро и модно для молодежи",
    "image": "/venues/image31.jpeg",
    "images": [
      "/venues/image31.jpeg",
      "/venues/image32.jpeg",
      "/venues/image33.jpeg"
    ],
    "address": "Тверская улица, 18к1",
    "avgCheck": "500–900 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.6,
    "tags": [
      "необычные",
      "напитки",
      "быстро"
    ]
  },
  {
    "id": "148",
    "name": "Yauza Place 6",
    "category": "Место",
    "mood": [
      "Активность"
    ],
    "withWhom": [
      "Друзья"
    ],
    "budget": "$$",
    "description": "Креативное пространство + еда + музыка. и поесть, и потусить часто мероприятия современная публика...",
    "fullDescription": "Креативное пространство + еда + музыка. и поесть, и потусить часто мероприятия современная публика",
    "image": "/venues/image40.jpeg",
    "images": [
      "/venues/image40.jpeg",
      "/venues/image41.jpeg",
      "/venues/image42.jpeg"
    ],
    "address": "Яузская улица, 1/15с1",
    "avgCheck": "1500–3000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.7,
    "tags": [
      "поесть,",
      "потусить",
      "часто"
    ]
  },
  {
    "id": "149",
    "name": "Lucky Izakaya Bar",
    "category": "Бар",
    "mood": [
      "Эстетика",
      "Романтика"
    ],
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "budget": "$$$",
    "description": "Современный японский ресторан. Стильная подача Подходит для ужина и ДР...",
    "fullDescription": "Современный японский ресторан. Стильная подача Подходит для ужина и ДР",
    "image": "/venues/image74.jpeg",
    "images": [
      "/venues/image74.jpeg",
      "/venues/image87.jpeg",
      "/venues/image88.jpeg"
    ],
    "address": "Большой Козихинский переулок, 13/1",
    "avgCheck": "3000–5000 ₽",
    "mapUrl": "https://yandex.ru/maps",
    "rating": 4.9,
    "tags": [
      "Стильная",
      "подача",
      "Подходит"
    ]
  }
];
