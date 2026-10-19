(() => {
  const CART_KEY = "tropos-demo-cart-v1";
  const image = (photo, width = 900) =>
    `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;
  const products = [
    {
      id: "top-pulso",
      name: "Top Pulso",
      category: "Tops",
      color: "Rosa neón",
      price: 129900,
      image: image("photo-1517836357463-d25dfeac3438"),
      alt: "Atleta entrenando con una barra en el gimnasio",
      gallery: [
        { src: image("photo-1517836357463-d25dfeac3438", 1100), alt: "Atleta entrenando con una barra en el gimnasio" },
        { src: image("photo-1549476464-37392f717541", 1100), alt: "Atleta haciendo ejercicio con pesas en un gimnasio" },
        { src: image("photo-1599058917212-d750089bc07e", 1100), alt: "Atleta entrenando con cuerda de batalla" },
      ],
      description: "Un top deportivo conceptual para acompañarte en entrenamientos y días activos.",
      details: ["Soporte ligero", "Tejido elástico de secado rápido", "Diseñado para moverte con libertad"],
      sizes: ["XS", "S", "M", "L", "XL"],
      tone: "pink",
    },
    {
      id: "bralette-ritmo",
      name: "Bralette Ritmo",
      category: "Tops",
      color: "Azul eléctrico",
      price: 109900,
      image: image("photo-1549476464-37392f717541"),
      alt: "Atleta entrenando con pesas en un gimnasio",
      gallery: [
        { src: image("photo-1549476464-37392f717541", 1100), alt: "Atleta entrenando con pesas en un gimnasio" },
        { src: image("photo-1517836357463-d25dfeac3438", 1100), alt: "Atleta entrenando con una barra en el gimnasio" },
        { src: image("photo-1599058917212-d750089bc07e", 1100), alt: "Atleta entrenando con cuerda de batalla" },
      ],
      description: "Una pieza conceptual de líneas sencillas para entrenar, estirar o descansar.",
      details: ["Soporte medio", "Banda inferior suave", "Cápsula de movimiento diario"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      tone: "blue",
    },
    {
      id: "malla-orbita",
      name: "Malla Órbita",
      category: "Mallas",
      color: "Azul eléctrico",
      price: 169900,
      image: image("photo-1549476464-37392f717541"),
      alt: "Atleta haciendo ejercicio con una pesa en un gimnasio",
      gallery: [
        { src: image("photo-1549476464-37392f717541", 1100), alt: "Atleta haciendo ejercicio con una pesa en un gimnasio" },
        { src: image("photo-1599058917212-d750089bc07e", 1100), alt: "Deportista haciendo ejercicio con cuerda de batalla" },
        { src: image("photo-1517836357463-d25dfeac3438", 1100), alt: "Atleta entrenando con una barra" },
      ],
      description: "Malla de entrenamiento conceptual con cintura alta y libertad de movimiento.",
      details: ["Compresión media", "Cintura alta", "Bolsillo lateral ilustrativo"],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      tone: "blue",
    },
    {
      id: "short-sprint",
      name: "Short Sprint",
      category: "Mallas",
      color: "Negro",
      price: 119900,
      image: image("photo-1599058917212-d750089bc07e"),
      alt: "Atleta entrenando con cuerda de batalla",
      gallery: [
        { src: image("photo-1599058917212-d750089bc07e", 1100), alt: "Atleta entrenando con cuerda de batalla" },
        { src: image("photo-1549476464-37392f717541", 1100), alt: "Atleta haciendo ejercicio con pesas" },
        { src: image("photo-1517836357463-d25dfeac3438", 1100), alt: "Atleta entrenando con una barra" },
      ],
      description: "Short deportivo conceptual pensado para acompañar movimientos de alta energía.",
      details: ["Tejido flexible", "Cintura cómoda", "Silueta de entrenamiento"],
      sizes: ["XS", "S", "M", "L", "XL"],
      tone: "black",
    },
    {
      id: "capa-brisa",
      name: "Capa Brisa",
      category: "Capas",
      color: "Negro",
      price: 189900,
      image: image("photo-1599058917212-d750089bc07e"),
      alt: "Deportista entrenando al aire libre con cuerda",
      gallery: [
        { src: image("photo-1599058917212-d750089bc07e", 1100), alt: "Deportista entrenando con cuerda de batalla" },
        { src: image("photo-1517836357463-d25dfeac3438", 1100), alt: "Atleta entrenando con una barra en el gimnasio" },
        { src: image("photo-1549476464-37392f717541", 1100), alt: "Atleta entrenando con pesas en un gimnasio" },
      ],
      description: "Una capa ligera conceptual para antes y después de moverte.",
      details: ["Capa ligera", "Corte versátil", "Para entrenar o usar a diario"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      tone: "black",
    },
    {
      id: "buzo-energia",
      name: "Buzo Energía",
      category: "Capas",
      color: "Rosa neón",
      price: 219900,
      image: image("photo-1517836357463-d25dfeac3438"),
      alt: "Atleta haciendo ejercicio en el gimnasio",
      gallery: [
        { src: image("photo-1517836357463-d25dfeac3438", 1100), alt: "Atleta haciendo ejercicio con una barra en el gimnasio" },
        { src: image("photo-1599058917212-d750089bc07e", 1100), alt: "Deportista entrenando con cuerda de batalla" },
        { src: image("photo-1549476464-37392f717541", 1100), alt: "Atleta haciendo ejercicio con pesas en un gimnasio" },
      ],
      description: "Una prenda de abrigo conceptual para llevar el movimiento más allá del entrenamiento.",
      details: ["Tejido suave", "Calce relajado", "Capa exterior de uso cotidiano"],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      tone: "pink",
    },
  ];

  const money = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
  const notice = document.querySelector("[data-shop-notice]");

  function setNotice(message, kind = "") {
    if (!notice) return;
    notice.textContent = message;
    notice.className = `shop-notice${kind ? ` is-${kind}` : ""}`;
  }

  function readCart() {
    let saved;
    try {
      saved = localStorage.getItem(CART_KEY);
    } catch (error) {
      setNotice("No se pudo acceder al carrito guardado en este navegador.", "error");
      return [];
    }
    if (!saved) return [];

    let parsed;
    try {
      parsed = JSON.parse(saved);
    } catch (error) {
      setNotice("El carrito guardado no se pudo leer. Puedes empezar uno nuevo.", "error");
      return [];
    }
    if (!Array.isArray(parsed)) {
      setNotice("El carrito guardado tiene un formato inválido. Puedes empezar uno nuevo.", "error");
      return [];
    }

    const validItems = parsed.filter((item) => {
      if (!item || typeof item !== "object") return false;
      const product = products.find((entry) => entry.id === item.id);
      return product && product.sizes.includes(item.size) &&
        Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99;
    });
    if (validItems.length !== parsed.length) {
      setNotice("Se omitieron artículos inválidos del carrito guardado.", "error");
    }
    return validItems;
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      setNotice("No se pudo guardar el carrito. Revisa el espacio disponible del navegador.", "error");
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

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[character]);
  }

  function productCard(product, index) {
    const href = `producto.html?id=${encodeURIComponent(product.id)}`;
    return `
      <article class="product-card product-card-${product.tone}">
        <a class="product-art" href="${href}" aria-label="Ver ${escapeHtml(product.name)}">
          <span class="product-index">${String(index + 1).padStart(2, "0")} / ${escapeHtml(product.category)}</span>
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" loading="lazy">
          <span class="product-stamp">TROPOS<br>STUDIO</span>
          <span class="product-open" aria-hidden="true">↗</span>
        </a>
        <div class="product-meta">
          <div><h3><a href="${href}">${escapeHtml(product.name)}</a></h3><p>${escapeHtml(product.color)} · ${money.format(product.price)}</p></div>
          <span>${String(index + 1).padStart(2, "0")}</span>
        </div>
      </article>`;
  }

  function renderProductLists() {
    document.querySelectorAll("[data-product-list]").forEach((container) => {
      const type = container.dataset.productList;
      const list = type === "featured" ? products.slice(0, 3) : getFilteredProducts();
      container.innerHTML = list.length
        ? list.map(productCard).join("")
        : `<div class="catalog-empty"><p class="eyebrow">NO HAY COINCIDENCIAS</p><p>Prueba con otros filtros o limpia la búsqueda.</p></div>`;
      const count = document.querySelector("[data-catalog-count]");
      if (count) count.textContent = `${list.length} ${list.length === 1 ? "prenda" : "prendas"}`;
    });
  }

  function getFilteredProducts() {
    const search = document.querySelector("#product-search")?.value.trim().toLocaleLowerCase("es") ?? "";
    const category = document.querySelector("#product-category")?.value ?? "all";
    const color = document.querySelector("#product-color")?.value ?? "all";
    const size = document.querySelector("#product-size-filter")?.value ?? "all";
    const minValue = document.querySelector("#product-price-min")?.value ?? "";
    const maxValue = document.querySelector("#product-price-max")?.value ?? "";
    const minPrice = minValue === "" ? null : Number(minValue);
    const maxPrice = maxValue === "" ? null : Number(maxValue);
    const sort = document.querySelector("#product-sort")?.value ?? "featured";

    const validation = document.querySelector("[data-filter-validation]");
    if (validation) validation.textContent = "";
    if ((minPrice !== null && (!Number.isFinite(minPrice) || minPrice < 0)) ||
        (maxPrice !== null && (!Number.isFinite(maxPrice) || maxPrice < 0)) ||
        (minPrice !== null && maxPrice !== null && minPrice > maxPrice)) {
      if (validation) validation.textContent = "Revisa el rango de precios: el mínimo debe ser menor o igual al máximo.";
      return [];
    }

    const filtered = products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesColor = color === "all" || product.color === color;
      const matchesSize = size === "all" || product.sizes.includes(size);
      const matchesMinPrice = minPrice === null || product.price >= minPrice;
      const matchesMaxPrice = maxPrice === null || product.price <= maxPrice;
      const matchesSearch = `${product.name} ${product.category} ${product.color} ${product.sizes.join(" ")}`
        .toLocaleLowerCase("es").includes(search);
      return matchesCategory && matchesColor && matchesSize && matchesMinPrice && matchesMaxPrice && matchesSearch;
    });
    const compareNames = (first, second) => first.name.localeCompare(second.name, "es", { sensitivity: "base" });
    if (sort === "price-asc") filtered.sort((first, second) => first.price - second.price || compareNames(first, second));
    if (sort === "price-desc") filtered.sort((first, second) => second.price - first.price || compareNames(first, second));
    if (sort === "name-asc") filtered.sort(compareNames);
    if (sort === "name-desc") filtered.sort((first, second) => compareNames(second, first));
    return filtered;
  }

  function renderProductDetail() {
    const container = document.querySelector("[data-product-detail]");
    if (!container) return;
    const id = new URLSearchParams(window.location.search).get("id");
    const product = products.find((entry) => entry.id === id);
    if (!product) {
      document.title = "Producto no encontrado — Tropos";
      container.innerHTML = `
        <section class="empty-state">
          <p class="eyebrow">NO ENCONTRAMOS ESA PRENDA</p>
          <h1>Este producto no está <em>disponible.</em></h1>
          <p>El enlace puede estar incompleto o el producto no forma parte de esta colección de demostración. :v</p>
          <a class="button button-dark" href="productos.html">Volver a productos <span aria-hidden="true">↗</span></a>
        </section>`;
      return;
    }

    document.title = `${product.name} — Tropos`;
    document.querySelector("[data-product-breadcrumb]").textContent = product.name;
    container.innerHTML = `
      <article class="product-detail">
        <div class="product-detail-gallery">
          <div class="product-detail-image product-card-${product.tone}">
            <img data-gallery-main src="${escapeHtml(product.gallery[0].src)}" alt="${escapeHtml(product.gallery[0].alt)}">
          <span class="product-index">${escapeHtml(product.category)} · TROPOS 01</span>
          </div>
          <div class="gallery-thumbnails" role="group" aria-label="Fotos ilustrativas de ${escapeHtml(product.name)}">
            ${product.gallery.map((photo, index) => `
              <button
                class="gallery-thumbnail${index === 0 ? " is-active" : ""}"
                type="button"
                data-gallery-index="${index}"
                aria-label="Ver foto ${index + 1}: ${escapeHtml(photo.alt)}"
                aria-pressed="${index === 0}"
              >
                <img src="${escapeHtml(photo.src)}" alt="" loading="lazy">
                <span>${String(index + 1).padStart(2, "0")}</span>
              </button>`).join("")}
          </div>
          <p class="gallery-disclaimer">Imágenes ilustrativas de entrenamiento; no muestran necesariamente la prenda real. :v</p>
        </div>
        <div class="product-detail-copy">
          <p class="eyebrow">${escapeHtml(product.category.toUpperCase())} · ${escapeHtml(product.color.toUpperCase())}</p>
          <h1>${escapeHtml(product.name)}<br><em>muévete a tu manera.</em></h1>
          <p class="detail-price">${money.format(product.price)}</p>
          <p>${escapeHtml(product.description)}</p>
          <ul class="detail-features">${product.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>
          <form class="add-to-cart-form" data-add-to-cart="${escapeHtml(product.id)}">
            <label for="product-size">Talla</label>
            <select id="product-size" name="size" required>
              <option value="">Selecciona una talla</option>
              ${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
            </select>
            <label for="product-quantity">Cantidad</label>
            <input id="product-quantity" name="quantity" type="number" min="1" max="99" value="1" required>
            <button class="button button-dark" type="submit">Agregar al carrito <span aria-hidden="true">↗</span></button>
          </form>
          <p class="prototype-callout">Precio y descripción ilustrativos. Esta tienda de demostración no tiene inventario ni procesa pagos. :v</p>
          <a class="text-link" href="productos.html">← Volver a todos los productos</a>
        </div>
      </article>`;
  }

  function renderCart() {
    const container = document.querySelector("[data-cart-content]");
    if (!container) return;
    const cart = readCart();
    updateCartCount(cart);
    if (!cart.length) {
      container.innerHTML = `
        <section class="empty-state">
          <p class="eyebrow">TODAVÍA NO HAS ELEGIDO NADA</p>
          <h2>Tu carrito está <em>vacío.</em></h2>
          <p>Explora la colección y agrega una prenda para verla aquí.</p>
          <a class="button button-dark" href="productos.html">Explorar productos <span aria-hidden="true">↗</span></a>
        </section>`;
      return;
    }

    const lines = cart.map((item, index) => {
      const product = products.find((entry) => entry.id === item.id);
      return `
        <article class="cart-line" data-cart-line="${index}">
          <a class="cart-line-image" href="producto.html?id=${encodeURIComponent(product.id)}">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}">
          </a>
          <div class="cart-line-info">
            <h2><a href="producto.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a></h2>
            <p>${escapeHtml(product.color)} · Talla ${escapeHtml(item.size)}</p>
            <button class="remove-item" type="button" data-cart-action="remove">Quitar</button>
          </div>
          <div class="quantity-control" aria-label="Cantidad de ${escapeHtml(product.name)}">
            <button type="button" data-cart-action="decrease" aria-label="Disminuir cantidad">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-action="increase" aria-label="Aumentar cantidad">+</button>
          </div>
          <strong class="cart-line-price">${money.format(product.price * item.quantity)}</strong>
        </article>`;
    }).join("");
    const subtotal = cart.reduce((sum, item) => {
      const product = products.find((entry) => entry.id === item.id);
      return sum + product.price * item.quantity;
    }, 0);
    container.innerHTML = `
      <div class="cart-layout">
        <div class="cart-lines">${lines}</div>
        <aside class="cart-summary">
          <p class="eyebrow">RESUMEN</p>
          <div><span>Subtotal</span><strong>${money.format(subtotal)}</strong></div>
          <div><span>Envío</span><span>Se calcularía en el checkout</span></div>
          <p class="cart-total"><span>Total estimado</span><strong>${money.format(subtotal)}</strong></p>
          <button class="button button-dark checkout-button" type="button" data-checkout>Continuar <span aria-hidden="true">↗</span></button>
          <p class="prototype-callout">Demostración: no se aceptan pedidos ni pagos reales. :v</p>
          <a class="text-link" href="productos.html">Seguir comprando</a>
        </aside>
      </div>`;
  }

  function changeCartLine(lineIndex, action) {
    const cart = readCart();
    const item = cart[lineIndex];
    if (!item) return;
    if (action === "remove") {
      cart.splice(lineIndex, 1);
    } else if (action === "increase" && item.quantity < 99) {
      item.quantity += 1;
    } else if (action === "decrease" && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      setNotice("La cantidad debe estar entre 1 y 99 unidades.", "error");
      return;
    }
    if (saveCart(cart)) renderCart();
  }

  document.querySelector("#product-search")?.addEventListener("input", renderProductLists);
  ["#product-category", "#product-color", "#product-size-filter", "#product-sort"]
    .forEach((selector) => document.querySelector(selector)?.addEventListener("change", renderProductLists));
  ["#product-price-min", "#product-price-max"]
    .forEach((selector) => document.querySelector(selector)?.addEventListener("input", renderProductLists));
  document.querySelector("[data-reset-filters]")?.addEventListener("click", () => {
    ["#product-search", "#product-price-min", "#product-price-max"].forEach((selector) => {
      const input = document.querySelector(selector);
      if (input) input.value = "";
    });
    ["#product-category", "#product-color", "#product-size-filter", "#product-sort"].forEach((selector) => {
      const select = document.querySelector(selector);
      if (select) select.selectedIndex = 0;
    });
    renderProductLists();
  });

  document.querySelector("[data-product-detail]")?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest("[data-gallery-index]");
    if (!button) return;
    const productId = new URLSearchParams(window.location.search).get("id");
    const product = products.find((entry) => entry.id === productId);
    const index = Number(button.getAttribute("data-gallery-index"));
    const photo = product?.gallery[index];
    if (!photo) return;
    const mainImage = document.querySelector("[data-gallery-main]");
    mainImage.src = photo.src;
    mainImage.alt = photo.alt;
    document.querySelectorAll("[data-gallery-index]").forEach((thumbnail, thumbnailIndex) => {
      const active = thumbnailIndex === index;
      thumbnail.classList.toggle("is-active", active);
      thumbnail.setAttribute("aria-pressed", String(active));
    });
  });

  document.querySelector("[data-product-detail]")?.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches("[data-add-to-cart]")) return;
    event.preventDefault();
    const product = products.find((entry) => entry.id === form.dataset.addToCart);
    const formData = new FormData(form);
    const size = String(formData.get("size"));
    const quantity = Number(formData.get("quantity"));
    if (!product || !product.sizes.includes(size) || !Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      setNotice("Selecciona una talla y una cantidad entre 1 y 99.", "error");
      return;
    }
    const cart = readCart();
    const existing = cart.find((item) => item.id === product.id && item.size === size);
    if (existing) {
      if (existing.quantity + quantity > 99) {
        setNotice("El máximo por prenda y talla es 99 unidades.", "error");
        return;
      }
      existing.quantity += quantity;
    } else {
      cart.push({ id: product.id, size, quantity });
    }
    if (saveCart(cart)) setNotice(`${product.name} · talla ${size} se agregó al carrito.`, "success");
  });

  document.querySelector("[data-cart-content]")?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const actionButton = target.closest("[data-cart-action]");
    if (actionButton) {
      const line = actionButton.closest("[data-cart-line]");
      changeCartLine(Number(line?.getAttribute("data-cart-line")), actionButton.getAttribute("data-cart-action"));
    } else if (target.closest("[data-checkout]")) {
      setNotice("El checkout todavía no está conectado. No se ha creado ningún pedido ni se ha realizado un cobro. :v", "error");
    }
  });

  document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;
    const values = new FormData(form);
    const result = document.querySelector("[data-contact-result]");
    result.textContent = `Vista previa para ${String(values.get("email"))}: “${String(values.get("message"))}”. No se envió ni se guardó el mensaje. :v`;
  });

  renderProductLists();
  renderProductDetail();
  renderCart();
  updateCartCount();
  window.addEventListener("storage", (event) => {
    if (event.key === CART_KEY) {
      const cart = readCart();
      updateCartCount(cart);
      renderCart();
    }
  });
})();
