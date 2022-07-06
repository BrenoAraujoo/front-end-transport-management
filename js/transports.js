
window.addEventListener('load',async ()=>{

    mainTransports = document.querySelector('#main-transports')
    await getTransports();
    console.log(allTransports)
})

const renderTransportsTable = () =>{
    let transportTable = 
    '<table class="table table-striped table-hover"><thead class="table-thead"><th>#id</th><th>Transportadora</th><th>Data</th><th>Valor</th><th>Tipo</th><th>Obs</th><tbody = class ="table-tbody">'



allTransports.map((transport)=>{
    let transportHtml = 
    `<tr>
    <td><a href ="transports_details.html?id=${transport.id}">${transport.id}</a></td>
    <td>${transport.company.name}</td>
    <td>${transport.date}</td>
    <td>${transport.value}</td>
    <td>${transport.transportType}</td>
    <td>${transport.observation}</td>
    </tr>` 

    transportTable += transportHtml;
})
transportTable+= '<thead></tbody></table>'
mainTransports.innerHTML = transportTable
}

