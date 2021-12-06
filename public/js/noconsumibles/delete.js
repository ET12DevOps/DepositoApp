const url = window.location.protocol + "//" + window.location.host + "/";
const saveNoconsumible = document.getElementById('save-noconsumible')
saveNoconsumible.addEventListener('click', deleteData)

const id = document.getElementById('consumibleId')
const nombre = document.getElementById('nombre')
const codigo = document.getElementById('codigo')
const detalle = document.getElementById('detalle')
const existenciaInicial = document.getElementById('existenciaInicial')
const existenciaActual = document.getElementById('existenciaActual')
const enabled = document.getElementById('enabled')
const saveConsumible = document.getElementById('save-noconsumible')
const unidades = document.getElementById("unidades")
const createdAt = document.getElementById('createdAt')
const updatedAt = document.getElementById('updatedAt')

function deleteData(){
    console.log(id.value)

    fetch(url + 'api/noconsumibles/' + id.value, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }  
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)) 
    
    window.location.href = url+'noconsumibles'
}
