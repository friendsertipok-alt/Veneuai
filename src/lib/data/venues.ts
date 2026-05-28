export interface Venue {
  id: string;
  name: string;
  category: string;
  timeSection: "День / Вечер" | "Ночь / Чилл";
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
    "tags": [
      "кафе",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "1",
    "image": "/venues/extracted/extracted_clean_p1_v1_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v1_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v1_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v1_3.jpeg"
    ],
    "address": "ул. Лесная, 20с3",
    "timeSection": "Ночь / Чилл",
    "category": "Кафе",
    "fullDescription": "Огромный гастрономический кластер с десятками кухонь мира. Живая, шумная, веселая.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно выбрать любую еду (азиатская, итальянская, фастфуд)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Не нужно бронировать\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Отлично для ДР",
    "name": "Фудмолл «Депо Москва»",
    "description": "Огромный гастрономический кластер с десятками кухонь мира. Живая, шумная, веселая.",
    "mood": [
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "4000–7000 ₽",
    "id": "2",
    "image": "/venues/extracted/extracted_clean_p1_v2_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v2_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v2_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v2_3.jpeg"
    ],
    "address": "Смоленская площадь, 3",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Премиум-ресторан с панорамным видом на Москву.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Для красивого ДР / свидания\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Авторская кухня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивый интерьер",
    "name": "White Rabbit",
    "description": "Премиум-ресторан с панорамным видом на Москву.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бар",
      "активность"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2500–3000",
    "id": "3",
    "image": "/venues/extracted/extracted_clean_p1_v3_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v3_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v3_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v3_3.jpeg"
    ],
    "address": "Тверская, 23/1",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Модный бар с диджеями, танцами и коктейлями.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Отлично для вечеринки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• После 22:00 работает как клуб",
    "name": "Noor Bar",
    "description": "Модный бар с диджеями, танцами и коктейлями.",
    "mood": [
      "Активность"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "2000–3500 ₽",
    "id": "4",
    "image": "/venues/extracted/extracted_clean_p1_v4_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v4_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v4_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v4_3.jpeg"
    ],
    "address": "Спиридоньевский пер., 10А",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Уют «как у бабушки дома», советский стиль.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Нестандартный формат\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивый интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Фото\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• локация",
    "name": "Mari Vanna",
    "description": "Уют «как у бабушки дома», советский стиль.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бар",
      "романтика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3000–5000 ₽",
    "id": "5",
    "image": "/venues/extracted/extracted_clean_p1_v5_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v5_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v5_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v5_3.jpeg"
    ],
    "address": "Космодамианская наб., 52с6",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Панорамный бар на высоте — вечерний вид на город.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Романтика / день рождения\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коктейли + вау\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• вид\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Более спокойный, чем клуб",
    "name": "City Space Bar",
    "description": "Панорамный бар на высоте — вечерний вид на город.",
    "mood": [
      "Романтика",
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "500–1000 ₽",
    "id": "6",
    "image": "/venues/extracted/extracted_clean_p1_v6_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v6_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v6_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v6_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v6_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v6_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v6_6.jpeg",
      "/venues/extracted/extracted_clean_p1_v6_7.jpeg"
    ],
    "address": "Малая Никитская ул., 12, стр. 12, Москва (Вход через главные ворота усадьбы, либо через книжный магазин Пиотровский)",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Небольшая городская кофейня с акцентом на specialty coffee и спокойную посадку.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для работы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Спокойная атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Уютный формат",
    "name": "Ritmo X Giardino",
    "description": "Небольшая городская кофейня с акцентом на specialty coffee и спокойную посадку.",
    "mood": [
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Свидание",
      "Семья"
    ],
    "avgCheck": "800–1200 ₽",
    "id": "7",
    "image": "/venues/extracted/extracted_clean_p1_v7_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v7_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v7_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v7_3.jpeg"
    ],
    "address": "улица Арбат, 29",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Советский ретро-стиль, уютно.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• недорого\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• национальная кухня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• спокойный ДР",
    "name": "Вареничная №1",
    "description": "Советский ретро-стиль, уютно.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "400–900 ₽",
    "id": "8",
    "image": "/venues/extracted/extracted_clean_p1_v8_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v8_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v8_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v8_3.jpeg"
    ],
    "address": "много точек, Калашный пер.5",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Минимализм, стильный дизайн, кофейная культура.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• популярно среди студентов\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• эстетика + хороший кофе\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• удобно работать",
    "name": "Skuratov Coffee roasters",
    "description": "Минимализм, стильный дизайн, кофейная культура.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "9",
    "image": "/venues/extracted/extracted_clean_p1_v9_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v9_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v9_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v9_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v9_4.jpeg"
    ],
    "address": "Много точек, например 2-я Звенигородская ул., 12, стр. 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Светлое пространство, европейский стиль.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• бранчи\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• фотогенично\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• спокойный формат",
    "name": "ABC Coffee Roasters",
    "description": "Светлое пространство, европейский стиль.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "1000–1800 ₽",
    "id": "10",
    "image": "/venues/extracted/extracted_clean_p1_v10_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v10_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v10_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v10_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v10_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v10_5.jpeg"
    ],
    "address": "Большая Садовая ул., 5, корп. 2, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Ярко, модно, бранч-место.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• завтраки весь день\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• очень “инстаграмно”\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• популярно у молодежи",
    "name": "Eggsellent",
    "description": "Ярко, модно, бранч-место.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "500–900 ₽",
    "id": "11",
    "image": "/venues/extracted/extracted_clean_p1_v11_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v11_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v11_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v11_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v11_4.jpeg"
    ],
    "address": "много точек (например Рождественский бул., 1, Москва)",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Современный чайный бар.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• необычные напитки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• быстро и модно\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• для молодежи",
    "name": "Pims",
    "description": "Современный чайный бар.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "500–1500 ₽",
    "id": "12",
    "image": "/venues/extracted/extracted_clean_p1_v12_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v12_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v12_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v12_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v12_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v12_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v12_6.jpeg",
      "/venues/extracted/extracted_clean_p1_v12_7.jpeg"
    ],
    "address": "много точек (например: Мясницкая улица, 24/7с1, Неглинная ул., 14, стр. 1А)",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Свобода, серф-культура, неформально.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• популярное место\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• легко собраться компанией\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• недорого",
    "name": "Surf Coffee",
    "description": "Свобода, серф-культура, неформально.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "2000–3000 ₽",
    "id": "13",
    "image": "/venues/extracted/extracted_clean_p1_v13_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v13_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v13_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v13_3.jpeg"
    ],
    "address": "Тверской бул., 3, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Светлый luxury-минимализм.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• очень стильное место\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• популярно в Instagram\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• подходит для фото и ДР",
    "name": "Gentle Cafe",
    "description": "Светлый luxury-минимализм.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "14",
    "image": "/venues/extracted/extracted_clean_p1_v14_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v14_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v14_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v14_3.jpeg"
    ],
    "address": "Яузский бул., 12, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Креативное пространство + еда + музыка.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• и поесть, и потусить\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• часто мероприятия\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• современная публика",
    "name": "Yauza Place",
    "description": "Креативное пространство + еда + музыка.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3000–6000₽",
    "id": "15",
    "image": "/venues/extracted/extracted_clean_p1_v15_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v15_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v15_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v15_3.jpeg"
    ],
    "address": "Хохловский переулок, 7-9с5",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Зелень, дворик, европейский стиль.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• летняя атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• фотогенично\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• подходит для ДР",
    "name": "Blanc",
    "description": "Зелень, дворик, европейский стиль.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "4000–6000 ₽",
    "id": "16",
    "image": "/venues/extracted/extracted_clean_p1_v16_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v16_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v16_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v16_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v16_4.jpeg"
    ],
    "address": "1-я Тверская-Ямская ул., 21",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Современный fine dining.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• гастрономический опыт\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• стиль + кухня",
    "name": "Sage",
    "description": "Современный fine dining.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3000–5000 ₽",
    "id": "17",
    "image": "/venues/extracted/extracted_clean_p1_v17_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v17_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v17_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v17_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v17_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v17_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v17_6.jpeg"
    ],
    "address": "Цветной бульвар, д. 2 — Москва, ЦАО",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Европейский современный ресторан.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• модное место\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• подходит для ДР\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• стильный интерьер",
    "name": "Ava Bistro",
    "description": "Европейский современный ресторан.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "18",
    "image": "/venues/extracted/extracted_clean_p1_v18_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v18_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v18_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v18_3.jpeg"
    ],
    "address": "Рождественский бульвар, 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Гастромаркет нового формата, современный и оживлённый.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Большой выбор кухонь\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Удобно для компании\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Популярное городское место",
    "name": "Центральный рынок на Трубной",
    "description": "Гастромаркет нового формата, современный и оживлённый.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бар",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "3000–6000₽",
    "id": "19",
    "image": "/venues/extracted/extracted_clean_p1_v19_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v19_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v19_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v19_3.jpeg"
    ],
    "address": "Рочдельская ул., 15, стр. 30, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Современный бар с активной вечерней жизнью.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для дня рождения\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Музыка и вечеринки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Популярно среди молодежи",
    "name": "Zavarka (бар)",
    "description": "Современный бар с активной вечерней жизнью.",
    "mood": [
      "Активность"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "1500–2500 ₽",
    "id": "20",
    "image": "/venues/extracted/extracted_clean_p1_v20_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v20_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v20_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v20_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v20_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v20_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v20_6.jpeg"
    ],
    "address": "Кривоколенный пер., 7, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Минимализм, европейский стиль.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Спокойный отдых\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Эстетичный интерьер",
    "name": "Flaner",
    "description": "Минимализм, европейский стиль.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1500–2500 ₽",
    "id": "21",
    "image": "/venues/extracted/extracted_clean_p1_v21_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v21_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v21_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v21_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v21_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v21_5.jpeg"
    ],
    "address": "mates: ул. М.Бронная, 16, ул. Мантулинская, 5с11, Шаболовка, 19, Ходынский бульвар, 4, ТЦ Авиапарк, этаж 2, Большая Грузинская ул., 76, стр. 2, Центральный федеральный округ, Московская область, Одинцовский городской округ, территориальное управление Новоивановское",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Модное молодежное место.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Популярно у студентов\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для бранча",
    "name": "Mátes",
    "description": "Модное молодежное место.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "22",
    "image": "/venues/extracted/extracted_clean_p1_v22_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v22_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v22_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v22_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v22_4.jpeg"
    ],
    "address": "Новослободская ул., 73, стр. 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Современная пекарня.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Десерты и кофе\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для короткой встречи",
    "name": "Layerz Bakery",
    "description": "Современная пекарня.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бар",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "23",
    "image": "/venues/extracted/extracted_clean_p1_v23_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v23_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v23_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v23_3.jpeg"
    ],
    "address": "Большой Трёхсвятительский переулок, 2/1, стр. 8",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Современный коктейльный бар с эстетикой минимализма и приглушённым светом.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для вечернего отдыха\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Стильные коктейли и подача\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Популярное место в центре",
    "name": "Сюр (Sur Bar)",
    "description": "Современный коктейльный бар с эстетикой минимализма и приглушённым светом.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "24",
    "image": "/venues/extracted/extracted_clean_p1_v24_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v24_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v24_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v24_3.jpeg"
    ],
    "address": "Гончарная улица, 7/4с1",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Музыка и творческое пространство.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Живые концерты\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Неформальная обстановка",
    "name": "Powerhouse Moscow",
    "description": "Музыка и творческое пространство.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "25",
    "image": "/venues/extracted/extracted_clean_p1_v25_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v25_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v25_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v25_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v25_4.jpeg"
    ],
    "address": "Тверской бул., 13, стр. 1",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Клубный бар с активной жизнью.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Тусовки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Много людей",
    "name": "Simach",
    "description": "Клубный бар с активной жизнью.",
    "mood": [
      "Активность"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1500–3500 ₽",
    "id": "26",
    "image": "/venues/extracted/extracted_clean_p1_v26_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v26_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v26_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v26_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v26_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v26_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v26_6.jpeg",
      "/venues/extracted/extracted_clean_p1_v26_7.jpeg"
    ],
    "address": "Большой Сухаревский пер., 25, стр. 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Городское пространство с ресторанной частью, мероприятиями и современной публикой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Живая атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Часто проходят события\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для вечерних встреч",
    "name": "Дом Культур",
    "description": "Городское пространство с ресторанной частью, мероприятиями и современной публикой.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "800–2000 ₽",
    "id": "27",
    "image": "/venues/extracted/extracted_clean_p1_v27_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v27_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v27_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v27_3.jpeg"
    ],
    "address": "Новодмитровская улица , 1с1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Городское пространство, стрит-культура.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Прогулка и еда\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Много локаций",
    "name": "Хлебозавод №9",
    "description": "Городское пространство, стрит-культура.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1000–2500 ₽",
    "id": "28",
    "image": "/venues/extracted/extracted_clean_p1_v28_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v28_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v28_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v28_3.jpeg"
    ],
    "address": "Большая Новодмитровская улица, 36",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Дизайн-завод, арт-среда.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Креативные активности\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Много заведений",
    "name": "Флакон",
    "description": "Дизайн-завод, арт-среда.",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "романтика",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "29",
    "image": "/venues/extracted/extracted_clean_p1_v29_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v29_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v29_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v29_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v29_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v29_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v29_6.jpeg"
    ],
    "address": "Трубная ул., 26, корп. 1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Небольшое европейское бистро с винной атмосферой и камерной посадкой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для ужина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Небольшое и атмосферное место\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для свидания",
    "name": "Bistro Trompette",
    "description": "Небольшое европейское бистро с винной атмосферой и камерной посадкой.",
    "mood": [
      "Романтика",
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "3000–5000 ₽",
    "id": "30",
    "image": "/venues/extracted/extracted_clean_p1_v30_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v30_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v30_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v30_3.jpeg"
    ],
    "address": "Цветной бульвар, 2",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Современная гастрономия.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Необычная кухня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Эстетика",
    "name": "Folk",
    "description": "Современная гастрономия.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "31",
    "image": "/venues/extracted/extracted_clean_p1_v31_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v31_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v31_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v31_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v31_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v31_5.jpeg"
    ],
    "address": "Большая Бронная, 25с3",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Маленькая бургерная с трендовыми smash-бургерами.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Трендовый формат бургеров\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Быстро и вкусно",
    "name": "Smash Point",
    "description": "Маленькая бургерная с трендовыми smash-бургерами.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "активность"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "2000–2500 ₽",
    "id": "32",
    "image": "/venues/extracted/extracted_clean_p1_v32_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v32_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v32_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v32_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v32_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v32_5.jpeg"
    ],
    "address": "Неглинная ул., 29с1",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Бильярд + бар + расслабленный вечер.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Активный отдых\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно провести ДР",
    "name": "Billy (бильярд-клуб)",
    "description": "Бильярд + бар + расслабленный вечер.",
    "mood": [
      "Чилл",
      "Активность"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "1500–2000 ₽",
    "id": "33",
    "image": "/venues/extracted/extracted_clean_p1_v33_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p1_v33_1.png",
      "/venues/extracted/extracted_clean_p1_v33_2.png",
      "/venues/extracted/extracted_clean_p1_v33_3.png"
    ],
    "address": "много адресов (например, ул. Уточкина, д. 5, корп. 1, просп. Лихачёва, д. 12, корп. 4, Дубининская ул., д. 59А)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Уютное современное кафе.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Завтраки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Спокойная встреча",
    "name": "Здрасьте",
    "description": "Уютное современное кафе.",
    "mood": [
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "1000–1500 ₽",
    "id": "34",
    "image": "/venues/extracted/extracted_clean_p1_v34_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v34_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v34_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v34_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v34_4.jpeg"
    ],
    "address": "несколько адресов (например, Лесная улица 20, стр.3 в Депо)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Европейская сэндвичная.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Для завтраков\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Быстро перекусить\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Современно и просто",
    "name": "Bageatteria",
    "description": "Европейская сэндвичная.",
    "mood": [
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "350–700 ₽",
    "id": "35",
    "image": "/venues/extracted/extracted_clean_p1_v35_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v35_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v35_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v35_3.jpeg"
    ],
    "address": "много точек (например, Лубянский пр., 25, стр. 1)",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Технологичная кофейня нового формата.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Быстро\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Современно",
    "name": "Drinkit",
    "description": "Технологичная кофейня нового формата.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4500 ₽",
    "id": "36",
    "image": "/venues/extracted/extracted_clean_p1_v36_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v36_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_6.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_7.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_8.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_9.jpeg",
      "/venues/extracted/extracted_clean_p1_v36_10.jpeg"
    ],
    "address": "ул. Покровка, 6, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Стильный ресторан с современным интерьером и расслабленной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивое пространство\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для ужина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центровая локация",
    "name": "DeLaura",
    "description": "Стильный ресторан с современным интерьером и расслабленной атмосферой.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "500–1000 ₽",
    "id": "37",
    "image": "/venues/extracted/extracted_clean_p1_v37_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p1_v37_1.png",
      "/venues/extracted/extracted_clean_p1_v37_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v37_3.png"
    ],
    "address": "много адресов (например, Тверская ул., 8, корп. 1, стр. 3, Москва)",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Современная кофейня.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Работа и встречи\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Удобно, быстро и комфортно",
    "name": "Stars Coffee",
    "description": "Современная кофейня.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "активность"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "38",
    "image": "/venues/extracted/extracted_clean_p1_v38_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p1_v38_1.png",
      "/venues/extracted/extracted_clean_p1_v38_2.png",
      "/venues/extracted/extracted_clean_p1_v38_3.png"
    ],
    "address": "несколько адресов (например, ул. Лесная, 20с3)",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Мясной бар с музыкой и активной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Для хорошего времяпровождения\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Весёлая компания",
    "name": "Frank by Basta",
    "description": "Мясной бар с музыкой и активной атмосферой.",
    "mood": [
      "Чилл",
      "Активность"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1000–3000 ₽",
    "id": "39",
    "image": "/venues/extracted/extracted_clean_p1_v39_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v39_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v39_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v39_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v39_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v39_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v39_6.jpeg"
    ],
    "address": "ул. Крымский Вал, 9, стр. 11, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Современное гастробистро с авторской кухней и винной картой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для гастро\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• ужина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошая винная карта\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Атмосферное пространство",
    "name": "Cochonnet",
    "description": "Современное гастробистро с авторской кухней и винной картой.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1000–2000 ₽",
    "id": "40",
    "image": "/venues/extracted/extracted_clean_p1_v40_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v40_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v40_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v40_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v40_4.jpeg"
    ],
    "address": "Красноказарменная ул., 19; Крымский вал 9, павильон 5 (я запуталась точно ли их 2)",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "современное стильное кафе, акцент на десерты и визуал\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• фотогенично, подходит для встреч и ДР",
    "name": "Substance Bistro",
    "description": "современное стильное кафе, акцент на десерты и визуал",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "41",
    "image": "/venues/extracted/extracted_clean_p1_v41_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v41_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v41_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v41_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v41_4.jpeg"
    ],
    "address": "Лесная ул., 9; Пресненская наб., 2, улица Новый Арбат д.21, ул. Мясницкая д.7/11",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "современный стейк-хаус\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• мясная кухня, подходит для ужина, празднования ДР, свиданий",
    "name": "Steak It Easy",
    "description": "современный стейк-хаус",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "3000–5000 ₽",
    "id": "42",
    "image": "/venues/extracted/extracted_clean_p1_v42_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v42_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v42_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v42_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v42_4.jpeg"
    ],
    "address": "ул. Спиридоновка, 25/20 строение 1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "элегантный ресторан, спокойный интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• свидания, красивый ужин",
    "name": "Grace Bistro",
    "description": "элегантный ресторан, спокойный интерьер",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "1500–2500 ₽",
    "id": "43",
    "image": "/venues/extracted/extracted_clean_p1_v43_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v43_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v43_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v43_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v43_4.jpeg"
    ],
    "address": "ул. Солянка, 1/2с1, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "уютное европейское кафе\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• спокойный отдых, встречи",
    "name": "Senti Menti",
    "description": "уютное европейское кафе",
    "mood": [
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "44",
    "image": "/venues/extracted/extracted_clean_p1_v44_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v44_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v44_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v44_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v44_4.jpeg"
    ],
    "address": "2-я Звенигородская ул., 12, стр. 23",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "средиземноморский ресторан\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• ужин, встречи",
    "name": "Papandopulo",
    "description": "средиземноморский ресторан",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "45",
    "image": "/venues/extracted/extracted_clean_p1_v45_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v45_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v45_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v45_3.png"
    ],
    "address": "ул. Большая Никитская, 23/14/9 (Основной и самый известный филиал)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "уличная еда\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• быстро и недорого",
    "name": "KULEK",
    "description": "уличная еда",
    "mood": [
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Один"
    ],
    "avgCheck": "1000–2000 ₽",
    "id": "46",
    "image": "/venues/extracted/extracted_clean_p1_v46_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v46_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v46_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v46_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v46_4.jpeg"
    ],
    "address": "площадь Спартаковская, 16/15с2",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "уютная, тихо\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• работа и встречи",
    "name": "Smart Day",
    "description": "уютная, тихо",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "47",
    "image": "/venues/extracted/extracted_clean_p1_v47_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v47_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v47_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v47_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v47_4.jpeg"
    ],
    "address": "Цветной бульвар, 15, стр. 1; Большой Патриарший пер., 12, стр. 1; Лесная ул., 10-16; Новорязанская ул., 23, стр. 1 и т.д",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "healthy food\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• быстро и полезно",
    "name": "Raw To Go",
    "description": "healthy food",
    "mood": [
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–3500 ₽",
    "id": "48",
    "image": "/venues/extracted/extracted_clean_p1_v48_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v48_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v48_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v48_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v48_4.jpeg"
    ],
    "address": "улица Сретенка, 21/28c1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "морской ресторан\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• ужин, компания, празднование ДР",
    "name": "Мидийное место",
    "description": "морской ресторан",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "49",
    "image": "/venues/extracted/extracted_clean_p1_v49_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v49_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v49_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v49_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v49_4.jpeg"
    ],
    "address": "Малая Никитская ул., 24, стр. 1, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "премиум кальянная\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• отдых компанией",
    "name": "HookahPlace Ultima",
    "description": "премиум кальянная",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "от 4900 за мастер-класс",
    "id": "50",
    "image": "/venues/extracted/extracted_clean_p1_v50_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p1_v50_1.jpeg",
      "/venues/extracted/extracted_clean_p1_v50_2.jpeg",
      "/venues/extracted/extracted_clean_p1_v50_3.jpeg",
      "/venues/extracted/extracted_clean_p1_v50_4.jpeg",
      "/venues/extracted/extracted_clean_p1_v50_5.jpeg",
      "/venues/extracted/extracted_clean_p1_v50_6.jpeg",
      "/venues/extracted/extracted_clean_p1_v50_7.jpeg",
      "/venues/extracted/extracted_clean_p1_v50_8.jpeg"
    ],
    "address": "улица 1905 года, 10с1, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Коктейльная студия и пространство для барных мастер-классов.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Интерактивный формат\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для вечера с друзьями\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно научиться готовить коктейли",
    "name": "ProShaker",
    "description": "Коктейльная студия и пространство для барных мастер-классов.",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "700–1000 ₽",
    "id": "51",
    "image": "/venues/extracted/extracted_clean_p2_v51_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p2_v51_1.png",
      "/venues/extracted/extracted_clean_p2_v51_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v51_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v51_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v51_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v51_6.jpeg"
    ],
    "address": "Долгоруковская, 27с1; Ананьевский переулок, 4/2с1; Покровка, 9с1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Небольшое уличное кафе с неформальной атмосферой и акцентом на быстрый перекус.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• вкусные сэндвичи\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• быстро и недорого\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• подходит для компании",
    "name": "Dodgy Сэндвич",
    "description": "Небольшое уличное кафе с неформальной атмосферой и акцентом на быстрый перекус.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1200–2000 ₽",
    "id": "52",
    "image": "/venues/extracted/extracted_clean_p2_v52_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v52_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v52_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v52_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v52_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v52_5.jpeg"
    ],
    "address": "Новослободская ул., 21 / Кузнецкий Мост, 19с1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Итальянский casual с акцентом на пасту и яркую подачу.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• любителям пасты\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• модное место\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• подходит для ужина",
    "name": "Pasta Queen",
    "description": "Итальянский casual с акцентом на пасту и яркую подачу.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–3500 ₽",
    "id": "53",
    "image": "/venues/extracted/extracted_clean_p2_v53_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v53_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v53_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v53_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v53_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v53_5.jpeg"
    ],
    "address": "HYPERLINK \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Стильный ресторан с вечерней атмосферой и мягким светом.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• романтика\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• ужин / день рождения\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• красивый интерьер",
    "name": "Loona",
    "description": "Стильный ресторан с вечерней атмосферой и мягким светом.",
    "mood": [
      "Романтика",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "54",
    "image": "/venues/extracted/extracted_clean_p2_v54_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v54_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v54_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v54_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v54_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v54_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v54_6.jpeg"
    ],
    "address": "ул. Кузнецкий Мост, 6/3с3",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Современное азиатское место с расслабленной и модной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• азиатская кухня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• встречи с друзьями\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• стильное пространство",
    "name": "Kaifuso",
    "description": "Современное азиатское место с расслабленной и модной атмосферой.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "1000–2000 ₽",
    "id": "55",
    "image": "/venues/extracted/extracted_clean_p2_v55_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v55_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v55_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v55_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v55_4.jpeg"
    ],
    "address": "ул. Остоженка, 14/2",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Минималистичный, оригинальный бар.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• спокойный отдых\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• красивая и комфортная обстановка",
    "name": "Инта",
    "description": "Минималистичный, оригинальный бар.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "600–900 ₽",
    "id": "56",
    "image": "/venues/extracted/extracted_clean_p2_v56_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v56_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v56_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v56_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v56_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v56_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v56_6.jpeg"
    ],
    "address": "Газетный пер., 3",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Небольшая specialty-кофейня с акцентом на кофе.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• качественный кофе\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• работа / учеба\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• тихая атмосфера",
    "name": "Sip Coffee",
    "description": "Небольшая specialty-кофейня с акцентом на кофе.",
    "mood": [
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бар",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "600–1200 ₽",
    "id": "57",
    "image": "/venues/extracted/extracted_clean_p2_v57_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v57_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v57_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v57_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v57_4.jpeg"
    ],
    "address": "ул. Грузинский Вал, 11, стр. 3",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Современное пространство с технологичным и минималистичным дизайном.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• быстро и удобно\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• современный формат\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• встречи и работа",
    "name": "Pods (кальян-бар)",
    "description": "Современное пространство с технологичным и минималистичным дизайном.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1000–2000 ₽",
    "id": "58",
    "image": "/venues/extracted/extracted_clean_p2_v59_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v59_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v59_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v59_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v59_4.jpeg"
    ],
    "address": "Ленинский пр-т, 95",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Креативное место с необычной концепцией и молодежной аудиторией.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• необычный опыт\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• встречи с друзьями\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• атмосферно",
    "name": "Brooms",
    "description": "Креативное место с необычной концепцией и молодежной аудиторией.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "59",
    "image": "/venues/extracted/extracted_clean_p2_v60_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v60_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v60_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v60_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v60_4.jpeg"
    ],
    "address": "Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Аллея МГУ - Университетская площадь, Москва (территория МГУ на Ленинских горах)",
    "description": "Отличный выбор в категории Место: Аллея МГУ - Университетская площадь, Москва (территория МГУ на Ленинских горах)",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "60",
    "image": "/venues/extracted/extracted_clean_p2_v62_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v62_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v62_2.jpeg"
    ],
    "address": "Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Парк Хуамин (Улица Вильгельма Пика, дом 14, Москва)",
    "description": "Отличный выбор в категории Место: Парк Хуамин (Улица Вильгельма Пика, дом 14, Москва)",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "61",
    "image": "/venues/extracted/extracted_clean_p2_v63_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v63_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v63_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v63_3.jpeg"
    ],
    "address": "Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Аптекарский огород (Проспект Мира, дом 26, строение 1, Москва )",
    "description": "Отличный выбор в категории Место: Аптекарский огород (Проспект Мира, дом 26, строение 1, Москва )",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "62",
    "image": "/venues/extracted/extracted_clean_p2_v64_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v64_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v64_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v64_3.jpeg"
    ],
    "address": "Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Парк Горького (Крымский Вал, дом 9, Москва )",
    "description": "Отличный выбор в категории Место: Парк Горького (Крымский Вал, дом 9, Москва )",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "63",
    "image": "/venues/extracted/extracted_clean_p2_v65_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v65_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v65_2.jpeg"
    ],
    "address": "Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Бирюлевский дендропарк (Липецкая улица, 5а, Москва )",
    "description": "Отличный выбор в категории Место: Бирюлевский дендропарк (Липецкая улица, 5а, Москва )",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2200 ₽",
    "id": "64",
    "image": "/venues/extracted/extracted_clean_p2_v66_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v66_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v66_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v66_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v66_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v66_5.jpeg"
    ],
    "address": "Большая Дмитровка, 5/6с3",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Ресторан средиземноморской кухни с акцентом на Грецию, Турцию и Италию. Здесь большая открытая кухня с печью и готовкой на открытом огне, уютно и шумно в хорошем смысле. Посадка плотная, но собеседника слышно отлично .\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• вкусные мезе и пахлава\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• открытая кухня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• проект Аркадия Новикова",
    "name": "Moró",
    "description": "Ресторан средиземноморской кухни с акцентом на Грецию, Турцию и Италию. Здесь большая открытая кухня с печью и готовк...",
    "mood": [
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "5000–10000 ₽ (полет на симуляторе)",
    "id": "65",
    "image": "/venues/extracted/extracted_clean_p2_v67_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v67_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v67_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v67_3.jpeg"
    ],
    "address": "Пресненская наб., 2 (6 этаж)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Аттракцион-симулятор полета на настоящем авиатренажере Boeing. Профессиональные пилоты-инструкторы помогают освоить управление. Очень реалистично — от взлета до посадки, можно \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",
    "name": "Dream Aero",
    "description": "Аттракцион-симулятор полета на настоящем авиатренажере Boeing. Профессиональные пилоты-инструкторы помогают освоить у...",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "3000–5000 ₽",
    "id": "66",
    "image": "/venues/extracted/extracted_clean_p2_v68_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v68_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v68_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v68_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v68_4.jpeg"
    ],
    "address": "Кузнецкий Мост, 3с2",
    "timeSection": "Ночь / Чилл",
    "category": "Кафе",
    "fullDescription": "Караоке-бар и лаундж-ресторан от Анны Асти. Днем — спокойный ресторан, после полуночи — танцпол с диджеями и шоу-программой. Работает до 6 утра. Авторские коктейли, кухня фьюжн .\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• караоке и танцы до утра\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• тусовочное место\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• центр города",
    "name": "Сплетни",
    "description": "Караоке-бар и лаундж-ресторан от Анны Асти. Днем — спокойный ресторан, после полуночи — танцпол с диджеями и шоу-прог...",
    "mood": [
      "Чилл",
      "Активность"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "700–1500 ₽ (билет на программу)",
    "id": "67",
    "image": "/venues/extracted/extracted_clean_p2_v69_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v69_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v69_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v69_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v69_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v69_5.jpeg"
    ],
    "address": "Садовая-Кудринская, 5с1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Научно-просветительский центр с Большим Звездным залом под куполом, обсерваторией и интерактивным музеем «Лунариум». Полнокупольные фильмы о космосе, удобные кресла, можно лежать и смотреть на звезды .\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• познавательно и красиво\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• подходит всем возрастам\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• отличный вариант для свидания",
    "name": "Московский Планетарий",
    "description": "Научно-просветительский центр с Большим Звездным залом под куполом, обсерваторией и интерактивным музеем «Лунариум». ...",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "от 15000 ₽ (проведение шоу на мероприятии)",
    "id": "68",
    "image": "/venues/extracted/extracted_clean_p2_v70_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v70_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v70_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v70_3.jpeg"
    ],
    "address": "Денисовский переулок, 30с1",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Ивент-команда, которая проводит развлекательные шоу в формате телевизионных игр: «Студия союз», «Где логика?», «Импровизация». Можно приехать в их студию или заказать выезд на праздник .\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• уникальный формат\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• идеально для компании друзей\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• профессиональный ведущий и диджей",
    "name": "Good Night Show",
    "description": "Ивент-команда, которая проводит развлекательные шоу в формате телевизионных игр: «Студия союз», «Где логика?», «Импро...",
    "mood": [
      "Активность"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1500–2500 ₽",
    "id": "69",
    "image": "/venues/extracted/extracted_clean_p2_v71_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v71_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v71_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v71_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v71_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v71_5.jpeg"
    ],
    "address": "Большая Никитская ул., 46/17с1 (м. Баррикадная)",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Спрятанный во дворе ресторан с камерной атмосферой. Изысканная кухня, акцент на ароматы и подачу.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• скрытый двор — не все найдут\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• романтично\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• интересная кухня",
    "name": "Aroma",
    "description": "Спрятанный во дворе ресторан с камерной атмосферой. Изысканная кухня, акцент на ароматы и подачу.",
    "mood": [
      "Романтика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–3500 ₽",
    "id": "70",
    "image": "/venues/extracted/extracted_clean_p2_v72_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v72_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v72_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v72_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v72_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v72_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v72_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v72_7.jpeg",
      "/venues/extracted/extracted_clean_p2_v72_8.jpeg"
    ],
    "address": "Большая Никитская, 24/1с1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Итальянский ресторан в центре Москвы. Акцент на качественные продукты и домашнюю пасту.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• итальянская кухня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• хорошо для ужина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• стильный интерьер",
    "name": "Brera",
    "description": "Итальянский ресторан в центре Москвы. Акцент на качественные продукты и домашнюю пасту.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2500–4000 ₽",
    "id": "71",
    "image": "/venues/extracted/extracted_clean_p2_v73_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v73_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v73_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v73_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v73_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v73_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v73_6.jpeg"
    ],
    "address": "Большая Никитская, 21/18с1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Дорогой, современный ресторан на Большой Никитской. Лаконичный интерьер, качественная еда, хорошая винная карта.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• центр города\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• винная карта\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• подходит для встреч",
    "name": "Loro",
    "description": "Дорогой, современный ресторан на Большой Никитской. Лаконичный интерьер, качественная еда, хорошая винная карта.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "взрослый от 700 ₽, льготный от 350–400 ₽, дети до 6 лет бесплатно",
    "id": "72",
    "image": "/venues/extracted/extracted_clean_p2_v74_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v74_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v74_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v74_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v74_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v74_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v74_6.jpeg"
    ],
    "address": "Лаврушинский переулок, 10",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Главный музей русского искусства: Репин, Васнецов, Шишкин, Серов, Левитан, иконы Древней Руси и знаменитый исторический фасад.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Один из лучших музеев России\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Классическая культурная программа Москвы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Удобно гулять по Замоскворечью после посещения",
    "name": "Государственная Третьяковская галерея",
    "description": "Главный музей русского искусства: Репин, Васнецов, Шишкин, Серов, Левитан, иконы Древней Руси и знаменитый историческ...",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "от 2100 ₽ в будни, от 2900–3300 ₽ в выходные; льготные тарифы есть",
    "id": "73",
    "image": "/venues/extracted/extracted_clean_p2_v75_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v75_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v75_2.png",
      "/venues/extracted/extracted_clean_p2_v75_3.png",
      "/venues/extracted/extracted_clean_p2_v75_4.png",
      "/venues/extracted/extracted_clean_p2_v75_5.png",
      "/venues/extracted/extracted_clean_p2_v75_6.png",
      "/venues/extracted/extracted_clean_p2_v75_7.png"
    ],
    "address": "проспект Андропова, 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Крупнейший крытый парк аттракционов России: горки, семейные зоны, шоу.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для всего, и ДР отметить, и просто весело время провести\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Идеально для активного отдыха\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно провести целый день\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит детям и взрослым",
    "name": "Остров Мечты",
    "description": "Крупнейший крытый парк аттракционов России: горки, семейные зоны, шоу.",
    "mood": [
      "Активность"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "взрослый 1000 ₽, студенты/пенсионеры 200 ₽, дети до 7 лет бесплатно (доступно только с экскурсией)",
    "id": "74",
    "image": "/venues/extracted/almazny_fond_red.png",
    "images": [
      "/venues/extracted/almazny_fond_red.png"
    ],
    "address": "расположен на территории Московского Кремля (в здании Оружейной палаты), вход через Боровицкие ворота / Александровский сад",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Самый «дорогой» музей страны: императорские короны, драгоценные камни, царские регалии, уникальные самородки.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Уникальная коллекция мирового уровня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• На территории Кремля\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Очень эффектное место",
    "name": "Алмазный фонд",
    "description": "Самый «дорогой» музей страны: императорские короны, драгоценные камни, царские регалии, уникальные самородки.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "/ Билеты:",
    "id": "75",
    "image": "/venues/extracted/extracted_clean_p2_v77_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p2_v77_1.png",
      "/venues/extracted/extracted_clean_p2_v77_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v77_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v77_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v77_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v77_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v77_7.jpeg"
    ],
    "address": "ул. Петровка, 25, стр. 1 (главное здание)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Первый в России государственный музей, целиком посвящённый искусству XX и XXI веков, основан в 1999 году Зурабом Церетели. Главное здание — исторический особняк XVIII века в стиле русского классицизма. Филиал в Ермолаевском переулке — пятиэтажный неоклассический особняк 1915 года с элементами итальянского Ренессанса. Внутри — светлые пространства, анфиладные залы, дореволюционные интерьеры. Во дворе музея — Парк скульптур Зураба Церетели, можно выпить кофе и отдохнуть.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Уникальная коллекция русского авангарда и современного искусства\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Пять площадок в историческом центре — всегда есть что посмотреть\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Работает школа современного искусства и детская студия\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Регулярно проходят биеннале, мастер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• классы и лекции\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Очень фотогенично — как внутри, так и в скульптурном дворе",
    "name": "Московский музей современного искусства (MMOMA)",
    "description": "Первый в России государственный музей, целиком посвящённый искусству XX и XXI веков, основан в 1999 году Зурабом Цере...",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "средний чек 1000–1500 ₽",
    "id": "76",
    "image": "/venues/extracted/extracted_clean_p2_v78_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v78_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v78_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v78_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v78_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v78_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v78_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v78_7.jpeg"
    ],
    "address": "Климентовский пер., 9/1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "камерная европейская кофейня, спешелти-кофе, свежая выпечка и завтраки целый день\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• уютное место для неспешных бесед в перерывах между прогулками по центру",
    "name": "Croissant Atelier",
    "description": "камерная европейская кофейня, спешелти-кофе, свежая выпечка и завтраки целый день",
    "mood": [
      "Романтика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "600-1200 ₽",
    "id": "77",
    "image": "/venues/extracted/extracted_clean_p2_v79_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v79_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v79_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v79_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v79_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v79_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v79_6.jpeg"
    ],
    "address": "флагманское кафе — ул. Большая Бронная, 25, стр. 3 (м. «Пушкинская» / «Тверская»), корнер в Депо — ул. Лесная, 20, стр. 3, корнер 38 (м. «Менделеевская» / «Белорусская»), корнер Bobar x Meltisss — Театральный проезд, 5, стр. 1, ЦДМ, этаж -1 (м. «Лубянка» / «Кузнецкий Мост»), корнер в Парке Горького — ул. Крымский Вал, 9, стр. 39 (м. «Октябрьская» / «Парк Культуры»)",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "флагманское пространство на Патриарших, корнеры на модных фудкортах и в парках, хрустящее печенье-кукис и яркие десерты\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• must\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• visit для сладкоежек и любителей «инстаграмных» мест, где подают тот самый тающий кукис с хрустящей корочкой",
    "name": "Meltisss",
    "description": "флагманское пространство на Патриарших, корнеры на модных фудкортах и в парках, хрустящее печенье-кукис и яркие десерты",
    "mood": [
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "бесплатно",
    "id": "78",
    "image": "/venues/extracted/extracted_clean_p2_v80_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v80_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v80_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v80_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v80_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v80_5.jpeg"
    ],
    "address": "Иваньковское шоссе, 6 (м. «Волоколамская» / «Тушинская»)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "обширный лесной массив с заливными лугами, расслабляющая, очень красиво, уединенно\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• идеальное место для уединенных и долгих пеших прогулок, бега или велопоездок на свежем воздухе вдали от городского шума.",
    "name": "Парк «Покровское-Стрешнево»",
    "description": "обширный лесной массив с заливными лугами, расслабляющая, очень красиво, уединенно",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "свободный, бесплатный, круглосуточный",
    "id": "79",
    "image": "/venues/extracted/extracted_clean_p2_v81_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v81_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v81_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v81_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v81_4.jpeg"
    ],
    "address": "Береговой пр.3",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "современный жилой квартал с благоустроенной набережной, беговыми и велодорожками\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• отличный променад с видом на Москву\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• реку в рамках нового городского кластера «Большой Сити»",
    "name": "ЖК «Береговой»",
    "description": "современный жилой квартал с благоустроенной набережной, беговыми и велодорожками",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "вход свободный",
    "id": "80",
    "image": "/venues/extracted/extracted_clean_p2_v82_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v82_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v82_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v82_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v82_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v82_5.jpeg"
    ],
    "address": "пос. Шишкин Лес, 30",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "тихий дачный поселок в окружении соснового бора, чистый воздух и неспешный ритм жизни\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• идеальное место для тех, кто ищет уединения и полной перезагрузки вдали от городской суеты",
    "name": "Шишкин Лес",
    "description": "тихий дачный поселок в окружении соснового бора, чистый воздух и неспешный ритм жизни",
    "mood": [
      "Романтика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "81",
    "image": "/venues/extracted/extracted_clean_p2_v83_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v83_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v83_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v83_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v83_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v83_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v83_6.jpeg"
    ],
    "address": "1-й пр., 3, КП Голицыно-3, д. Новосумино",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "загородный ресторанный комплекс на территории коттеджного поселка, панорамные виды и каминный зал\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• идеальный вариант для неспешного уикенда с гастрономическим уклоном за пределами МКАД",
    "name": "Few Horses",
    "description": "загородный ресторанный комплекс на территории коттеджного поселка, панорамные виды и каминный зал",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "свободный",
    "id": "82",
    "image": "/venues/extracted/extracted_clean_p2_v84_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v84_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v84_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v84_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v84_4.jpeg"
    ],
    "address": "ул. Корабельная, 17",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "благоустроенная набережная длиной около 1,5 км с пляжной зоной, рыбацкими мостиками и лодочной станцией\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• городской курорт на юге Москвы с отличной инфраструктурой для прогулок и отдыха у воды.",
    "name": "Ривер Парк (Коломенское)",
    "description": "благоустроенная набережная длиной около 1,5 км с пляжной зоной, рыбацкими мостиками и лодочной станцией",
    "mood": [
      "Активность"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "от 50 ₽, для прохода требуется паспорт РФ",
    "id": "83",
    "image": "/venues/extracted/extracted_clean_p2_v85_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v85_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v85_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v85_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v85_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v85_5.jpeg"
    ],
    "address": "Московская область, городской округ Мытищи, село Марфино",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "псевдоготическая усадьба, старинный парк с прудами на высоком берегу реки Учи\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• атмосферное и очень фотогеничное место Подмосковья, настоящее открытие для ценителей архитектуры и исторических усадеб.",
    "name": "Усадьба Марфино",
    "description": "псевдоготическая усадьба, старинный парк с прудами на высоком берегу реки Учи",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "активность"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "бесплатный",
    "id": "84",
    "image": "/venues/extracted/extracted_clean_p2_v86_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v86_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v86_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v86_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v86_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v86_5.jpeg"
    ],
    "address": "Московская область, Одинцовский г.о., Рублёвский проезд",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "арт-пространство в окружении природы, инсталляции и галерея под открытым небом\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• место силы и вдохновения на Рублёвке для любителей современного искусства, можно взять в аренду велосипеды",
    "name": "Парк Малевича",
    "description": "арт-пространство в окружении природы, инсталляции и галерея под открытым небом",
    "mood": [
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "от 150 ₽",
    "id": "85",
    "image": "/venues/extracted/extracted_clean_p2_v87_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v87_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v87_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v87_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v87_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v87_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v87_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v87_7.jpeg",
      "/venues/extracted/extracted_clean_p2_v87_8.jpeg"
    ],
    "address": "ул. Юности, 2, стр. 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "усадьба Шереметевых XVIII века, Голландский домик, гроты и французский регулярный парк\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• возможность совершить путешествие в эпоху Просвещения и устроить аристократичный променад",
    "name": "Усадьба Кусково",
    "description": "усадьба Шереметевых XVIII века, Голландский домик, гроты и французский регулярный парк",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "свободный",
    "id": "86",
    "image": "/venues/extracted/extracted_clean_p2_v88_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v88_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v88_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v88_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v88_4.jpeg"
    ],
    "address": "Ленинградское шоссе, 51",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "отреставрированный «порт пяти морей», парк с фонтанами и аллеями, красиво\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• уникальный архитектурный ансамбль для долгих прогулок и любования яхтами.",
    "name": "Северный речной вокзал",
    "description": "отреставрированный «порт пяти морей», парк с фонтанами и аллеями, красиво",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "вход свободный",
    "id": "87",
    "image": "/venues/extracted/extracted_clean_p2_v89_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v89_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v89_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v89_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v89_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v89_5.jpeg"
    ],
    "address": "Московская область, Липкинское шоссе, стр. 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "ухоженный лесной массив, искусственный водопад, цапли и ручные бурундуки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• красиво, тихо, уединенно, идеален для эко\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• прогулок",
    "name": "Ближняя дача",
    "description": "ухоженный лесной массив, искусственный водопад, цапли и ручные бурундуки",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "88",
    "image": "/venues/image18.jpeg",
    "images": [
      "/venues/image18.jpeg"
    ],
    "address": "Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• лучшее место для созерцания закатов с видом на древние храмы и холмы",
    "name": "Набережная в Коломенском парке",
    "description": "Отличный выбор в категории Место: Набережная в Коломенском парке",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "вход свободный (жилой комплекс)",
    "id": "89",
    "image": "/venues/extracted/extracted_clean_p2_v93_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v93_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v93_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v93_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v93_4.jpeg"
    ],
    "address": "ул. 2-я Звенигородская, 12",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "премиальный жилой квартал с арт-объектами и внутренними скверами\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• тихий оазис в центре деловых будней рядом с парком «Красная Пресня»",
    "name": "Квартал Lucky",
    "description": "премиальный жилой квартал с арт-объектами и внутренними скверами",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "от 5000",
    "id": "90",
    "image": "/venues/extracted/extracted_clean_p2_v40_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v40_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v40_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v40_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v40_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v40_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v40_6.jpeg"
    ],
    "address": "39, Шелудьково, Московская область",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Главная гоночная трасса России уровня FIA Grade 1. Здесь проходят трек-дни, гонки, автомобильные фестивали и заезды на суперкарах.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Самая известная трасса страны\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Настоящая атмосфера автоспорта\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для необычного уикенда",
    "name": "Moscow Raceway",
    "description": "Главная гоночная трасса России уровня FIA Grade 1. Здесь проходят трек-дни, гонки, автомобильные фестивали и заезды н...",
    "mood": [
      "Активность"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "от 5000 ₽ с инструктором",
    "id": "91",
    "image": "/venues/extracted/extracted_clean_p2_v41_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v41_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v41_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v41_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v41_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v41_5.jpeg"
    ],
    "address": "квартал 4, 2с10, Румянцево, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Стендовая стрельба на открытой площадке с профессиональными инструкторами.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Необычный активный отдых\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит новичкам\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хороший вариант для компании",
    "name": "Стендовая стрельба «Румянцево»",
    "description": "Стендовая стрельба на открытой площадке с профессиональными инструкторами.",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3000–5000 ₽",
    "id": "92",
    "image": "/venues/extracted/extracted_clean_p2_v42_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v42_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_7.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_8.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_9.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_10.jpeg",
      "/venues/extracted/extracted_clean_p2_v42_11.jpeg"
    ],
    "address": "Вознесенский переулок, 6/3, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Элегантный ресторан-сад с красивым интерьером и спокойной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивое пространство\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для ужина и встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центр Москвы",
    "name": "Yudashkin Сад",
    "description": "Элегантный ресторан-сад с красивым интерьером и спокойной атмосферой.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4500 ₽",
    "id": "93",
    "image": "/venues/extracted/extracted_clean_p2_v43_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v43_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_7.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_8.jpeg",
      "/venues/extracted/extracted_clean_p2_v43_9.jpeg"
    ],
    "address": "ул. Маршала Бирюзова, 22, корп. 1, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Стильный городской ресторан с европейским меню и камерной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивый интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для ужина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Спокойная атмосфера",
    "name": "Lilian’s",
    "description": "Стильный городской ресторан с европейским меню и камерной атмосферой.",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1500–3500 ₽",
    "id": "94",
    "image": "/venues/extracted/extracted_clean_p2_v44_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v44_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v44_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v44_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v44_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v44_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v44_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v44_7.jpeg"
    ],
    "address": "Подсосенский пер., 8, стр. 2, Москва,   Чистопрудный бул., 12, корп. 4 (временно не работает)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Современное городское кафе с минималистичным интерьером и молодой публикой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошая атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центр города",
    "name": "That Place",
    "description": "Современное городское кафе с минималистичным интерьером и молодой публикой.",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2500–5000 ₽",
    "id": "95",
    "image": "/venues/extracted/extracted_clean_p2_v45_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v45_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_7.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_8.jpeg",
      "/venues/extracted/extracted_clean_p2_v45_9.jpeg"
    ],
    "address": "Большая Никитская улица, 14/2с7, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Французское бистро с элегантным интерьером и атмосферой парижского кафе.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивые завтраки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Французская эстетика\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для свиданий",
    "name": "Mamie Bistro",
    "description": "Французское бистро с элегантным интерьером и атмосферой парижского кафе.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1000–2500 ₽",
    "id": "96",
    "image": "/venues/extracted/extracted_clean_p2_v46_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p2_v46_1.jpeg",
      "/venues/extracted/extracted_clean_p2_v46_2.jpeg",
      "/venues/extracted/extracted_clean_p2_v46_3.jpeg",
      "/venues/extracted/extracted_clean_p2_v46_4.jpeg",
      "/venues/extracted/extracted_clean_p2_v46_5.jpeg",
      "/venues/extracted/extracted_clean_p2_v46_6.jpeg",
      "/venues/extracted/extracted_clean_p2_v46_7.jpeg",
      "/venues/extracted/extracted_clean_p2_v46_8.jpeg"
    ],
    "address": "ул. Чаянова, 22, стр. 4, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Популярное японское кафе с эстетикой токийского городского пространства.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Японская кухня\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Молодая аудитория\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для casual\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• встреч",
    "name": "J’PAN",
    "description": "Популярное японское кафе с эстетикой токийского городского пространства.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "97",
    "image": "/venues/extracted/extracted_clean_p3_v1_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v1_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v1_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v1_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v1_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v1_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v1_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v1_7.jpeg"
    ],
    "address": "ул. Покровка, 20/1с1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Современное бистро с минималистичным интерьером и авторской кухней.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Стильный интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для спокойного ужина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Современная гастрономия",
    "name": "Bistro Meteorite",
    "description": "Современное бистро с минималистичным интерьером и авторской кухней.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "98",
    "image": "/venues/extracted/extracted_clean_p3_v2_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v2_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v2_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v2_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v2_4.jpeg"
    ],
    "address": "Бобров переулок, 4с1, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Гастробар с морепродуктами, коктейлями и атмосферой северной гастрономии.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хороший бар\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для вечернего выхода\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Атмосферный интерьер",
    "name": "Alaska",
    "description": "Гастробар с морепродуктами, коктейлями и атмосферой северной гастрономии.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1200-1500 ₽",
    "id": "99",
    "image": "/venues/extracted/extracted_clean_p3_v103_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v103_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v103_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v103_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v103_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v103_5.jpeg"
    ],
    "address": "Мерзляковский переулок, 15, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Небольшой ресторан в европейском стиле с камерной посадкой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Спокойная атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центр Москвы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для ужина",
    "name": "Brera",
    "description": "Небольшой ресторан в европейском стиле с камерной посадкой.",
    "mood": [
      "Романтика",
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "1500–2000 ₽",
    "id": "100",
    "image": "/venues/extracted/extracted_clean_p3_v4_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v4_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v4_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v4_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v4_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v4_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v4_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v4_7.jpeg"
    ],
    "address": "Трубная ул., 26, корп. 1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Французское бистро с домашней атмосферой и европейской кухней.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Уютно и спокойно\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для завтрака и ужина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для свиданий",
    "name": "Chère Maman",
    "description": "Французское бистро с домашней атмосферой и европейской кухней.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1500–3500 ₽",
    "id": "101",
    "image": "/venues/extracted/extracted_clean_p3_v5_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v5_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v5_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v5_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v5_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v5_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v5_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v5_7.jpeg"
    ],
    "address": "ул. Макаренко, 2/21с3",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Эстетичное кафе с расслабленной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Очень красиво\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центр города",
    "name": "Кафе «Рябчик»",
    "description": "Эстетичное кафе с расслабленной атмосферой.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1000–1500 ₽",
    "id": "102",
    "image": "/venues/extracted/extracted_clean_p3_v6_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v6_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v6_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v6_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v6_4.png",
      "/venues/extracted/extracted_clean_p3_v6_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v6_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v6_7.png"
    ],
    "address": "улица Чаплыгина, 2, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Новое городское место с расслабленной атмосферой и авторским меню.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Тихий центр\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для неспешной прогулки и перекуса\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Атмосферный интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Но: еда только на вынос, может быть многолюдно из\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• за популярности этого места",
    "name": "Чапа",
    "description": "Новое городское место с расслабленной атмосферой и авторским меню.",
    "mood": [
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "активность"
    ],
    "budget": "$",
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "Взрослый билет в зоопарк (с 12 лет) – 1000",
    "id": "103",
    "image": "/venues/extracted/extracted_clean_p3_v7_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v7_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v7_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v7_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v7_4.png",
      "/venues/extracted/extracted_clean_p3_v7_5.png",
      "/venues/extracted/extracted_clean_p3_v7_6.png"
    ],
    "address": "Московская область, Талдомский городской округ, деревня Веретьево",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Арт-усадьба в лесу с дизайнерскими домами и творческой атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Необычные домики\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Тихая природа\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Арт\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно арендовать велосипеды, беговелы, весельные лодки, sup\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• борды, или сходить в баню.",
    "name": "Арт-усадьба «Веретьево»",
    "description": "Арт-усадьба в лесу с дизайнерскими домами и творческой атмосферой.",
    "mood": [
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "104",
    "image": "/venues/extracted/extracted_clean_p3_v8_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v8_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_7.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_8.jpeg",
      "/venues/extracted/extracted_clean_p3_v8_9.jpeg"
    ],
    "address": "Московская область, Ступино, Вертолётная улица",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Небольшой природный глэмпинг с уединённой атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Тишина и лес\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивые домики\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для перезагрузки",
    "name": "Глэмпинг Villy Uley",
    "description": "Небольшой природный глэмпинг с уединённой атмосферой.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "105",
    "image": "/venues/extracted/extracted_clean_p3_v9_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v9_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_7.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_8.jpeg",
      "/venues/extracted/extracted_clean_p3_v9_9.jpeg"
    ],
    "address": "Вознесенский переулок, 5с1, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Современный ресторан с городской эстетикой и модной публикой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центр Москвы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Стильное пространство",
    "name": "Share",
    "description": "Современный ресторан с городской эстетикой и модной публикой.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бар",
      "активность",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "106",
    "image": "/venues/extracted/extracted_clean_p3_v10_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v10_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v10_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v10_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v10_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v10_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v10_6.jpeg"
    ],
    "address": "Бауманская, 16, стр. 2",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "На данном мастер-классе вы познакомитесь с кофе,  узнаете, как работать с оборудованием и инвентарем для приготовления правильного espresso, научитесь взбивать молоко, правильно наносить рисунок в чашке с кофе и отработаете полученные знания на практике.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Сможете узнать и научиться новому и поговорите про кофе.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Общий план мастер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• класса:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Оборудование и инвентарь бариста\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Правила работы с кофе\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Приготовление качественного эспрессо для нанесения рисунков\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Особенности работы с молоком\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Основы работы с питчером\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• и другим инвентарем для латте\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• арт\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Как правильно взбивать молоко\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Вливание молока (основные особенности)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Базовый латте\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• арт\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Закрепление на практике\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Интерактивное общение",
    "name": "Лига Бариста – мастер-класс Латте-арт",
    "description": "На данном мастер-классе вы познакомитесь с кофе,  узнаете, как работать с оборудованием и инвентарем для приготовлени...",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "4000–8000 ₽",
    "id": "107",
    "image": "/venues/extracted/extracted_clean_p3_v11_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p3_v11_1.png",
      "/venues/extracted/extracted_clean_p3_v11_2.png",
      "/venues/extracted/extracted_clean_p3_v11_3.png",
      "/venues/extracted/extracted_clean_p3_v11_4.png"
    ],
    "address": "Никольская улица, 17с2, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Творческий мастер-класс по декору и сборке бенто-тортов и десертов в уютной студии в центре Москвы.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивый и «инстаграмный» формат\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для свидания и девичника\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно забрать десерт с собой",
    "name": "Мастер-класс по тортикам — Meet Me Agency",
    "description": "Творческий мастер-класс по декору и сборке бенто-тортов и десертов в уютной студии в центре Москвы.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3000–7000 ₽",
    "id": "108",
    "image": "/venues/extracted/extracted_clean_p3_v12_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p3_v12_1.png",
      "/venues/extracted/extracted_clean_p3_v12_2.png",
      "/venues/extracted/extracted_clean_p3_v12_3.png"
    ],
    "address": "улица Сретенка, 27/1, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Камерная творческая студия, где можно создать собственное украшение из натуральных камней и фурнитуры.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Уникальное украшение своими руками\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Медитативный творческий процесс\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит новичкам",
    "name": "Мастер-класс украшений из натуральных камней — Pelegrina Art",
    "description": "Камерная творческая студия, где можно создать собственное украшение из натуральных камней и фурнитуры.",
    "mood": [
      "Романтика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3500–7000 ₽",
    "id": "109",
    "image": "/venues/extracted/extracted_clean_p3_v13_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p3_v13_1.png",
      "/venues/extracted/extracted_clean_p3_v13_2.png",
      "/venues/extracted/extracted_clean_p3_v13_3.png",
      "/venues/extracted/extracted_clean_p3_v13_4.png",
      "/venues/extracted/extracted_clean_p3_v13_5.png"
    ],
    "address": "улица Сретенка, 27/1, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Творческий мастер-класс по созданию интерьерного светильника в форме луны.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Необычный формат\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивый предмет интерьера после мастер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• класса\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для уютного вечера",
    "name": "Мастер-класс «Луна-ночник» — Pelegrina Art",
    "description": "Творческий мастер-класс по созданию интерьерного светильника в форме луны.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "3000–6000 ₽",
    "id": "110",
    "image": "/venues/extracted/extracted_clean_p3_v14_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p3_v14_1.png",
      "/venues/extracted/extracted_clean_p3_v14_2.png",
      "/venues/extracted/extracted_clean_p3_v14_3.png",
      "/venues/extracted/extracted_clean_p3_v14_4.png"
    ],
    "address": "Автозаводская улица, 21к1, 3 подъезд, 3 этаж, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Бьюти-студия, где участники создают косметику своими руками: бальзамы, помады, скрабы и другие средства.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Интерактивный формат\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно создать персональный продукт\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для компании подруг",
    "name": "Мастер-класс косметики своими руками - Makeup Kitchen",
    "description": "Бьюти-студия, где участники создают косметику своими руками: бальзамы, помады, скрабы и другие средства.",
    "mood": [
      "Активность"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "4000–8000 ₽",
    "id": "111",
    "image": "/venues/extracted/extracted_clean_p3_v15_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p3_v15_1.png",
      "/venues/extracted/extracted_clean_p3_v15_2.png",
      "/venues/extracted/extracted_clean_p3_v15_3.png"
    ],
    "address": "Автозаводская улица, 21к1, 3 подъезд, 3 этаж, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Аромастудия с возможностью создать индивидуальный парфюм под руководством парфюмера.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Очень необычный опыт\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Индивидуальный аромат на память\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для подарка или свидания",
    "name": "Мастер-класс духов своими руками - Makeup Kitchen",
    "description": "Аромастудия с возможностью создать индивидуальный парфюм под руководством парфюмера.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "112",
    "image": "/venues/extracted/extracted_clean_p3_v16_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v16_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v16_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v16_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v16_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v16_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v16_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v16_7.jpeg"
    ],
    "address": "Цветной бульвар, 15с1, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Кафе",
    "fullDescription": "Комбинация винилового магазина, бара и пиццерии с расслабленной творческой атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Винил и музыка\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Необычный формат пространства\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для вечерних встреч",
    "name": "Found Record Store & Pizzeria",
    "description": "Комбинация винилового магазина, бара и пиццерии с расслабленной творческой атмосферой.",
    "mood": [
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "800–2000 ₽",
    "id": "113",
    "image": "/venues/extracted/extracted_clean_p3_v17_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v17_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v17_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v17_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v17_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v17_5.jpeg"
    ],
    "address": "Кузнецкий Мост, 19с1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Современное азиатское кафе с акцентом на свежий удон собственного приготовления, японский стритфуд и расслабленную городскую атмосферу.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Несколько локаций по Москве\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для быстрого ланча и casual\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Можно комфортно работать за ноутбуком\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Домашние лимонады и cold tea",
    "name": "UDON noodles & drinks",
    "description": "Современное азиатское кафе с акцентом на свежий удон собственного приготовления, японский стритфуд и расслабленную го...",
    "mood": [
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "чилл"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1000–2500 ₽",
    "id": "114",
    "image": "/venues/extracted/extracted_clean_p3_v18_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v18_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v18_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v18_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v18_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v18_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v18_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v18_7.jpeg"
    ],
    "address": "Бауманская ул., 58/25с1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Городское кафе с интеллектуальной и творческой атмосферой, спокойным интерьером и комфортной посадкой для встреч и работы.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для работы за ноутбуком\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Спокойная атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Удобно для встреч и общения\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центр городской культурной среды",
    "name": "Кафе «Культурный Код»",
    "description": "Городское кафе с интеллектуальной и творческой атмосферой, спокойным интерьером и комфортной посадкой для встреч и ра...",
    "mood": [
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2500–5000 ₽",
    "id": "115",
    "image": "/venues/extracted/extracted_clean_p3_v19_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v19_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v19_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v19_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v19_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v19_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v19_6.jpeg"
    ],
    "address": "Кожевническая ул., 21, стр. 1, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Новый ресторан с современным интерьером и акцентом на архитектурное пространство.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Стильный интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для вечерних встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Современная гастрономия",
    "name": "Ресторан «Своды»",
    "description": "Новый ресторан с современным интерьером и акцентом на архитектурное пространство.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "романтика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "500–1500 ₽",
    "id": "116",
    "image": "/venues/extracted/extracted_clean_p3_v20_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v20_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v20_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v20_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v20_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v20_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v20_6.jpeg"
    ],
    "address": "Зубовский бул., 2, стр. 7, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Камерное книжное пространство с кофейней и спокойной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Для любителей книг\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Тихое место в городе\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для работы и чтения",
    "name": "Чтиво Дом",
    "description": "Камерное книжное пространство с кофейней и спокойной атмосферой.",
    "mood": [
      "Романтика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "активность"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "800–2000 ₽",
    "id": "117",
    "image": "/venues/extracted/extracted_clean_p3_v21_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v21_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v21_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v21_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v21_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v21_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v21_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v21_7.jpeg"
    ],
    "address": "Страстной бульвар, 12с5, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Велосипедное комьюнити-пространство с кофе, завтраками и спортивной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Необычная концепция\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Отличный кофе\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Молодая городская публика",
    "name": "САЛЮТ - вело-кафе",
    "description": "Велосипедное комьюнити-пространство с кофе, завтраками и спортивной атмосферой.",
    "mood": [
      "Активность"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "от 1800 ₽",
    "id": "118",
    "image": "/venues/extracted/extracted_clean_p3_v22_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p3_v22_1.png",
      "/venues/extracted/extracted_clean_p3_v22_2.png",
      "/venues/extracted/extracted_clean_p3_v22_3.png",
      "/venues/extracted/extracted_clean_p3_v22_4.png",
      "/venues/extracted/extracted_clean_p3_v22_5.png",
      "/venues/extracted/extracted_clean_p3_v22_6.png",
      "/venues/extracted/extracted_clean_p3_v22_7.png"
    ],
    "address": "ул. Новослободская 48, м. Новослободская",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Крыша\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивые закаты\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Видовая локация\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для вечера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Еще есть кино\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• бар (показы в Кинобаре проводятся на 18 человек.)",
    "name": "Roof180",
    "description": "Крыша",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "1500–3500 ₽",
    "id": "119",
    "image": "/venues/extracted/extracted_clean_p3_v23_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v23_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v23_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v23_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v23_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v23_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v23_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v23_7.jpeg"
    ],
    "address": "Кривоколенный переулок, 14с1, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Креативное пространство с кофейней, событиями и расслабленной городской эстетикой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Атмосферный интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для встреч и работы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Центр Москвы",
    "name": "PONO PLACE",
    "description": "Креативное пространство с кофейней, событиями и расслабленной городской эстетикой.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2000–4000 ₽",
    "id": "120",
    "image": "/venues/extracted/extracted_clean_p3_v24_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v24_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v24_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v24_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v24_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v24_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v24_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v24_7.jpeg",
      "/venues/extracted/extracted_clean_p3_v24_8.jpeg"
    ],
    "address": "сад «Эрмитаж», Каретный Ряд, 3, стр.1,  Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Легендарная летняя веранда в саду «Эрмитаж» с расслабленной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Один из самых атмосферных летников Москвы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Много зелени\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для свидания",
    "name": "«Веранда 32.05»",
    "description": "Легендарная летняя веранда в саду «Эрмитаж» с расслабленной атмосферой.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3000–8000 ₽",
    "id": "121",
    "image": "/venues/extracted/extracted_clean_p3_v25_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v25_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v25_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v25_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v25_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v25_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v25_6.jpeg",
      "/venues/extracted/extracted_clean_p3_v25_7.jpeg",
      "/venues/extracted/extracted_clean_p3_v25_8.jpeg"
    ],
    "address": "Строгинское ш., 3, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Городской beach club с бассейнами, лежаками, музыкой и атмосферой отпуска в центре города.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Летняя атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для отдыха компанией\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• DJ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• сеты и вечеринки",
    "name": "City Beach Club",
    "description": "Городской beach club с бассейнами, лежаками, музыкой и атмосферой отпуска в центре города.",
    "mood": [
      "Активность"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "1500–3500 ₽",
    "id": "122",
    "image": "/venues/extracted/extracted_clean_p3_v26_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v26_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v26_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v26_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v26_4.jpeg"
    ],
    "address": "ул. Покровка, 21-23/25с1, Трубная ул., 20, ул. Солянка, 1/2 строение 1, Мясницкая ул., 13 строение 1, ул. Пятницкая, 3/4 строение 1, ул. Большая Дмитровка, 12/1с1",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Уютный грузинский ресторан с домашней атмосферой, вином и традиционной кухней.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Комфортная атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для долгих ужинов\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошая винная карта",
    "name": "«Вино и Хачапури»",
    "description": "Уютный грузинский ресторан с домашней атмосферой, вином и традиционной кухней.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность"
    ],
    "budget": "$$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "4000–10 000 ₽",
    "id": "123",
    "image": "/venues/extracted/extracted_clean_p3_v27_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v27_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v27_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v27_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v27_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v27_5.jpeg"
    ],
    "address": "проспект Андропова, 1, Москва",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Большой пляжный клуб с бассейнами, шезлонгами и курортной атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Атмосфера отпуска\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для выходных\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Музыка, коктейли и вечеринки",
    "name": "Dream Beach Club",
    "description": "Большой пляжный клуб с бассейнами, шезлонгами и курортной атмосферой.",
    "mood": [
      "Активность"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл",
      "эстетика"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "2500–5000 ₽",
    "id": "124",
    "image": "/venues/extracted/extracted_clean_p3_v28_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v28_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v28_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v28_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v28_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v28_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v28_6.jpeg"
    ],
    "address": "Малая Никитская ул., 16/5, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Элегантный ресторан с современной подачей и атмосферой европейского city dining.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Красивый интерьер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для свиданий\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Спокойная атмосфера",
    "name": "Mina",
    "description": "Элегантный ресторан с современной подачей и атмосферой европейского city dining.",
    "mood": [
      "Чилл",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "500–1500 ₽",
    "id": "125",
    "image": "/venues/extracted/extracted_clean_p3_v29_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v29_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v29_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v29_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v29_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v29_5.jpeg"
    ],
    "address": "Самокатная ул., 4, стр. 13, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Модное городское пространство с современной гастрономией и вечерней атмосферой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для вечерних встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Стильная публика\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Современный интерьер",
    "name": "DNA",
    "description": "Модное городское пространство с современной гастрономией и вечерней атмосферой.",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "чилл",
      "активность"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "700–1500 ₽",
    "id": "126",
    "image": "/venues/extracted/extracted_clean_p3_v30_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v30_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_5.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_6.png",
      "/venues/extracted/extracted_clean_p3_v30_7.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_8.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_9.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_10.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_11.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_12.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_13.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_14.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_15.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_16.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_17.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_18.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_19.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_20.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_21.png",
      "/venues/extracted/extracted_clean_p3_v30_22.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_23.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_24.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_25.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_26.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_27.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_28.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_29.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_30.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_31.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_32.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_33.jpeg",
      "/venues/extracted/extracted_clean_p3_v30_34.jpeg"
    ],
    "address": "Ленинградское ш., 16А, стр. 1, Москва",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Спокойное городское кафе с интеллигентной атмосферой и комфортной посадкой.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Хорошо для работы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Подходит для встреч\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Уютная атмосфера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Сквер у Новодевичьего монастыря\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: шедевр зодчества и скульптура с утятами из 90\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• х\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Новодевичий проезд,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Суперметалл\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: минималистичный НИИ с бетоном и металлом\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• я Бауманская, 9/23\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Набережная у ГЭС\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: футуризм и искусство в советской электростанции\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Болотная набережная, 15\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Высотка на Котельнической набережной\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: третий по высоте сталинский небоскреб\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Котельническая набережная, 1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Монумент покорителям космоса\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: след взлетающей ракеты\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Проспект мира, 111\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Остоженка\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: новостройки и исторические особняки\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: от площади Пречистенские Ворота до Крымской площади\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• «Пресня Сити» и «Зотов»\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: бывший хлебозавод на фоне трех небоскребов\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Ходынская, 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Вернисаж в Измайлово\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: блошиный рынок в декорациях псевдорусского зодчества\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Измайловское шоссе, 73Ж\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Библиотека\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• читальня Пушкина\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: литературный сало\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Спартаковская, 9, стр. 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Дом Мельникова\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Коротко: авангардный памятник неочевидной формы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Адрес: Кривоарбатский переулок, 10",
    "name": "Кафе «Лицей»",
    "description": "Спокойное городское кафе с интеллигентной атмосферой и комфортной посадкой.",
    "mood": [
      "Чилл",
      "Активность",
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "127",
    "image": "/venues/extracted/extracted_clean_p3_v31_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v31_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v31_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v31_3.jpeg"
    ],
    "address": "Андреевская наб., 2 (ст. м. Ленинский проспект)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Андреевский ставропигиальный мужской монастырь",
    "description": "Отличный выбор в категории Место: Андреевский ставропигиальный мужской монастырь",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "128",
    "image": "/venues/extracted/extracted_clean_p3_v32_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v32_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v32_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v32_3.jpeg"
    ],
    "address": "Шоссейная ул., 82, стр. 9 (ст. м. Печатники)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Николо-Перервинский монастырь",
    "description": "Отличный выбор в категории Место: Николо-Перервинский монастырь",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "129",
    "image": "/venues/extracted/extracted_clean_p3_v33_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v33_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v33_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v33_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v33_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v33_5.jpeg"
    ],
    "address": "Малый Ивановский пер., 2, стр. 33 (ст. м. Китай-город)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Иоанно-Предтеченский монастырь",
    "description": "Отличный выбор в категории Место: Иоанно-Предтеченский монастырь",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "130",
    "image": "/venues/extracted/extracted_clean_p3_v34_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v34_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v34_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v34_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v34_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v34_5.jpeg"
    ],
    "address": "Московская область, Одинцовский городской округ, 55-й километр Минского шоссе",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Главный храм Вооружённых Сил России, Собор Воскресения Христова",
    "description": "Отличный выбор в категории Место: Главный храм Вооружённых Сил России, Собор Воскресения Христова",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "кафе",
      "романтика",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "средний чек 550–1000 ₽",
    "id": "131",
    "image": "/venues/extracted/extracted_clean_p3_v35_1.png",
    "images": [
      "/venues/extracted/extracted_clean_p3_v35_1.png",
      "/venues/extracted/extracted_clean_p3_v35_2.png",
      "/venues/extracted/extracted_clean_p3_v35_3.png",
      "/venues/extracted/extracted_clean_p3_v35_4.png"
    ],
    "address": "ул. Дольская, 1, стр. 13, Малый дворец (м. «Царицыно», «Орехово»)",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "камерное арт-пространство под сводами исторического дворца XVIII века с изразцовой барной стойкой и выставками\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• чтобы выпить фирменный «Раф Орлов» или «Дворянский краш» с десертом в самом сердце дворцового ансамбля, любуясь через стрельчатые окна на Оперный дом и Виноградные ворота",
    "name": "Кофейня «17 75»",
    "description": "камерное арт-пространство под сводами исторического дворца XVIII века с изразцовой барной стойкой и выставками",
    "mood": [
      "Романтика",
      "Эстетика"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "132",
    "image": "/venues/extracted/extracted_clean_p3_v36_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v36_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v36_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v36_3.jpeg"
    ],
    "address": "Московская область, Талдомский городской округ, Государственный природный заказник областного значения Журавлиная родина",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Заповедник «Журавлиная родина»",
    "description": "Отличный выбор в категории Место: Заповедник «Журавлиная родина»",
    "mood": [
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "$",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "133",
    "image": "/venues/extracted/extracted_clean_p3_v37_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v37_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v37_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v37_3.jpeg"
    ],
    "address": "Адрес: ул. Косыгина, 28, Москва",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Воробьевы Горы",
    "description": "Отличный выбор в категории Место: Воробьевы Горы",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.5,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика",
      "чилл"
    ],
    "budget": "Free",
    "withWhom": [
      "Друзья",
      "Один"
    ],
    "avgCheck": "Уточняйте на месте",
    "id": "134",
    "image": "/venues/extracted/extracted_clean_p3_v38_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v38_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v38_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v38_3.jpeg"
    ],
    "address": "(ст. м. Александровский сад)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "",
    "name": "Александровский сад",
    "description": "Отличный выбор в категории Место: Александровский сад",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "активность",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Семья"
    ],
    "avgCheck": "стандартный 600 ₽, льготный 250 ₽",
    "id": "135",
    "image": "/venues/extracted/extracted_clean_p3_v39_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v39_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v39_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v39_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v39_4.jpeg",
      "/venues/extracted/extracted_clean_p3_v39_5.jpeg"
    ],
    "address": "ул. Вавилова, 57 (м. «Академическая»)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "крупнейший в Европе музей теории эволюции с интерактивным центром и палеопарком\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• чтобы увидеть динозавров, пройти «Путём эволюции» и погулять по крыше с видом на Москву\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Wi\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• Fi: есть",
    "name": "Государственный Дарвиновский музей",
    "description": "крупнейший в Европе музей теории эволюции с интерактивным центром и палеопарком",
    "mood": [
      "Активность",
      "Эстетика"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "место",
      "эстетика"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Свидание",
      "Друзья",
      "Семья"
    ],
    "avgCheck": "от 600 ₽ (стоимость зависит от экскурсии)",
    "id": "136",
    "image": "/venues/extracted/extracted_clean_p3_v40_1.jpeg",
    "images": [
      "/venues/extracted/extracted_clean_p3_v40_1.jpeg",
      "/venues/extracted/extracted_clean_p3_v40_2.jpeg",
      "/venues/extracted/extracted_clean_p3_v40_3.jpeg",
      "/venues/extracted/extracted_clean_p3_v40_4.jpeg"
    ],
    "address": "5-й Котельнический пер., 11 (м. «Таганская»)",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "бывший секретный командный пункт дальней авиации на глубине 65 метров, воссоздающий эпоху ядерного противостояния\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nПочему подходит:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n• возможность спуститься на 18 этажей под землю, увидеть кабинет Сталина и своими глазами оценить масштаб исторических событий, необычный опыт",
    "name": "Музей Холодной войны в Бункер-42 на Таганке",
    "description": "бывший секретный командный пункт дальней авиации на глубине 65 метров, воссоздающий эпоху ядерного противостояния",
    "mood": [
      "Эстетика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "необычное",
      "вишневое",
      "пиво"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Один"
    ],
    "avgCheck": "1500–2500 ₽",
    "id": "137",
    "image": "/venues/image1.jpeg",
    "images": [
      "/venues/image1.jpeg",
      "/venues/image2.jpeg",
      "/venues/image3.jpeg"
    ],
    "address": "Большой Трёхсвятительский переулок, 2/1с8",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Эклектичный интерьер с элементами панка и классики, винный бар. необычное вишневое пиво вкусная кухня в необычной подаче подойдет для свидания или встреч с друзьями",
    "name": "REBEL (Винный бар)",
    "description": "Эклектичный интерьер с элементами панка и классики, винный бар. необычное вишневое пиво...",
    "mood": [
      "Эстетика",
      "Романтика"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "ресторан",
      "отеле",
      "(Ритц-Карлтон)"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание"
    ],
    "avgCheck": "3500–6000 ₽",
    "id": "138",
    "image": "/venues/image4.jpeg",
    "images": [
      "/venues/image4.jpeg",
      "/venues/image5.jpeg",
      "/venues/image6.jpeg"
    ],
    "address": "Тверская улица, 3",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Роскошный интерьер, концепция ателье-ресторана, высокая кухня. ресторан при отеле (Ритц-Карлтон) именная вышивка на салфетках/платках (можно забрать с собой) стиль и статус",
    "name": "Sartoria Lamberti (ресторан)",
    "description": "Роскошный интерьер, концепция ателье-ресторана, высокая кухня. ресторан при отеле (Ритц-Карлтон)...",
    "mood": [
      "Романтика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "коктейли",
      "книги",
      "стильная"
    ],
    "budget": "$$",
    "withWhom": [
      "Свидание",
      "Один"
    ],
    "avgCheck": "1500–2500 ₽",
    "id": "139",
    "image": "/venues/image7.jpeg",
    "images": [
      "/venues/image7.jpeg",
      "/venues/image8.jpeg",
      "/venues/image9.jpeg"
    ],
    "address": "Петровка, 26с3",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Бар и книжный магазин, эстетика интеллектуального отдыха. коктейли и книги стильная мебель, уютный свет идеально для свиданий",
    "name": "Shortlist. Books & Spirits",
    "description": "Бар и книжный магазин, эстетика интеллектуального отдыха. коктейли и книги...",
    "mood": [
      "Эстетика",
      "Романтика"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бесплатно",
      "регистрации)",
      "березовая"
    ],
    "budget": "Free",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "Бесплатно (вход)",
    "id": "140",
    "image": "/venues/image10.jpeg",
    "images": [
      "/venues/media/image10.jpeg",
      "/venues/image11.jpeg",
      "/venues/image12.jpeg"
    ],
    "address": "Болотная набережная, 15",
    "timeSection": "День / Вечер",
    "category": "Место",
    "fullDescription": "Просторное белое здание, много света, современное искусство. бесплатно (по регистрации) березовая роща внутри очень фотогенично",
    "name": "ГЭС-2",
    "description": "Просторное белое здание, много света, современное искусство. бесплатно (по регистрации)...",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "спешелти",
      "кофе",
      "спокойный"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "500–1000 ₽",
    "id": "141",
    "image": "/venues/image13.jpeg",
    "images": [
      "/venues/image13.jpeg",
      "/venues/image14.jpeg",
      "/venues/image15.jpeg"
    ],
    "address": "Нижняя Красносельская улица, 35с50",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Минимализм, много света, бетонные стены, свежие цветы. спешелти кофе спокойный минимализм подходит для работы за ноутбуком",
    "name": "Bloom-n-Brew",
    "description": "Минимализм, много света, бетонные стены, свежие цветы. спешелти кофе...",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "очень",
      "популярно",
      "молодежи"
    ],
    "budget": "$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "142",
    "image": "/venues/image19.jpeg",
    "images": [
      "/venues/image19.jpeg",
      "/venues/image20.jpeg",
      "/venues/image21.jpeg"
    ],
    "address": "Маросейка, 6/8с1",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Гаражная эстетика, стрит-фуд, неформальная обстановка. очень популярно у молодежи вкусные бургеры и хот-доги атмосфера Берлина или Нью-Йорка",
    "name": "Underdog",
    "description": "Гаражная эстетика, стрит-фуд, неформальная обстановка. очень популярно у молодежи...",
    "mood": [
      "Активность"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "искусство",
      "кофе",
      "идеальное"
    ],
    "budget": "$$",
    "withWhom": [
      "Один",
      "Свидание"
    ],
    "avgCheck": "1000–2000 ₽",
    "id": "143",
    "image": "/venues/image22.jpeg",
    "images": [
      "/venues/image22.jpeg",
      "/venues/image23.jpeg",
      "/venues/image24.jpeg"
    ],
    "address": "Варварка, 3",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Арт-консьерж и кофейня, очень дорогой и стильный вид. искусство + кофе идеальное место для красивых фото тихая роскошь",
    "name": "Lobby Moscow",
    "description": "Арт-консьерж и кофейня, очень дорогой и стильный вид. искусство + кофе...",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "бранчи",
      "фотогенично",
      "спокойный"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "800–1500 ₽",
    "id": "144",
    "image": "/venues/image25.jpeg",
    "images": [
      "/venues/image25.jpeg",
      "/venues/image26.jpeg",
      "/venues/image27.jpeg"
    ],
    "address": "Столешников переулок, 2",
    "timeSection": "День / Вечер",
    "category": "Кафе",
    "fullDescription": "Светлое пространство, европейский стиль. бранчи фотогенично спокойный формат",
    "name": "KM20 (ресторан)",
    "description": "Светлое пространство, европейский стиль. бранчи фотогенично спокойный формат...",
    "mood": [
      "Эстетика",
      "Чилл"
    ],
    "rating": 4.8,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "необычные",
      "напитки",
      "быстро"
    ],
    "budget": "$",
    "withWhom": [
      "Один",
      "Друзья"
    ],
    "avgCheck": "500–900 ₽",
    "id": "145",
    "image": "/venues/image31.jpeg",
    "images": [
      "/venues/image31.jpeg",
      "/venues/image32.jpeg",
      "/venues/image33.jpeg"
    ],
    "address": "Тверская улица, 18к1",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Современный чайный бар. необычные напитки быстро и модно для молодежи",
    "name": "Pims (чайный бар)",
    "description": "Современный чайный бар. необычные напитки быстро и модно для молодежи...",
    "mood": [
      "Активность"
    ],
    "rating": 4.6,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "поесть,",
      "потусить",
      "часто"
    ],
    "budget": "$$",
    "withWhom": [
      "Друзья"
    ],
    "avgCheck": "1500–3000 ₽",
    "id": "146",
    "image": "/venues/image40.jpeg",
    "images": [
      "/venues/image40.jpeg",
      "/venues/image41.jpeg",
      "/venues/image42.jpeg"
    ],
    "address": "Яузская улица, 1/15с1",
    "timeSection": "Ночь / Чилл",
    "category": "Место",
    "fullDescription": "Креативное пространство + еда + музыка. и поесть, и потусить часто мероприятия современная публика",
    "name": "Yauza Place 6",
    "description": "Креативное пространство + еда + музыка. и поесть, и потусить часто мероприятия современная публика...",
    "mood": [
      "Активность"
    ],
    "rating": 4.7,
    "mapUrl": "https://yandex.ru/maps"
  },
  {
    "tags": [
      "Стильная",
      "подача",
      "Подходит"
    ],
    "budget": "$$$",
    "withWhom": [
      "Свидание",
      "Друзья"
    ],
    "avgCheck": "3000–5000 ₽",
    "id": "147",
    "image": "/venues/image74.jpeg",
    "images": [
      "/venues/image74.jpeg",
      "/venues/image87.jpeg",
      "/venues/image88.jpeg"
    ],
    "address": "Большой Козихинский переулок, 13/1",
    "timeSection": "Ночь / Чилл",
    "category": "Бар",
    "fullDescription": "Современный японский ресторан. Стильная подача Подходит для ужина и ДР",
    "name": "Lucky Izakaya Bar",
    "description": "Современный японский ресторан. Стильная подача Подходит для ужина и ДР...",
    "mood": [
      "Эстетика",
      "Романтика"
    ],
    "rating": 4.9,
    "mapUrl": "https://yandex.ru/maps"
  }
];
