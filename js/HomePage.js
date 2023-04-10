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
