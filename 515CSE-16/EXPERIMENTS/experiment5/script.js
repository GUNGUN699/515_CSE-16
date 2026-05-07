let employees = [];
function addEmployee() {
    let emp ={
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number(document.getElementById("salary").value),
        dept: document.getElementById("dept").value
    };

    employees.push(emp);
    alert("Employee Added!");
}