const carts= document.querySelector("#food-sec");

const addToCart =(e) => {
    const target = e.target;
    if(target.classList.contains("btn")) {
        const cart = target.parentElement.parentElement;

        allcart(cart);
        countItem(childCart)
    }
}
function allcart(childCart){
    console.log(childCart);

    const cartObj={
        image: childCart.querySelector('img').src,
        title: childCart.querySelector('.card-title').textContent,
        itemNo: childCart.querySelector('.cardItem').textContent,
        price: childCart.querySelector('p span').textContent,
    }
};
const countItem = () => {
    console.log(childCart);
}


function loadEvents(){
    carts.addEventListener('click', addToCart)
}
loadEvents();