
var productArray = [];

function addproduct() {
    var ProductName = document.getElementById('productNam').value;
    var ProductDes = document.getElementById('productDes').value;
    var Productpri = document.getElementById('productpri').value;

    var productObj = {
        ProductName,
        ProductDes,
        Productpri
    }

    if (document.getElementById('productNam').value == ""||  document.getElementById('productDes').value == "" || document.getElementById('productpri').value == " ") {
        alert('but not be left unfilled')
    } else {
        productArray.push(productObj);
        document.getElementById('productNam').value = "";
        document.getElementById('productDes').value = "" ;
        document.getElementById('productpri').value = "";

        renderproducts();
    }
    
}    

function renderproducts() {
    show.innerHTML = "";
    productArray.map((pro, ind) => {
        var row  = `
        <tr>
        <td>${ind + 1}</td>
        <td>${pro.ProductName}</td>
        <td class= "spec-td" >${pro.ProductDes}</td>
        <td>${pro.Productpri}</td>
        <td class="btn-div" ><button style="margin-right: 10px;" onclick="deleteProduct(${ind})">Del</button> 
        <button onclick="editProduct(${ind})">Edit</button>
        </td>
        </tr>
        `
        show.innerHTML += row 
    })
}


function deleteProduct(ind) {
    productArray.splice(ind, 1)
    renderproducts()           
}



function editProduct(ind) {
    var newProduct = prompt('New product name');
    var newDetails = prompt('Details');
    var newPrice = prompt('Price');
            
        productArray[ind].ProductName = newProduct;
    productArray[ind].ProductDes = newDetails;
    productArray[ind]. Productpri = newPrice;

    renderproducts();
  
   
  }