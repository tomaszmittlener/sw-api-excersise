export const vehicleResponseHandler = (response) => {
  let vechs = response.results;
  console.log(vechs);

  //get and display names
  let vechModels = vechs.map(function (vech) {
    return vech.model
  });
  vechDisplay(vechModels);
  console.log(vechModels);
};

const vechDisplay = (vechModels) => {
  for (let i = 0; i < vechModels.length-5; i++) {
    let destination = document.querySelector(".vech-name");
    let node = document.createElement("span");
    let textNode = document.createTextNode(vechModels[i]);

    node.appendChild(textNode);
    destination.appendChild(node);
    console.log(vechModels[i])
  }
};
