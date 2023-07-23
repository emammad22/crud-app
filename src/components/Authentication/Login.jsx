import { useNavigate } from "react-router-dom";
import Form from "./Form";
import '../../styles/register.css'
import { login } from "../../firebase";
import { login as loggedIn, resetForm } from '../../store/authSlicer'
import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login(e.target.elements.email.value, e.target.elements.password.value)
        if (user) {
            dispatch(loggedIn(user));
            navigate('/')
        }
        dispatch(resetForm());
    }
    return (
        <>
            <div className="reg-container">
                <div className="container">
                    <div className="register-inner">
                        <div className="reg-head">
                            <h1>Login</h1>
                        </div>
                        <Form handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;