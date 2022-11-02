const listaSpesa = ['patate','mele','yogurt','petto di pollo','merendine', 'pasta', 'farina', 'acqua'];
const contenitore = document.getElementById('contenitore');
var contatore = 0;
while(contatore < listaSpesa.length){
    contenitore.innerHTML += listaSpesa[contatore] + "&nbsp &nbsp &nbsp";
    contatore++;
}