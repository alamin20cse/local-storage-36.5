
const productDes=()=>
{
    const ProductName=document.getElementById('product-name');
    const ProductQuantity=document.getElementById('product-quantity');
    ProductNameValue=ProductName.value;
    ProductQuantityValue=ProductQuantity.value;
    ProductName.value='';
    ProductQuantity.value='';
    innerHtmlset(ProductQuantityValue,ProductQuantityValue);

   

    saveProductToLocalStorage(ProductNameValue,ProductQuantityValue);
    
}






const innerHtmlset=(ProductNameValue,ProductQuantityValue)=>
{
    const ul=document.getElementById('ul-id');


    const  li=document.createElement('li');
    li.innerHTML=`${ProductNameValue}    : ${ProductQuantityValue}`;
    ul.appendChild(li);

}


const shoppingCartCheak=()=>
{
    let cart={};

    const   storeCart=localStorage.getItem('cart');
    if(storeCart)
    {
        cart=JSON.parse(storeCart);
    }
    return cart;

}

const saveProductToLocalStorage=(product,quantity)=>
{
    const cart=shoppingCartCheak();
    cart[product] =quantity;
    // console.log(cart);

    const cartString=JSON.stringify(cart);
    localStorage.setItem("cart",cartString);

}
const displayProductsFormula=()=>
{

    const saveCart=shoppingCartCheak();
    console.log(saveCart);
    for(product in saveCart)
    {
        const quantity=saveCart[product];
        console.log(product,quantity);
        innerHtmlset(product,quantity);
    }
}
displayProductsFormula();