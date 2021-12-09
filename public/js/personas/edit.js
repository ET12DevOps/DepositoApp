const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('idPersona')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const dni = document.getElementById('dni')
const email = document.getElementById('email')
const estado = document.getElementById('enabled')
const createdAt = document.getElementById('createdAt')
const updatedAt = document.getElementById('updatedAt')

const getData = async () => {
    const res = await fetch(url + 'api/personas/' + id.value)
    const data = await res.json()

    nombre.value = data.nombre
    apellido.value = data.apellido
    dni.value = parseInt(data.dni)
    email.value = data.email
    enabled.checked = data.estado
}

document.addEventListener("DOMContentLoaded", function () {
    getData()
});

const savePersona = document.getElementById('save-persona')

savePersona.addEventListener('click', putData)

function putData() {
    var data = {
        idPersona: parseInt(id.value),
        nombre: nombre.value,
        apellido: apellido.value,
        dni: parseInt(dni.value),
        email: email.value,
        estado: estado.checked,
        updatedAt: '',
        updatedBy: '',
    }

    console.log(data)

    fetch(url + 'api/personas/' + id.value, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    window.location.href = url + 'personas'
}
