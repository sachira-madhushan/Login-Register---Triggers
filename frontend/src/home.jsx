import 'react'
import './css/home.css'
import logo from './assets/logo.png'
function Home() {
    return (
        <>
        <header>
        <nav class="navbar">
            <span class="hamburger-btn material-symbols-rounded">menu</span>
            <a href="#" class="logo">
                <img src={logo} alt="logo"></img>
                <h2><b><span>Travelo</span></b></h2>
            </a>
            <ul class="links">
                <span class="close-btn material-symbols-rounded">close</span>
                <li><a href="#">Home</a></li>
                <li><a href="#">Hotel</a></li>
                <li><a href="#">Place</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <button class="login-btn">LOG IN</button>
        </nav>
            <div class="middle">
            <h3>Welcome to our Travelo  </h3>
            <p>Click here to Login</p>
            <button class="login-btn">LOG IN</button>
	 </div>
    </header>
        </>
    );
}

export default Home