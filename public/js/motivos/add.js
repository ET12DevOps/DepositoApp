const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('motivoId')
const codigo = document.getElementById('codigo')
const descripcion = document.getElementById('descripcion')
const saveMotivo = document.getElementById('save-motivo')

saveMotivo.addEventListener('click', postData)

function postData() {
    var data = {
        id: '',
        codigo: codigo.value,
        descripcion: descripcion.value,
        createdAt: '',
        createdBy: '',
    }

    fetch(url + 'api/motivos/', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))

      window.location.href = url+'motivos'
}