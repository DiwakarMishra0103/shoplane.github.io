var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);


/*<a href="product.html?product_id=1">
     <div class="img">
        <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg">
     </div>
     <div class="details">
        <h3>Men Navy Blue Solid Sweatshirt</h3>
        <h4>United Colors of Benetton</h4>
        <h5>Rs 2599</h5>
     </div>
  </a>*/


var mainGrid = document.getElementById("1");


var mainCard = document.createElement('a');

mainGrid.appendChild(mainCard);
console.log(mainCard);
//mainCard.className="vedio-card";
// var thumbnail = document.createElement('img');
// thumbnail.className="thumbnail";
// thumbnail.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
// thumbnail.alt="vedio Tumbnail"
// mainCard.appendChild(thumbnail);
// var title = document.createElement('h3');
// title.innerText="Ravioli";
// mainCard.appendChild(title);
// console.log(mainCard);