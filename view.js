// view.js

const ContactView = {
    renderContactTable: function (contacts) {
        const contactTable = document.getElementById("contact-table");
        contactTable.innerHTML = "";

        contacts.forEach((contact, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td><button class="btn btn-warning btn-sm edit-btn">Редагувати</button></td>
                <td><button class="btn btn-danger btn-sm delete-btn">Видалити</button></td>
            `;
            contactTable.appendChild(row);

            row.querySelector(".delete-btn").addEventListener("click", () => {
                Controller.deleteContact(index);
            });

            row.querySelector(".edit-btn").addEventListener("click", () => {
                Controller.editContact(row, index);
            });
        });
    },

    showErrorMessage: function (message) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = message;
    },

    hideErrorMessage: function () {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "none";
    },

    clearInputs: function () {
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-phone").value = "";
    }
};

class LoginView {
    constructor() {
        this.messageBox = document.getElementById('message');
    }

    displayMessage(message, isSuccess) {
        if (isSuccess) {
            this.messageBox.classList.remove('alert-danger');
            this.messageBox.classList.add('alert-success');
        } else {
            this.messageBox.classList.remove('alert-success');
            this.messageBox.classList.add('alert-danger');
        }
        this.messageBox.textContent = message;
        this.messageBox.style.display = 'block';
    }

    clearForm() {
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }

    hideMessage() {
        this.messageBox.style.display = 'none';
    }
}

const View = {
    showMessage(message, isSuccess) {
        const messageBox = document.getElementById('message');
        messageBox.textContent = message;
        messageBox.classList.remove('alert-success', 'alert-danger');
        messageBox.classList.add(isSuccess ? 'alert-success' : 'alert-danger');
        messageBox.style.display = 'block';
    },

    clearForm() {
        document.getElementById('register-form').reset();
    },

    redirectToLogin() {
        setTimeout(function () {
            window.location.href = 'login.html';
        }, 2000);
    }
};

