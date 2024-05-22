let url = new URLSearchParams(window.location.search);
let query = url.get(`slug`);

function setTexts(product) {
    let speacialProduct = document.querySelector(`.speacial-product`);

    let image = speacialProduct.querySelector(`img`);
    let name = speacialProduct.querySelector(`h2`);
    let desc = speacialProduct.querySelector(`p`);
    let price = speacialProduct.querySelector(`span`);

    name.textContent = product.name;
    desc.textContent = product.description
    price.textContent = `${product.price}$`;
    image.src = `.${product.image.desktop}`;
}

fetch(`http://localhost:3000/products?slug=${query}`)
    .then((data) => {
        return data.json()
    })
    .then((product) => {
        setTexts(product[0]);
    })