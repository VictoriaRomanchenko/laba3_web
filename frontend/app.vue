<template>
    <div>
        <header class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand text-white" href="#">Телефонний Довідник</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link text-white" href="profile.html">Профіль</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="login.html">Вхід</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="app.html">Додаток</a></li>
            </ul>
        </header>

        <main class="container mt-5">
            <h2>Робоча сторінка додатка</h2>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Ім'я</th>
                            <th>Телефон</th>
                            <th>Редагувати</th>
                            <th>Видалити</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Дані контакту будуть додаватись через Vue -->
                        <tr v-for="contact in contacts" :key="contact.id">
                            <td>{{ contact.name }}</td>
                            <td>{{ contact.phone }}</td>
                            <td><button @click="editContact(contact)">Редагувати</button></td>
                            <td><button @click="deleteContact(contact.id)">Видалити</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-4 contact-form mx-auto">
                <h5 class="text-center">Додати новий контакт</h5>
                <input type="text" v-model="newContact.name" class="form-control mt-2" placeholder="Введіть ім'я">
                <input type="text" v-model="newContact.phone" class="form-control mt-2"
                    placeholder="Введіть телефон (+380XXXXXXXXX)">
                <button @click="addContact" class="btn btn-primary mt-2">Додати контакт</button>
                <p v-if="errorMessage" class="text-danger mt-2 text-center">{{ errorMessage }}</p>
            </div>
        </main>

        <footer class="bg-dark text-white text-center py-2 mt-4">
            <p>&copy; 2025 Ваш помічник</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contacts: [],
            newContact: {
                name: '',
                phone: ''
            },
            errorMessage: ''
        };
    },
    methods: {
        addContact() {
            const phoneRegex = /^\+380\d{9}$/;
            if (!phoneRegex.test(this.newContact.phone)) {
                this.errorMessage = 'Невірний формат номера!';
                return;
            }
            this.contacts.push({ ...this.newContact, id: Date.now() });
            this.newContact.name = '';
            this.newContact.phone = '';
            this.errorMessage = '';
        },
        deleteContact(contactId) {
            this.contacts = this.contacts.filter(contact => contact.id !== contactId);
        },
        editContact(contact) {
            // Логіка для редагування контакту
        }
    }
};
</script>

<style scoped>
/* Стилі для компонента */
</style>
