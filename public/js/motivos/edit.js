const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('motivoId')
const name = document.getElementById('name')
const motivo = document.getElementById('motivo')
const createdAt = document.getElementById('createdAt')

const getData = async() => {
    const res = await fetch(url + 'api/motivos/' + id.value)
    const data = await res.json()
    
    name.value = data.name
    motivo.checked = data.enabled 
    createdAt.value = new Date(data.createdAt).toLocaleString('es-AR')
}

document.addEventListener("DOMContentLoaded", function(){
    getData()
});

const saveMotivo = document.getElementById('save-motivo')

saveMotivo.addEventListener('click', putData)

function putData() {
    var data = {
        id: id.value,
        name: name.value,
        motivo: motivo.checked,
        updatedAt: '',
        updatedBy: ''
    }
    
    console.log(data)

    fetch(url + 'api/motivos/' + id.value, {
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
