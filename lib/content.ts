// Central place for every piece of bilingual copy and structured content on the site.
// Update the values here — never hunt through components for text to change.
// Each string pair is { en, lt }.

export type Bi = { en: string; lt: string };

export const business = {
  name: "Venta City Apartments",
  address: "Stoties g. 36, Venta, Lietuva",
  addressQuery: "Stoties g. 36, Venta, Lietuva", // used in Google Maps links — update if the address changes
  email: "hello@ventacityapartments.lt", // TODO: replace with your real contact email before launch
  phone: "+37065287471",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Stoties+g.+36%2C+Venta%2C+Lietuva",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Stoties+g.+36%2C+Venta%2C+Lietuva",
};

// Top nav now only carries links to the shared, always-visible sections (both stays'
// content lives behind the property tabs instead — see PropertyTabs/PropertyTabContext).
export const nav: { href: string; label: Bi }[] = [
  { href: "#compare", label: { en: "Compare", lt: "Palyginti" } },
  { href: "#contact", label: { en: "Contact", lt: "Kontaktai" } },
];

// The two stays, as short display names used on the tab switcher, comparison table,
// and anywhere else both properties need a consistent, friendly label. "Venta City
// Apartments" remains the overall brand (logo, footer, legal/Booking.com listing name).
export const propertyTabs = {
  apartment: {
    key: "apartment" as const,
    name: { en: "Warm Home", lt: "Šilti namai" } as Bi,
    tagline: { en: "Traditional house", lt: "Tradicinis namas" } as Bi,
    thumb: "/images/house-exterior-hq.jpg",
  },
  flat: {
    key: "flat" as const,
    name: { en: "Modern Flat", lt: "Modernus butas" } as Bi,
    tagline: { en: "Design-led apartment", lt: "Dizainerio butas" } as Bi,
    thumb: "/images/flat-living-room-1.jpg",
  },
};

export const hero = {
  title: {
    line1: { en: "Your home away", lt: "Jūsų antrieji namai" },
    line2: { en: "from home in", lt: "" },
    emphasis: { en: "Venta", lt: "Ventoje" },
  },
  sub: {
    en: "A whole house to yourselves — four bedrooms, two living rooms, and a table big enough for everyone. Walking distance to the centre, a kilometre from the river.",
    lt: "Visas namas tik jums - keturi miegamieji, dvi svetainės ir stalas, prie kurio tilps visi. Pėsčiomis iki centro, kilometras iki upės.",
  } as Bi,
  ctaPrimary: { en: "Plan Your Stay", lt: "Planuoti viešnagę" } as Bi,
  ctaGhost: { en: "See the House", lt: "Apžiūrėti namus" } as Bi,
  tagline: {
    en: "Hosted personally — every stay, start to finish.",
    lt: "Priimame asmeniškai — nuo pradžios iki pabaigos.",
  } as Bi,
};

// Verified live from the property's Booking.com listing — keep in sync if the score or
// review count changes there. Category breakdown is out of 10, as Booking displays it.
export const rating = {
  score: 10,
  scoreLabel: { en: "Exceptional", lt: "Nuostabus" } as Bi,
  reviewCount: 23,
  reviewsLabel: { en: "23 reviews on Booking.com", lt: "23 atsiliepimai „Booking.com“" } as Bi,
  source: "Booking.com",
  sourceUrl: "https://www.booking.com/hotel/lt/venta-city-apartment.lt.html",
  sectionEyebrow: { en: "Guest Reviews", lt: "Svečių atsiliepimai" } as Bi,
  sectionTitle: { en: "What guests are saying", lt: "Ką sako svečiai" } as Bi,
  readAll: { en: "Read all reviews on Booking.com", lt: "Skaityti visus atsiliepimus „Booking.com“" } as Bi,
  categories: [
    { label: { en: "Staff", lt: "Personalas" } as Bi, score: 10 },
    { label: { en: "Amenities", lt: "Patogumai" } as Bi, score: 10 },
    { label: { en: "Cleanliness", lt: "Švara" } as Bi, score: 10 },
    { label: { en: "Comfort", lt: "Komfortas" } as Bi, score: 10 },
    { label: { en: "Value for money", lt: "Kainos ir kokybės santykis" } as Bi, score: 10 },
    { label: { en: "Location", lt: "Vieta" } as Bi, score: 10 },
  ],
};

export const stats: { value: number; suffix: string; label: Bi }[] = [
  { value: 7, suffix: "", label: { en: "Guests, comfortably", lt: "Svečiai patogiai" } },
  { value: 4, suffix: "", label: { en: "Bedrooms", lt: "Miegamieji" } },
  { value: 2, suffix: "", label: { en: "Living rooms", lt: "Svetainės" } },
  { value: 97, suffix: "m²", label: { en: "Whole house", lt: "Viso namo plotas" } },
  { value: 1, suffix: "km", label: { en: "To the river", lt: "Iki upės" } },
];

export const marqueeItems: Bi[] = [
  { en: "Whole house, not a room", lt: "Visas namas, ne kambarys" },
  { en: "Sleeps up to 7", lt: "Talpina iki 7 svečių" },
  { en: "Garden & secure parking", lt: "Sodas ir saugus stovėjimas" },
  { en: "Walk to city centre", lt: "Pėsčiomis iki centro" },
  { en: "Venta River, 1km", lt: "Ventos upė, 1 km" },
  { en: "10/10 on Booking.com", lt: "10/10 „Booking.com“" },
];

export const house = {
  eyebrow: { en: "Warm Home", lt: "Šilti namai" } as Bi,
  title: {
    en: "A quiet street, a familiar welcome",
    lt: "Rami gatvė, jaukus sutikimas",
  } as Bi,
  body: {
    en: "Tucked away on a peaceful street at Stoties g. 36, the house greets you with a private entrance, secure parking right outside, and a garden to unwind in after a day of exploring. Inside, warm wood tones and soft textiles carry through every room.",
    lt: "Namas įsikūręs ramioje Stoties g. 36 gatvėje — jus pasitiks privatus įėjimas, saugi automobilio stovėjimo vieta prie pat durų ir sodas, kuriame galėsite atsipalaiduoti po dienos kelionių. Viduje šilti medžio tonai ir minkšti audiniai jaučiami kiekviename kambaryje.",
  } as Bi,
  features: [
    {
      en: "Private entrance & secure on-site parking",
      lt: "Privatus įėjimas ir saugus automobilių stovėjimas",
    },
    {
      en: "Garden for morning coffee or evening wind-down",
      lt: "Sodas rytinei kavai ar vakariniam poilsiui",
    },
    {
      en: "Whole house, exclusively yours for your stay",
      lt: "Visas namas — tik jums viešnagės metu",
    },
  ] as Bi[],
};

export const welcome = {
  eyebrow: { en: "Welcome", lt: "Sveiki atvykę" } as Bi,
  title: {
    en: "Space for the whole family",
    lt: "Erdvė visai šeimai",
  } as Bi,
  body: {
    en: "Warm Home is a full house, not just a room — four bedrooms, two separate living areas, a well-equipped kitchen, and a table that seats eight. Built for families and groups who want to stay together without living on top of one another.",
    lt: "Šilti namai — tai visas namas, o ne tik kambarys: keturi miegamieji, dvi atskiros svetainės, pilnai įrengta virtuvė ir aštuonių vietų stalas. Sukurta šeimoms ir draugų kompanijoms, norinčioms atostogauti kartu, bet netrukdyti vienas kitam.",
  } as Bi,
};

export type RoomCategory = "bedroom" | "common" | "dining" | "bathroom";

export const roomFilters: { key: "all" | RoomCategory; label: Bi }[] = [
  { key: "all", label: { en: "All Rooms", lt: "Visi kambariai" } },
  { key: "bedroom", label: { en: "Bedrooms", lt: "Miegamieji" } },
  { key: "common", label: { en: "Common Spaces", lt: "Bendros erdvės" } },
  { key: "dining", label: { en: "Kitchen & Dining", lt: "Virtuvė ir valgomasis" } },
  { key: "bathroom", label: { en: "Bathroom", lt: "Vonios kambarys" } },
];

export const rooms = {
  eyebrow: { en: "Rooms", lt: "Kambariai" } as Bi,
  title: {
    en: "Room to breathe, corners to gather",
    lt: "Erdvė kvėpuoti, kampeliai susiburti",
  } as Bi,
};

export interface RoomCard {
  id: string;
  image: string;
  category: RoomCategory;
  caption: Bi;
  subcaption: Bi;
}

export const roomCards: RoomCard[] = [
  {
    id: "living-room-1",
    image: "/images/living-room-1.jpg",
    category: "common",
    caption: { en: "Living Room", lt: "Svetainė" },
    subcaption: { en: "Room for everyone to gather", lt: "Vietos susirinkti visiems" },
  },
  {
    id: "dining",
    image: "/images/dining.jpg",
    category: "dining",
    caption: { en: "Dining & Kitchen", lt: "Valgomasis ir virtuvė" },
    subcaption: { en: "Seats eight around the table", lt: "Aštuonios vietos prie stalo" },
  },
  {
    id: "bedroom-1",
    image: "/images/bedroom-1.jpg",
    category: "bedroom",
    caption: { en: "Bedroom", lt: "Miegamasis" },
    subcaption: { en: "Warm and quiet, garden view", lt: "Šiltas, ramus, vaizdas į sodą" },
  },
  {
    id: "bedroom-2",
    image: "/images/bedroom-2.jpg",
    category: "bedroom",
    caption: { en: "Bedroom", lt: "Miegamasis" },
    subcaption: { en: "Soft light, plenty of storage", lt: "Minkšta šviesa, daug vietos daiktams" },
  },
  {
    id: "bedroom-4-twin",
    image: "/images/bedroom-4-twin.jpg",
    category: "bedroom",
    caption: { en: "Twin Room", lt: "Kambarys su dviem lovomis" },
    subcaption: { en: "Perfect for kids or friends", lt: "Puikiai tinka vaikams ar draugams" },
  },
  {
    id: "bedroom-3",
    image: "/images/bedroom-3.jpg",
    category: "bedroom",
    caption: { en: "Bedroom", lt: "Miegamasis" },
    subcaption: { en: "Desk & reading corner", lt: "Rašomasis stalas ir kampelis skaitymui" },
  },
  {
    id: "living-room-2",
    image: "/images/living-room-2.jpg",
    category: "common",
    caption: { en: "Second Living Room", lt: "Antra svetainė" },
    subcaption: { en: "A quieter spot to unwind", lt: "Ramesnė vieta atsipalaiduoti" },
  },
  {
    id: "sofa-bed",
    image: "/images/sofa-bed.jpg",
    category: "common",
    caption: { en: "Extra Sleeping Space", lt: "Papildoma miegojimo vieta" },
    subcaption: { en: "Sofa bed for extra guests", lt: "Sofa-lova papildomiems svečiams" },
  },
  {
    id: "kitchen",
    image: "/images/kitchen.jpg",
    category: "dining",
    caption: { en: "Kitchen", lt: "Virtuvė" },
    subcaption: { en: "Fully equipped, ready to cook", lt: "Pilnai įrengta, pasiruošusi gaminimui" },
  },
  {
    id: "hallway",
    image: "/images/hallway.jpg",
    category: "common",
    caption: { en: "Hallway", lt: "Koridorius" },
    subcaption: { en: "Where every room meets", lt: "Kur susitinka visi kambariai" },
  },
  {
    id: "bathroom",
    image: "/images/bathroom.jpg",
    category: "bathroom",
    caption: { en: "Bathroom", lt: "Vonios kambarys" },
    subcaption: { en: "Fresh towels, hot water", lt: "Švieži rankšluosčiai, karštas vanduo" },
  },
];

export const pullQuote = {
  en: "Come as guests, leave as family.",
  lt: "Atvykite kaip svečiai, išvažiuokite kaip šeima.",
} as Bi;

export const amenities = {
  eyebrow: { en: "Amenities", lt: "Patogumai" } as Bi,
  title: {
    en: "Everything you need, nothing you don't",
    lt: "Viskas, ko reikia, be nieko papildomo",
  } as Bi,
  items: [
    {
      icon: "parking",
      title: { en: "Secure Parking", lt: "Saugus stovėjimas" },
      body: {
        en: "Private, secure parking right on the property — no circling the block.",
        lt: "Privati, saugi automobilio stovėjimo vieta prie pat namo.",
      },
    },
    {
      icon: "garden",
      title: { en: "Garden", lt: "Sodas" },
      body: {
        en: "A quiet green space to step outside and breathe.",
        lt: "Rami žalia erdvė išeiti į lauką ir atsikvėpti.",
      },
    },
    {
      icon: "wifi",
      title: { en: "Free WiFi", lt: "Nemokamas WiFi" },
      body: {
        en: "Fast, reliable connection throughout the house.",
        lt: "Greitas, patikimas ryšys visame name.",
      },
    },
    {
      icon: "tv",
      title: { en: "TV in Every Room", lt: "TV kiekviename kambaryje" },
      body: {
        en: "Settle in — every bedroom and living room has its own screen.",
        lt: "Kiekvienas miegamasis ir svetainė turi savo televizorių.",
      },
    },
    {
      icon: "walk",
      title: { en: "Walk to Town Centre", lt: "Pėsčiomis iki centro" },
      body: {
        en: "Shops, cafes and the town centre are an easy stroll away.",
        lt: "Parduotuvės, kavinės ir miesto centras — pasiekiami pėsčiomis.",
      },
    },
    {
      icon: "river",
      title: { en: "River, 1km Away", lt: "Upė už 1 km" },
      body: {
        en: "The Venta river is a short, easy walk for an evening stroll.",
        lt: "Ventos upė — netoli, puiku vakariniam pasivaikščiojimui.",
      },
    },
    {
      icon: "bike",
      title: { en: "Free Bicycles", lt: "Nemokami dviračiai" },
      body: {
        en: "Borrow a bike from the house and explore Venta at your own pace.",
        lt: "Pasiskolinkite dviratį ir tyrinėkite Ventą savo tempu.",
      },
    },
    {
      icon: "grill",
      title: { en: "Outdoor Grill", lt: "Lauko kepsninė" },
      body: {
        en: "A barbecue in the garden for warm evenings with everyone together.",
        lt: "Kepsninė sode — šiltiems vakarams visai kompanijai kartu.",
      },
    },
  ] as { icon: string; title: Bi; body: Bi }[],
};

// Room-by-room facility breakdown — verbatim from the property's Booking.com listing.
export const fullAmenities = {
  eyebrow: { en: "In Every Room", lt: "Kiekviename kambaryje" } as Bi,
  title: { en: "Down to the details", lt: "Iki smulkmenų" } as Bi,
  categories: [
    {
      title: { en: "Kitchen", lt: "Virtuvė" } as Bi,
      items: [
        { en: "Full kitchen & kitchenette", lt: "Pilna virtuvė ir virtuvėlė" },
        { en: "Oven & stovetop", lt: "Orkaitė ir viryklė" },
        { en: "Microwave & toaster", lt: "Mikrobangų krosnelė ir skrudintuvas" },
        { en: "Fridge & electric kettle", lt: "Šaldytuvas ir elektrinis virdulys" },
        { en: "Washing machine", lt: "Skalbimo mašina" },
        { en: "Dining table & cookware", lt: "Valgomasis stalas ir virtuvės reikmenys" },
        { en: "Cleaning supplies", lt: "Valymo priemonės" },
      ] as Bi[],
    },
    {
      title: { en: "Bedrooms", lt: "Miegamieji" } as Bi,
      items: [
        { en: "Fresh linens provided", lt: "Suteikiama švari patalynė" },
        { en: "Wardrobe in every room", lt: "Drabužių spinta kiekviename kambaryje" },
        { en: "Extra-long beds (2m+)", lt: "Ilgesnės lovos (2 m+)" },
        { en: "Sofa bed for extra guests", lt: "Sofa-lova papildomiems svečiams" },
        { en: "Wood & parquet flooring", lt: "Medinės ir parketo grindys" },
      ] as Bi[],
    },
    {
      title: { en: "Bathroom", lt: "Vonios kambarys" } as Bi,
      items: [
        { en: "Towels & toilet paper supplied", lt: "Rankšluosčiai ir tualetinis popierius" },
        { en: "Hair dryer", lt: "Plaukų džiovintuvas" },
        { en: "Bath and shower", lt: "Vonia ir dušas" },
        { en: "Private bathroom", lt: "Privatus vonios kambarys" },
      ] as Bi[],
    },
    {
      title: { en: "Living & Comfort", lt: "Gyvenamoji erdvė" } as Bi,
      items: [
        { en: "Flat-screen TV in every room", lt: "Plokščiaekranis TV kiekviename kambaryje" },
        { en: "Desk & sofa in the living area", lt: "Darbo stalas ir sofa svetainėje" },
        { en: "Iron & ironing board", lt: "Lygintuvas" },
        { en: "Private, separate entrance", lt: "Privatus, atskiras įėjimas" },
        { en: "Keyed entry", lt: "Įėjimas naudojant raktus" },
      ] as Bi[],
    },
  ],
  languagesHeading: { en: "The Hosts Speak", lt: "Šeimininkai kalba" } as Bi,
  languages: [
    { en: "English", lt: "Angliškai" },
    { en: "Lithuanian", lt: "Lietuviškai" },
    { en: "Polish", lt: "Lenkiškai" },
    { en: "Russian", lt: "Rusiškai" },
  ] as Bi[],
  note: {
    en: "Upper floors are reached by stairs only — there is no lift.",
    lt: "Į viršutinius aukštus patenkama tik laiptais — lifto nėra.",
  } as Bi,
};

export const location = {
  eyebrow: { en: "Location", lt: "Vieta" } as Bi,
  title: {
    en: "Right where you want to be",
    lt: "Ten, kur norite būti",
  } as Bi,
  body: {
    en: "Stoties g. 36, Venta — an easy walk to the town centre, with the river just a kilometre from your door. Quiet enough to relax, close enough to explore.",
    lt: "Stoties g. 36, Venta — pėsčiomis iki miesto centro, o upė vos už kilometro nuo durų. Pakankamai ramu atsipalaiduoti, pakankamai arti viską pamatyti.",
  } as Bi,
  rows: [
    { en: "City centre — walking distance", lt: "Miesto centras — pasiekiamas pėsčiomis" },
    { en: "Venta River — 1 km", lt: "Ventos upė — 1 km" },
    { en: "Private, secure parking on site", lt: "Privatus, saugus stovėjimas vietoje" },
  ] as Bi[],
  directions: { en: "Get Directions", lt: "Kaip atvykti" } as Bi,
  openMaps: { en: "Open in Google Maps", lt: "Atidaryti „Google Maps“" } as Bi,
  nearbyHeading: { en: "Nearby", lt: "Netoliese" } as Bi,
  // Straight-line/walking distances as listed on the property's Booking.com page.
  nearby: [
    { label: { en: "Nature & Culture Park", lt: "Gamtos ir kultūros parkas" } as Bi, distance: "7 km" },
    { label: { en: "Venta Regional Park", lt: "Ventos regioninis parkas" } as Bi, distance: "13 km" },
    { label: { en: "Restaurant Viliošiai", lt: "Restoranas „Viliošiai“" } as Bi, distance: "5 km" },
    { label: { en: "Papilė Train Station", lt: "Papilės geležinkelio stotis" } as Bi, distance: "9 km" },
    { label: { en: "Mažeikiai", lt: "Mažeikiai" } as Bi, distance: "26 km" },
    { label: { en: "Telšiai", lt: "Telšiai" } as Bi, distance: "36 km" },
  ],
};

export const goodToKnow = {
  eyebrow: { en: "Good to Know", lt: "Naudinga žinoti" } as Bi,
  title: {
    en: "Everything for a smooth stay",
    lt: "Viskas sklandžiai viešnagei",
  } as Bi,
  items: [
    { label: { en: "Check-in", lt: "Įsiregistravimas" } as Bi, value: { en: "15:00 – 18:00", lt: "15:00 – 18:00" } as Bi },
    { label: { en: "Check-out", lt: "Išsiregistravimas" } as Bi, value: { en: "Until 11:00", lt: "Iki 11:00" } as Bi },
    { label: { en: "Quiet hours", lt: "Ramybės valandos" } as Bi, value: { en: "21:00 – 06:00", lt: "21:00 – 06:00" } as Bi },
    { label: { en: "Children", lt: "Vaikai" } as Bi, value: { en: "Welcome, any age", lt: "Laukiami, bet kokio amžiaus" } as Bi },
    { label: { en: "Smoking", lt: "Rūkymas" } as Bi, value: { en: "Not permitted", lt: "Draudžiamas" } as Bi },
    { label: { en: "Pets", lt: "Gyvūnai" } as Bi, value: { en: "Not permitted", lt: "Neleidžiami" } as Bi },
  ],
  note: {
    en: "Please let us know your arrival time in advance — we host every stay personally, start to finish.",
    lt: "Praneškite mums numatomą atvykimo laiką iš anksto — kiekvieną viešnagę priimame asmeniškai, nuo pradžios iki pabaigos.",
  } as Bi,
};

export interface Testimonial {
  id: string;
  quote: Bi;
  name: string;
  country: Bi;
  stay: Bi;
}

// Verbatim (with light bilingual translation) from real, verified guest reviews on the
// property's Booking.com listing — every review there currently scores a perfect 10/10.
export const testimonials: Testimonial[] = [
  {
    id: "judith",
    quote: {
      en: "The apartment is very light and spacious. It has two patios so you can make your choice depending on the weather. It is exceptionally clean and comfortable with very large rooms. The kitchen is well equipped with everything you could need. Our host was very friendly and helpful — we greatly appreciated the home-grown apples, pears and tomatoes given to us. We thoroughly enjoyed our stay.",
      lt: "Butas labai šviesus ir erdvus. Yra dvi terasos, tad galima rinktis pagal orą. Nepaprastai švarus ir jaukus, su labai dideliais kambariais. Virtuvė gerai įrengta — yra viskas, ko gali prireikti. Šeimininkas buvo labai draugiškas ir paslaugus — labai apsidžiaugėme savo sodo obuoliais, kriaušėmis ir pomidorais, kuriais mus pavaišino. Nuoširdžiai mėgavomės viešnage.",
    },
    name: "Judith",
    country: { en: "Australia", lt: "Australija" },
    stay: { en: "4 nights, couple", lt: "4 naktys, pora" },
  },
  {
    id: "egle",
    quote: {
      en: "We were warmly welcomed by the host, who showed us around and explained everything. The apartments are palatial — comfortable enough to settle in even seven of us. We recommend 100%, thank you!",
      lt: "Buvom maloniai pasitikti šeimininko, viską aprodė, papasakojo. Apartamentai karališki, galima patogiai įsikurti net septyniese. Rekomenduojam 100%, ačiū šeimininkam 😍",
    },
    name: "Eglė",
    country: { en: "Lithuania", lt: "Lietuva" },
    stay: { en: "1 night, solo", lt: "1 naktis, viena" },
  },
  {
    id: "khrystyna",
    quote: {
      en: "We had a wonderful stay! The apartment was spotless, cozy, and equipped with everything we needed for a comfortable stay. The hosts were very friendly, welcoming, and helpful. Everything exceeded our expectations, and we truly enjoyed our time here.",
      lt: "Mūsų viešnagė buvo nuostabi! Butas buvo nepriekaištingai švarus, jaukus ir aprūpintas viskuo, ko reikėjo patogiam poilsiui. Šeimininkai buvo labai draugiški, svetingi ir paslaugūs. Viskas pranoko mūsų lūkesčius.",
    },
    name: "Khrystyna",
    country: { en: "Ukraine", lt: "Ukraina" },
    stay: { en: "1 night, couple", lt: "1 naktis, pora" },
  },
  {
    id: "ruta",
    quote: {
      en: "A warm welcome, shown around thoroughly. You can cook — every dish you need, hairdryer, towels, washing machine, iron. Rooms are spacious and clean, with an enclosed yard for the car and a basketball hoop. This is a place I'd truly return to.",
      lt: "Maloniai pasitiko, viską aprodė. Yra galimybė gamintis maistą, visi būtini indai, plaukų džiovintuvas, rankšluosčiai, skalbimo mašina, lygintuvas. Patalpos erdvios ir švarios. Uždaras kiemas automobiliui ir krepšinio aikštelei. Tikrai grįžčiau dar kartą.",
    },
    name: "Rūta",
    country: { en: "Lithuania", lt: "Lietuva" },
    stay: { en: "1 night, group", lt: "1 naktis, grupė" },
  },
  {
    id: "dovile",
    quote: {
      en: "Friendly hosts. A quiet, beautiful location with private parking, close to shops and the town centre. Very spacious, with a nice balcony to sit on. Spotless cleanliness, comfortable beds, good quality linen — they'd even thought of detergent, gentle shower gel, a first aid kit and a fire extinguisher. We were 100% satisfied.",
      lt: "Draugiški šeimininkai. Rami, graži vieta, privati automobilių stovėjimo aikštelė, netoli parduotuvių ir centro. Labai erdvu, malonus balkonas pasėdėti. Nepriekaištinga švara, patogios lovos, kokybiška patalynė — pagalvota net apie skalbiklį, švelnų dušo gelį, pirmosios pagalbos vaistinėlę ir gesintuvą. Likome 100% patenkinti.",
    },
    name: "Dovilė",
    country: { en: "Lithuania", lt: "Lietuva" },
    stay: { en: "2 nights, family", lt: "2 naktys, šeima" },
  },
  {
    id: "lina",
    quote: {
      en: "This is a gorgeous place with impeccable accommodations! What a perfect get-away! Excellent, warm reception from the host.",
      lt: "Nuostabi vieta su nepriekaištingu apgyvendinimu! Kokios puikios atostogos! Puikus, šiltas šeimininko priėmimas.",
    },
    name: "Lina",
    country: { en: "United States", lt: "JAV" },
    stay: { en: "1 night, family", lt: "1 naktis, šeima" },
  },
];

export const contact = {
  eyebrow: { en: "Get in Touch", lt: "Susisiekite" } as Bi,
  title: { en: "Ready when you are", lt: "Pasiruošę, kai jūs pasiruošę" } as Bi,
  body: {
    en: "Questions, dates, or a special request? Reach out and we'll help plan your stay in Venta.",
    lt: "Turite klausimų ar norite sutarti datas? Susisiekite — padėsime suplanuoti jūsų viešnagę Ventoje.",
  } as Bi,
  callWhatsapp: { en: "Call / WhatsApp", lt: "Skambinti / WhatsApp" } as Bi,
  form: {
    heading: { en: "Send an Inquiry", lt: "Siųsti užklausą" } as Bi,
    name: { en: "Name", lt: "Vardas" } as Bi,
    namePlaceholder: { en: "Your full name", lt: "Jūsų vardas ir pavardė" } as Bi,
    contact: { en: "Phone or Email", lt: "Telefonas arba el. paštas" } as Bi,
    contactPlaceholder: { en: "How can we reach you?", lt: "Kaip galėtume su jumis susisiekti?" } as Bi,
    message: { en: "Message", lt: "Žinutė" } as Bi,
    messagePlaceholder: {
      en: "Dates, number of guests, questions — anything at all.",
      lt: "Datos, svečių skaičius, klausimai — bet kas.",
    } as Bi,
    send: { en: "Send Inquiry", lt: "Siųsti užklausą" } as Bi,
    sending: { en: "Sending…", lt: "Siunčiama…" } as Bi,
    successTitle: { en: "Message sent", lt: "Žinutė išsiųsta" } as Bi,
    successBody: {
      en: "Thank you — we'll get back to you within a day.",
      lt: "Ačiū — atsakysime jums per vieną dieną.",
    } as Bi,
    sendAnother: { en: "Send another message", lt: "Siųsti dar vieną žinutę" } as Bi,
  },
};

export const footer = {
  tagline: pullQuote,
  explore: { en: "Explore", lt: "Naršyti" } as Bi,
  visit: { en: "Visit", lt: "Apsilankyti" } as Bi,
  contactHeading: { en: "Contact", lt: "Kontaktai" } as Bi,
  checkAvailability: { en: "Check availability", lt: "Tikrinti laisvas datas" } as Bi,
  madeWith: { en: "Made with care, in Venta", lt: "Sukurta su rūpesčiu, Ventoje" } as Bi,
  copyright: `© ${new Date().getFullYear()} Venta City Apartments`,
};

// ———————————————————————————————————————————————————————————————————————
// Second property — a fully renovated flat. Address and a few specifics are
// placeholder (lorem ipsum) until the real details are provided; room types,
// layout and amenities below are described from the actual property photos.
// ———————————————————————————————————————————————————————————————————————

export const flatBusiness = {
  name: "Modern Flat",
  address: "Lorem ipsum g. 12, Lorem ipsum, Lietuva", // TODO: replace with the real address
  addressQuery: "Lorem ipsum g. 12, Lorem ipsum, Lietuva", // TODO: used in Google Maps links once the address is confirmed
  email: business.email,
  phone: business.phone,
};

export const flatHero = {
  eyebrow: { en: "Our Second Stay", lt: "Antroji mūsų viešnagė" } as Bi,
  title: {
    line1: { en: "A sleek, modern flat", lt: "Modernus, jaukus butas" },
    emphasis: { en: "for your stay", lt: "jūsų viešnagei" },
  },
  sub: {
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fully renovated, design-led flat with a designer bathroom, full kitchen and a private balcony.",
    lt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pilnai atnaujintas, dizaino sprendimų pilnas butas su dizainerišku vonios kambariu, pilna virtuve ir privačiu balkonu.",
  } as Bi,
  ctaPrimary: { en: "Plan Your Stay", lt: "Planuoti viešnagę" } as Bi,
  ctaGhost: { en: "See the Flat", lt: "Apžiūrėti butą" } as Bi,
  tagline: {
    en: "Lorem ipsum dolor sit amet, consectetur.",
    lt: "Lorem ipsum dolor sit amet, consectetur.",
  } as Bi,
};

export const flatStats: { value: number; suffix: string; label: Bi }[] = [
  { value: 4, suffix: "", label: { en: "Guests, comfortably", lt: "Svečiai patogiai" } },
  { value: 2, suffix: "", label: { en: "Bedrooms", lt: "Miegamieji" } },
  { value: 1, suffix: "", label: { en: "Bathroom", lt: "Vonios kambarys" } },
];

export const flatAbout = {
  eyebrow: { en: "Modern Flat", lt: "Modernus butas" } as Bi,
  title: {
    en: "Lorem ipsum dolor sit amet",
    lt: "Lorem ipsum dolor sit amet",
  } as Bi,
  body: {
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    lt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  } as Bi,
  features: [
    { en: "Keyless smart entry", lt: "Įėjimas išmaniąja spynele" },
    { en: "Full kitchen with oven, hob & washing machine", lt: "Pilna virtuvė su orkaite, kaitlente ir skalbimo mašina" },
    { en: "Private balcony", lt: "Privatus balkonas" },
  ] as Bi[],
};

export const flatRooms = {
  eyebrow: { en: "Rooms", lt: "Kambariai" } as Bi,
  title: { en: "A closer look inside", lt: "Arčiau pažvelkime į vidų" } as Bi,
};

export const flatRoomCards: RoomCard[] = [
  {
    id: "flat-living-room-1",
    image: "/images/flat-living-room-1.jpg",
    category: "common",
    caption: { en: "Living Room", lt: "Svetainė" },
    subcaption: { en: "Leather sectional & wall-mounted TV", lt: "Odinė sofa ir ant sienos pakabintas TV" },
  },
  {
    id: "flat-living-room-2",
    image: "/images/flat-living-room-2.jpg",
    category: "common",
    caption: { en: "Living Room", lt: "Svetainė" },
    subcaption: { en: "Bright, with a view onto the courtyard", lt: "Šviesi, su vaizdu į kiemą" },
  },
  {
    id: "flat-kitchen",
    image: "/images/flat-kitchen.jpg",
    category: "dining",
    caption: { en: "Kitchen", lt: "Virtuvė" },
    subcaption: { en: "Fully equipped, built-in appliances", lt: "Pilnai įrengta, integruota technika" },
  },
  {
    id: "flat-dining",
    image: "/images/flat-dining.jpg",
    category: "dining",
    caption: { en: "Dining Area", lt: "Valgomasis" },
    subcaption: { en: "Seats four, just off the kitchen", lt: "Keturios vietos, šalia virtuvės" },
  },
  {
    id: "flat-bedroom-1",
    image: "/images/flat-bedroom-1.jpg",
    category: "bedroom",
    caption: { en: "Bedroom", lt: "Miegamasis" },
    subcaption: { en: "Multiple beds, bright and spacious", lt: "Kelios lovos, šviesu ir erdvu" },
  },
  {
    id: "flat-bedroom-2",
    image: "/images/flat-bedroom-2.jpg",
    category: "bedroom",
    caption: { en: "Bedroom", lt: "Miegamasis" },
    subcaption: { en: "Quiet corner room", lt: "Ramus kambarys kampe" },
  },
  {
    id: "flat-bathroom-1",
    image: "/images/flat-bathroom-1.jpg",
    category: "bathroom",
    caption: { en: "Bathroom", lt: "Vonios kambarys" },
    subcaption: { en: "Designer fittings, walk-in shower", lt: "Dizaino detalės, dušo kabina" },
  },
  {
    id: "flat-bathroom-2",
    image: "/images/flat-bathroom-2.jpg",
    category: "bathroom",
    caption: { en: "Rainfall Shower", lt: "Lietaus dušas" },
    subcaption: { en: "Stone tile, black fittings", lt: "Akmens plytelės, juodos detalės" },
  },
  {
    id: "flat-balcony",
    image: "/images/flat-balcony.jpg",
    category: "common",
    caption: { en: "Balcony", lt: "Balkonas" },
    subcaption: { en: "A quiet spot overlooking the courtyard", lt: "Rami vieta su vaizdu į kiemą" },
  },
  {
    id: "flat-entryway",
    image: "/images/flat-entryway.jpg",
    category: "common",
    caption: { en: "Entryway", lt: "Prieškambaris" },
    subcaption: { en: "Keyless entry, built-in storage", lt: "Įėjimas be rakto, integruota spinta" },
  },
];

export const flatAmenities = {
  eyebrow: { en: "Amenities", lt: "Patogumai" } as Bi,
  title: { en: "Modern, down to the details", lt: "Moderniai, iki smulkmenų" } as Bi,
  items: [
    {
      icon: "wifi",
      title: { en: "Free WiFi", lt: "Nemokamas WiFi" },
      body: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        lt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
    {
      icon: "tv",
      title: { en: "Flat-Screen TV", lt: "Plokščiaekranis TV" },
      body: {
        en: "Wall-mounted in the living room, ready to settle in.",
        lt: "Pakabintas svetainėje — tik atsisėsk ir atsipalaiduok.",
      },
    },
    {
      icon: "washer",
      title: { en: "Washing Machine", lt: "Skalbimo mašina" },
      body: {
        en: "Full-size machine built into the kitchen.",
        lt: "Pilno dydžio skalbimo mašina, įmontuota virtuvėje.",
      },
    },
    {
      icon: "balcony",
      title: { en: "Private Balcony", lt: "Privatus balkonas" },
      body: {
        en: "A quiet spot for morning coffee or evening air.",
        lt: "Rami vieta rytinei kavai ar vakariniam orui pakvėpuoti.",
      },
    },
    {
      icon: "lock",
      title: { en: "Keyless Smart Entry", lt: "Įėjimas be rakto" },
      body: {
        en: "A keypad lock on the front door — no keys to lose or hand over.",
        lt: "Įėjimo durys su kodine spynele — nereikia rakto.",
      },
    },
    {
      icon: "kitchen",
      title: { en: "Full Kitchen", lt: "Pilna virtuvė" },
      body: {
        en: "Oven, induction hob, fridge-freezer and everything you need to cook.",
        lt: "Orkaitė, indukcinė kaitlentė, šaldytuvas ir visa reikalinga virtuvės įranga.",
      },
    },
  ] as { icon: string; title: Bi; body: Bi }[],
};

export const comparison = {
  eyebrow: { en: "Which One Is Right for You?", lt: "Kuri vieta jums tinka?" } as Bi,
  title: { en: "Compare the Two Stays", lt: "Palyginkite abi viešnages" } as Bi,
  intro: {
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit — a quick side-by-side to help you pick, at a glance.",
    lt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit — greitas palyginimas, padėsiantis apsispręsti iš karto.",
  } as Bi,
  columns: {
    apartment: "Warm Home",
    flat: "Modern Flat",
  },
  rows: [
    { label: { en: "Guests", lt: "Svečiai" } as Bi, apartment: "7", flat: "4" },
    { label: { en: "Bedrooms", lt: "Miegamieji" } as Bi, apartment: "4", flat: "2" },
    {
      label: { en: "Style", lt: "Stilius" } as Bi,
      apartment: { en: "Warm, traditional house", lt: "Šiltas, tradicinis namas" } as Bi,
      flat: { en: "Modern, design-led flat", lt: "Modernus, dizainerio sukurtas butas" } as Bi,
    },
    {
      label: { en: "Outdoor space", lt: "Lauko erdvė" } as Bi,
      apartment: { en: "Garden & grill", lt: "Sodas ir kepsninė" } as Bi,
      flat: { en: "Private balcony", lt: "Privatus balkonas" } as Bi,
    },
    {
      label: { en: "Entry", lt: "Įėjimas" } as Bi,
      apartment: { en: "Traditional key, hosted personally", lt: "Tradicinis raktas, asmeniškai priimame" } as Bi,
      flat: { en: "Keyless smart entry", lt: "Įėjimas be rakto" } as Bi,
    },
    {
      label: { en: "Guest rating", lt: "Svečių įvertinimas" } as Bi,
      apartment: "10/10 — Booking.com",
      flat: { en: "Lorem ipsum (coming soon)", lt: "Lorem ipsum (bus netrukus)" } as Bi,
    },
    {
      label: { en: "Best for", lt: "Tinka" } as Bi,
      apartment: { en: "Families & groups who want space", lt: "Šeimoms ir grupėms, norinčioms erdvės" } as Bi,
      flat: { en: "Couples & small groups who want style", lt: "Poroms ir mažoms grupėms, vertinančioms stilių" } as Bi,
    },
  ] as { label: Bi; apartment: string | Bi; flat: string | Bi }[],
  pros: {
    apartment: {
      title: { en: "Why Choose Warm Home", lt: "Kodėl rinktis Šiltus namus" } as Bi,
      items: [
        { en: "Whole house, exclusively yours", lt: "Visas namas — tik jums" },
        { en: "Garden, grill & secure parking", lt: "Sodas, kepsninė ir saugus stovėjimas" },
        { en: "Verified 10/10 guest rating", lt: "Patvirtintas 10/10 svečių įvertinimas" },
        { en: "Walk to the river & town centre", lt: "Pėsčiomis iki upės ir centro" },
      ] as Bi[],
    },
    flat: {
      title: { en: "Why Choose Modern Flat", lt: "Kodėl rinktis Modernų butą" } as Bi,
      items: [
        { en: "Freshly renovated, designer interior", lt: "Neseniai atnaujintas, dizainerio interjeras" },
        { en: "Rainfall shower & designer bathroom", lt: "Lietaus dušas ir dizainerio vonios kambarys" },
        { en: "Keyless smart entry", lt: "Įėjimas be rakto" },
        { en: "Private balcony", lt: "Privatus balkonas" },
      ] as Bi[],
    },
  },
};

export const flatLocation = {
  eyebrow: { en: "Location", lt: "Vieta" } as Bi,
  title: { en: "Address coming soon", lt: "Adresas bus paskelbtas" } as Bi,
  body: {
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The exact address and map will be added here shortly — reach out and we'll be glad to share it directly.",
    lt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tikslus adresas ir žemėlapis bus pridėti netrukus — susisiekite ir mielai juo pasidalinsime.",
  } as Bi,
  cta: { en: "Ask Us Directly", lt: "Klauskite tiesiogiai" } as Bi,
};
