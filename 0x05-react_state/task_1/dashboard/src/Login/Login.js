import { StyleSheet, css } from 'aphrodite';
import { useState, useEffect } from 'react';

const styles = StyleSheet.create({
    AppBody: {
        padding: '36px 24px'
    },
    AppBodyInput: {
        padding: '0 16px 0 8px',
        border: '1px solid #D3D3D3',
        borderRadius: '3px'
    },
    AppBodyLabel: {
        marginRight: '5px'
    },
    AppBodyForm: {
        display: 'flex',
        gap: '1rem'
    },
    AppBodyButton: {
        border: '1px solid #D3D3D3',
        borderRadius: '3px',
        background: 'transparent',
        width: 50
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
        }
    }
});

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        if (email !== "" && password !== "") {
          setEnableSubmit(true);
        } else {
          if (enableSubmit !== false) {
            setEnableSubmit(false);
          }
        }
      }, [email, password]);

    return (
        <div className={css(styles.AppBody)}>
            <p>
                Login to access the full dashboard
            </p>
            <form className={css(styles.AppBodyForm, styles.small)} onSubmit={handleLoginSubmit}>
                <div>
                    <label htmlFor="email" className={css(styles.AppBodyLabel)}>
                        Email
                    </label>
                    <input type="email" name="email" className={css(styles.AppBodyInput)} value={email} onChange={handleChangeEmail} />
                </div>
                <div>
                    <label htmlFor="password" className={css(styles.AppBodyLabel)}>
                        Password
                    </label>
                    <input type="password" name="password" className={css(styles.AppBodyInput)} value={password} onChange={handleChangePassword} />
                </div>
                <input type='submit' value="Ok" disabled={!enableSubmit}  />
            </form>
        </div>
    );
}

export default Login;
