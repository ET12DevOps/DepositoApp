const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('consumibleId')
const nombre = document.getElementById('nombre')
const codigo = document.getElementById('codigo')
const detalle = document.getElementById('detalle')
const existenciaInicial = document.getElementById('existenciaInicial')
const existenciaActual = document.getElementById('existenciaActual')
const enabled = document.getElementById('enabled')
const saveConsumible = document.getElementById('save-noconsumible')

saveNoconsumible.addEventListener('click', postData)

function postData() { 
    var data = {
      nombre: nombre.value,
      codigo: codigo.value,
      detalle: detalle.value,
      existenciaInicial: existenciaInicial.value,
      existenciaActual: existenciaActual.value,
        enabled: enabled.checked,
        createdAt: '',
        createdBy: '',
        updatedAt: '',
        updatedBy: ''
            }
    
    console.log(data)

    fetch(url + 'api/noconsumibles', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
}