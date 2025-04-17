const ContactModel = {
    getContacts: function () {
        return JSON.parse(localStorage.getItem("contacts")) || [];
    },

    saveContacts: function (contacts) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    },

    addContact: function (name, phone) {
        let contacts = this.getContacts();
        contacts.push({ name, phone });
        this.saveContacts(contacts);
    },

    updateContact: function (index, newName, newPhone) {
        let contacts = this.getContacts();
        contacts[index] = { name: newName, phone: newPhone };
        this.saveContacts(contacts);
    },

    deleteContact: function (index) {
        let contacts = this.getContacts();
        contacts.splice(index, 1);
        this.saveContacts(contacts);
    }
};

class UserModel {
    static getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    static setCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    static findUserByEmailAndPassword(email, password) {
        const users = this.getUsers();
        return users.find(u => u.email === email && u.password === password);
    }
}

const Model = {
    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    },

    saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    },

    isEmailRegistered(email) {
        const users = this.getUsers();
        return users.some(user => user.email === email);
    },

    registerUser(name, email, password) {
        const users = this.getUsers();
        users.push({ name, email, password });
        this.saveUsers(users);
    }
};