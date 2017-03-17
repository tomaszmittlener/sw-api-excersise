import { personFetcher  } from './DataFetcher';
import { vehicleFetcher } from './DataFetcher'


class App {
  constructor(){
    this.downloadPersons = personFetcher;
    this.downloadVehicles = vehicleFetcher;
}
}

document.addEventListener("DOMContentLoaded", (e) => {
new App();
});
