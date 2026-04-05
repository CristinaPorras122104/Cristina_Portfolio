function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea rows="5" placeholder="Your message"></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  );
}

export default Contact;