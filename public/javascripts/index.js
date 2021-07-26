function ajaxGetMember(){
    axios.post(`/api/birthday-greeting/v1`, {
      today: '08/08'
    })
  .then(function (response) {
    // handle success
    console.log(response.data);
    var cards = document.getElementById("cards");
    if(response.data.length != 0){
        response.data.forEach(d => {
            var card = document.createElement("DIV");
            card.innerHTML = `<div class="card my-5">
            <div class="card-body">
              <h5 class="card-title">${d.title}</h5>
              <p class="card-text">${d.content}</p>
            </div>
          </div>`;
            cards.appendChild(card);
        });
    }else{
        cards.innerHTML='<div class="alert alert-warning" role="alert"> No member was born on this date. </div>';
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}

ajaxGetMember();

document.getElementById("submit-btn").addEventListener('click',function(e){
    var date = document.getElementById("date").value;
    ajaxGetMember(date);
})