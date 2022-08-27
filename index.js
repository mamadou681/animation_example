const btn1 = document.getElementById("addId");
const btn2 = document.getElementById("removeId");

function addClass() {
  const addedClass = document.getElementById("marioId");
  addedClass.classList.add("move-mario");
  btn1.style.display = "none";
  btn2.style.display = "inline";
}

function removeClass() {
  const removedClass = document.getElementById("marioId");
  removedClass.classList.remove("move-mario");
  btn2.style.display = "none";
  btn1.style.display = "inline";
}
