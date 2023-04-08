window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/* Using Template Literal */
const createInnerHtml = () => {   
    const headerHtml = "<th>Profile Picture</th> <th>Name</th> <th>Gender</th> <th>Department</th>" + 
                        "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
            <tr> 
                <td><img class="profile" alt="" src="${empPayrollData.profilePic}"></td> 
                <td>${empPayrollData._name}</td> 
                <td>${empPayrollData.gender}</td> 
                <td>${getDeptHtml(empPayrollData.department)}</td>
                <td>${empPayrollData.salary}</td>
                <td>${empPayrollData.startDate}</td>
                <td> 
                    <img name="${empPayrollData.id}" id="iconAction" alt="delete" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg">
                    <img name="${empPayrollData.id}" id="iconAction" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg"> 
                </td> 
            </tr>                   
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Dhondip Basumatary',
            gender: 'Male',
            department: ['HR', 'Engineering'],
            salary: '300000',
            startDate: '23 May 2023',
            note: '',
            profilePic: '../assets/profile-images/Ellipse-2.png',
            id: new Date().getTime()
        },
        {
            _name: 'Shubham',
            gender: 'Male',
            department: ['HR', 'Finance'],
            salary: '400000',
            startDate: '23 May 2023',
            note: '',
            profilePic: '../assets/profile-images/Ellipse-7.png',
            id: new Date().getTime() + 1
        },
    ];
    return employeePayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml}<div class = 'dept-label'>${dept}</div>`
    }
    return deptHtml
}