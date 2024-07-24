import React from 'react';
import logo1 from './images/pic01.webp';
import logo2 from './images/pic02.webp';
import logo3 from './images/pic03.webp';
import logo4 from './images/pic04.webp';

const SectionTwo = () => (
    <section id="two" className="wrapper alt style2">
        <section className="spotlight">
            <div className="image"><img src={logo1} alt="" /></div>
            <div className="content">
                <h2>RESTful API for Online Course Platform</h2>
                <p>Developed a comprehensive RESTful API to mimic an online course container. The project includes a fully integrated frontend, 
                    and is designed to handle various functionalities such as course creation, student registration, and content delivery.</p>
                <p><a href="https://github.com/RanaldoGreen/online-course" target="_blank" rel="noopener noreferrer" className="arrow-link">
                    <span>View Code</span>
                </a></p>
            </div>
        </section>
        <section className="spotlight">
            <div className="image"><img src={logo2} alt="" /></div>
            <div className="content">
                <h2>AI-Powered Book Analysis</h2>
                <p>Developed a Flask application that accepts PDF book uploads. It suggests questions, summarizes the book, and generates quizzes based on the content.</p>
                <p><a href="https://github.com/Teric-Simons/Capstone" target="_blank" rel="noopener noreferrer" className="arrow-link">
                    <span>View Code</span>
                </a></p>
            </div>
        </section>
        <section className="spotlight">
            <div className="image"><img src={logo3} alt="Photogram" /></div>
            <div className="content">
                <h2>Photogram: An Instagram Clone</h2>
                <p>A social media platform where users can sign up, log in, and share photos. Features include user authentication, photo posting, and a feed to view posts from other users.</p>
                <p><a href="https://github.com/RanaldoGreen/info3180-project2" target="_blank" rel="noopener noreferrer" className="arrow-link">
                    <span>View Code</span>
                </a></p>
            </div>
        </section>
        <section className="spotlight">
            <div className="image"><img src={logo4} alt="My Site" /></div>
            <div className="content">
                <h2>My Personal Portfolio</h2>
                <p>A showcase of my work and projects as a software engineer. Features include detailed project descriptions, technology stacks, and links to code repositories and live demos. Explore my journey and see how I can help with your next project.</p>
                <p><a href="https://github.com/RanaldoGreen/portfolio" target="_blank" rel="noopener noreferrer" className="arrow-link">
                    <span>View Code</span>
                </a></p>
            </div>
        </section>

    </section>
);

export default SectionTwo;
