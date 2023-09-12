import React, { useContext } from 'react';
import holbertonLogo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';


const styles = StyleSheet.create({
    "App-header": {
        fontSize: '1.4rem',
        color: 'red',
        display: 'flex',
        alignItems: 'center',
        padding: '1.2em',
    },
    img: {
        width: '250px',
        height: '250px',
    },
});

function Header() {
    const { user, logOut } = useContext(AppContext);

    return (
        <>
            <header className={css(styles["App-header"])}>
                <img src={holbertonLogo} alt="holberton-logo" className={css(styles.img)}></img>
                <h1>School dashboard</h1>
            </header>
            {
                user.isLoggedIn && <section id="logoutSection">
                    <h2>Welcome<strong> {user.email} </strong><em><a href="#" onClick={logOut}>(logout)</a></em>
                    </h2>
                </section>
            }
        </>
    );
}

export default Header;
