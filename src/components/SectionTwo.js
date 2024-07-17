import React from 'react';
import logo1 from './images/pic01.jpg';
import logo2 from './images/pic02.jpg';
import logo3 from './images/pic03.jpg';

const SectionTwo = () => (
    <section id="two" className="wrapper alt style2">
        <section className="spotlight">
            <div className="image"><img src={logo1} alt="" /></div>
            <div className="content">
                <h2>Magna primis lobortis<br />sed ullamcorper</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
        <section className="spotlight">
            <div className="image"><img src={logo2} alt="" /></div>
            <div className="content">
                <h2>Tortor dolore feugiat<br />elementum magna</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
        <section className="spotlight">
            <div className="image"><img src={logo3} alt="" /></div>
            <div className="content">
                <h2>Augue eleifend aliquet<br />sed condimentum</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
    </section>
);

export default SectionTwo;
