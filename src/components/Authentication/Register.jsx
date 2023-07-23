import '../../styles/register.css'
import { register } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { resetForm } from '../../store/authSlicer';

function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await register(
            e.target.elements.email.value,
            e.target.elements.password.value
        );
        if (user) {
            dispatch(resetForm());
            navigate('/login');
        }
    }
    return (
        <>
            <div className="reg-container">
                <div className="container">
                    <div className="register-inner">
                        <div className="reg-head">
                            <h1>Registration</h1>
                        </div>
                        <Form handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;