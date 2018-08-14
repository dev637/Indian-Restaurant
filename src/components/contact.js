import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <header className="contact centercontent">
        <h1 className="has-text-light">Contact</h1>
      </header>

      <section className="contact-intro">
        <h3 className="title is-3 has-text-centered">Have a question? Feel free to ask!</h3>
        
        <p>Nisi aute eiusmod veniam laboris commodo veniam eu incididunt excepteur nisi esse tempor veniam. Pariatur exercitation nulla amet esse voluptate et anim excepteur veniam quis eiusmod.</p>

        <form action="">
        <div className="contact-form columns">

          <div className="column">
            <label className="label" htmlFor="name">
              Name
              <input className="input" type="text" id="name" required/>
            </label>

            <label className="label" htmlFor="email">
              Email
              <input className="input" type="email" id="email" required/>
            </label>

            <label className="label" htmlFor="phone">
              Phone
              <input className="input" type="text" id="phone" required/>
            </label>
          </div>

          <div className="column">
            <label className="label" htmlFor="subject">
              Subject
              <input className="input" type="text" id="subject" required/>
            </label>

            <label className="label" htmlFor="message">
              Message
              <textarea className="textarea" id="message"></textarea>
            </label>
          </div>

        </div>

        <div className="contact-form columns">
          <div className="column">
            <button className="button is-primary is-outlined">Submit</button>
          </div>
        </div>
        </form>

      </section>

    </div>
  )
}

export default Contact;