async function getProducts(){
    const response= await fetch("https://dummyjson.com/products");
    const Products = await response.json();
   
    const result = Products.products.map(function(products){
        return `
        <tr>
        <td>${products.title}</td>
        <td>${products.price}</td>
        <td><img src="${products.thumbnail}"/></td>
        </tr>
        `;


    }).join("");
    document.querySelector(".pro").innerHTML=result;
   
}
getProducts();
