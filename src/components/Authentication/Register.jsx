import { useState } from 'react';
import '../../styles/register.css'
import { register } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const activeEmail = () => {
        if (email !== '') return true;
        return false;
    }

    const activePassword = () => {
        if (password !== '') return true;
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await register(email, password);
        if (user) {
            navigate('/login')
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
                        <form id='form' className="reg-form" onSubmit={handleSubmit}>
                            <div className="email-section">
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                <label className={activeEmail() ? 'active' : null} htmlFor="email"><i className="fa-regular fa-envelope"></i> Email</label>
                            </div>

                            <div className="password-section">
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <label className={activePassword() ? 'active' : null} htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                            </div>
                            <div className="reg-button">
                                <button className="submit-register" type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;