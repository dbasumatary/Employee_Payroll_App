window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/* Using Template Literal */
const createInnerHtml = () => {   
    const headerHtml = "<th></th> <th>Name</th> <th>Gender</th> <th>Department</th>" + 
                        "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr> 
            <td><img class="profile" alt="" src="../assets/profile-images/Ellipse-2.png"></td> 
            <td>Dhondip Basumatary</td> 
            <td>Male</td> 
            <td><div class='dept-label'>HR</div>
                <div class='dept-label'>Engineering</div>
            </td>
            <td>3000000</td>
            <td>21 Jun 2023</td>
            <td> 
                <img id="iconAction" alt="delete" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg">
                <img id="iconAction" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg"> 
            </td> 
        </tr> 
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}