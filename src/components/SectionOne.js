import React from 'react';

const SectionOne = () => (
    <section id="one" className="wrapper style1 special">
        <div className="inner">
            <header className="major">
                <h2>About Me</h2>
                <p>
                    I'm a passionate software engineer with a strong background in computer science. 
                    I specialize in developing innovative solutions and creating responsive web applications. 
                    My expertise includes HTML, CSS, JavaScript, and React. 
                    I thrive on tackling challenging problems and continuously learning new technologies to stay ahead in this ever-evolving field.
                </p>
            </header>
            <ul className="icons major">
                <li><span className="icon fa-gem major style1"><span className="label">Innovative</span></span></li>
                <li><span className="icon fa-heart major style2"><span className="label">Passionate</span></span></li>
                <li><span className="icon solid fa-code major style3"><span className="label">Dedicated</span></span></li>
            </ul>
        </div>
    </section>
);

export default SectionOne;
