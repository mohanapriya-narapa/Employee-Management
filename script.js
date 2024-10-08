const employeeList=document.querySelector("#employeeList");
let employees = [];
window.onload= async function(){
    const addEmployeeBtn=document.querySelector("#addEmployeeBtn");
    const employeeModel=document.querySelector("#employeeModel");
    const closeModalBtn=document.querySelector("#closeModalBtn");
    const employeeForm=document.querySelector("#employeeForm");
    try{
const response=await axios.get("data.json");
employees=response.data;
renderEmployees();
    }
    catch{
console.log("error loading data");
    }
    addEmployeeBtn.addEventListener("click", ()=>{
        employeeModel.style.display="flex";
    })
    closeModalBtn.addEventListener("click",()=>{
        console.log("clicked");
        
        employeeModel.style.display="none";
    })
    employeeForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const newEmployee={
            id:employees.length+1,
            firstName:document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value
        }
        employees.push(newEmployee);
        renderEmployees();
        employeeModel.style.display = "none";
        employeeForm.reset()
    })
   
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