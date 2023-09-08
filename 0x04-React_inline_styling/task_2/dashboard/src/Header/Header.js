import React from 'react';
import holbertonLogo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
    return (
        <header className={css(styles["App-header"])}>
            <img src={holbertonLogo} alt="holberton-logo" className={css(styles.img)}></img>
            <h1>School dashboard</h1>
        </header>
    );
}

export default Header;
