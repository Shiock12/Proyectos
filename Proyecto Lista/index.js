const button = document.getElementById("addItem");
let items = JSON.parse(localStorage.getItem("items")) || [];
const inputfield = document.getElementById("items");

const listaUL = document.getElementById("lista");

items.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", function () {
        this.remove();
    });
    listaUL.appendChild(li);
});

/*
button.addEventListener("click", () =>{
    const input = document.getElementById("items").value; // Capturo el valor
    const listaUL = document.getElementById("lista");

    if(input === ""){
        alert("No ingresaste ningun elemento");
    }else{
        let nuevoitem = document.createElement("li");
        nuevoitem.textContent = input;
        items.push(input);
        localStorage.setItem("items",JSON.stringify(items));
        
        nuevoitem.addEventListener("click", function() {
            this.remove();
        });
        listaUL.appendChild(nuevoitem);
        inputfield.value = "";
    }
});
*/
inputfield.addEventListener("keydown",(event) =>{
    if(event.key === "Enter"){
        const input = document.getElementById("items").value; // Capturo el valor
    const listaUL = document.getElementById("lista");

    if(input === ""){
        alert("No ingresaste ningun elemento");
    }else{
        let nuevoitem = document.createElement("li");
        nuevoitem.textContent = input;
        items.push(input);
        localStorage.setItem("items",JSON.stringify(items));
        
        nuevoitem.addEventListener("click", function() {
            this.remove();
        });
        listaUL.appendChild(nuevoitem);
        inputfield.value = "";
    }
        button.click();
    }
});




