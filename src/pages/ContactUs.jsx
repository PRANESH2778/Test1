import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      alert("All fields are required!");
      return;
    }
    // Replace with your Google Form action URL
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeyS03Oa2G97c4HhBJmuc0WhfSOpjdrxl3LU9vLlLZjwhtbQw/formResponse";
  
    const formDataToSend = {
      "entry.1341397609": formData.name, // Replace entry keys with the ones from your Google Form
      "entry.1634955362": formData.email,
      "entry.640354415": formData.mobile,
      "entry.1060261893": formData.message,
    };
  
    const formBody = new URLSearchParams(formDataToSend);
  
    try {
      const response = await fetch(formURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });

    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }finally{
      setIsSubmitting(false)
    }
  };
  

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or would like to schedule a consultation,
        please contact us.
      </p>

      <p>Email: info@abcaccountants.com</p>
      <p>Phone: +123 456 7890</p>

      {/* Contact Form */}
      <section style={styles.formSection}>
        <h2>Get in Touch</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
          <button type="submit" style={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* Embed Google Maps */}
      <section style={styles.mapSection}>
        <h2>Our Location</h2>
        <div style={styles.map}>
          <iframe
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0567469013115!2d106.62716031520334!3d10.756089460104043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec2c832a9db%3A0xb699e5c708897fbc!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1597392042974!5m2!1sen!2s"
            style={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  formSection: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "80%",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    margin: "10px 0",
    width: "80%",
    height: "150px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  mapSection: {
    marginTop: "30px",
    padding: "20px",
  },
  map: {
    width: "100%",
    height: "400px",
    borderRadius: "8px",
    overflow: "hidden",
  },
  mapIframe: {
    width: "100%",
    height: "100%",
    border: "0",
  },
};

export default ContactUs;
