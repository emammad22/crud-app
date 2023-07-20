import { deleteEmployee } from "../firebase";

function Employee(props) {

    const { name, email, address, phone } = props;
    return (
        <tr>
            <td>
                <input type="checkbox" id="checkbox1" value='1' />
                <label htmlFor="checkbox1"></label>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td className="custom-buttons">
                <button className="edit"><i className="fa-solid fa-pen"></i></button>
                <button className="delete" onClick={() => deleteEmployee('0oNZ0P0aLFWJa2VrR8Qi')}><i className="fa-sharp fa-solid fa-trash"></i></button>
            </td>
        </tr>
    );
}

export default Employee;