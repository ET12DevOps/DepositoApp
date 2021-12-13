const url = window.location.protocol + "//" + window.location.host + "/";
const saveConsumible = document.getElementById('save-consumible')

const id = document.getElementById('consumibleId')
const nombre = document.getElementById('nombre')
const codigo = document.getElementById('codigo')
const detalle = document.getElementById('detalle') 
const existenciaInicial = document.getElementById('existenciaInicial')
const existenciaActual = document.getElementById('existenciaActual')
const createdAt = document.getElementById('createdAt')
const updatedAt = document.getElementById('updatedAt')

const getUnidades = async () => {
  try {
    const response = await fetch(url + 'api/unidades')
    const unidadesJson = await response.json()
    console.log(unidadesJson)
    var opcion = document.createElement('option');
    opcion.value = 0;
    opcion.innerHTML = '';
    unidades.appendChild(opcion);
    for (var i = 0; i < unidadesJson.length; i++){
      var opcion = document.createElement('option');
      opcion.value = unidadesJson[i].idUnidad;
      opcion.innerHTML = unidadesJson[i].nombre;
      unidades.appendChild(opcion);
    }
  } catch(error) {
    console.error(error)
  }
}

const getData = async() => {
    const res = await fetch(url + 'api/consumibles/' + id.value)
    const data = await res.json()
    console.log(data)
    
    nombre.value = data.nombre
    codigo.value = data.codigo
    detalle.value = data.detalle
    existenciaInicial.value = data.existenciaInicial
    existenciaActual.value = data.existenciaActual
    unidades.value = data.idUnidad.toString()

}

document.addEventListener("DOMContentLoaded", function(){
    getUnidades()
    getData()
    
});


saveConsumible.addEventListener('click', putData)

function putData() {
    var data = {
        idConsumible: parseInt(id.value),
        nombre: nombre.value,
        codigo: codigo.value,
        detalle: detalle.value,
        existenciaInicial: parseInt(existenciaInicial.value),
        existenciaActual: parseInt(existenciaActual.value),
        idUnidad: parseInt(unidades.options[unidades.selectedIndex].value),
          createdAt: '',
          createdBy: '',
          updatedAt: '',
          updatedBy: '',
    }
    
    console.log(data)

    fetch(url + 'api/consumibles/' + id.value, {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))

      window.location.href = url+'consumibles'
}
