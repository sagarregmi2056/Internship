fetch("./food.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);

    console.log(data);

    const newdata = data.menu;
    console.log(newdata);

    let rows = "";

    newdata.forEach((ourproduct) => {
      rows += `           

<div class=" row align-content-center justify-content-center card col-md-4 mb-3 " style="width: 18rem; margin: 10px 0px; ">
<img style="width: 100px  ; height: 90px;" src=${ourproduct.image_url}/>
<div >
<h5 >${ourproduct.name}</h5>
<p >
  ${ourproduct.description}
</p>



<button class="btn btn-primary">rate ${ourproduct.price}</button>
</div>

<div class="card-footer">
<small class="text-muted">Last updated 3 mins ago</small>
</div>
</div>
`;
      console.log(ourproduct.image_url);
    });
    document.getElementById("dyanmicdata").innerHTML = rows;
  })
  .catch((err) => console.log(err));
