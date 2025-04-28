
const app = Vue.createApp({
  data() {
    return {
      name: '',
      phone: '',
    };
  },
  methods: {
    async addContact() {
      const phoneRegex = /^\+380\d{9}$/;
      if (!phoneRegex.test(this.phone)) {
        alert("Невірний формат телефону! (+380XXXXXXXXX)");
        return;
      }
      await ContactController.addContact(this.name, this.phone);
      this.name = '';
      this.phone = '';
    }
  },
  mounted() {
    ContactController.loadContacts();
  }
});

app.mount('body');

async function editContact(id, oldName, oldPhone) {
  const name = prompt("Нове ім'я:", oldName);
  const phone = prompt("Новий телефон:", oldPhone);

  if (name && phone) {
    await ContactController.updateContact(id, name, phone);
  }
}
