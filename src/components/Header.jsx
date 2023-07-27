import Modal from 'react-modal'
import DeleteEmployee from '../modals/DeleteEmployee';
import AddEmployee from '../modals/AddEmployee';
import { useState } from 'react';
import { addEmployee, auth, logOut } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout as loggedOut } from '../store/authSlicer'

Modal.setAppElement('#root');

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.user)
    // const isLoggedIn = auth.currentUser;
    // console.log(isLoggedIn);

    const openModal = () => {
        setIsOpen(true);
    }

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

    async function handleLogout() {
        if (isLoggedIn) {
            await logOut();
            dispatch(loggedOut());
            navigate('/login');
        } else {
            console.log('have been failed');
        }
    }

    function handleAdd() {
        setIsOpen(true);
    }

    return (<>
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="app-name">
                        <h1 className="name"><span>Manage</span> Employees</h1>
                    </div>
                    <div className="header-buttons">
                        <button className="delete" onClick={openModal}><i className="fa-solid fa-circle-minus"></i>Delete</button>
                        <button className="add" onClick={handleAdd}><i className="fa-solid fa-circle-plus"></i>Add new Employee</button>
                        <button className="logout" onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                    </div>
                </div>
            </div>
        </header>
        <Modal
            style={customStyles}
            isOpen={isOpen}
        >
            <DeleteEmployee />
        </Modal>

        <Modal
            style={customStyles}
            isOpen={isOpen}
        >
            <AddEmployee />
        </Modal>
    </>);
}

export default Header;