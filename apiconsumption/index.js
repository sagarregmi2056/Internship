fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const newdata = data;

    let rows = "";

    newdata.forEach((product) => {
      rows += `<tr><td>${product.id}</td> <td>${product.title}</td> <td>${product.price}</td> <td>${product.description}</td> <td>${product.category}</td> <td><img style="width: 100px  ; height: 100px;" src=${product.image}></td> </tr>`;
    });
    document.getElementById("dyanamicdata").innerHTML = rows;
  })
  .catch((err) => console.log(err));
