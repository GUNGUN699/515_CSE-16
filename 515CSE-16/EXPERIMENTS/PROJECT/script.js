let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Item added to cart!");
}


function searchProduct() {

    let input = document
        .getElementById("search")
        .value
        .toUpperCase();

    let cards = document
        .getElementsByClassName("product-card");

    for(let i = 0; i < cards.length; i++){

        let title = cards[i]
            .getElementsByTagName("h3")[0];

        let text = title.innerText;

        if(text.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
        }
        else{
            cards[i].style.display = "none";
        }
    }
}