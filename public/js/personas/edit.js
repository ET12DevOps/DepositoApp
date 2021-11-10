const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('personaId')
const name = document.getElementById('name')
const enabled = document.getElementById('enabled')
const createdAt = document.getElementById('createdAt')
const updatedAt = document.getElementById('updatedAt')

const getData = async() => {
    const res = await fetch(url + 'api/personas/' + id.value)
    const data = await res.json()
    
    name.value = data.name
    enabled.checked = data.enabled 
    createdAt.value = new Date(data.createdAt).toLocaleString('es-AR')
    updatedAt.value =  new Date(data.updatedAt).toLocaleString('es-AR')
}

document.addEventListener("DOMContentLoaded", function(){
    getData()
});

const savePersona = document.getElementById('save-personas')

savePersona.addEventListener('click', putData)

function putData() {
    var data = {
        id: id.value,
        name: name.value,
        enabled: enabled.checked,
        updatedAt: '',
        updatedBy: ''
    }
    
    console.log(data)

    fetch(url + 'api/personas/' + id.value, {
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
