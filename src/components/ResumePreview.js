import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ data }) => {
  const skillsArray = data.skills ? data.skills.split(',') : [];
  const achive =data.achievements? data.achievements.split(',') : [];

  return (
    <div className="resume-preview">
      
      <h2>{data.fullName || 'Full Name'}</h2>
      {data.image && <img src={data.image} alt="Profile" className="profile-img" />}
      <p><strong>Address:</strong> {data.address || 'Address'}</p>
      <p><strong>Phone:</strong> {data.phoneNumber || 'Phone Number'}</p>
      <p><strong>Email:</strong> {data.email || 'Email Address'}</p>
      <p><strong>LinkedIn:</strong> {data.linkedin || 'LinkedIn Profile'}</p>

    
      <h3>Professional Summary</h3>
      <p>{data.summary || 'Your professional summary will appear here.'}</p>

      
      <h3>Education</h3>
      <p><strong>Degree:</strong> {data.degree || 'Degree'}</p>
      <p><strong>Institution:</strong> {data.institution || 'Institution'}</p>
      <p><strong>Dates of Completion:</strong> {data.datesAttended || 'Dates'}</p>

    
      <h3>Work Experience</h3>
      <p><strong>Job Title:</strong> {data.jobTitle || 'Job Title'}</p>
      <p><strong>Company:</strong> {data.company || 'Company Name'}</p>
      <p><strong>Dates Employed:</strong> {data.datesEmployed || 'Dates Employed'}</p>
      <p><strong>Job Description:</strong> {data.jobDescription || 'Job Description'}</p>

      
      <h3>Skills</h3>
      <ul className="skills-list">
        {skillsArray.map((skill, index) => (
          <li key={index}>→ {skill.trim()}</li>
        ))}
      </ul>

    
      <h3>Achievements</h3>
      <p>{data.achievements || 'Achievements'}</p>
      <ul className="skills-list">
        {achive.map((skill, index) => (
          <li key={index}>→ {skill.trim()}</li>
        ))}
      </ul>

      <h3>Volunteer Activities</h3>
      <p>{data.volunteer || 'Volunteer Activities'}</p>

    
      <h3>References</h3>
      <p>{data.references || 'References'}</p>
    </div>
  );
};

export default ResumePreview;
