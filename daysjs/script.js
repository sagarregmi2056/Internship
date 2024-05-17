fetch("https://dummyjson.com/products")
  //This processes the response received from the server. It converts the response body to JSON format.
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // <!-- result ma data aairako xa sooo console.log(result)  -->
    // This is a promise chain, executed after the JSON parsing. It receives the parsed JSON data (res), which typically contains the structured data from the server response.

    //This line extracts the products array from the response JSON data and assigns it to the variable data.
    const newdata = data.products;
    //: This initializes an empty string rows, which will be used to store HTML table rows.
    let rows = "";

    newdata.forEach((product) => {
      rows += `<tr><td> ${product.id}</td><td>${product.title}  </td> `;
    });
    document.getElementById("dynamicdata").innerHTML = rows;
  })
  .catch((err) => console.log(err));
