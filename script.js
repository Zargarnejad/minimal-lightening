// Function In Collection Part



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

// Function In New Collection Part

function NewColCardMouseOver(cardIndex){
    let card = document.getElementById("NewColCard" + cardIndex); 
    card.style.backgroundImage = "url('./images/NewColF" +cardIndex+"P2.png')";
    document.getElementById("NewCol" + cardIndex + "image").style.visibility ="hidden";
    document.getElementById("NewCol" + cardIndex + "Name").style.display="none";
    document.getElementById("NewCol" + cardIndex + "Price").style.display ="none";
    document.getElementById("NewCol" + cardIndex + "button").style.display ="inline-block";
}

function NewColCardMouseOut(cardIndex){
    let card= document.getElementById("NewColCard"+cardIndex);
    card.style.backgroundImage = "";
    document.getElementById("NewCol"+ cardIndex+"image").style.visibility ="visible";
    document.getElementById("NewCol" + cardIndex + "Name").style.display="block";
    document.getElementById("NewCol" + cardIndex + "Price").style.display ="block";
    document.getElementById("NewCol" + cardIndex + "button").style.display ="none";
}
    
// Function for showing pictures of product in "product detail page"


function productPhotosMouseOver(index){
    let mainPic = document.getElementById("middlePic");
    let pic = document.getElementById("pic"+index);
    // pic.style.backgroundColor ="white";
    mainPic.src="./images/smallPhoto"+index+".png";
    pic.style.boxShadow ="2px 5px 4px #A1A1A1" ;
    
}

function productPhotosMouseOut(index){
    let pic = document.getElementById("pic"+index);
    pic.style.boxShadow ="1px 4px 4px #c5c3c3" ;
    
}