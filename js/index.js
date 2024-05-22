// fetch(`http://localhost:3000/products`)
//     .then((data) => {
//         return data.json()
//     })
//     .then((products) => {
//         products.forEach(product => {
//             if (product.name == h2) {
//                 xx99Clone(product);
//             };
//         });
//     })

// function xx99Clone(product) {
//     let clone = document.querySelector(`#xx99-headphone`);

//     let titleDiv = clone.querySelector(`div.text-white`);
//     let h2 = titleDiv.querySelector('h2');
//     h2.textContent = `${product.h2}`;

//     let desc = titleDiv.querySelector(`p`);
//     desc.textContent = product.description;
// };


let seeProduct = document.querySelectorAll(`.see-product`);

seeProduct.forEach((btn) => {
    btn.addEventListener(`click`, () => {
        fetch(`http://localhost:3000/products`)
            .then((data) => {
                return data.json()
            })
            .then((products) => {
                products.forEach((product) => {
                    let { slug } = product;
                    let div = btn.parentNode;
                    let h2 = div.querySelector(`h2`);
                    if (product.name.toLowerCase() == h2.textContent.trim().toLowerCase()) {
                        console.log(product.name);
                        window.location.assign(`./pages/product.html?slug=${slug}`);
                    };
                });
            });
    });
})

function fn(btn) {
    let div = btn.parentNode
    let h2 = div.querySelector(`h2`);
}