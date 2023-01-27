function Contact() {
    return(
        <section className="contact" id="contact">
            <div>
                <div className="contact-header">
                    <div className="section-title">
                        <h1>Contact Me</h1>
                    </div>
                    <div className="description visually-hidden">
                        <ul>
                            <li>Hire me, feedback, or just say hi.</li>
                        </ul>
                    </div>
                </div>
                <form name="contact" action="https://formspree.io/f/maylzgoj" method="POST">
                    <div>
                        <label htmlFor="sender-name"></label>
                        <input type="text" name="sender-name" id="sender-name" placeholder="Your Name" required/>   
                    </div>
                    <div>
                        <label htmlFor="sender-email"></label>
                        <input type="email" name="sender-email" id="sender-email" placeholder="Your Email" required/>
                    </div>
                    <div>
                        <label htmlFor="sender-message"></label>
                        <textarea name="sender-message" id="sender-message" placeholder="Message" required></textarea>
                    </div>
                    <div className="button">
                        <button type="submit">send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default Contact