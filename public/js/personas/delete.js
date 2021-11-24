const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('idPersona')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const dni = document.getElementById('dni')
const email = document.getElementById('email')
const estado = document.getElementById('enabled')
const createdAt = document.getElementById('createdAt')
const updatedAt = document.getElementById('updatedAt')

const getData = async() => {
    const res = await fetch(url + 'api/personas/' + id.value)
    const data = await res.json()
    
    nombre.value = data.nombre
    apellido.value = data.apellido
    dni.value = parseInt(data.dni)
    email.value = data.email
    enabled.checked = data.estado
}

document.addEventListener("DOMContentLoaded", function() {
    getData()
});

const savePersona = document.getElementById('save-persona')
savePersona.addEventListener('click', deleteData)

function deleteData(){
    console.log(id.value)

    fetch(url + 'api/personas/' + document.getElementById('idPersona') .value, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }  
    })
    .then(res => {
        res.json()
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
}
