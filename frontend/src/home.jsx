import 'react'
import './css/home.css'
import logo from './assets/logo.png'
function Home() {
    return (
        <>
        <header>
        <nav className="navbar">
            <span className="hamburger-btn material-symbols-rounded">menu</span>
            <a href="#" className="logo">
                <img src={logo} alt="logo"></img>
                <h2><b><span>Travelo</span></b></h2>
            </a>
            <ul className="links">
                <span className="close-btn material-symbols-rounded">close</span>
                <li><a href="#">Home</a></li>
                <li><a href="#">Hotel</a></li>
                <li><a href="#">Place</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <button className="login-btn">LOG IN</button>
        </nav>
    </header>
    <div className="middle">
        <h3>Welcome to our Travelo  </h3>
        <button className='login-btn'>Click here to Login</button>
        {/* <button class="login-btn">LOG IN</button> */}
	</div>
    </>
    );
}

export default Home