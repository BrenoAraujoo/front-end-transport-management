
window.addEventListener('load',async ()=>{

    mainTransports = document.querySelector('#main-transports')
    await getTransports();
    console.log(allTransports)
})

const renderTransportsTable = () =>{
    let trasnportTable = 
    '<table class="table table-striped table-hover"><thead class="table-thead"><th>#id</th><th>Transportadora</th><th>Data</th><th>Valor</th><th>Tipo</th><th>Obs</th><tbody = class ="table-tbody">'



allTransports.map((transport)=>{
    let transportHtml = 
    `<tr>
    <td>${transport.id}</td>
    <td>${transport.company.name}</td>
    <td>${transport.date}</td>
    <td>${transport.value}</td>
    <td>${transport.transportType}</td>
    <td>${transport.observation}</td>
    </tr>` 

    trasnportTable += transportHtml;
})
trasnportTable+= '<thead></tbody></table>'
mainTransports.innerHTML = trasnportTable
}

