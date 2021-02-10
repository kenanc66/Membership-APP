
class Club {
    constructor(name, phone, mail) {
        this.memberID = Math.floor(Math.random() * 100);
        this.name = name;
        this.phone = phone;
        this.mail = mail;
    }
}
class UI {
    addMemberToList(member) {
        //adding input to the table 
        const list = document.querySelector("#list");
        var html = `
    <tr class="added">
   
    <td>${member.name}</td>
    <td>${member.phone}</td> 
    <td>${member.mail}</td> 
    
    <td><a href="#" data-id="${member.memberID} "class="delete-button">DELETE</a></td>
    </tr>
    `
        list.innerHTML += html;
    };
    clearInputs() {
        //make input areas reusable
        const name = document.getElementById('name').value = "";
        const phone = document.getElementById('phone').value = "";
        const mail = document.getElementById('mail').value = "";
    };
    deleteMember(element) {
        if (element.classList.contains('delete-button')) {
            element.parentElement.parentElement.remove();
        }
    };
    showAlert(message, className) {
        var alert = `
    <div class="alert ${className}">
    ${message}
    </div>`;
        const row = document.querySelector(".row");
        //beforeBegin,afterBegin,beforeEnd,afterEnd
        row.insertAdjacentHTML('beforebegin', alert);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1900);
    };
}
document.getElementById("course").addEventListener('submit', (e) => {

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const mail = document.getElementById('mail').value;

    //create object
    const club = new Club(name, phone, mail);
    // create UI
    const ui = new UI();
    if (name === "" || phone === "") {
        ui.showAlert("Please enter necessary information!", "warning");
    } else {
        // add member to list
        ui.addMemberToList(club);

        //clear inputs
        ui.clearInputs();
        ui.showAlert("The member has been added.", "success")
    }


    e.preventDefault();
})
document.querySelector("#list").addEventListener('click', (e) => {
    const ui = new UI();
    //delete member
    ui.deleteMember(e.target);

    ui.showAlert("Member has been deleted!", "danger")

})
