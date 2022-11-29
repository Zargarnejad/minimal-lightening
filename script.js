
//Data base

const productCollection = [
    { id: 1, name: "Blockchain", mainPic: "./images/ColF1P1.png", hoverPic: "./images/ColF2P2.jpg" },
    { id: 2, name: "Hello Dude", mainPic: "./images/ColF2P1.png", hoverPic: "./images/ColF2P2.jpg" },
    { id: 3, name: "Cirrata", mainPic: "./images/ColF3P1.png", hoverPic: "./images/ColF3P2.jpg" },
    { id: 4, name: "Solstic", mainPic: "./images/ColF4P1.jpg", hoverPic: "./images/ColF4P2.jpg" }

];

const newCollectionProduct = [
    { id: 1, name: "Corranede Low Black", price: 1542.00, mainPic: "./images/NewColF1P1.png", hoverPic: "./images/NewColF1P2.png" },
    { id: 2, name: "Corranede Lamp Sand", price: 902.00, mainPic: "./images/NewColF2P1.png", hoverPic: "./images/NewColF2P2.png" },
    { id: 3, name: "Corranede High Black", price: 1811.00, mainPic: "./images/NewColF3P1.png", hoverPic: "./images/ColF3P2.png" },
    { id: 4, name: "Corranede Lamp Sand", price: 902.00, mainPic: "./images/NewColF4P1.png", hoverPic: "./images/NewColF4P2.png" }

];

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
        newCollectionItemMainImage.src = collectionItem.mainPic;
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
    card.style.backgroundImage = "url('./images/NewColF" + cardIndex + "P2.png')";
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
    mainPic.src = "./images/smallPhoto" + index + ".png";
    pic.style.boxShadow = "2px 5px 4px #A1A1A1";

}

function productPhotosMouseOut(index) {
    let pic = document.getElementById("pic" + index);
    pic.style.boxShadow = "1px 4px 4px #c5c3c3";

}

function onClickBlackColorBtn(blackBtn) {

//    let middleBlackPic= document.getElementById(middlePic);
//    middleBlackPic.style.backgroundImage="url('.images????)";
   document.getElementById(middlePic).style.display=none;

//     function productPhotosMouseOver(index){
//         let mainPic = document.getElementById("middlePic");
//     let pic = document.getElementById("pic" + index);
//     // pic.style.backgroundColor ="white";
//     mainPic.src = "./images/smallPhoto" + index + ".png";
//     pic.style.boxShadow = "2px 5px 4px #A1A1A1";

// }

// function productPhotosMouseOut(index) {
//     let pic = document.getElementById("pic" + index);
//     pic.style.boxShadow = "1px 4px 4px #c5c3c3";

// }

    }



function homePageLoad() {

    createProductCollection()
    createNewCollection()
}


// Onclick Function For Buttons

function onClickSeeProduct(target) {
    window.location = "productdetail.html"
}

function onClickcheckOutBtn(target){
    window.location ="place-order.html";
}

function onClickaddToCardBtn(target){
    window.location="card.html";
}