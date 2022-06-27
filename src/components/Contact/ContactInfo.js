const ContactInfo = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-4" style={{color: "white"}}>
            <div className="d-flex flex-column justify-content-start" style={{fontSize: '1.1em'}}>
                <div>
                    <b>Email:</b>
                    <span style={{marginLeft: "1em"}}>rasnerkeifer@gmail.com</span>    
                </div>
                <div>
                    <b>Linkedin:</b>
                    <span style={{marginLeft: "1em"}}>rasnerkeifer@gmail.com</span>    
                </div>
                <div>
                    <b>Github:</b>
                    <span style={{marginLeft: "1em"}}><a href="https://github.com/rasnerk">rasnerk</a></span>    
                </div>
            </div>
        </div>
    )
}

export default ContactInfo