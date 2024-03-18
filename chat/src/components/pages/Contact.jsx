import React from 'react';
import Layout2 from '../Layout/Layout2';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <Layout2>
      <div className='about'>
        <h1>Contact Us</h1>

        <p>
          We would love to hear from you! Please feel free to reach out to us
          using the contact information below or by filling out the contact
          form.
        </p>

        <h2>Contact Information</h2>

        <p>
          <strong>Email:</strong> ashu78021@gmail.com
        </p>

        <p>
          <strong>Phone:</strong> +91 9416540289
        </p>

        <h2>Contact Form</h2>

        <form className={styles.contactForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout2>
  );
};

export default Contact;
