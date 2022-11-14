// function heroBtnMouseOver(){
//     document.getElementById('heroBuyBtn').style.color = "white";
//     document.getElementById('heroBuyBtn').style.backgroundColor="black";
// }
// function heroBtnMouseOut(){
//     document.getElementById('heroBuyBtn').style.color = "#F8EDE5";
//     document.getElementById('heroBuyBtn').style.backgroundColor="#3C3633";
// }



function productCardMouseOver(cardIndex){
    let card = document.getElementById("ColCard" + cardIndex);
    card.style.backgroundImage = "url('./images/ColF" + cardIndex + "P2.jpg')";
    document.getElementById("card" + cardIndex + "image").style.visibility ="hidden";
    document.getElementById("card" + cardIndex + "name").style.visibility ="hidden";

}

function productCardMouseOut(cardIndex){
    let card= document.getElementById("ColCard"+cardIndex);
    card.style.backgroundImage = "";
    document.getElementById("card"+cardIndex+"image").style.visibility ="visible";
    document.getElementById("card"+cardIndex+"name").style.visibility ="visible";

}

