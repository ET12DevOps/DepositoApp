const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('idPersona')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const dni = document.getElementById('dni')
const email = document.getElementById('email')
const estado = document.getElementById('enabled')
const savePersona = document.getElementById('save-persona')

savePersona.addEventListener('click', postData)

function postData() {
    var data = {
        idPersona: 0,
        nombre: nombre.value,
        apellido: apellido.value,
        dni: parseInt(dni.value),
        email: email.value,
        estado: estado.checked,
        createdAt: '',
        createdBy: '',
        updatedAt: '',
        updatedBy: ''
    } 

    console.log(data)

    fetch(url + 'api/personas', {
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