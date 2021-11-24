const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('idUnidad')
const nombre = document.getElementById('nombre')
const referencia = document.getElementById('referencia')

const getData = async() => {
    console.log(id.value)
    const res = await fetch(url + 'api/unidades/' + id.value)
    const data = await res.json()
    console.log(data)
    nombre.value = data.nombre
    referencia.value = data.referencia 
}

document.addEventListener("DOMContentLoaded", function(){
    getData()
});

const saveUnidad = document.getElementById('save-unidades')

saveUnidad.addEventListener('click', putData)

function putData() {
    var data = {
        id: id.value,
        nombre: nombre.value,
        referencia: referencia.value,
        updatedAt: '',
        updatedBy: ''
    }
    
    console.log(data)

    fetch(url + 'api/unidades/' + id.value, {
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
