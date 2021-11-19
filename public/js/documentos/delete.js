const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('idDocumento')
const codigo = document.getElementById('codigo')
const numero = document.getElementById('numero')
const descripcion = document.getElementById('descripcion')
const createdAt = document.getElementById('createdAt')
const updatedAt = document.getElementById('updatedAt')

const getData = async() => {
    const res = await fetch(url + 'api/documentos/' + id.value)
    const data = await res.json()
    
    codigo.value = data.codigo
    numero.value = data.numero
    descripcion.value = data.descripcion
}

document.addEventListener("DOMContentLoaded", function(){
    getData()
});

const saveDocumento = document.getElementById('save-documento')

saveDocumento.addEventListener('click', deleteData)

function deleteData(){
    
    fetch(url + 'api/documentos/' + id.value, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
            }  
        })
        .then(res => { 
            res.json()
            window.location.href = url + 'documentos'
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
}