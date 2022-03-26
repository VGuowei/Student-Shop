// Convert the item inside the session storage, str to obj
var sessionS = JSON.parse(sessionStorage.detail);

document.getElementById("item").innerHTML+=
    "<div class='grid'>"
        +"<img src='"+sessionS.imgSrc+"' alt='logo' class='images'>"
        +"<div class='subContainer'>"
            +"<h1>"+sessionS.type+" - "+sessionS.color+"</h1>"
            +"<p>"+sessionS.description+"</p>"
            +"<p>"+"<b>"+sessionS.price+"</b>"+"</p>"
            +"<div>"+"<button type='button' class='buyButton' onclick='add_Item(sessionS)'>"+"Buy"+"</button>"+"</div>"
        +"</div>"
    +"</div>";



function add_Item(sessionItem){
    alert(sessionItem.type+" added to cart!");

    var arrItem;
    // check if the API is available
    if(typeof(Storage)!=="undefined"){
        if(localStorage.item){
            arrItem=JSON.parse(localStorage.item); // Convert the array inside the local storage, str to obj
        }else{
            arrItem=[];
        }

        arrItem.push(sessionItem); // add the new item to the array
        localStorage.item = JSON.stringify(arrItem); // Covert the array back to str

    }
    else{
        alert("Storage API is not supported by this browser.");
    }
}