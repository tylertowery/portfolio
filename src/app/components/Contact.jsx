'use client'

import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitting form!');
    console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

    const form = e.target;
    const formData = new FormData(form);
    if (window.grecaptcha) {
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });

      console.log('token: ', token);

      formData.append('recaptchaToken', token);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Message was sent!');
        form.reset();
      } else {
        alert('There was an issue with sending your message!');
      }
    } else {
      alert('reCaptcha not loaded')
    }

  }

  return (
    <section id='contact' className='contact'>
      <div className='contact-header'>
        <h1 className='contact-heading'>Contact</h1>
        <p className='contact-description'>Feel free to contact me by submitting the form below!</p>
      </div>
      <div className='contact-form-container'>
        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='pair'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' placeholder='Enter Your Name' required />
          </div>
          <div className='pair'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Enter Your Email' required />
          </div>
          <div className='pair'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' placeholder='Enter Your Message' />
          </div>
          <button type='submit' className='contact-form-button'>Submit</button>
        </form>
      </div>
    </section>
  )
}