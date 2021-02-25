const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}
// получает массив
const generateCatalog = (list) => {
    let catalog = "";
    for(let i = 0; i < list.length; i++){
       catalog += renderProduct(list[i].title, list[i].price);
    }
    return catalog;
}

let x = generateCatalog(products);
document.querySelector('.products').insertAdjacentHTML("beforeend", x);