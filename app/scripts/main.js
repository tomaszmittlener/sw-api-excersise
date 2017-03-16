import { nameDisplay } from './DisplayName'

const url = 'http://swapi.co/api/people/?format=json';

fetch(url)
  .then((response)=>{
  if (!response.ok) {
    throw Error(response.statusText)
  } else {
    return response.json();
}})
  .then((response) => {
    responseHandler(response);
});

function responseHandler(response) {
  let chars = response.results;
  console.log(chars);

  //get and display names
  let charNames = chars.map(function (char) {
    return char.name
  });
  nameDisplay(charNames);
  console.log(charNames);

  //

}
