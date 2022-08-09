const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerMenu = document.querySelector('.menu');
const navEmail = document.querySelector('.navbar-email');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed =
    productDetailContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed =
    productDetailContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

// TODO EN UNA FUNCION
// navEmail.addEventListener('click', () => {
//   toggleMenu(desktopMenu);
// });
// burguerMenu.addEventListener('click', () => {
//   toggleMenu(mobileMenu);
// });

// function toggleMenu(element) {
//   element.classList.toggle('inactive');
// }

function openProductDetailAside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

// PRODUCTS
const productList = [];
productList.push({
  name: 'Bike',
  price: 1700,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bicycle helmet',
  price: 200,
  image:
    'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
  name: 'Bicycle helmet',
  price: 350,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
});
productList.push({
  name: 'Bicycle helmet',
  price: 180,
  image:
    'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
  name: 'Seat',
  price: 220,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
});
productList.push({
  name: 'Tennis Montain Bike',
  price: 600,
  image:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
});
productList.push({
  name: 'Sunglasses',
  price: 80,
  image:
    'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
});
productList.push({
  name: 'Sunglasses',
  price: 60,
  image:
    'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
});
productList.push({
  name: 'Bicycle seat bag',
  price: 90,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
});

function renderProducts(productList) {
  for (const product of productList) {
    // card
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // image
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', openProductDetailAside);

    // info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    // info -> name, price
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    // figure
    const productInfoFigure = document.createElement('Figure');
    const productIconCart = document.createElement('img');
    productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productIconCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImage, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

// Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
