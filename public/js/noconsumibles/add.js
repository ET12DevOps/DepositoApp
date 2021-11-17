const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('noconsumibleId')
const nombre = document.getElementById('nombre')
const enabled = document.getElementById('enabled')
const saveConsumible = document.getElementById('save-noconsumible')

saveConsumible.addEventListener('click', postData)

function postData() { 
    var data = {
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      detalle: req.body.detalle,
      existenciaInicial: req.body.existenciaInicial,
      existenciaActual: req.body.existenciaActual,
        enabled: enabled.checked,
        createdAt: '',
        createdBy: '',
        updatedAt: '',
        updatedBy: ''
            }
    
    console.log(data)

    fetch(url + 'api/noconsumibles/', {
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