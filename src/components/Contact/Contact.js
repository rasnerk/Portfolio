import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import Keifer from './Keifer'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-wrapper d-flex flex-wrap">
            <div className='col-12 col-xxl-6'>
                <ContactForm />
            </div>
            <div id='contact-info' className='col-12 col-lg-6'>
                <Keifer />
                <ContactInfo />
            </div>
        </div>
    )
}

export default Contact