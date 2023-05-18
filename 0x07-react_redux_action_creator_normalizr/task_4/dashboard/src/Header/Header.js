import logo from '../assets/holberton_logo.jpg';
import {StyleSheet, css} from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { useContext } from 'react';

function Header(props) {
    const {user, logOut} = useContext(AppContext);
    return (
        <>
            <header className={css(HeaderStyle.Header)}>
            <img src={logo} className={css(HeaderStyle.logo)} alt="logo" />
            <h1>School dashboard</h1>
            </header>
            {
            user.isLoggedIn && <section id="logoutSection">
              <h2>Welcome<strong> {user.email} </strong><em><a href="#" onClick={logOut}>(logout)</a></em>
              </h2>
            </section>
            }
        </>
    )
}

const HeaderStyle = StyleSheet.create({
    Header: {
        display: 'flex',
        color: '#de283f',
        gap: '1.2rem',
        alignItems: 'center',
        borderBottom: '3px solid #de283f',
        padding: '1rem',
        margin: '0 1rem',
    },
    logo: {
        width: '10vw',
    }
})

export default Header;