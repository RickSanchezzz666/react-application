import React from "react";
import './style.css';

function Contact () {

 return (
    <div className="content">
        <div className="contact">
            <span className="title">Get in touch</span>
            <br></br><br></br>
            <span className="desc">Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<br></br><br></br>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
            <br></br><br></br>
            <span className="mini-title">Name</span>
            <br></br>
            <input className="name" placeholder="Enter your name"></input>
            <br></br><br></br>
            <span className="mini-title">E-mail address</span>
            <br></br>
            <input className="e-mail" placeholder="Enter your e-mail address"></input>
            <br></br><br></br>
            <span className="mini-title">Message</span>
            <br></br>
            <input className="message" placeholder="Enter your message"></input>
            <br></br>
            <div className="submit-button">Submit</div>
        </div>
    </div>
 );
}


export default Contact;