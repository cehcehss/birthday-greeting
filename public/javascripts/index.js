function ajaxGetMember(date){
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
              ${(d.image?'<img src="/images/cake.png" alt="" width="400px">':'')}
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
}

ajaxGetMember("12/22");

document.getElementById("submit-btn").addEventListener('click',function(e){
    var date = document.getElementById("date").value;
    ajaxGetMember(date);
})