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
            <h2 class="text-center">Вхід до акаунту</h2>

            <div class="mx-auto" style="max-width: 400px;">
                <form @submit.prevent="login">
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
                    <button type="submit" class="btn btn-primary btn-block">Увійти</button>
                </form>

                <p class="text-center mt-3">
                    Не маєте акаунту? <router-link to="/register">Зареєструйтесь</router-link>
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
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        login() {
            // Тестова перевірка на правильність введених даних
            if (this.email === 'user@example.com' && this.password === 'password') {
                this.$router.push('/app');
            } else {
                this.errorMessage = 'Невірні дані для входу!';
            }
        }
    }
}
</script>

<style scoped>
/* Додаткові стилі */
</style>
