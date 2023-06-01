import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import AppContext from 'AppContext'

function Footer(props) {
    const {user} = useContext(AppContext)
    return (
        <div className="App-footer">
            {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
        </div>
    )
}

export default Footer;