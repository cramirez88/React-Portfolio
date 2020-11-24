import React, { Component } from 'react';

class Contact extends Component {
  state={
     contactName: "",
     contactEmail: "",
     contactSubject: "",
     contactMessage: ""
  }

   handleInputChange=event=>{
      const {name, value} = event.target
      this.setState({[name]: value})
   }
   handleOnSubmit=event=>{
      event.preventDefault();
   
   console.log(this.state.contactName, this.state.contactEmail, this.state.contactSubject,this.state.contactMessage)

      window.location.href= "mailto:christian.r0602@gmail.com?subject=" + this.state.contactSubject + "&body="+ this.state.contactMessage
}

   render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form   id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text"  value={this.state.contactName} size="35" id="contactName" name="contactName" onChange={this.handleInputChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value={this.state.contactEmail}  size="35" id="contactEmail" name="contactEmail" onChange={this.handleInputChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" value={this.state.contactSubject} size="35" id="contactSubject" name="contactSubject" onChange={this.handleInputChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={this.state.contactMessage} onChange={this.handleInputChange}></textarea>
                  </div>

                  <div>
                     <button   onClick={this.handleOnSubmit}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
