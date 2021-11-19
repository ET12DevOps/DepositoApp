var url = window.location.protocol + "//" + window.location.host + "/";

document.addEventListener('DOMContentLoaded', () => {
    getData()
})

const getData = async () => {
    try {
        const response = await fetch(url + 'api/unidades')

        const userData = await response.json()

        let progresBar = document.getElementById("bar")

        progresBar.style.display = "none"

        const datatable = new simpleDatatables.DataTable("#unidad_datatable", {
            searchable: true,
            paging: true,
            data: {
                headings: ['NOMBRE', 'REFERENCIA', 'createdAt', 'updatedAt', 'ACCIONES'],
                data: userData.map((x) => {
                    var res = Object.values(x)
                    res.shift()
                    res.push('')
                    return res
                })
            },
            columns: [
                { select: 0 },
                { select: 1 },
                { select: 2, hidden: true },
                { select: 3, hidden: true },
                
                {
                    select: 4, sortable: false, render: function (data, cell, row) {
                        var editButton = `<a href="/unidades/${userData[row.dataIndex].idUnidad}/edit" idUnidad="edit-${userData[row.dataIndex].idUnidad}" class="mr-2 has-text-info"><i class="fad fa-pencil"></i></a>`

                        var deleteButton = `<a href="/unidades/${userData[row.dataIndex].idUnidad}/delete" idUnidad="delete-${userData[row.dataIndex].idUnidad}" class="has-text-danger"><i class="fad fa-trash-alt"></i></a>`

                        return '<div class="has-text-centered"> ' + editButton + deleteButton + '</div>';
                    }
                }
            ],
            labels: {
                placeholder: "Buscar..",
                perPage: "{select}",
                noRows: "Sin resultados",
                info: "Mostrando {start} a {end} de {rows} resultados (Página {page} de {pages})"
            }
        });

        const buscar = document.getElementsByClassName('dataTable-input')
        buscar[0].classList.add('input')
        buscar[0].classList.add('is-primary')

        const selector = document.getElementsByClassName('dataTable-dropdown')
        selector[0].classList.add('select')
        selector[0].classList.add('is-primary')

    } catch (error) {
        console.error(error)
    }
}
