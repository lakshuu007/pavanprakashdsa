
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Chatbot from "./components/chatbot";


function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <Resources />
        <Chatbot />

      </main>
      <Footer />
    </div>
  );
}

export default App;
