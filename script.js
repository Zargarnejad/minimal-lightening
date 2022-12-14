
//Data base

const productCollection = [
    { id: 1, name: "Blockchain", mainPic: "./images/ColF1P1.png", hoverPic: "./images/ColF2P2.jpg" },
    { id: 2, name: "Hello Dude", mainPic: "./images/ColF2P1.png", hoverPic: "./images/ColF2P2.jpg" },
    { id: 3, name: "Cirrata", mainPic: "./images/ColF3P1.png", hoverPic: "./images/ColF3P2.jpg" },
    { id: 4, name: "Solstic", mainPic: "./images/ColF4P1.jpg", hoverPic: "./images/ColF4P2.jpg" }

];

const newCollectionProduct = [
    { id: 1, name: "Corranede Low Black", price: 1542.00 },
    { id: 2, name: "Corranede Lamp Sand", price: 902.00 },
    { id: 3, name: "Corranede High Black", price: 1811.00 },
    { id: 4, name: "Corranede Lamp Sand", price: 902.00 }

];

let currentColor="sand";

// Function In Collection Part

// Creating Collection list in Home page with javascript//
function createProductCollection() {
    const collectionContainer = document.getElementById('collectionContainer');
    for (let collectionItem of productCollection) {

        let collectionbox = document.createElement("a")
        collectionbox.href = "google.com"
        collectionbox.className = "productCard"
        collectionbox.id = "ColCard" + collectionItem.id

        collectionbox.addEventListener("mouseover", function () {
            productCardMouseOver(collectionItem.id)
        })
        collectionbox.addEventListener("mouseout", function () {
            productCardMouseOut(collectionItem.id)
        })
        collectionContainer.appendChild(collectionbox)


        let collectionDiv = document.createElement("div")
        collectionDiv.className = "categorySampleImage"
        collectionbox.appendChild(collectionDiv)

        let collectionItemMainImage = document.createElement("img")
        collectionItemMainImage.src = collectionItem.mainPic;
        collectionItemMainImage.id = "card" + collectionItem.id + "image"
        collectionItemMainImage.className = "photoShowFormat"
        collectionDiv.appendChild(collectionItemMainImage)


        let collectionItemName = document.createElement("p")
        collectionItemName.innerHTML = collectionItem.name + "Collections"
        collectionItemName.id = "card" + collectionItem.id + "name"
        collectionItemName.className = "categoryoneLineName"
        collectionbox.appendChild(collectionItemName)


        collectionContainer.appendChild(collectionbox)
    }
}

function productCardMouseOver(cardIndex) {
    let card = document.getElementById("ColCard" + cardIndex);
    card.style.backgroundImage = "url('./images/ColF" + cardIndex + "P2.jpg')";
    document.getElementById("card" + cardIndex + "image").style.visibility = "hidden";
    document.getElementById("card" + cardIndex + "name").style.visibility = "hidden";

}

function productCardMouseOut(cardIndex) {
    let card = document.getElementById("ColCard" + cardIndex);
    card.style.backgroundImage = "";
    document.getElementById("card" + cardIndex + "image").style.visibility = "visible";
    document.getElementById("card" + cardIndex + "name").style.visibility = "visible";

}


// Function In New Collection Part

// Creating New Collection list in Home page with javascript//
function createNewCollection() {


    const newCollectionCantainer = document.getElementById('newCollectionCantainer');
    for (let collectionItem of newCollectionProduct) {

        let newCollectionBox = document.createElement("div")
        newCollectionBox.className = "productCard";
        newCollectionBox.id = "NewColCard" + collectionItem.id;
        newCollectionBox.addEventListener("mouseover", function () {
            NewColCardMouseOver(collectionItem.id)
        })
        newCollectionBox.addEventListener("mouseout", function () {
            NewColCardMouseOut(collectionItem.id)
        })
        newCollectionCantainer.appendChild(newCollectionBox);


        let newcollectionDiv = document.createElement("div")
        newcollectionDiv.className = "categorySampleImage";
        newCollectionBox.appendChild(newcollectionDiv)

        let newCollectionItemMainImage = document.createElement("img")
        newCollectionItemMainImage.src = "./images/products/" + collectionItem.id + "/main.png";
        newCollectionItemMainImage.id = "NewCol" + collectionItem.id + "image";
        newCollectionItemMainImage.className = "photoShowFormat";
        newcollectionDiv.appendChild(newCollectionItemMainImage);

        let newCollectionItemName = document.createElement("p")
        newCollectionItemName.innerHTML = collectionItem.name;
        newCollectionItemName.id = "NewCol" + collectionItem.id + "Name";
        newCollectionItemName.className = "categoryName";
        newCollectionBox.appendChild(newCollectionItemName)

        let newCollectionItemPrice = document.createElement("p")
        newCollectionItemPrice.innerHTML = "EUR" + collectionItem.price;
        newCollectionItemPrice.id = "NewCol" + collectionItem.id + "Price";
        newCollectionItemPrice.className = "categoryName";
        newCollectionBox.appendChild(newCollectionItemPrice)

        let newCollectionItemBtn = document.createElement("button")
        newCollectionItemBtn.addEventListener("click", function () {
            onClickSeeProduct(collectionItem.id)
        })
        newCollectionItemBtn.innerText = "SEE PRODUCT"
        newCollectionItemBtn.id = "NewCol" + collectionItem.id + "button";
        newCollectionItemBtn.className = "newCollctionBtn";
        newCollectionBox.appendChild(newCollectionItemBtn)


        newCollectionCantainer.appendChild(newCollectionBox);

    }

}

function NewColCardMouseOver(cardIndex) {
    let card = document.getElementById("NewColCard" + cardIndex);
    card.style.backgroundImage = "url(./images/products/" + cardIndex + "/hover.png)";
    document.getElementById("NewCol" + cardIndex + "image").style.visibility = "hidden";
    document.getElementById("NewCol" + cardIndex + "Name").style.display = "none";
    document.getElementById("NewCol" + cardIndex + "Price").style.display = "none";
    document.getElementById("NewCol" + cardIndex + "button").style.display = "inline-block";
}

function NewColCardMouseOut(cardIndex) {
    let card = document.getElementById("NewColCard" + cardIndex);
    card.style.backgroundImage = "";
    document.getElementById("NewCol" + cardIndex + "image").style.visibility = "visible";
    document.getElementById("NewCol" + cardIndex + "Name").style.display = "block";
    document.getElementById("NewCol" + cardIndex + "Price").style.display = "block";
    document.getElementById("NewCol" + cardIndex + "button").style.display = "none";
}





// Function for showing pictures of product in "product detail page"


function productPhotosMouseOver(index) {
    let mainPic = document.getElementById("middlePic");
    let pic = document.getElementById("pic" + index);
    // pic.style.backgroundColor ="white";
    mainPic.src = "./images/products/1/pic" + index + currentColor +".png";
    pic.style.boxShadow = "2px 5px 4px #A1A1A1";

}

function productPhotosMouseOut(index) {
    let pic = document.getElementById("pic" + index);
    pic.style.boxShadow = "1px 4px 4px #c5c3c3";

}

function colorOnClick(color) {

    let currentColorButton = document.getElementById(currentColor + "Btn");
    currentColorButton.style.border = '1px solid rgb(187, 184, 184)';
    currentColorButton.style.boxShadow = '';

    let newColorButton = document.getElementById(color + "Btn");
    newColorButton.style.border = '2px solid darkgray ';
    newColorButton.style.boxShadow = '1px 2px 4px  rgb(187,184,184)';
    



    console.log(currentColorButton)
    currentColor=color;

    document.getElementById("middlePic").src="./images/products/1/pic1"+ currentColor+".png"

    document.getElementById("tumPic1").src="./images/products/1/pic1"+ currentColor+".png"
    document.getElementById("tumPic2").src="./images/products/1/pic2"+ currentColor+".png"
    document.getElementById("tumPic3").src="./images/products/1/pic3"+ currentColor+".png"
    document.getElementById("tumPic4").src="./images/products/1/pic4"+ currentColor+".png"
    document.getElementById("tumPic5").src="./images/products/1/pic5"+ currentColor+".png"
    document.getElementById("tumPic6").src="./images/products/1/pic6"+ currentColor+".png"



}



function homePageLoad() {

    createProductCollection()
    createNewCollection()
}


// Onclick Function For Buttons

function onClickSeeProduct(target) {
    window.location = "productdetail.html"
}

function onClickcheckOutBtn(target) {
    window.location = "place-order.html";
}

function onClickaddToCardBtn(target) {
    window.location = "card.html";
}



////////////////////////////////////////////////////

function onClick(target) {
    window.location = "target";
}

function onClickLogo(target) {
    window.location = "index.html";
}

// Card page and basket Functions

let price = 1542;
let quantity = 1;
let total = price * quantity;

function onClickPlus() {
    quantity = quantity + 1;
    document.getElementById("quantity").innerHTML = quantity;
    document.getElementById("totalPrice").innerHTML = "EUR " + (price * quantity);
    document.getElementById("subTotalPrice").innerText = "Subtotal EUR "+ (price * quantity);

}


function onClickMinuse() {
    if (quantity>1) {
        quantity = quantity - 1;
        document.getElementById("quantity").innerHTML = quantity;
        document.getElementById("totalPrice").innerHTML = "EUR " + (price * quantity);
        document.getElementById("subTotalPrice").innerText = "Subtotal EUR "+ (price * quantity);


    }

}


