import appLogo from '../assets/investment-calculator-logo.png';

function Header() {
    return <header id='header'>
        <img src={appLogo} alt="Investment Calculator" />
        <h1>Investment Calculator</h1>
    </header>
}

export default Header;