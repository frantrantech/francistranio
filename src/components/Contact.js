import '../styling/Contact.css'

function Contact () {
    return (
        <div className="contact-wrapper">
            <section id="contact-section"> 
            <div className="contact-text-wrapper">
                <div className='get-in-touch'> GET IN TOUCH </div>
                <div className = "draw-line"> </div>
                
                <div className = "contact-text-placement">
                    <div className="contact-text">  Don't hesitate to reach out for any questions </div>

                    <div className="contact-text">
                        You can contact me at <a href="mailto:francuhz4@gmail.com" target="_top">francuhz4@gmail.com</a>
                    </div>
                </div>
            </div>

            <footer>
            </footer>

            </section>

        </div>
    )
}

export default Contact;