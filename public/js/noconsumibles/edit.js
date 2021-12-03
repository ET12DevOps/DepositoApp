const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('noconsumibleId')
const nombre = document.getElementById('nombre')
const codigo = document.getElementById('codigo')
const detalle = document.getElementById('detalle')
const existenciaInicial = document.getElementById('existenciaInicial')
const existenciaActual = document.getElementById('existenciaActual')
const enabled = document.getElementById('enabled')
const createdAt = document.getElementById('createdAt')
const updatedAt = document.getElementById('updatedAt')

const getData = async() => {
    const res = await fetch(url + 'api/noconsumibles/' + id.value)
    const data = await res.json()
    
    name.value = data.name
    enabled.checked = data.enabled 
    createdAt.value = new Date(data.createdAt).toLocaleString('es-AR')
    updatedAt.value =  new Date(data.updatedAt).toLocaleString('es-AR') 
}

document.addEventListener("DOMContentLoaded", function(){
    getData()
});

const saveNoconsumible = document.getElementById('save-noconsumibles')

saveNoconsumible.addEventListener('click', putData)

function putData() {
    var data = {
        id: id.value,
        nombre: nombre.value,
        codigo: codigo.value,
        detalle: detalle.value,
        existenciaInicial: existenciaInicial.value,
        existenciaActual: existenciaActual.value,
          enabled: enabled.checked,
          createdAt: '',
          createdBy: '',
          updatedAt: '',
          updatedBy: '',
    }
    
    console.log(data)

    fetch(url + 'api/noconsumibles/' + id.value, {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
}
