import { personResponseHandler } from './DisplayName'
import { vehicleResponseHandler } from './DisplayVehicle'


const urlPersons = 'http://swapi.co/api/people/?format=json';
const urlVehicles = 'http://swapi.co/api/vehicles/?format=json';

//download persons and convert to json

export const personFetcher = fetch(urlPersons)
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    } else {
      return response.json();
    }})
  .then(response => personResponseHandler(response));

//download vehicles and convert to json

export const vehicleFetcher = fetch(urlVehicles)
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    } else {
      return response.json();
    }})
  .then(response => vehicleResponseHandler(response));

