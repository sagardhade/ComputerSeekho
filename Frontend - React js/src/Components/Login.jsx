import Validation from "./LoginValidation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import "./Login.css";

export default function Login() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    const [isloggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("token_info");
        if (storedUser) {
            setIsLoggedin(true);
            navigate('/staff');
        }
    }, [navigate]);


    const LocalStorage = () => {
        const user = { values };
        localStorage.setItem("token_info", JSON.stringify(user));
        setIsLoggedin(true);
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleLogout = () => {
        localStorage.removeItem("token_info");
        setIsLoggedin(false);
        navigate('/login');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            fetch("http://localhost:8084/api/staff/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)

            })
                .then(res => res.text())
                .then(data => {
                    if (data === "Success") {
                        alert("LoggedIn");
                        LocalStorage();
                        navigate('/ListCourses');
                    } else {
                        alert("No record existed");
                    }
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div>

            {isloggedin ? (
                <>
                    <h1>User already logged in. Redirecting...</h1>
                    <button onClick={handleLogout}></button>
                </>
            ) :
                (
                    <>     
                    <div className="login-container">

                        <h1>Login Page</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email :</label>
                            <input type="text" name="email" onChange={handleInput} />
                            {errors.email && <span>{errors.email}</span>}
                            <label htmlFor="password">Password :</label>
                            <input type="password" name="password" onChange={handleInput} />
                            {errors.password && <span>{errors.password}</span>}
                            {/* <label htmlFor="Button">Login</label> */}
                            <br/>
                            <button type="submit">LogIn</button>
                            <p></p>
                            <p></p>
                        </form>
                        </div>
                    </>
                )}
        </div>
    );
}