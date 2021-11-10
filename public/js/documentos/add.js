const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('idDocumento')
const codigo = document.getElementById('codigo')
const numero = document.getElementById('numero')
const descripcion = document.getElementById('descripcion')
const saveDocumento = document.getElementById('save-documento')

saveDocumento.addEventListener('click', postData)

function postData() {
    var data = {
        id: 0,
        codigo: codigo.value,
        numero: numero.value,
        descripcion: descripcion.value,
        createdAt: '',
        createdBy: '',
        updatedAt: '',
        updatedBy: ''
    }
    
    console.log(data)

    fetch(url + 'api/documentos/', {
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