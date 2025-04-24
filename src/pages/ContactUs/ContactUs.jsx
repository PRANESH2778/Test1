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
  
    // Basic validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
  
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      alert("All fields are required!");
      setIsSubmitting(false);
      return;
    }
  
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }
  
    if (!phoneRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      setIsSubmitting(false);
      return;
    }
  
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeyS03Oa2G97c4HhBJmuc0WhfSOpjdrxl3LU9vLlLZjwhtbQw/formResponse";
  
    const formDataToSend = {
      "entry.1341397609": formData.name,
      "entry.1634955362": formData.email,
      "entry.640354415": formData.mobile,
      "entry.1060261893": formData.message,
    };
  
    const formBody = new URLSearchParams(formDataToSend);
  
    try {
      await fetch(formURL, {
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
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <div style={styles.container}>
      <h1>CONTACT US</h1>
      <p>
        If you have any questions or would like to schedule a consultation,
        please contact us.
      </p>

      <p>Email: abandco.surat@gmail.com</p>
      <p>Phone: 0261-4531968      </p>

      {/* Contact Form */}
      <section style={styles.formSection}>
        <h2>GET IN TOUCH</h2>
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
        <h2>OUR LOCATION</h2>
        <div style={styles.map}>
          <iframe
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.251286471024!2d72.7746252!3d21.1521935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8be5423ffb%3A0x1576414c0877c525!2sHomeland%20City!5e0!3m2!1sen!2sin!4v1745517640047!5m2!1sen!2sin"
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
