<template>
    <div>
        <header class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand text-white" href="/">Телефонний Довідник</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><router-link class="nav-link text-white" to="/profile">Профіль</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-white" to="/login">Вхід</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-white" to="/app">Додаток</router-link></li>
            </ul>
        </header>

        <main class="container mt-5">
            <h2 class="text-center">Ваш профіль</h2>

            <div class="mx-auto" style="max-width: 400px;">
                <div class="form-group">
                    <label for="name">Ім'я</label>
                    <input v-model="name" type="text" class="form-control" id="name" disabled>
                </div>
                <div class="form-group">
                    <label for="email">Електронна пошта</label>
                    <input v-model="email" type="email" class="form-control" id="email" disabled>
                </div>
                <button @click="logout" class="btn btn-danger btn-block">Вийти</button>
            </div>
        </main>

        <footer class="bg-dark text-white text-center py-2 mt-4">
            <p>&copy; 2025 Ваш помічник</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
    data() {
        return {
            name: 'Ім’я користувача', // Приклад, можна отримати з авторизації
            email: 'user@example.com', // Приклад, можна отримати з авторизації
        };
    },
    methods: {
        logout() {
            // Логіка для виходу з акаунту
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
/* Додаткові стилі */
</style>
