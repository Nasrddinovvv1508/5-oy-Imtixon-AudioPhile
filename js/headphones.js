let seeProduct = document.querySelectorAll(`.see-product`);

seeProduct.forEach((btn) => {
    btn.addEventListener(`click`, () => {
        fetch(`http://localhost:3000/products`)
            .then((data) => {
                return data.json()
            })
            .then((products) => {
                // products.forEach((product) => {
                //     console.log(product);
                // })
                products.forEach((product) => {
                    let { slug } = product;
                    let div = btn.parentNode;
                    let h2 = div.querySelector(`h2`);
                    // console.log(h2.textContent.trim());
                    if (product.name.toLowerCase() == h2.textContent.trim().toLowerCase()) {
                        window.location.assign(`./product.html?slug=${slug}`);
                    };
                });
            });
    });
})