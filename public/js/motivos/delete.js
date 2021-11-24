const url = window.location.protocol + "//" + window.location.host + "/";
const saveMotivo = document.getElementById('save-motivo')
saveMotivo.addEventListener('click', deleteData)

const id = document.getElementById('motivoId')
const codigo = document.getElementById('codigo')
const descripcion = document.getElementById('descripcion')
const createdAt = document.getElementById('createdAt')

function deleteData(){

    fetch(url + 'api/motivos/' + id.value, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }  
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)) 

    window.location.href = url+'motivos'
}   

document.addEventListener("DOMContentLoaded", function(){
    getData()
});

const getData = async() => {
    const res = await fetch(url + 'api/motivos/' + id.value)
    const data = await res.json()
    
    codigo.value = data.codigo,
    descripcion.value = data.descripcion
}

