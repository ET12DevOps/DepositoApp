var url = window.location.protocol + "//" + window.location.host + "/";

document.addEventListener('DOMContentLoaded', () => {
    getData()
})

const getData = async () => {
    try {
        const response = await fetch(url + 'api/consumibles')

        const userData = await response.json()
        console.log(userData)
        let progresBar = document.getElementById("bar")

        progresBar.style.display = "none"

        const datatable = new simpleDatatables.DataTable("#consumibles_datatable", {
            searchable: true,
            paging: true,
            data: {
                headings: ['NOMBRE','CODIGO','DETALLE','EXISTENCIA INICIAL','EXISTENCIA ACTUAL','UNIDAD','CreatedtA','updatedAt', 'ACCIONES'],
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
                { select: 2 ,hidden : true},
                { select: 3 },
                { select: 4 },
                { select: 5 },
                { select: 6 ,hidden : true},
                { select: 7 ,hidden : true},
                {
                    select: 8, sortable: false, render: function (data, cell, row) {
                        var editButton = `<a href="/consumibles/${userData[row.dataIndex].consumibleId}/edit" id="edit-${userData[row.dataIndex].consumibleId}" class="mr-2 has-text-info"><i class="fad fa-pencil"></i></a>`

                        var deleteButton = `<a href="/consumibles/${userData[row.dataIndex].consumibleId}/delete" id="delete-${userData[row.dataIndex].consumibleId}" class="has-text-danger"><i class="fad fa-trash-alt"></i></a>`

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


