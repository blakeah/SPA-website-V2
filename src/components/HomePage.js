import React, { useEffect, useState } from 'react';

const HomePage = () => {
  useEffect(() => {
    // Detect when the bottom section enters the viewport and add the fade-in class
    const bottomSection = document.querySelector('.bottom-section');

    function checkScroll() {
      const windowHeight = window.innerHeight;
      const bottomSectionTop = bottomSection.getBoundingClientRect().top;

      if (bottomSectionTop < windowHeight) {
        bottomSection.classList.add('fade-in');
        window.removeEventListener('scroll', checkScroll);
      }
    }

    window.addEventListener('scroll', checkScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <header>
        <h1>Header Title</h1>
        <div className="header-content">
          <img src="your-image.jpg" alt="Full-screen Image" />
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </header>

      <main>
        <section className="bottom-section">
          <div className="column">
            <h1>Fade In Content 1</h1>
          </div>
          <div className="column">
            <h2>Fade In Content 2</h2>
          </div>
          <div className="column">
            <h3>Fade In Content 3</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
