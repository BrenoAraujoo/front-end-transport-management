"use strict"
const url = "http://localhost:8080/Transports"
const  loading = document.querySelector("#loading")

let allTransports = [];

window.addEventListener('load', ()=>{
getAllTransports();
})

const getAllTransports = async () =>{
    const response = await fetch(url)
    const data = await response.json();

    allTransports = data
    console.log(allTransports)
    renderTable();

    loading.style.display = 'none'
}

function renderTable() {

    const table = document.querySelector("#transport-table")
    const thead = document.querySelector("#thead")
    const tbody = document.querySelector("#tbody")

    const header_line = document.createElement("tr")

    const th_id = document.createElement("th")
    const th_transp = document.createElement("th")
    const th_data = document.createElement("th")
    const th_tipo = document.createElement("th")

    th_id.innerText = 'Id'
    th_transp.innerText = 'Transportadora'
    th_data.innerText = 'Data'
    th_tipo.innerText = 'Tipo'

    header_line.appendChild(th_id)
    header_line.appendChild(th_transp)
    header_line.appendChild(th_data)
    header_line.appendChild(th_tipo)
   
    thead.appendChild(header_line)

    allTransports.map((transport) => {
        let row =document.createElement("tr")

        let td_id =document.createElement("td")
        let td_transp =document.createElement("td")
        let td_data =document.createElement("td")
        let td_tipo =document.createElement("td")
      
        td_id.innerText = transport.id;
        td_transp.innerText = transport.company.name;
        td_data.innerText = transport.date;
        td_tipo.innerText = transport.transportType;

        row.appendChild(td_id)
        row.appendChild(td_transp)
        row.appendChild(td_data)
        row.appendChild(td_tipo)
        tbody.appendChild(row)

    })

    table.appendChild(thead,tbody)
}
