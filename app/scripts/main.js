const url = 'http://swapi.co/api/people/?format=json';
let httpRequest;
makeRequest();

function makeRequest () {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = responseMethod;
  httpRequest.open('GET', url);
  httpRequest.send();
}

function responseMethod () {
  if (httpRequest.readyState ===4) {
    if(httpRequest.status === 200) {
      responseHandler(httpRequest.responseText)
    }
  }
}


function responseHandler(responseText){
  let response = JSON.parse(responseText);
  let chars = response.results;
  console.log(chars);

  let charNames = chars.map(function(char){
    return char.name
  });

  let destination = document.querySelector(".char-name");

  console.log(charNames);

  function nameDisplay() {
    for(let i=0; i < charNames.length; i++){
      let node = document.createElement("span");
      let textnode = document.createTextNode(charNames[i]);
      node.appendChild(textnode);
      destination.appendChild(node);

      console.log(charNames[i])


    }
  }
  nameDisplay()

}
