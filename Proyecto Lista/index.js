const buttondelete = document.getElementById("buttondelete");
const inputfield = document.getElementById("items");
const botonadd = document.getElementById("botonadd");
const listaUL = document.getElementById("lista");

let items = JSON.parse(localStorage.getItem("items")) || [];


function configurarLi(li, texto) {
  
  li.addEventListener("click", function () {
    this.classList.toggle("tachado");
  });

  li.addEventListener("dblclick", function () {
    this.remove();
    const index = items.indexOf(texto);
    if (index !== -1) {
      items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(items));
    }
  });
}


items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  configurarLi(li, item);
  listaUL.appendChild(li);
});

function agregarItem() {
  const input = inputfield.value.trim();
  if (input === "") {
    alert("No ingresaste ningún elemento");
    return;
  }

  const nuevoitem = document.createElement("li");
  nuevoitem.textContent = input;
  items.push(input);
  localStorage.setItem("items", JSON.stringify(items));
  configurarLi(nuevoitem, input);
  listaUL.appendChild(nuevoitem);
  inputfield.value = "";
}

inputfield.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    agregarItem();
  }
});

botonadd.addEventListener("click", () => {
  agregarItem();
});


buttondelete.addEventListener("click", () => {
  items = [];
  localStorage.removeItem("items");
  listaUL.innerHTML = "";
});
