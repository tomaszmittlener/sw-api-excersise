export default class ApiRequest {
  constructor() {
    this.url = 'http://swapi.co/api/people/?format=json';
    this.httpRequest = new XMLHttpRequest();
    this.makeRequest();
    this.destination = document.querySelector(".char-name");

  }

  makeRequest() {
    this.httpRequest.onreadystatechange = this.responseMethod;
    this.httpRequest.open('GET', this.url);
    this.httpRequest.send();
  }

  responseMethod() {
    if (this.httpRequest.readyState === 4) {
      if (this.httpRequest.status === 200) {
        this.responseHandler(this.httpRequest.responseText)
      }
    }
  }

  responseHandler(responseText) {
    let response = JSON.parse(responseText);
    let chars = response.results;
    console.log(chars);
    let charNames = chars.map(function (char) {
      return char.name
    });

    console.log(charNames);

    this.nameDisplay();
  }

    nameDisplay() {
      for (let i = 0; i < charNames.length; i++) {
        let node = document.createElement("span");
        let textNode = document.createTextNode(charNames[i]);
        node.appendChild(textNode);
        this.destination.appendChild(node);
        console.log(charNames[i])
      }
    }



}
