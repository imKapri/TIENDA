const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu(){
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');


    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');


    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
   
        shoppingCartContainer.classList.toggle('inactive');
        

    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://m.media-amazon.com/images/I/81p9VY1ZXOL._AC_SX679_.jpg',
})
productList.push({
    name: 'Pantalla',
    price: '200',
    image: 'https://m.media-amazon.com/images/I/81kGH1keouL._AC_SX679_.jpg',
})
productList.push({
    name: 'MacBook Air',
    price: '999',
    image: 'https://img.pccomponentes.com/articles/66/663952/1726-apple-macbook-pro-apple-m1-max-32gb-1tb-ssd-162-gris-espacial.jpg',
})

function renderProducts(productList){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCard);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);
