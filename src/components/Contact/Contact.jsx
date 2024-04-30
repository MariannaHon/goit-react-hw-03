
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <p><IoPersonSharp className={css.icon} />{name}</p>
                <p><FaPhone className={css.icon} />{number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Contact;