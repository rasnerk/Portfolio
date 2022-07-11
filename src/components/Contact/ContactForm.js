import { useState } from "react"
import { send } from "emailjs-com"

const ContactForm = () => {
    const [formData, setFormData] = useState({ Name: '', Email: '', Subject: '', Message: '' })
    const inputs = [{label: "Name", placeholder: "John Smith"},{label: "Email", placeholder: "jsmith@email.com"},{label: "Subject", placeholder: "I like your work!"}]
    const [alert, setAlert] = useState({display: false, type: '', message: ''})
    const handleSubmit = (e) => {
        e.preventDefault()
        send(
            process.env.REACT_APP_EMAIL_SERVICE_ID, 
            process.env.REACT_APP_EMAIL_TEMPLATE, 
            formData,
            process.env.REACT_APP_EMAIL_ID 
        ).then(response => {
            setAlert({...alert, display: !alert.display, type: "alert-success", message: "Email Sent Successfully!"})
        }).catch(err => {
            setAlert({...alert, display: !alert.display, type: "alert-danger", message: "Failed to send Email!"})
        })
    }
    
    return (
        <div id="form-wrapper" className="d-flex justify-content-center">
            {alert.display &&
                <div className={alert.type + " alert alert-dismissible fade show"} role='alert' style={{position: 'absolute', zIndex: 2}}>
                    {alert.message}
                    <button onClick={() => setAlert(prev => !prev.display)} type="button" className="btn btn-sm close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }
            <form onSubmit={handleSubmit}>
                {inputs.map(input => (
                    <div key={input.label} className="form-group row p-2">
                        <label htmlFor={input.label} className="col-sm-2 col-form-label"><b>{input.label}</b></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id={input.label} placeholder={input.placeholder} onChange={(e) => setFormData({ ...formData, [input.label]: e.target.value })} />
                        </div>
                    </div>
                ))}
                <div className="row py-2">
                    <label htmlFor="message" className="col-sm-2 col-form-label"><b>Message</b></label>
                    <div className="col-sm-12">
                        <textarea id="message" rows={6} className="form-control" onChange={(e) => setFormData({ ...formData, Message: e.target.value })} />
                    </div>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <button className="btn btn-primary" type="submit">Send Email</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm