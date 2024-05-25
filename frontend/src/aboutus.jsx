import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/aboutus.css';

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
            <section class="aboutus" id='aboutus'>
                <div class="members-box">
                    <h2 class="heading">About Us</h2>
            <div  class="wrapper2">
                <div class="member-name">
                    <img src='assets/sachira' alt=''></img>
                    <h2>Sachira Madushan</h2>
                    <p>Team Leader</p>
                </div>

                <div class="member-name">
                        <img src='assets/pasindu' alt=''></img>
                        <h2>Pasindu Perera</h2>
                        <p>Team Member</p>
                </div>

                <div class="member-name">
                        <img src='assets/shehara' alt=''></img>
                        <h2>Sehara Kulasinghe</h2>
                        <p>Team Member</p>
                </div>

                <div class="member-name">
                        <img src='assets/vidura' alt=''></img>
                        <h2>Vidura Kavinda</h2>
                        <p>Team Member</p>
                </div>

                <div class="member-name">
                        <img src='assets/iroshan' alt=''></img>
                        <h2>Iroshan Udayakumara</h2>
                        <p>Team Member</p>
                </div>

                <div class="member-name">
                        <img src='assets/darshana' alt=''></img>
                        <h2>Darshana Dissanayaka</h2>
                        <p>Team Member</p>
                </div>

                <div class="member-name">
                        <img src='assets/naveen' alt=''></img>
                        <h2>Naveen Wijesinghe</h2>
                        <p>Team Member</p>
                </div>
            </div>
            </div>
        </section>       

        </>
        );

}

export default Aboutus;