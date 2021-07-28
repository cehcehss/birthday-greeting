function ajaxGetMember(date){
    axios.post(`/api/birthday-greeting/v5`, {
      today: date
    })
  .then(function (response) {
    var cardsv5 = document.getElementById("cards-v5");
    cardsv5.innerHTML="";
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(response.data,"text/xml");
    var titleNodes = xmlDoc.getElementsByTagName("title");
    var contentNodes = xmlDoc.getElementsByTagName("content");
    if(titleNodes.length != 0){
      for(var i = 0; i< titleNodes.length; i++){
        var title = titleNodes[i].textContent;
        var content = contentNodes[i].textContent;
        var card = document.createElement("DIV");
            card.innerHTML = `<div class="card my-5">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${content}</p>
            </div>
          </div>`;
          cardsv5.appendChild(card);
      }
    }else{
        cardsv5.innerHTML='<div class="alert alert-warning my-5" role="alert"> No member was born on this date. </div>';
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