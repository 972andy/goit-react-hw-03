import style from './Contact.module.css';
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contactItem, removeUser }) => {
  return (
    <li className={style.list}>
      <div>
        <p className={style.listItem}>
          <span className={style.listIcon}><IoMdPerson /></span>{contactItem.name}
        </p>
        <p className={style.listItem}>
          <span className={style.listIcon}><FaPhoneAlt /></span>{contactItem.number}
        </p>
      </div>
      <button className={style.listButton} onClick={() => removeUser(contactItem.id)}>Delete</button>
    </li>
  );
};

export default Contact;

