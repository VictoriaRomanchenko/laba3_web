
const API_URL = 'http://localhost:3000/api/contacts';

const ContactModel = {
  async getContacts() {
    const response = await axios.get(API_URL);
    return response.data;
  },

  async addContact(name, phone) {
    const response = await axios.post(API_URL, { name, phone });
    return response.data;
  },

  async updateContact(id, name, phone) {
    const response = await axios.put(\`\${API_URL}/\${id}\`, { name, phone });
    return response.data;
  },

  async deleteContact(id) {
    const response = await axios.delete(\`\${API_URL}/\${id}\`);
    return response.data;
  }
};
