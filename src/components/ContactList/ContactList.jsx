import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const filterContacts =
    filters.trim() === ""
      ? contacts.slice()
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filters.toLowerCase())
        );

  return (
    <ul className={css.contactList}>
      {filterContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
