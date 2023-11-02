import * as contactsService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);

    case "remove":
      const removeContactById = await contactsService.removeContact(id);
      return console.log(removeContactById);
    default:
      console.log("Unknown action");
  }
};


