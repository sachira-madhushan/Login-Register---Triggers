import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/contactus.css';

function Home() {
    const navigate = useNavigate();

    return (
        <>
           <header>
                <nav className="navbar">
                    <span className="hamburger-btn material-symbols-rounded">menu</span>
                    <a href="#" className="logo" onClick={() => navigate('/')}>
                        <img src={logo} alt="logo"></img>
                        <h2><b><span>Travelo</span></b></h2>
                    </a>
                </nav>
            </header>

            <section class="contact" id="contact">
                <h2 class="heading">Contact <span>Us</span></h2>

                <form action=''>
                    <div class="input-group">
                        <div class="input-box">
                            <input type='text' placeholder='Full Name'></input>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div class="input-box">
                            <input type="number" placeholder="Phone Number"/>
                            <input type="text" placeholder="Subject"/>
                        </div>
                    </div>

                    <div class="input-group-2">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <input type="submit" value="Send Message" class="btn"/>
                    </div>
                </form>
            </section>

        </>
    );

}

export default Contactus;