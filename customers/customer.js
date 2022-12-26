var customers = [{
  name: "Joy Kith",
  email: "123@gamil.com",
  phone: "099-233-9898",
},
{
  "name": "Huayi Tao",
  "email": "u6138425@au.edu",
  "phone": "063-254-8364",
},
{
  name: "Zed",
  email: "3298@qq.com",
  phone: "098-129-7788",
},
{
  name: "Tate Beard",
  email: "nunc.sed@outlook.org",
  phone: "(880) 981-7631",
},
{
  name: "Kiona Talley",
  email: "netus.et@aol.com",
  phone: "(747) 540-7374",
},
{
  name: "Lunea Price",
  email: "etiam@icloud.net",
  phone: "(980) 608-7151",
},
{
  name: "Cara Benson",
  email: "dapibus.ligula@aol.ca",
  phone: "1-728-606-5103",
},
{
  name: "Alexa Juarez",
  email: "odio@icloud.edu",
  phone: "(669) 558-2928",
}]

// $(document).ready(function () {
//     console.log("ready!");
//     // load data
//     $.ajax({
//         url: "data.json"
//     }).done(function (data) {
//         //$(this).addClass("done");
//         console.log("DONE",data)
//         for(let d in data){
//             // save the data record into our global variable
//             customers.push(data[d])
//             let dataStr = `<tr>
//                 <td>${data[d].name}</td>
//                 <td>${data[d].email}</td>
//                 <td>${data[d].phone}</td>
//             </tr>`
//             $("#data-table tr:last").after(dataStr)
//         }

//         console.log(customers)
//     });
// });

function addToCustomer() {
  let customerObj = {
    name: $("#name").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
  }

  $("#productBody").html("")

  customers.push(customerObj)
  loadData()
}

function deleteCustomer(index) {
  console.log("DELETE", index)
  delete customers[index]
  $("#customerBody").html("")
  loadData()
}

function loadData() {
  let allRows = ""
  // logoImage.onload = loadingDone;
  for (let p in customers) {
    let cellName = `<td><img class='icon' src='img/delete_icon.jpg' onclick='deleteCustomer("${p}")'>` + customers[p].name + "</td>"
    let cellEmail = `<td class="text_center">` + customers[p].email + "</td>"
    let cellPhone = `<td class="text_center">` + customers[p].phone + "</td>"
    let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`
    allRows += row
  }
  $("#customerBody").html(allRows)

}
