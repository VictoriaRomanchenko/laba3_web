
const ContactController = {
  async loadContacts() {
    const contacts = await ContactModel.getContacts();
    ContactView.renderContactTable(contacts);
  },

  async addContact(name, phone) {
    await ContactModel.addContact(name, phone);
    this.loadContacts();
  },

  async updateContact(id, name, phone) {
    await ContactModel.updateContact(id, name, phone);
    this.loadContacts();
  },

  async deleteContact(id) {
    await ContactModel.deleteContact(id);
    this.loadContacts();
  }
};
