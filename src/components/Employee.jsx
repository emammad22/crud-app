import { deleteEmployee } from "../firebase";
import DeleteEmployee from "../modals/DeleteEmployee";
import { useState } from "react";
import { useRef } from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root');

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

    const parentRef = useRef(null);
    const { id, name, email, address, phone } = props;
    const [openModal, setOpenModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    const openDeleteModal = () => {
        !openModal ? setOpenModal(true) : setOpenModal(false);
        if(parentRef.current){
            setDeleteId(parentRef.current.id);
        }
    }
    return (
        <>
            <tr ref={parentRef} id={id}>
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
                    <button className="delete" onClick={(e) => openDeleteModal()}><i className="fa-sharp fa-solid fa-trash" ></i></button>
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