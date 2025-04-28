
const ContactView = {
  renderContactTable(contacts) {
    const contactTable = document.getElementById('contact-table');
    contactTable.innerHTML = '';

    contacts.forEach((contact) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editContact(${contact.id}, '${contact.name}', '${contact.phone}')">Редагувати</button>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="ContactController.deleteContact(${contact.id})">Видалити</button>
        </td>
      `;
      contactTable.appendChild(row);
    });
  }
};
