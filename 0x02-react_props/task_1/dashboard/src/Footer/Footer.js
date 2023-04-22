import './Footer.css'
import { getFooterCopy, getFullYear } from '../utils';

function Footer() {
    return(
        <footer className="App-footer">
		    <hr />
		    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
		</footer>
    )
}
export default Footer;