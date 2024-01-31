// src/App.js
import React from 'react';
import Header from './Header';
import EventSection from './EventSection';
import SignupForm from './SignupForm';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <EventSection />
      <main>
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
