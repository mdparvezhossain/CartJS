    const foodSec = document.querySelector("#food-sec");
    const showCard = document.querySelector('#show-card tbody');
    const removeAll = document.querySelector('#remove_all');

   function addToCard (event) {
        event.preventDefault();
       const target =  event.target;
    if(target.classList.contains("btn")){
        const foodCards = target.parentElement.parentElement;

        getFood(foodCards);
        }
    };
    function getFood(foodCard){
        console.log(foodCard);

        const cardObj = {
            image: foodCard.querySelector('img').src,
            title: foodCard.querySelector('.card-title').textContent,
            itemNo: foodCard.querySelector('.itemNo').textContent,
            price: foodCard.querySelector('p span').textContent,
        }
        displauFoodCard(cardObj)      
    };

    const displauFoodCard = (cardObj) =>{
       const tr = document.createElement('tr');
       tr.innerHTML= `
       <td>
            <img src="${cardObj.image}" alt="${cardObj.title}" width="80">
        </td>
        <td>
            <h1 style="font-size:0.8rem">${cardObj.title}</h1>
        </td>
        <td>
            <h1 style="font-size:0.8rem">${cardObj.itemNo}</h1>
        </td>
        <td>
            <h1 style="font-size:0.8rem">${cardObj.price}</h1>
        </td>
        <td>
            <a href="#" class="remove">close</a>
        </td>
       `
       showCard.appendChild (tr);
    }
    const removeItem =(event) =>{
        event.preventDefault();

        const target = event.target;
        if(target.classList.contains('remove')){
            const foodCard = target.parentElement.parentElement;
            foodCard.remove();
        }
    };
    const removeAllItem = () =>{
        // showCard.innerHTML = " ";
        while(showCard.firstChild){
            showCard.removeChild(showCard.firstChild)
        }
    };

   function loadEvents(){
       foodSec.addEventListener("click", addToCard);
       showCard.addEventListener("click", removeItem);
       removeAll.addEventListener("click", removeAllItem);
   }
   loadEvents();
