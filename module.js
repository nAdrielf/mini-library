let employee =[
    {'nama':'Michael','email':'michael@email.com','number':'01987678912'},
    {'nama':'Gurney','email':'gurney@email.com','number':'108997367563'},
    {'nama':'Bandini','email':'bandini@email.com','number':'143459303545'},
    {'nama':'Surtees','email':'vettel@email.com','number':'124526215785'},
]
export{employee};
// buildTable(employee); tugas tanpa module
export function buildTable(data){
    let table=document.getElementById('body')
    for(let i=0;i<data.length;i++){
        let row=`<tr>
                    <td>${data[i].nama}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].number}</td>
                </tr>`;
        table.innerHTML+=row;
    }
}