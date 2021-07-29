function ajaxGetMember(date){
  // v1
  axios.post(`/api/birthday-greeting/v1`, {
    today: date
  })
  .then(function (response) {
    var cardsv1 = document.getElementById("cards-v1");
    cardsv1.innerHTML="";
    if(response.data.length != 0){
        response.data.forEach(d => {
            var card = document.createElement("DIV");
            card.innerHTML = `<div class="card my-5">
            <div class="card-body">
              <h5 class="card-title">${d.title}</h5>
              <p class="card-text">${d.content}</p>
            </div>
          </div>`;
          cardsv1.appendChild(card);
        });
    }else{
      cardsv1.innerHTML='<div class="alert alert-warning my-5" role="alert"> No member was born on this date. </div>';
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  // v2
  axios.post(`/api/birthday-greeting/v2`, {
    today: date
  })
  .then(function (response) {
  var cardsv2 = document.getElementById("cards-v2");
    cardsv2.innerHTML="";
    if(response.data.length != 0){
        response.data.forEach(d => {
            var card = document.createElement("DIV");
            card.innerHTML = `<div class="card my-5">
            <div class="card-body">
              <h5 class="card-title">${d.title}</h5>
              <p class="card-text">${d.content}</p>
            </div>
          </div>`;
          cardsv2.appendChild(card);
        });
    }else{
      cardsv2.innerHTML='<div class="alert alert-warning my-5" role="alert"> No member was born on this date. </div>';
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  // v3
  axios.post(`/api/birthday-greeting/v3`, {
    today: date
  })
  .then(function (response) {
    var cardsv3 = document.getElementById("cards-v3");
    cardsv3.innerHTML="";
    if(response.data.length != 0){
        response.data.forEach(d => {
            var card = document.createElement("DIV");
            card.innerHTML = `<div class="card my-5">
            <div class="card-body">
              <h5 class="card-title">${d.title}</h5>
              <p class="card-text">${d.content}</p>
            </div>
          </div>`;
          cardsv3.appendChild(card);
        });
    }else{
      cardsv3.innerHTML='<div class="alert alert-warning my-5" role="alert"> No member was born on this date. </div>';
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  // v4
  axios.post(`/api/birthday-greeting/v4`, {
      today: date
    })
  .then(function (response) {
    var cardsv4 = document.getElementById("cards-v4");
    cardsv4.innerHTML="";
    if(response.data.length != 0){
        response.data.forEach(d => {
            var card = document.createElement("DIV");
            card.innerHTML = `<div class="card my-5">
            <div class="card-body">
              <h5 class="card-title">${d.title}</h5>
              <p class="card-text">${d.content}</p>
            </div>
          </div>`;
          cardsv4.appendChild(card);
        });
    }else{
      cardsv4.innerHTML='<div class="alert alert-warning my-5" role="alert"> No member was born on this date. </div>';
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

ajaxGetMember("08/08");

document.getElementById("submit-btn").addEventListener('click',function(e){
    var date = document.getElementById("date").value;
    ajaxGetMember(date);
})