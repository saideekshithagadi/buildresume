import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="app-container">
      <Header/>
      {!isSubmitted ? (
        <ResumeForm handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : (
        <div>
          <ResumePreview data={formData} />
          <button onClick={handleEdit} className="edit-btn">Edit</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
