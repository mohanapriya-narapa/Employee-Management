const employeeList=document.querySelector("#employeeList");
let employees = [];
window.onload= async function(){
    
  
    try{
const response=await axios.get("data.json");
employees=response.data;
renderEmployees();
    }
    catch{
console.log("error loading data");
    }

}
function renderEmployees(){
    employeeList.innerHTML="";
    employees.forEach(
        employee=>{
            const employeeCard=document.createElement("div");
            employeeCard.className='employee-card';
            employeeCard.innerHTML=`
<h3>${employee.firstName} ${employee.lastName} </h3>
            `
            employeeList.appendChild(employeeCard); 
        }
    )
}