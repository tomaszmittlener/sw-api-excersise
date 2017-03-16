import { nameDisplay } from './DisplayName';

let httpRequest;
let url = 'http://swapi.co/api/people/?format=json';


export default class ApiRequest {
  constructor() {
    this.destination = document.querySelector(".char-name");
    this.makeRequest();

  }

  makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = this.responseMethod;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  responseMethod() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        this.responseHandler(httpRequest.responseText)
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
    nameDisplay();


  }

}
