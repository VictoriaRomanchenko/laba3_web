// controller.js

const Controller = {
    loadContacts: function () {
        const contacts = ContactModel.getContacts();
        ContactView.renderContactTable(contacts);
    },

    addContact: function () {
        const name = document.getElementById("contact-name").value.trim();
        const phone = document.getElementById("contact-phone").value.trim();
        const phoneRegex = /^\+380\d{9}$/;

        if (!phoneRegex.test(phone)) {
            ContactView.showErrorMessage("Невірний формат номера! Введіть у форматі +380XXXXXXXXX");
            return;
        }

        ContactView.hideErrorMessage();
        ContactModel.addContact(name, phone);
        this.loadContacts();
        ContactView.clearInputs();
    },

    editContact: function (row, index) {
        const nameCell = row.children[0];
        const phoneCell = row.children[1];
        const editButton = row.querySelector(".edit-btn");

        if (editButton.textContent === "Редагувати") {
            nameCell.innerHTML = `<input type="text" class="form-control form-control-sm" value="${nameCell.textContent}">`;
            phoneCell.innerHTML = `<input type="text" class="form-control form-control-sm" value="${phoneCell.textContent}">`;

            editButton.textContent = "Зберегти";
            editButton.classList.remove("btn-warning");
            editButton.classList.add("btn-success");
        } else {
            const newName = nameCell.querySelector("input").value.trim();
            const newPhone = phoneCell.querySelector("input").value.trim();
            const phoneRegex = /^\+380\d{9}$/;

            if (!phoneRegex.test(newPhone)) {
                alert("Невірний формат номера! Введіть у форматі +380XXXXXXXXX");
                return;
            }

            ContactModel.updateContact(index, newName, newPhone);
            this.loadContacts();
        }
    },

    deleteContact: function (index) {
        ContactModel.deleteContact(index);
        this.loadContacts();
    }
};

document.addEventListener("DOMContentLoaded", function () {
    Controller.loadContacts();

    document.getElementById("add-contact").addEventListener("click", function () {
        Controller.addContact();
    });
});

// controller.js
class LoginController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (event) => this.handleSubmit(event));
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = this.model.findUserByEmailAndPassword(email, password);

        if (user) {
            this.view.displayMessage('Успішний вхід!', true);
            this.model.setCurrentUser(user);
            setTimeout(() => {
                window.location.href = 'app.html';
            }, 1000);
        } else {
            this.view.displayMessage('Невірний email або пароль!', false);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Зупиняємо стандартну відправку форми

        const regName = document.getElementById('reg-name').value;
        const regEmail = document.getElementById('reg-email').value;
        const regPassword = document.getElementById('reg-password').value;
        const regConfirmPassword = document.getElementById('reg-confirm-password').value;

        if (regPassword !== regConfirmPassword) {
            View.showMessage('Паролі не співпадають!', false);
            return;
        }

        if (Model.isEmailRegistered(regEmail)) {
            View.showMessage('Цей email вже зареєстровано!', false);
        } else {
            Model.registerUser(regName, regEmail, regPassword);
            View.showMessage('Успішна реєстрація! Тепер ви можете увійти.', true);
            View.redirectToLogin();
        }
    });
});
