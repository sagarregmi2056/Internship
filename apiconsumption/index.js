const getapidata = async () => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2024-05-24&" +
    "sortBy=popularity&" +
    "apiKey=ff17a033d1a245698f17e1cda67f17f6";

  var req = new Request(url);

  await fetch(req)
    .then(function (response) {
      console.log(response.json());
    })
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
};

getapidata();
