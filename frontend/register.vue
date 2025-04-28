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
            <h2 class="text-center">Реєстрація</h2>

            <div class="mx-auto" style="max-width: 400px;">
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="name">Ім'я</label>
                        <input v-model="name" type="text" class="form-control" id="name"
                            placeholder="Введіть ваше ім'я">
                    </div>
                    <div class="form-group">
                        <label for="email">Електронна пошта</label>
                        <input v-model="email" type="email" class="form-control" id="email"
                            placeholder="Введіть електронну пошту">
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль</label>
                        <input v-model="password" type="password" class="form-control" id="password"
                            placeholder="Введіть пароль">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Зареєструватись</button>
                </form>

                <p class="text-center mt-3">
                    Уже маєте акаунт? <router-link to="/login">Увійти</router-link>
                </p>
                <p v-if="errorMessage" class="text-danger text-center">{{ errorMessage }}</p>
            </div>
        </main>

        <footer class="bg-dark text-white text-center py-2 mt-4">
            <p>&copy; 2025 Ваш помічник</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        register() {
            // Тестова перевірка реєстрації
            if (this.name && this.email && this.password) {
                this.$router.push('/login');
            } else {
                this.errorMessage = 'Будь ласка, заповніть усі поля!';
            }
        }
    }
}
</script>

<style scoped>
/* Додаткові стилі */
</style>
