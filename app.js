const nameId = document.querySelector("#nameid");
const imageId = document.querySelector("#imgChange");
const button = document.querySelector("button");

button.onclick = () => imageId.src = `https://joeschmoe.io/api/v1/${nameId.value}`;