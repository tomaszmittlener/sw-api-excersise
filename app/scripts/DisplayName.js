export const personResponseHandler = (response) => {
  let chars = response.results;
  console.log(chars);

  //get and display names
  let charNames = chars.map(function (char) {
    return char.name
  });
  nameDisplay(charNames);
  console.log(charNames);
};

  const nameDisplay = (charNames) => {
  for (let i = 0; i < charNames.length; i++) {
    let destination = document.querySelector(".char-name");
    let node = document.createElement("span");
    let textNode = document.createTextNode(charNames[i]);

    node.appendChild(textNode);
    destination.appendChild(node);
    console.log(charNames[i])
  }
};
