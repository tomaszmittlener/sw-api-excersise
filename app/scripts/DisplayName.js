
export function nameDisplay() {
  for (let i = 0; i < charNames.length; i++) {
    let node = document.createElement("span");
    let textNode = document.createTextNode(charNames[i]);
    node.appendChild(textNode);
    this.destination.appendChild(node);
    console.log(charNames[i])
  }
}
