import { useDispatch, useSelector } from "react-redux";
import { emailControl, passwordControl } from "../../store/authSlicer";
import { useLocation } from "react-router-dom";

function Form(props) {

    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.email);
    const password = useSelector((state) => state.auth.password)
    const location = useLocation();

    return (
        <>
            <form id='form' className="reg-form" onSubmit={props.handleSubmit}>
                <div className="email-section">
                    <input type="email" id="email" value={email} onChange={(e) => dispatch(emailControl(e.target.value))} required />
                    <label className={email ? 'active' : null} htmlFor="email"><i className="fa-regular fa-envelope"></i> Email</label>
                </div>

                <div className="password-section">
                    <input type="password" id="password" value={password} onChange={(e) => dispatch(passwordControl(e.target.value))} required />
                    <label className={password ? 'active' : null} htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                </div>
                <div className="reg-button">
                    <button className="submit-register" type='submit'>{location.pathname.match('login') ? 'Login' : 'Register'}</button>
                </div>
            </form>
        </>
    );
}

export default Form;