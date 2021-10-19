import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import './Contact.css'


const SERVICE_ID = "service_kjx6dir";
const TEMPLATE_ID = "template_9a1zt5l";
const USER_ID = "user_kTU8lthPQRClRdhZgLkgl";



const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
return (
    <div className="Contact">
    <Form onSubmit={handleOnSubmit}>
      
      <Form.Field
        className="input"
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
         
        />
        <Form.Field
          className="input"
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          
        />
        <Form.Field
          className="input"
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
      />
      <br />
        <button  className="submit-button">SUBMIT</button>
      </Form>
    </div>
  );
}
export default Contact;


