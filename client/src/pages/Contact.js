import React, { useState } from "react";
import { useDispatch,  } from "react-redux";
import { createContact } from "../store/contact";
import { showErrorToast,showSuccessToast } from "../utils/toast";


function Contact() {

  const dispatch = useDispatch();
  const [contact,setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setContact((prevContact)=>({...prevContact,[name]:value}));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createContact(contact)).then((result) => {
      if (!result.error) {
        showSuccessToast("message created successfully");
        setContact({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        showErrorToast(result.error.message);
      }
   
    });
    
  };
  
  return (
    <div className="bg-light">
      <section id="contact" className="contact">
          <div className="container">
            <div className="section-title dark-bleu">
              <h2 >Contact Us</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="info-wrap">
                  <div className="row">
                    <div className="col-lg-4 info">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p className="text-inf"><br />New York, NY 535022</p>
                    </div>
                    <div className="col-lg-4 info mt-4 mt-lg-0">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p  className="text-inf">info@example.com<br />contact@example.com</p>
                    </div>
                    <div className="col-lg-4 info mt-4 mt-lg-0">
                      <i className="bi bi-phone" />
                      <h4>Call:</h4>
                      <p className="text-inf">+1 5589 55488 51<br />+1 5589 22475 14</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" style={{paddingBottom:"50px"}}>
              <div className="col-lg-10">
                <form  className="php-email-form" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={contact.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={contact.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={contact.subject} onChange={handleChange} required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" value={contact.message} onChange={handleChange} required defaultValue={""} />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit" >Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>{/* End Contact Us Section */}
        <div> </div>
    </div>
  )
}

export default Contact
