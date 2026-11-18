(() => {
  const CART_KEY = "tropos-storefront-cart-v1";
  const FAVORITES_KEY = "tropos-storefront-favorites-v1";
  const products = [
    {
      id: "top-pulso",
      name: "Top Pulso",
      category: "Tops",
      color: "Azul eléctrico",
      price: 74900,
      vipEligible: true,
      image: "photo-1518611012118-696072aa579a",
      alt: "Deportista estirando sobre una esterilla",
      description: "Una capa ligera para entrenar, estirar o salir a moverte.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: true,
    },
    {
      id: "short-sprint",
      name: "Short Sprint",
      category: "Bottoms",
      color: "Negro",
      price: 79900,
      vipEligible: true,
      image: "photo-1770026136368-0873a0833a20",
      alt: "Deportista con ropa de entrenamiento en un gimnasio",
      description: "Un short de entrenamiento conceptual para moverte sin complicaciones.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: true,
    },
    {
      id: "set-orbita",
      name: "Set Órbita",
      category: "Conjuntos",
      color: "Rosa intenso",
      price: 79900,
      vipEligible: true,
      image: "photo-1790725567757-d23e9b4196c8",
      alt: "Dos deportistas con conjuntos de entrenamiento",
      description: "Un conjunto de muestra para acompañar una sesión completa de movimiento.",
      sizes: ["S", "M", "L", "XL"],
      featured: true,
    },
    {
      id: "legging-marea",
      name: "Legging Marea",
      category: "Bottoms",
      color: "Azul noche",
      price: 129900,
      vipEligible: false,
      image: "photo-1538805060514-97d9cc17730c",
      alt: "Deportista con leggings en unas escaleras",
      description: "Una silueta de cintura alta para entrenamiento y movimiento diario.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "chaqueta-brisa",
      name: "Chaqueta Brisa",
      category: "Capas",
      color: "Gris piedra",
      price: 169900,
      vipEligible: false,
      image: "photo-1518310383802-640c2de311b2",
      alt: "Grupo de deportistas entrenando con pesas",
      description: "Una capa exterior ligera para antes y después de entrenar.",
      sizes: ["S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "buzo-ritmo",
      name: "Buzo Ritmo",
      category: "Capas",
      color: "Rosa intenso",
      price: 189900,
      vipEligible: false,
      image: "photo-1599447421416-3414500d18a5",
      alt: "Personas en una sesión de estiramiento",
      description: "Una prenda de abrigo conceptual para llevar el movimiento más allá del gimnasio.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "top-aurora",
      name: "Top Aurora",
      category: "Tops",
      color: "Lavanda",
      price: 69900,
      vipEligible: true,
      image: "photo-1788463127287-1d250cf5fe78",
      alt: "Dos deportistas con prendas deportivas cruzadas",
      description: "Top de muestra para acompañar sesiones de entrenamiento y movimiento.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "top-energia",
      name: "Top Energía",
      category: "Tops",
      color: "Negro",
      price: 79900,
      vipEligible: true,
      image: "photo-1628970990401-6bff2927482a",
      alt: "Deportista con top naranja y prendas negras",
      description: "Top de muestra para entrenar a tu manera.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "top-luna",
      name: "Top Luna",
      category: "Tops",
      color: "Blanco",
      price: 64900,
      vipEligible: true,
      image: "photo-1518611012118-696072aa579a",
      alt: "Deportista estirando sobre una esterilla",
      description: "Top de muestra pensado para complementar tu selección deportiva.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "camiseta-viento",
      name: "Camiseta Viento",
      category: "Tops",
      color: "Blanco",
      price: 59900,
      vipEligible: true,
      image: "photo-1599447421416-3414500d18a5",
      alt: "Personas en una sesión de estiramiento",
      description: "Camiseta de muestra para moverte durante el día.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "camiseta-alba",
      name: "Camiseta Alba",
      category: "Tops",
      color: "Rosa suave",
      price: 84900,
      vipEligible: false,
      image: "photo-1788463127287-1d250cf5fe78",
      alt: "Dos deportistas con prendas deportivas cruzadas",
      description: "Camiseta de muestra para combinar con tus prendas favoritas.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "top-senda",
      name: "Top Senda",
      category: "Tops",
      color: "Verde oliva",
      price: 89900,
      vipEligible: false,
      image: "photo-1790725567757-d23e9b4196c8",
      alt: "Dos deportistas con conjuntos de entrenamiento",
      description: "Top deportivo de muestra para una variedad de actividades.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "camiseta-impulso",
      name: "Camiseta Impulso",
      category: "Tops",
      color: "Azul noche",
      price: 74900,
      vipEligible: true,
      image: "photo-1518310383802-640c2de311b2",
      alt: "Grupo de deportistas entrenando con pesas",
      description: "Camiseta de muestra para tus momentos de movimiento.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "legging-nube",
      name: "Legging Nube",
      category: "Bottoms",
      color: "Gris claro",
      price: 119900,
      vipEligible: false,
      image: "photo-1789111161057-90c5ce12dc21",
      alt: "Persona con leggings negros y zapatillas blancas",
      description: "Legging de muestra para entrenar o salir a caminar.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "legging-zenit",
      name: "Legging Zenit",
      category: "Bottoms",
      color: "Negro",
      price: 139900,
      vipEligible: false,
      image: "photo-1789111161057-90c5ce12dc21",
      alt: "Persona con leggings negros y zapatillas blancas",
      description: "Legging de muestra para combinar con tus tops favoritos.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "legging-flujo",
      name: "Legging Flujo",
      category: "Bottoms",
      color: "Verde salvia",
      price: 109900,
      vipEligible: false,
      image: "photo-1518611012118-696072aa579a",
      alt: "Deportista estirando sobre una esterilla",
      description: "Legging de muestra para acompañar tus rutinas.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "short-aire",
      name: "Short Aire",
      category: "Bottoms",
      color: "Azul cielo",
      price: 69900,
      vipEligible: true,
      image: "photo-1770026136368-0873a0833a20",
      alt: "Deportista con ropa de entrenamiento en un gimnasio",
      description: "Short de muestra para entrenar y moverte.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "short-duna",
      name: "Short Duna",
      category: "Bottoms",
      color: "Arena",
      price: 74900,
      vipEligible: true,
      image: "photo-1788463127287-1d250cf5fe78",
      alt: "Dos deportistas con prendas deportivas cruzadas",
      description: "Short de muestra para completar tu look deportivo.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "jogger-pausa",
      name: "Jogger Pausa",
      category: "Bottoms",
      color: "Gris piedra",
      price: 149900,
      vipEligible: false,
      image: "photo-1599447421416-3414500d18a5",
      alt: "Personas en una sesión de estiramiento",
      description: "Jogger de muestra para antes o después de entrenar.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "set-aura",
      name: "Set Aura",
      category: "Conjuntos",
      color: "Lavanda",
      price: 79900,
      vipEligible: true,
      image: "photo-1790725567757-d23e9b4196c8",
      alt: "Dos deportistas con conjuntos de entrenamiento",
      description: "Conjunto de muestra con top y bottom para crear un look completo.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "set-ritual",
      name: "Set Ritual",
      category: "Conjuntos",
      color: "Negro",
      price: 79900,
      vipEligible: true,
      image: "photo-1788463127287-1d250cf5fe78",
      alt: "Dos deportistas con prendas deportivas cruzadas",
      description: "Conjunto de muestra pensado para tus sesiones de movimiento.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "set-sol",
      name: "Set Sol",
      category: "Conjuntos",
      color: "Coral",
      price: 74900,
      vipEligible: true,
      image: "photo-1518611012118-696072aa579a",
      alt: "Deportista estirando sobre una esterilla",
      description: "Conjunto de muestra para llenar de color tu selección.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "set-oasis",
      name: "Set Oasis",
      category: "Conjuntos",
      color: "Azul cielo",
      price: 159900,
      vipEligible: false,
      image: "photo-1790725567757-d23e9b4196c8",
      alt: "Dos deportistas con conjuntos de entrenamiento",
      description: "Conjunto de muestra con piezas para combinar.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "set-fuerza",
      name: "Set Fuerza",
      category: "Conjuntos",
      color: "Gris oscuro",
      price: 179900,
      vipEligible: false,
      image: "photo-1628970990401-6bff2927482a",
      alt: "Deportista con top naranja y prendas negras",
      description: "Conjunto de muestra para tus días de entrenamiento.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "set-cielo",
      name: "Set Cielo",
      category: "Conjuntos",
      color: "Azul noche",
      price: 149900,
      vipEligible: false,
      image: "photo-1538805060514-97d9cc17730c",
      alt: "Deportista con leggings en unas escaleras",
      description: "Conjunto de muestra para explorar un look deportivo.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "set-equilibrio",
      name: "Set Equilibrio",
      category: "Conjuntos",
      color: "Verde salvia",
      price: 169900,
      vipEligible: false,
      image: "photo-1599447421416-3414500d18a5",
      alt: "Personas en una sesión de estiramiento",
      description: "Conjunto de muestra para acompañarte en cada ritmo.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "buzo-calma",
      name: "Buzo Calma",
      category: "Capas",
      color: "Crema",
      price: 149900,
      vipEligible: false,
      image: "photo-1599447421416-3414500d18a5",
      alt: "Personas en una sesión de estiramiento",
      description: "Buzo de muestra para los momentos entre actividades.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "buzo-norte",
      name: "Buzo Norte",
      category: "Capas",
      color: "Negro",
      price: 159900,
      vipEligible: false,
      image: "photo-1518310383802-640c2de311b2",
      alt: "Grupo de deportistas entrenando con pesas",
      description: "Buzo de muestra para complementar tu ropa deportiva.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "chaqueta-ruta",
      name: "Chaqueta Ruta",
      category: "Capas",
      color: "Azul noche",
      price: 189900,
      vipEligible: false,
      image: "photo-1538805060514-97d9cc17730c",
      alt: "Deportista con leggings en unas escaleras",
      description: "Chaqueta de muestra para llevar sobre tu ropa de entrenamiento.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "chaqueta-cumbre",
      name: "Chaqueta Cumbre",
      category: "Capas",
      color: "Verde oliva",
      price: 199900,
      vipEligible: false,
      image: "photo-1790725567757-d23e9b4196c8",
      alt: "Dos deportistas con conjuntos de entrenamiento",
      description: "Chaqueta de muestra para acompañarte antes y después de entrenar.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      featured: false,
    },
    {
      id: "camisa-capa-ligera",
      name: "Capa Ligera",
      category: "Capas",
      color: "Blanco",
      price: 79900,
      vipEligible: true,
      image: "photo-1788463127287-1d250cf5fe78",
      alt: "Dos deportistas con prendas deportivas cruzadas",
      description: "Capa de muestra para combinar con tu selección deportiva.",
      sizes: ["XS", "S", "M", "L", "XL"],
      featured: false,
    },
    {
      id: "buzo-dia",
      name: "Buzo Día",
      category: "Capas",
      color: "Lavanda",
      price: 139900,
      vipEligible: false,
      image: "photo-1518611012118-696072aa579a",
      alt: "Deportista estirando sobre una esterilla",
      description: "Buzo de muestra para tus momentos de descanso y movimiento.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    },
  ];

  const sampleCollections = [
    { id: "esencia", name: "Esencia", color: "Negro" },
    { id: "sereno", name: "Sereno", color: "Azul noche" },
    { id: "flor", name: "Flor", color: "Rosa suave" },
    { id: "bosque", name: "Bosque", color: "Verde oliva" },
    { id: "arena", name: "Arena", color: "Beige" },
    { id: "neblina", name: "Neblina", color: "Gris piedra" },
    { id: "lavanda", name: "Lavanda", color: "Lavanda" },
  ];
  const sampleStyles = [
    { id: "top-cruzado", name: "Top cruzado", category: "Tops", price: 74900, photo: "top-aurora", description: "Top deportivo de diseño cruzado" },
    { id: "top-largo", name: "Top largo", category: "Tops", price: 79900, photo: "top-energia", description: "Top deportivo de silueta larga" },
    { id: "top-tirantes", name: "Top de tirantes", category: "Tops", price: 69900, photo: "top-pulso", description: "Top deportivo de tirantes" },
    { id: "camiseta-corta", name: "Camiseta manga corta", category: "Tops", price: 64900, photo: "camiseta-viento", description: "Camiseta deportiva de manga corta" },
    { id: "camiseta-sin-mangas", name: "Camiseta sin mangas", category: "Tops", price: 59900, photo: "top-luna", description: "Camiseta deportiva sin mangas" },
    { id: "camiseta-larga", name: "Camiseta manga larga", category: "Tops", price: 89900, photo: "camiseta-alba", description: "Camiseta deportiva de manga larga" },
    { id: "legging-alto", name: "Legging cintura alta", category: "Bottoms", price: 119900, photo: "legging-zenit", description: "Legging deportivo de cintura alta" },
    { id: "legging-capri", name: "Legging capri", category: "Bottoms", price: 109900, photo: "legging-marea", description: "Legging deportivo de largo capri" },
    { id: "short-entrenamiento", name: "Short de entrenamiento", category: "Bottoms", price: 74900, photo: "short-aire", description: "Short para entrenamiento" },
    { id: "short-ciclista", name: "Short ciclista", category: "Bottoms", price: 79900, photo: "short-duna", description: "Short deportivo de estilo ciclista" },
    { id: "jogger-recto", name: "Jogger recto", category: "Bottoms", price: 129900, photo: "jogger-pausa", description: "Jogger deportivo de corte recto" },
    { id: "pantalon-amplio", name: "Pantalón amplio", category: "Bottoms", price: 139900, photo: "legging-flujo", description: "Pantalón deportivo de silueta amplia" },
    { id: "set-top-short", name: "Set top y short", category: "Conjuntos", price: 79900, photo: "set-ritual", description: "Conjunto de top y short" },
    { id: "set-top-legging", name: "Set top y legging", category: "Conjuntos", price: 79900, photo: "set-aura", description: "Conjunto de top y legging" },
    { id: "set-camiseta-short", name: "Set camiseta y short", category: "Conjuntos", price: 79900, photo: "set-sol", description: "Conjunto de camiseta y short" },
    { id: "set-camiseta-jogger", name: "Set camiseta y jogger", category: "Conjuntos", price: 149900, photo: "set-equilibrio", description: "Conjunto de camiseta y jogger" },
    { id: "set-buzo-jogger", name: "Set buzo y jogger", category: "Conjuntos", price: 179900, photo: "set-oasis", description: "Conjunto de buzo y jogger" },
    { id: "set-chaqueta-legging", name: "Set chaqueta y legging", category: "Conjuntos", price: 189900, photo: "set-fuerza", description: "Conjunto de chaqueta y legging" },
    { id: "buzo-cuello-redondo", name: "Buzo cuello redondo", category: "Capas", price: 139900, photo: "buzo-calma", description: "Buzo deportivo de cuello redondo" },
    { id: "buzo-capucha", name: "Buzo con capucha", category: "Capas", price: 159900, photo: "buzo-norte", description: "Buzo deportivo con capucha" },
    { id: "chaqueta-cremallera", name: "Chaqueta con cremallera", category: "Capas", price: 169900, photo: "chaqueta-brisa", description: "Chaqueta deportiva con cremallera" },
    { id: "chaqueta-corta", name: "Chaqueta corta", category: "Capas", price: 159900, photo: "chaqueta-ruta", description: "Chaqueta deportiva de corte corto" },
    { id: "chaleco", name: "Chaleco deportivo", category: "Capas", price: 119900, photo: "chaqueta-cumbre", description: "Chaleco para complementar tu selección" },
    { id: "sobrecamisa", name: "Sobrecamisa ligera", category: "Capas", price: 79900, photo: "camisa-capa-ligera", description: "Sobrecamisa para llevar sobre otras prendas" },
  ];

  const legacyVariants = new Map();
  sampleStyles.forEach((style) => {
    const photo = products.find((product) => product.id === style.photo);
    const colors = sampleCollections.map((collection) => collection.color);
    products.push({
      id: `catalogo-${style.id}`,
      name: style.name,
      category: style.category,
      color: colors[0],
      colors,
      price: style.price,
      vipEligible: style.price <= 80000,
      image: photo.image,
      alt: photo.alt,
      description: `${style.description}. Producto de muestra.`,
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      featured: false,
    });
    sampleCollections.forEach((collection) => {
      legacyVariants.set(`catalogo-${style.id}-${collection.id}`, {
        id: `catalogo-${style.id}`,
        color: collection.color,
      });
    });
  });

  const additionalStyles = [
    {
      category: "Tops",
      names: [
        "Top halter de espalda abierta",
        "Top asimétrico de un hombro",
        "Top con tiras ajustables",
        "Top de cuello cuadrado",
        "Top de cuello alto",
        "Top con espalda nadadora",
        "Top con espalda en V",
        "Top de doble tirante",
        "Top de manga corta",
        "Top de manga larga",
        "Top con cierre delantero",
        "Top con cierre posterior",
        "Top con banda ancha",
        "Top con escote en V",
        "Top de escote redondo",
        "Top con hombros descubiertos",
        "Top de tirante ancho",
        "Top con detalle fruncido",
        "Top con panel lateral",
        "Top con tiras en la espalda",
        "Camiseta corta de cuello redondo",
        "Camiseta corta de cuello en V",
        "Camiseta de manga raglán",
        "Camiseta de manga japonesa",
        "Camiseta con abertura lateral",
        "Camiseta de espalda cruzada",
        "Camiseta de espalda abierta",
        "Camiseta de corte amplio",
        "Camiseta de corte ajustado",
        "Camiseta de largo extendido",
        "Camiseta corta sin mangas",
        "Camiseta de hombro caído",
        "Camiseta polo deportiva",
        "Camiseta con medio cierre",
        "Camiseta con detalle anudado",
        "Camiseta de cuello alto sin mangas",
      ],
    },
    {
      category: "Bottoms",
      names: [
        "Legging de cintura cruzada",
        "Legging de cintura media",
        "Legging de cintura ancha",
        "Legging con bolsillos laterales",
        "Legging con bolsillo posterior",
        "Legging con paneles laterales",
        "Legging de largo siete octavos",
        "Legging con bajo acampanado",
        "Legging de bajo con abertura",
        "Legging con estribos",
        "Legging capri con bolsillo",
        "Legging capri de cintura cruzada",
        "Short ciclista de cintura alta",
        "Short ciclista con bolsillos",
        "Short ciclista de largo medio",
        "Short ciclista con cintura cruzada",
        "Short de correr con abertura lateral",
        "Short de correr de dos capas",
        "Short con cintura ajustable",
        "Short amplio de pierna recta",
        "Short de entrenamiento con bolsillo",
        "Short con bajo curvo",
        "Short de cintura plegable",
        "Short deportivo de tiro largo",
        "Jogger con puño ajustado",
        "Jogger con cintura ajustable",
        "Jogger con bolsillos laterales",
        "Jogger de pierna amplia",
        "Jogger de bajo con cremallera",
        "Pantalón de corte acampanado",
        "Pantalón recto con cordón",
        "Pantalón amplio con bolsillos",
        "Pantalón capri deportivo",
        "Pantalón de bajo ajustable",
        "Falda deportiva con short interior",
        "Falda pantalón con cintura alta",
      ],
    },
    {
      category: "Conjuntos",
      names: [
        "Set top halter y legging largo",
        "Set top halter y short ciclista",
        "Set top cruzado y legging largo",
        "Set top cruzado y short ciclista",
        "Set top largo y legging capri",
        "Set top largo y short de correr",
        "Set top nadador y legging alto",
        "Set top nadador y short ciclista",
        "Set top de tirantes y legging capri",
        "Set top de tirantes y short amplio",
        "Set top de cuello alto y legging",
        "Set top de cuello cuadrado y short",
        "Set top manga corta y legging",
        "Set top manga larga y legging",
        "Set top asimétrico y short",
        "Set top con cierre y legging",
        "Set camiseta corta y legging",
        "Set camiseta corta y short",
        "Set camiseta sin mangas y jogger",
        "Set camiseta sin mangas y short",
        "Set camiseta manga corta y legging",
        "Set camiseta manga corta y jogger",
        "Set camiseta manga larga y legging",
        "Set camiseta manga larga y jogger",
        "Set camiseta amplia y pantalón recto",
        "Set camiseta polo y falda pantalón",
        "Set buzo redondo y short",
        "Set buzo redondo y pantalón amplio",
        "Set buzo con capucha y short",
        "Set buzo con capucha y legging",
        "Set chaqueta corta y short",
        "Set chaqueta corta y legging capri",
        "Set chaqueta con cierre y jogger",
        "Set chaleco y pantalón recto",
        "Set sobrecamisa y short ciclista",
        "Set camiseta corta y falda pantalón",
      ],
    },
    {
      category: "Capas",
      names: [
        "Buzo corto de cuello redondo",
        "Buzo largo de cuello redondo",
        "Buzo amplio con hombro caído",
        "Buzo ajustado de manga raglán",
        "Buzo con cuello alto",
        "Buzo con cuello en V",
        "Buzo con medio cierre",
        "Buzo con cierre completo",
        "Buzo con bolsillo frontal",
        "Buzo con abertura lateral",
        "Buzo con capucha y bolsillo",
        "Buzo corto con capucha",
        "Buzo largo con capucha",
        "Buzo con capucha y medio cierre",
        "Buzo con capucha sin mangas",
        "Buzo con bajo ajustable",
        "Chaqueta larga con cremallera",
        "Chaqueta corta con capucha",
        "Chaqueta de cuello alto",
        "Chaqueta sin cuello",
        "Chaqueta con cintura ajustable",
        "Chaqueta con bolsillos laterales",
        "Chaqueta de manga raglán",
        "Chaqueta de bajo elástico",
        "Chaqueta de silueta amplia",
        "Chaqueta de silueta ajustada",
        "Chaqueta con abertura posterior",
        "Chaqueta deportiva tipo bomber",
        "Chaleco de cuello alto",
        "Chaleco con cierre frontal",
        "Chaleco con bolsillos",
        "Chaleco largo deportivo",
        "Sobrecamisa de manga larga",
        "Sobrecamisa de manga corta",
        "Sobrecamisa con bolsillos",
        "Sobrecamisa de bajo ajustable",
      ],
    },
  ];
  additionalStyles.forEach((group) => {
    const photos = products.filter((product) => product.category === group.category);
    const prices = group.category === "Tops" ? [59900, 69900, 79900, 89900]
      : group.category === "Bottoms" ? [74900, 79900, 109900, 129900]
      : group.category === "Conjuntos" ? [79900, 119900, 149900, 179900]
      : [79900, 119900, 149900, 169900];
    group.names.forEach((name, index) => {
      const photo = photos[index % photos.length];
      const colors = sampleCollections.map((collection) => collection.color);
      const price = prices[index % prices.length];
      products.push({
        id: `diseno-${group.category.toLowerCase()}-${index + 1}`,
        name,
        category: group.category,
        color: colors[0],
        colors,
        price,
        vipEligible: price <= 80000,
        image: photo.image,
        alt: photo.alt,
        description: `${name}. Diseño ficticio de muestra para la colección Tropos.`,
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        featured: false,
      });
    });
  });

  const stockPhotos = [
    ["top-pulso", "5310916", "Top deportivo naranja"],
    ["top-aurora", "20838888", "Top deportivo naranja y negro"],
    ["top-energia", "16701752", "Top deportivo rojo"],
    ["short-sprint", "40958566", "Corredora con short deportivo rosa"],
    ["legging-marea", "16701769", "Leggings deportivos fucsia"],
    ["legging-nube", "8846276", "Leggings deportivos en tono tierra"],
    ["legging-zenit", "7880215", "Leggings deportivos oscuros con detalles rosas"],
    ["set-orbita", "6311071", "Conjunto deportivo rosa con buzo y pantalón"],
    ["set-aura", "10508327", "Conjunto deportivo lavanda con buzo y pantalón"],
    ["set-oasis", "17792623", "Conjunto deportivo gris con chaqueta y pantalón"],
    ["set-fuerza", "33366448", "Conjunto deportivo rojo con chaqueta y pantalón"],
    ["chaqueta-brisa", "8454949", "Chaqueta deportiva azul"],
    ["buzo-ritmo", "6076451", "Buzo deportivo rosa con capucha"],
    ["top-luna", "6250870", "Top deportivo negro de escote redondo"],
    ["camiseta-viento", "10350233", "Camiseta deportiva blanca de manga corta"],
    ["camiseta-alba", "16412051", "Camiseta deportiva verde de manga corta"],
    ["top-senda", "31245352", "Top deportivo morado de tirantes anchos"],
    ["catalogo-top-tirantes", "14008767", "Top deportivo negro de tirantes"],
    ["diseno-tops-13", "5992692", "Top deportivo rosa con banda ancha"],
    ["diseno-tops-14", "903170", "Top deportivo rojo con escote en V"],
    ["diseno-tops-17", "13923896", "Top deportivo blanco de tirantes anchos"],
    ["legging-flujo", "11573835", "Leggings deportivos rojos"],
    ["short-aire", "34663456", "Short deportivo rosa para correr"],
    ["short-duna", "31381383", "Short deportivo rojo para correr"],
    ["catalogo-legging-alto", "29242398", "Leggings azules de cintura alta"],
    ["catalogo-short-entrenamiento", "39644724", "Short deportivo negro para correr"],
    ["diseno-bottoms-3", "40027334", "Leggings grises de cintura ancha"],
    ["diseno-bottoms-7", "7880125", "Leggings deportivos grises de largo corto"],
    ["diseno-bottoms-13", "12931732", "Short ciclista azul de cintura alta"],
    ["set-ritual", "30500787", "Conjunto deportivo fucsia de top y leggings"],
    ["set-sol", "7777271", "Conjunto deportivo naranja de top y leggings"],
    ["set-cielo", "16122087", "Conjunto deportivo verde y negro"],
    ["set-equilibrio", "40581243", "Conjunto deportivo rojo para entrenar"],
    ["catalogo-set-top-short", "35865506", "Conjunto deportivo rosa de top y short"],
    ["catalogo-set-top-legging", "15245868", "Conjunto estampado de top y leggings"],
    ["catalogo-set-chaqueta-legging", "28774699", "Conjunto de chaqueta y leggings oscuros"],
    ["diseno-conjuntos-14", "31500872", "Conjunto marrón de top de manga larga y leggings"],
    ["buzo-calma", "6739128", "Buzo deportivo lavanda"],
    ["buzo-norte", "8456126", "Buzo deportivo negro con capucha"],
    ["chaqueta-ruta", "5588315", "Chaqueta deportiva morada para correr"],
    ["chaqueta-cumbre", "8838481", "Chaqueta deportiva naranja"],
    ["buzo-dia", "15793512", "Buzo deportivo blanco con capucha"],
    ["catalogo-buzo-capucha", "13311979", "Buzo azul oscuro con capucha"],
    ["catalogo-chaqueta-cremallera", "20033330", "Chaqueta deportiva roja con cremallera"],
    ["catalogo-chaleco", "29132157", "Chaleco deportivo acolchado azul"],
  ];
  stockPhotos.forEach(([id, photoId, alt]) => {
    const product = products.find((item) => item.id === id);
    product.image = `pexels-${photoId}`;
    product.alt = alt;
  });

  const money = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
  const notice = document.querySelector("[data-notice]");

  function showNotice(message, isError = false) {
    if (!notice) return;
    notice.textContent = message;
    notice.classList.toggle("is-error", isError);
  }

  function imageUrl(id, width = 900) {
    if (id.startsWith("pexels-")) {
      const photoId = id.slice("pexels-".length);
      return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&fit=crop&w=${width}`;
    }
    return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
  }

  function getProduct(id) {
    const legacy = legacyVariants.get(id);
    return products.find((product) => product.id === (legacy ? legacy.id : id));
  }

  function getColors(product) {
    return product.colors || [product.color];
  }

  function readFavorites() {
    let raw;
    try {
      raw = localStorage.getItem(FAVORITES_KEY);
    } catch (error) {
      showNotice("El navegador no permitió leer tus favoritos.", true);
      return null;
    }
    if (!raw) return [];
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      showNotice("No se pudieron leer tus favoritos guardados.", true);
      return null;
    }
    if (!Array.isArray(parsed) || parsed.some((id) => typeof id !== "string" || !getProduct(id)) || new Set(parsed).size !== parsed.length) {
      showNotice("Los favoritos guardados tienen un formato inválido.", true);
      return null;
    }
    return [...new Set(parsed.map((id) => getProduct(id).id))];
  }

  function updateFavoriteButtons(favorites) {
    document.querySelectorAll("[data-favorite]").forEach((button) => {
      const product = getProduct(button.dataset.favorite);
      const selected = favorites.includes(product.id);
      button.setAttribute("aria-pressed", String(selected));
      button.setAttribute("aria-label", `${selected ? "Quitar" : "Guardar"} ${product.name} ${selected ? "de" : "en"} favoritos`);
      button.textContent = button.classList.contains("favorite-detail")
        ? (selected ? "♥ Guardado en favoritos" : "♡ Guardar en favoritos")
        : (selected ? "♥" : "♡");
    });
  }

  function renderFavorites(favorites) {
    const grid = document.querySelector("[data-favorites-grid]");
    const empty = document.querySelector("[data-favorites-empty]");
    if (!grid || !empty) return;
    renderGrid(grid, products.filter((product) => favorites.includes(product.id)), favorites);
    empty.hidden = favorites.length > 0;
  }

  function initFavorites() {
    const favorites = readFavorites();
    if (favorites) {
      renderFavorites(favorites);
      updateFavoriteButtons(favorites);
    }
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest("[data-favorite]");
      if (!button) return;
      const product = getProduct(button.dataset.favorite);
      const saved = readFavorites();
      if (!product || !saved) return;
      const selected = saved.includes(product.id);
      const next = selected ? saved.filter((id) => id !== product.id) : [...saved, product.id];
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      } catch (error) {
        showNotice("No se pudieron guardar tus favoritos en este navegador.", true);
        return;
      }
      renderFavorites(next);
      updateFavoriteButtons(next);
      showNotice(`${product.name} ${selected ? "quitado de" : "guardado en"} favoritos.`);
    });
  }

  function readCart() {
    let raw;
    try {
      raw = localStorage.getItem(CART_KEY);
    } catch (error) {
      showNotice("El navegador no permitió leer el carrito guardado.", true);
      return [];
    }
    if (!raw) return [];

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      showNotice("El carrito guardado no se pudo leer. Puedes empezar uno nuevo.", true);
      return [];
    }
    if (!Array.isArray(parsed)) {
      showNotice("El carrito guardado tiene un formato inválido.", true);
      return [];
    }

    const validItems = parsed.map((item) => {
      if (!item || typeof item !== "object") return null;
      const product = getProduct(item.id);
      if (!product) return null;
      const legacy = legacyVariants.get(item.id);
      const color = item.color || (legacy ? legacy.color : product.color);
      if (!product.sizes.includes(item.size) || !getColors(product).includes(color) ||
          !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 10) return null;
      return { id: product.id, size: item.size, color, quantity: item.quantity };
    }).filter((item) => item !== null);
    if (validItems.length !== parsed.length) {
      showNotice("Se omitieron artículos inválidos del carrito guardado.", true);
    }
    return validItems;
  }

  function writeCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      showNotice("No se pudo guardar el carrito en este navegador.", true);
      return false;
    }
    updateCartCount(cart);
    return true;
  }

  function updateCartCount(cart = readCart()) {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll("[data-cart-count]").forEach((element) => {
      element.textContent = String(count);
      element.setAttribute("aria-label", `${count} ${count === 1 ? "artículo" : "artículos"} en el carrito`);
    });
  }

  function productCard(product, favorites) {
    const vipTag = product.vipEligible
      ? '<span class="product-tag vip">ELEGIBLE VIP</span>'
      : "";
    const vipNote = product.vipEligible
      ? '<p class="product-vip-note">Puedes elegirla con tu VIP Credit de muestra.</p>'
      : "";
    return `
      <article class="product-card">
        <a class="product-card-link" href="producto.html?id=${encodeURIComponent(product.id)}">
          <div class="product-image">
            <img src="${imageUrl(product.image)}" alt="${product.alt}. Fotografía ilustrativa." loading="lazy">
            ${vipTag}
          </div>
          <div class="product-card-info">
            <div><h3>${product.name}</h3><p>${product.category} · ${getColors(product).length > 1 ? `${getColors(product).length} colores` : product.color}</p>${vipNote}</div>
            <p class="product-card-price">${money.format(product.price)}</p>
          </div>
        </a>
        <button class="favorite-button" type="button" data-favorite="${product.id}" aria-pressed="${favorites.includes(product.id)}" aria-label="${favorites.includes(product.id) ? "Quitar" : "Guardar"} ${product.name} ${favorites.includes(product.id) ? "de" : "en"} favoritos">${favorites.includes(product.id) ? "♥" : "♡"}</button>
      </article>
    `;
  }

  function renderGrid(container, items, favorites = readFavorites()) {
    container.innerHTML = items.map((product) => productCard(product, favorites || [])).join("");
  }

  function initHome() {
    const grid = document.querySelector('[data-product-grid="featured"]');
    if (grid) renderGrid(grid, products.filter((product) => product.featured));
  }

  function initCatalog() {
    const grid = document.querySelector('[data-product-grid="catalog"]');
    const search = document.querySelector("[data-search]");
    const category = document.querySelector("[data-category]");
    const sort = document.querySelector("[data-sort]");
    const count = document.querySelector("[data-catalog-count]");
    const empty = document.querySelector("[data-empty-state]");
    const reset = document.querySelector("[data-reset-filters]");
    const pagination = document.querySelector("[data-pagination]");
    const previous = document.querySelector("[data-page-prev]");
    const next = document.querySelector("[data-page-next]");
    const position = document.querySelector("[data-page-position]");
    if (!grid || !search || !category || !sort || !count || !empty || !reset ||
        !pagination || !previous || !next || !position) return;

    const pageSize = 24;
    let page = 0;

    const requestedCategory = new URLSearchParams(window.location.search).get("categoria");
    if (requestedCategory && Array.from(category.options).some((option) => option.value === requestedCategory)) {
      category.value = requestedCategory;
    }

    function update() {
      const query = search.value.trim().toLocaleLowerCase("es");
      const selectedCategory = category.value;
      let matches = products.filter((product) => {
        const searchable = `${product.name} ${product.category} ${getColors(product).join(" ")}`.toLocaleLowerCase("es");
        return searchable.includes(query) &&
          (selectedCategory === "all" || product.category === selectedCategory);
      });

      if (sort.value === "price-asc") matches.sort((a, b) => a.price - b.price);
      if (sort.value === "price-desc") matches.sort((a, b) => b.price - a.price);
      if (sort.value === "name") matches.sort((a, b) => a.name.localeCompare(b.name, "es"));

      const pageCount = Math.ceil(matches.length / pageSize);
      page = Math.min(page, Math.max(0, pageCount - 1));
      renderGrid(grid, matches.slice(page * pageSize, (page + 1) * pageSize));
      count.textContent = `${matches.length} ${matches.length === 1 ? "producto" : "productos"}`;
      empty.hidden = matches.length > 0;
      pagination.hidden = pageCount <= 1;
      previous.disabled = page === 0;
      next.disabled = page >= pageCount - 1;
      position.textContent = pageCount ? `Página ${page + 1} de ${pageCount}` : "";
    }

    function updateFilters() {
      page = 0;
      update();
    }

    search.addEventListener("input", updateFilters);
    category.addEventListener("change", updateFilters);
    sort.addEventListener("change", updateFilters);
    previous.addEventListener("click", () => {
      page -= 1;
      update();
      grid.scrollIntoView({ block: "start" });
    });
    next.addEventListener("click", () => {
      page += 1;
      update();
      grid.scrollIntoView({ block: "start" });
    });
    reset.addEventListener("click", () => {
      search.value = "";
      category.value = "all";
      sort.value = "featured";
      updateFilters();
      search.focus();
    });
    update();
  }

  function initProduct() {
    const params = new URLSearchParams(window.location.search);
    const product = getProduct(params.get("id"));
    const detail = document.querySelector("[data-product-detail]");
    if (!detail) return;
    if (!product) {
      detail.innerHTML = '<div class="empty-state"><h1>Producto no encontrado.</h1><a class="text-link" href="productos.html">Volver a la tienda ↗</a></div>';
      return;
    }

    document.title = `${product.name} — Tropos`;
    document.querySelector("[data-product-category]").textContent = product.category;
    detail.querySelector("[data-product-label]").textContent = product.category;
    detail.querySelector("[data-product-name]").textContent = product.name;
    detail.querySelector("[data-product-price]").textContent = money.format(product.price);
    detail.querySelector("[data-product-description]").textContent = product.description;
    const image = detail.querySelector("[data-product-image]");
    image.src = imageUrl(product.image, 1200);
    image.alt = `${product.alt}. Fotografía ilustrativa; no representa necesariamente el producto.`;

    const eligibility = detail.querySelector("[data-credit-eligibility]");
    if (product.vipEligible) {
      eligibility.textContent = "Elegible en esta demostración para el VIP Credit: producto participante de hasta $80.000 COP.";
      eligibility.classList.add("is-eligible");
    } else {
      eligibility.textContent = "Este producto de muestra supera el límite propuesto para el VIP Credit.";
    }

    const size = detail.querySelector("[data-product-size]");
    const color = detail.querySelector("[data-product-color]");
    color.innerHTML = getColors(product).map((value) => `<option value="${value}">${value}</option>`).join("");
    const legacy = legacyVariants.get(params.get("id"));
    if (legacy) color.value = legacy.color;
    detail.querySelector("[data-product-favorite]").dataset.favorite = product.id;
    size.innerHTML = product.sizes.map((value) => `<option value="${value}">${value}</option>`).join("");
    detail.querySelector("[data-add-to-cart]").addEventListener("click", () => {
      const cart = readCart();
      const existing = cart.find((item) => item.id === product.id && item.size === size.value && item.color === color.value);
      if (existing) {
        if (existing.quantity >= 10) {
          showNotice("El máximo de muestra es 10 unidades por talla y color.", true);
          return;
        }
        existing.quantity += 1;
      } else {
        cart.push({ id: product.id, size: size.value, color: color.value, quantity: 1 });
      }
      if (writeCart(cart)) showNotice(`${product.name} · ${color.value} · talla ${size.value} agregado al carrito.`);
    });
  }

  function renderCart() {
    const list = document.querySelector("[data-cart-items]");
    const subtotalElement = document.querySelector("[data-cart-subtotal]");
    if (!list || !subtotalElement) return;
    const cart = readCart();
    if (cart.length === 0) {
      list.innerHTML = '<div class="cart-empty"><h2>Tu carrito está esperando.</h2><p>Explora la colección y agrega una pieza que te guste.</p><a class="button button-dark" href="productos.html">Ir a la tienda</a></div>';
      subtotalElement.textContent = money.format(0);
      return;
    }

    let subtotal = 0;
    list.innerHTML = cart.map((item, index) => {
      const product = getProduct(item.id);
      const lineTotal = product.price * item.quantity;
      subtotal += lineTotal;
      return `
        <article class="cart-item">
          <img src="${imageUrl(product.image, 300)}" alt="${product.alt}. Fotografía ilustrativa." loading="lazy">
          <div>
            <h2>${product.name}</h2>
            <p>${item.color} · Talla ${item.size}</p>
            <div class="quantity-control" aria-label="Cantidad de ${product.name}">
              <button type="button" data-cart-change="-1" data-cart-index="${index}" aria-label="Reducir cantidad">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-change="1" data-cart-index="${index}" aria-label="Aumentar cantidad">+</button>
              <button class="remove-item" type="button" data-cart-remove data-cart-index="${index}">Quitar</button>
            </div>
          </div>
          <span class="cart-item-price">${money.format(lineTotal)}</span>
        </article>
      `;
    }).join("");
    subtotalElement.textContent = money.format(subtotal);
  }

  function initCart() {
    const list = document.querySelector("[data-cart-items]");
    const checkout = document.querySelector("[data-checkout]");
    if (!list) return;
    renderCart();
    list.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const changeButton = target.closest("[data-cart-change]");
      const removeButton = target.closest("[data-cart-remove]");
      if (!changeButton && !removeButton) return;

      const itemIndex = Number((changeButton || removeButton).dataset.cartIndex);
      const cart = readCart();
      if (!Number.isInteger(itemIndex) || itemIndex < 0 || itemIndex >= cart.length) return;

      if (removeButton) {
        cart.splice(itemIndex, 1);
      } else {
        const delta = Number(changeButton.dataset.cartChange);
        const quantity = cart[itemIndex].quantity + delta;
        if (quantity > 10) {
          showNotice("El máximo de muestra es 10 unidades por talla y color.", true);
          return;
        }
        if (quantity <= 0) cart.splice(itemIndex, 1);
        else cart[itemIndex].quantity = quantity;
      }
      if (writeCart(cart)) renderCart();
    });
    checkout.addEventListener("click", () => {
      showNotice("El checkout es una demostración: no se envían datos ni se realiza ningún cobro.");
    });
  }

  function initContact() {
    const form = document.querySelector("[data-contact-form]");
    const result = document.querySelector("[data-contact-result]");
    if (!form || !result) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      result.textContent = `Vista previa local para ${data.get("name")} (${data.get("email")}). Este mensaje no se envió ni se guardó.`;
      form.reset();
    });
  }

  function initQuiz() {
    const form = document.querySelector("[data-quiz]");
    const results = document.querySelector("[data-quiz-results]");
    if (!form || !results) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const answers = new FormData(form);
      const category = answers.get("category");
      const vip = answers.get("vip");
      const matches = products.filter((product) =>
        (category === "all" || product.category === category) && (vip !== "yes" || product.vipEligible));
      renderGrid(results.querySelector("[data-quiz-grid]"), matches);
      results.querySelector("[data-quiz-count]").textContent = matches.length
        ? `${matches.length} ${matches.length === 1 ? "pieza encontrada" : "piezas encontradas"}.`
        : "No encontramos piezas con estas opciones. Prueba otra selección.";
      results.hidden = false;
    });
  }

  function initVipCarousel() {
    const carousel = document.querySelector("[data-vip-carousel]");
    if (!carousel) return;
    const slides = Array.from(carousel.querySelectorAll("[data-vip-slide]"));
    let current = 0;
    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.hidden = i !== current; });
      carousel.querySelector("[data-vip-position]").textContent = `Beneficio ${current + 1} de ${slides.length}`;
    }
    carousel.querySelector("[data-vip-prev]").addEventListener("click", () => showSlide(current - 1));
    carousel.querySelector("[data-vip-next]").addEventListener("click", () => showSlide(current + 1));
  }

  function initAccount() {
    const result = document.querySelector("[data-account-result]");
    document.querySelectorAll("[data-account-open]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-account-panel]").forEach((panel) => {
          panel.hidden = panel.id !== button.dataset.accountOpen;
          panel.querySelectorAll("input").forEach((input) => { input.value = ""; });
        });
        document.querySelectorAll("[data-account-open]").forEach((other) => {
          other.setAttribute("aria-expanded", String(other === button));
        });
        result.textContent = "";
      });
    });
    document.querySelectorAll("[data-account-demo]").forEach((button) => {
      button.addEventListener("click", () => {
        button.closest("[data-account-panel]").querySelectorAll("input").forEach((input) => { input.value = ""; });
        result.textContent = "Demostración: las cuentas todavía no están activas. No se inició sesión ni se creó una cuenta.";
      });
    });
  }

  function initMenu() {
    const button = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".primary-navigation");
    if (!button || !navigation) return;
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      button.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      navigation.classList.toggle("is-open", !isOpen);
    });
    navigation.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) return;
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir menú");
      navigation.classList.remove("is-open");
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir menú");
      navigation.classList.remove("is-open");
    });
  }

  updateCartCount();
  initMenu();
  initHome();
  initCatalog();
  initProduct();
  initCart();
  initContact();
  initQuiz();
  initVipCarousel();
  initAccount();
  initFavorites();
})();
