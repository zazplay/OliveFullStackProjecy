import{ FC, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import styles from "./LoginForm.module.css"

const LoginForm: FC = () => {

    const [login, setLogin] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');

        const loginPayload = { Username: login, Password: pass };

        axios.post("https://localhost:7299/api/Authenticate/login", loginPayload).then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
        }).catch((e) => {
            console.log(e);
            setLogin("");
            setPass("");
            return;
        });

        setTimeout(() => {
            if (localStorage.getItem('token') !== null) {
                //setTimeout(onReloadNavBar, 1000);

                const handleRedirect = () => {
                    window.location.href = '/notes'; // Перезагрузка страницы и переход на другой маршрут
                };
                setTimeout(handleRedirect, 1000);
            }
        }, 1000);

    }

    return (
        <div className="width-main-container">
            <Form className={styles.Form} onSubmit={handleOnSubmit} >
                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label className={styles.Label} >Login</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter login..."
                        value={login}
                        onChange={handleChangeLogin}
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles.Label} >Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={handleChangePass}
                    />

                </Form.Group>

                <div className={styles.ComteinerSubmitRegistraion } >
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Nav.Link href="registation" className={styles.LinkRegistr } >Registration</Nav.Link>
                </div>
            </Form>
        </div>
    );

}
export default LoginForm;
