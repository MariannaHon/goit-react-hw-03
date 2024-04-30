
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div>
            <p><IoPersonSharp />{name}</p>
            <p><FaPhone />{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Contact;