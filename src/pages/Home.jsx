import React, { useState } from 'react';
import calculatorImage from '../assets/calculator.jpg';
import chartImage from '../assets/financial-chart.jpg';
import officeImage from '../assets/office.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import './Home.css'
import { slides } from '../data/couroselData.json'
import Courosel from '../components/Courosel';
import ExperienceSection from './ExperienceSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import IndustrySection from '../components/IndustrySection';
import GallerySection from '../components/GallerySection';
import TeamDetails from '../components/TeamDetails';
import ServiceProvide from '../components/ServiceProvide'
import SolutionsOffer from '../components/SolutionsOffer';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredGalleryImage, setHoveredGalleryImage] = useState(null);
  const data = [
    {
      src:"https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
      alt:"This is image1",
      text:"Welcome to Agrawal Bhaiya & Company",
      subText:"Your trusted partner in accounting, taxation, and financial advisory."
  },
  {
      src:"https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt:"This is image2",
      text: "Welcome to Agrawal Bhaiya & Company",
      subText:"Your trusted partner in accounting, taxation, and financial advisory."

  },
  {
      src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY291bnRpbmd8ZW58MHx8MHx8fDA%3D",
      alt:"This is image3",
      text: "Welcome to Agrawal Bhaiya & Company",
      subText:"Your trusted partner in accounting, taxation, and financial advisory."

  }
  ];
  return (
    <div style={styles.container}>
      {/* <h1 style={styles.title}>Welcome to Agrawal Bhaiya & Company</h1>
      <p style={styles.subtitle}>
        Your trusted partner in accounting, taxation, and financial advisory.
      </p> */}

      {/* Call-to-Action Section */}
      {/* <div style={styles.callToAction}>
        <button style={styles.button}>Get a Free Consultation</button>
        <button style={styles.buttonSecondary}>Contact Us</button>
      </div> */}

      <Courosel data={data} autoPlay={true} interval={3000}/>
      {/* Gallery Section */}
      {/* <section style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>Our Services Gallery</h2>
        <div style={styles.gallery}>
          {[gallery1, gallery2, gallery3, gallery4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              style={{
                ...styles.galleryImage,
                transform: hoveredGalleryImage === index ? "scale(1.02)" : "scale(1)",
                boxShadow: hoveredGalleryImage === index ? "0px 6px 15px rgba(0, 0, 0, 0.2)" : "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={() => setHoveredGalleryImage(index)}
              onMouseLeave={() => setHoveredGalleryImage(null)}
            />
          ))}
        </div>
      </section> */}
      <GallerySection/>
      <SolutionsOffer/>
      <ExperienceSection/>
      <ServiceProvide/>
      <IndustrySection/>
      <TeamDetails/>
      <WhyChooseUsSection/>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '5%',
    background: 'linear-gradient(to bottom, #f7f9fc, #e8eff7)', // Gradient background
    color: '#333',
  },
  title: {
    fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Adjusts size dynamically between 1.8rem and 3rem
    color: 'white',
    marginBottom: '10px',
    position:"relative",
    top:"10rem",
    zIndex:'20'
  },
  subtitle: {
    fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Adjusts dynamically for responsiveness
    marginBottom: '20px',
    color: 'white',
    position:"relative",
    top:"10.5rem",
    zIndex:'20'
  },
  callToAction: {
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#2b6777',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonSecondary: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#2b6777',
    backgroundColor: '#f7f9fc',
    border: '2px solid #2b6777',
    borderRadius: '5px',
    marginLeft: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },

  gallerySection: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  galleryTitle: {
    fontSize: '1.8em',
    color: '#2b6777',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
};

export default Home;