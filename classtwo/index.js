fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const newdata = data.products;
    let displaydata = "";

    newdata.forEach((product) => {
      displaydata += `<tr><td> ${product.id}</td> <td> ${product.title}</td> <td> ${product.description}</td> <td> ${product.price}</td> <td> ${product.brand}</td> <td> ${product.category}</td> <td> <img style="width: 100px  ; height: 100px;" src=${product.thumbnail}></td></tr>`;
    });

    document.getElementById("dyanamicdata").innerHTML = displaydata;
  })
  .catch((err) => console.log(err));
