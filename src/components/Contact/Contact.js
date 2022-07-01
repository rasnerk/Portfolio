import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-wrapper d-flex flex-wrap" id='contact'>
            <div className='col-12' style={{textAlign: "center", color: "white", padding: "4em 0", borderBottom: "1px solid white", marginBottom: "4em"}}>
                <h2>Contact Me</h2>
            </div>
            <div className='col-12' style={{color: "white", padding: "2em 0"}}>
                <div className='d-flex flex-column align-items-center'>
                    <div>THESE WILL BE ICONS</div>
                    <div>Email: rasnerkeifer@gmail.com</div>
                    <div>Phone: 906 290-3767</div>
                    <div>LinkedIn: www.linkedin.com/in/keifer-rasner-01984b243</div>
                    <div>GitHub: https://github.com/rasnerk</div>
                </div>
            </div>
            <div className='col-12' style={{padding: "3em 0"}}>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact