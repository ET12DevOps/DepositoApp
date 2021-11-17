var url = window.location.protocol + "//" + window.location.host + "/";

document.addEventListener('DOMContentLoaded', () => {
    getData()
})

const getData = async () => {
    try {
        const response = await fetch(url + 'api/motivos')

        const userData = await response.json()
        console.log(userData)
        let progresBar = document.getElementById("bar")

        progresBar.style.display = "none"

        const datatable = new simpleDatatables.DataTable("#motivos_datatable", {
            searchable: true,
            paging: true,
            data: {
                headings: ['CODIGO', 'DESCRIPCION', 'createdAt', "updatedAt", 'ACCIONES'],
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
                //{
                //    select: 1, render: function (data, cell, row) {
                //        if (data === 'true')
                //            return `<span class="tag is-success is-light">Activo</span>`
                //        else
                //            return `<span class="tag is-danger is-light">Inactivo</span>`
                //    }
                //},
                //{
                //    select: 4, type: "date", render: function (data, cell, row) {
                //        return new Date(data).toLocaleString('es-AR')
                //    }
                //},
                //{
                //    select: 3, render: function (data, cell, row) {
                //        return new Date(data).toLocaleString('es-AR')
                //    }
                //},
                {
                    select: 4, sortable: false, render: function (data, cell, row) {
                        var editButton = `<a href="/motivos/${userData[row.dataIndex].idMotivo}/edit" id="edit-${userData[row.dataIndex].idMotivo}" class="mr-2 has-text-info"><i class="fad fa-pencil"></i></a>`

                        var deleteButton = `<a href="/motivos/${userData[row.dataIndex].idMotivo}/delete" id="delete-${userData[row.dataIndex].idMotivo}" class="has-text-danger"><i class="fad fa-trash-alt"></i></a>`

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


