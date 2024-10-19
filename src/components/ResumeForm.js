import React, { useState } from 'react';
import './ResumeForm.css';

const ResumeForm = ({ handleChange, handleSubmit }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        handleChange('image', reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedImage(file.name);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  return (
    <form className="resume-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <h3>Contact Information</h3>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" onChange={(e) => handleChange('fullName', e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="Enter your address" onChange={(e) => handleChange('address', e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone number" onChange={(e) => handleChange('phoneNumber', e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email address" onChange={(e) => handleChange('email', e.target.value)} />
      </div>
      <div className="form-group">
        <label>LinkedIn Profile</label>
        <input type="text" placeholder="Enter your LinkedIn Profile URL" onChange={(e) => handleChange('linkedin', e.target.value)} />
      </div>

      {/* Image Upload Field */}
      <div className="form-group">
        <label>Upload Your Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {selectedImage && <p>Selected Image: {selectedImage}</p>}
      </div>

      <h3>Professional Summary</h3>
      <div className="form-group">
        <textarea
          placeholder="Write a brief summary of your professional experience"
          onChange={(e) => handleChange('summary', e.target.value)}
        />
      </div>

      <h3>Education</h3>
      <div className="form-group">
        <label>Degree</label>
        <input
          type="text"
          placeholder="Enter your degree"
          onChange={(e) => handleChange('degree', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Institution</label>
        <input
          type="text"
          placeholder="Enter the institution name"
          onChange={(e) => handleChange('institution', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Dates Attended</label>
        <input
          type="text"
          placeholder="Enter the dates you attended"
          onChange={(e) => handleChange('datesAttended', e.target.value)}
        />
      </div>

      <h3>Work Experience</h3>
      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          placeholder="Enter your job title"
          onChange={(e) => handleChange('jobTitle', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          placeholder="Enter the company name"
          onChange={(e) => handleChange('company', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Dates Employed</label>
        <input
          type="text"
          placeholder="Enter the dates employed"
          onChange={(e) => handleChange('datesEmployed', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Job Description</label>
        <textarea
          placeholder="Briefly describe your job responsibilities"
          onChange={(e) => handleChange('jobDescription', e.target.value)}
        />
      </div>

      <h3>Skills</h3>
      <div className="form-group">
        <textarea
          placeholder="List your technical and soft skills, separated by commas"
          onChange={(e) => handleChange('skills', e.target.value)}
        />
      </div>

      <h3>Achievements</h3>
      <div className="form-group">
        <textarea
          placeholder="List your achievements, awards, or certifications"
          onChange={(e) => handleChange('achievements', e.target.value)}
        />
      </div>

      <h3>Volunteer/Extracurricular Activities</h3>
      <div className="form-group">
        <textarea
          placeholder="Describe your volunteer work or extracurricular activities"
          onChange={(e) => handleChange('volunteer', e.target.value)}
        />
      </div>

      <h3>References</h3>
      <div className="form-group">
        <textarea
          placeholder="Provide references (or mention 'Available upon request')"
          onChange={(e) => handleChange('references', e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default ResumeForm;
