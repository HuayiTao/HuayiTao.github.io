var products = [
    {
        quantity: 5,
        item: "Product 1",
        price: 10000,
        discount: 100,
    },
    {
        quantity: 5,
        item: "Product 2",
        price: 20000,
        discount: 200,
    },
    {
        quantity: 5,
        item: "Product 3",
        price: 30000,
        discount: 300,
    },
    {
        quantity: 5,
        item: "Product 4",
        price: 40000,
        discount: 400,
    },
    {
        quantity: 5,
        item: "Product 5",
        price: 50000,
        discount: 500,
    },
];

function addToProduct() {
    let productObj = {
        quantity: $("#qtyInput").val(),
        item: $("#itemInput").val(),
        price: $("#priceInput").val(),
        discount: $("#discountInput").val(),
    };

    $("#productsBody").html("");

    products.push(productObj);
    loadData();
}

function deleteProduct(index) {
    products.splice(index, 1);
    console.log(products);
    $("#productBody").html("");
    loadData();
}

function clearProduct() {
    products = [];
    loadData();
}

function loadData() {
    let allRows = "";
    let total = 0;
    let total_amount = 0;
    let total_discount = 0;
    for (let i in products) {
        let deleteIcon = `<td><img class='icon' src='delete_icon.jpg' onclick='deleteProduct("${i}")'></i></td>`;
        let qty = '<td class="text_right">' + products[i].quantity + "</td>";
        let cellItem = '<td class="text_right">' + products[i].item + "</td>";
        let price = products[i].price * 1 ;
        let cellPrice = '<td class="text_right">' + price + "</td>";
        let discount = products[i].discount * 1 ;
        let cellDiscount = '<td class="text_right">' + discount + "</td>";
        let amount = products[i].quantity * products[i].price - products[i].discount;
        total_amount += amount;
        total_discount += discount;
        let cellAmount = '<td class="text_right">' + amount + "</td>";
        let row = `<tr>${deleteIcon}${qty}${cellItem}${cellPrice}${cellDiscount}${cellAmount}</tr>`;
        allRows += row;
    }

    $("#productBody").html(allRows);
    $("#total_discount").html(total_discount);
    total = total_amount;
    $("#total").html(total);
}