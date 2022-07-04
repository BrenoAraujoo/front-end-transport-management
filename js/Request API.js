// Requisição principal.

let allTransports = [];
var mainTransports = null;

const getTransports = async ()=>{
    const url = 'http://localhost:8080/Transports'
    const resp = await fetch(url)
    const json = await resp.json();

    allTransports = json;
    renderTransportsTable();
    
}
console.log(allTransports)
