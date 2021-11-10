const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('unidadId')
const nombre = document.getElementById('nombre')
const referencia = document.getElementById('referencia')
const saveUnidad = document.getElementById('save-unidad')

saveUnidad.addEventListener('click', postData)

function postData() {
  var data = {
    id: '',
    nombre: nombre.value,
    referencia: referencia.value,
    createdAt: '',
    createdBy: '',
    updatedAt: '',
    updatedBy: ''
  }

  console.log(data)

  fetch(url + 'api/unidades/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
}