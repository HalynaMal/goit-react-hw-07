import { FaPhoneFlip } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id))
  return (
    <div className={css.contactBox}>
      <div>
        <p className={css.pText}>
          <span className={css.icon}>
            <FaUserLarge />
          </span>
          {name}
        </p>
        <p className={css.pText}>
          <span className={css.icon}>
             <FaPhoneFlip />           
          </span>
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
