const ContactForm = () => {
    const inputs = [{label: "Name", placeholder: "John Smith"},{label: "Email", placeholder: "jsmith@email.com"},{label: "Subject", placeholder: "I like your work!"}]
    return (
        <div id="form-wrapper" className="d-flex justify-content-center">
            <form style={{padding: "1em", borderRadius: "0.3em", backgroundColor: "rgb(242, 242, 242)"}}>
                {inputs.map(input => (
                    <div key={input.label} className="form-group row p-2">
                        <label htmlFor={input.label} className="col-sm-2 col-form-label"><b>{input.label}</b></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id={input.label} placeholder={input.placeholder} />
                        </div>
                    </div>
                ))}
                <div className="row py-2">
                    <label htmlFor="message" className="col-sm-2 col-form-label"><b>Message</b></label>
                    <div className="col-sm-12">
                        <textarea id="message" rows={6} className="form-control" />
                    </div>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <button className="btn btn-primary">Send Email</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm