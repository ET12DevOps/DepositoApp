const url = window.location.protocol + "//" + window.location.host + "/";

const id = document.getElementById('noconsumibleId')
const name = document.getElementById('nombre')
const enabled = document.getElementById('enabled')
const saveNoConsumible = document.getElementById('save-noconsumible')

saveNoConsumible.addEventListener('click', postData)

function postData() {
    var data = {
        id: '',
        name: name.value,
        enabled: enabled.checked,
        createdAt: '',
        createdBy: '',
        updatedAt: '',
        updatedBy: ''
    }
    
    console.log(data)

    fetch(url + 'api/noconsumibles/', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
}