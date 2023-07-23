import { deleteEmployee } from "../firebase";
import DeleteEmployee from "../modals/DeleteEmployee";
import { useState } from "react";
import Modal from 'react-modal'

function Employee(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const { id, name, email, address, phone } = props;
    const [openModal, setOpenModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    const openDeleteModal = (target) => {
        !openModal ? setOpenModal(true) : setOpenModal(false);
        setDeleteId(target.parentElement.parentElement.id);
    }
    return (
        <>
            <tr id={id}>
                <td>
                    <input type="checkbox" id="checkbox1" value='1' />
                    <label htmlFor="checkbox1"></label>
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td id="1" className="custom-buttons">
                    <button className="edit"><i className="fa-solid fa-pen"></i></button>
                    <button className="delete" onClick={(e) => openDeleteModal(e.currentTarget)}><i className="fa-sharp fa-solid fa-trash" ></i></button>
                </td>
            </tr>

            <Modal
                style={customStyles}
                isOpen={openModal}
            >
                <DeleteEmployee
                    delet={deleteId}
                    cancelDelete={openDeleteModal}
                    confirmDelete={deleteEmployee}
                />
            </Modal>
        </>
    );
}

export default Employee;