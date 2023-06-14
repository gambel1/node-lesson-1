const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");
console.log(contacts);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "deleteById":
      const deleteContact = contacts.removeContact(id);
      return console.log(deleteContact);
    default:
      return console.log("unknown");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr)
invokeAction(argv);
