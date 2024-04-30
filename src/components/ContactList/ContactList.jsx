import Contact from "../Contact/Contact";

const ContactList = ({ lists, onDelete }) => {
    return (
        <ul>
            {lists.map((list) => {
                return (
                    <li key={list.id}>
                        <Contact data={list} onDelete={onDelete} />
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList;