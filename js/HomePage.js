let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmpDataFromStorage = () => {
    return localStorage.getItem('formData') 
    ? JSON.parse(localStorage.getItem('formData')) : [];
};

/* Using Template Literal */
const createInnerHtml = () => {   
    const headerHtml = "<th>Profile Picture</th> <th>Name</th> <th>Gender</th> <th>Department</th>" + 
                        "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
    
    //if(empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;

    for(const i of empPayrollList){
        innerHtml = `${innerHtml}
            <tr> 
                <td><img class="profile" alt="" src="${i.profilePic}"></td>
                <td>${i.name}</td> 
                <td>${i.gender}</td> 
                <td>${getDeptHtml(i.department)}</td>
                <td>${i.salary}</td>
                <td>${i.startDate}</td>
                <td> 
                    <img name="${i._id}" id="iconAction" alt="delete" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg">
                    <img name="${i._id}" id="iconAction" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg"> 
                </td>
            </tr>                   
        `;
    }
        document.getElementById('display').innerHTML = innerHtml;
}
    

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class = 'dept-label'>${dept}</div>`;
    }
    return deptHtml;
};


//Delete employee details
const remove = (row) => {
    //the immediate parent of the row is the <td> , and the next parent of the <td> element is 
    //the <tr> element that contains the row.
    const rowIndex = row.parentNode.parentNode.rowIndex;

    //get the id of the record to be removed from the empPayrollList array using the index of the row
    const id = empPayrollList[rowIndex - 1]._id;

    //the index of the record to be removed and the number of records to be removed(here only one)
    empPayrollList.splice(rowIndex - 1, 1);
    localStorage.setItem("formData", JSON.stringify(empPayrollList));
    
    // Update the employee count display
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    //re-rendering the table with the updated data.
    createInnerHtml();
}

//Alternate method to remove details
const remove1 = (row) => {
    if(confirm('Do you want to delete this record?')){
        //move up the DOM tree to the table row's parent tbody element and then to its parent table element. 
        const rowIndex = row.parentNode.parentNode.rowIndex;

        // Remove the employee from the list
        empPayrollList.splice(rowIndex - 1, 1);
    }
    //updates the local storage
    localStorage.setItem("formData", JSON.stringify(empPayrollList));

    // Update the employee count display
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
