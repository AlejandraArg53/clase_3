const capturarEtiqueta = () =>{
    console.log("ingresando a función capturarEtiqueta()");
    const parrafo = document.getElementById("parrafo");
    return parrafo;
}

const saludar = () => {
    console.log ("saludando!");
    const parrafo = document.getElementById("parrafo");
    parrafo.textContent = "cambiado!";
}
