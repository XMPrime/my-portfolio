import React from "react";

export default function ContactForm() {
  let formInputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name *",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your email *",
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Write a Subject",
    },
    {
      name: "message",
      type: "text",
      placeholder: "Your message",
    },
  ].map((input) => (
    <label htmlFor={input.name}>
      <input
        type={input.type}
        name={input.name}
        id={input.name}
        placeholder={input.placeholder}
      />
    </label>
  ));

  return (
    <form
      id='contact'
      method='post'
      name='contact'
      //   onSubmit={(e) => this.formSubmit(e)}
    >
      <input type='hidden' name='form-name' value='contact' />
      {formInputs}
      <button
        className='rn-button-style--2 btn-solid'
        type='submit'
        value='submit'
        name='submit'
        id='mc-embedded-subscribe'
      >
        Submit
      </button>
    </form>
  );
}
