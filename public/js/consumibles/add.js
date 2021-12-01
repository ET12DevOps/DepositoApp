const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('consumibleId')
const nombre = document.getElementById('nombre')
const codigo = document.getElementById('codigo')
const detalle = document.getElementById('detalle')
const existenciaInicial = document.getElementById('existenciaInicial')
const existenciaActual = document.getElementById('existenciaActual')
const enabled = document.getElementById('enabled')
const saveConsumible = document.getElementById('save-consumible')
const unidades = document.getElementById("unidades")

document.addEventListener('DOMContentLoaded', () => {
  getUnidades()
})

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

saveConsumible.addEventListener('click', postData)

function postData() { 
    var data = {
      id: 0,
      nombre: nombre.value,
      codigo: codigo.value,
      detalle: detalle.value,
      existenciaInicial: existenciaInicial.value,
      existenciaActual: existenciaActual.value,
        enabled: enabled.checked,
        createdAt: '',
        createdBy: '',
        updatedAt: '',
        updatedBy: '',
        idUnidad: parseInt(unidades.options[unidades.selectedIndex].value)
    }
    
    
    console.log(data)

    fetch(url + 'api/consumibles',{
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))

      window.location.ref= url + '/Consumibles'
}