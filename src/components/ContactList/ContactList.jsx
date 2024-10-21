import Contact from "../Contact/Contact"

const ContactList = ({ contacts, removeUser }) => {
  return (
    <div>
      <ul> {contacts.map(contact => (
        <Contact
          key={contact.id} contactItem={contact}
          removeUser={removeUser} />
      ))}</ul>
    </div>
  )
}

export default ContactList
