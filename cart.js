let body = document.querySelector('.body');

body.innerHTML = item.map(item => `<div class="main">
        <div class="image">
            <img  src="${item.image}" alt="Product_image">
        </div>
        <p class="para">${item.para}</p>
        <div class="price">
            <span class="final-price">Rs ${item.price}/-</span>
            <span class="discount">( ${item.discount}% )</span>
        </div>
        <div class="button">
        <button class="cart-button">Add to cart</button>
        <button class="buy-button">Buy</button>
        </div>    
        </div>`).join(' ');

