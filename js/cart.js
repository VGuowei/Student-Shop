// check if localStorage has values
if(localStorage.item){
    // Convert the item inside the local storage, str to obj
    var arrItem = JSON.parse(localStorage.item);

    let cartEle = document.getElementById("cart-added");
    for(let i=0; i<arrItem.length; i++){

        cartEle.innerHTML+=
            "<div class='addedRow' id='"+i+"'>"
                +"<h3>"+1+"</h3>"
                +"<div class='cart-info-item'>"
                    +"<img src='"+arrItem[i].imgSrc+"' alt='logo' class='cart-img'>"
                    +"<p>"+arrItem[i].color+"</p>"
                +"</div>"
                +"<h3>"+arrItem[i].type+"</h3>"
                +"<div>"
                    +"<p>"+"<b>"+arrItem[i].price+"</b>"+"</p>"
                    +"<button onclick=removeItem('"+i+"')>"+"Remove"+"</button>"
                +"</div>"
            +"</div>";
    }
}

// Clear the basket
function clearBasket(){
    localStorage.removeItem('item');
    document.getElementById("cart-added").innerHTML="";
}

function removeItem(id){
    // let x=JSON.parse(localStorage.getItem("item"));
    // console.log(x[id]);
    // localStorage.removeItem(x[id]);
    document.getElementById(id).innerHTML="";
}