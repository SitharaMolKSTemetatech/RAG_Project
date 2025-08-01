import React, { useState } from 'react';
import './bluetemplate.css';

import { Link } from 'react-router-dom';
const Bluetemplate = () => {
  const [activeSection, setActiveSection] = useState('Cover');
  const [sections, setSections] = useState([
    { id: 1, name: 'Cover' },
    { id: 2, name: 'Introduction' },
    { id: 3, name: 'Thank You' }
  ]);
  const [sectionCounter, setSectionCounter] = useState(4);

  const [coverText, setCoverText] = useState({
    heading: 'Business Proposal',
    subheading: 'Modern and Professional Design',
    body: 'This is a fully editable cover page. Change the text as needed.',
    proposalName: 'New Project',
    preparedBy: 'Your Name',
    submittedDate: new Date().toISOString().slice(0, 10)
  });

  const [contentMap, setContentMap] = useState({
    Introduction: 'Here you can introduce your company, services, or goals.',
    'Thank You': 'Thank you for reviewing our proposal.'
  });

  const handleDelete = (id) => {
    const updated = sections.filter((s) => s.id !== id);
    setSections(updated);
    if (activeSection === sections.find((s) => s.id === id)?.name) {
      setActiveSection('Cover');
    }
  };

  const handleAddSection = () => {
    const title = prompt('Enter section title:');
    if (title) {
      const newSection = { id: sectionCounter, name: title };
      setSections([...sections, newSection]);
      setSectionCounter(sectionCounter + 1);
      setContentMap({ ...contentMap, [title]: '' });
    }
  };

  const handleExport = () => {
    const content = sections.map((s, i) => `Page ${i + 1}: ${s.name}\n${contentMap[s.name] || ''}`).join('\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'proposal.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderSection = () => {
    if (activeSection === 'Cover') {
      return (
        <div className="section cover-section">
          <div className="left">
            <h1 contentEditable suppressContentEditableWarning>{coverText.heading}</h1>
            <p className="sub" contentEditable suppressContentEditableWarning>{coverText.subheading}</p>
            <textarea value={coverText.body} onChange={(e) => setCoverText({ ...coverText, body: e.target.value })} />
            <p>
              Proposal Name: <input value={coverText.proposalName} onChange={(e) => setCoverText({ ...coverText, proposalName: e.target.value })} /><br />
              Prepared By: <input value={coverText.preparedBy} onChange={(e) => setCoverText({ ...coverText, preparedBy: e.target.value })} /><br />
              Date Submitted: <input type="date" value={coverText.submittedDate} onChange={(e) => setCoverText({ ...coverText, submittedDate: e.target.value })} />
            </p>
          </div>
          <div className="right" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506765515384-028b60a970df')` }}></div>
        </div>
      );
    } else {
      return (
        <div className="section intro-section">
          <div className="intro-left" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559027615-4b68d0c9b49e')` }}></div>
          <div className="intro-right">
            <h2 contentEditable suppressContentEditableWarning>{activeSection}</h2>
            <textarea value={contentMap[activeSection] || ''} onChange={(e) => setContentMap({ ...contentMap, [activeSection]: e.target.value })} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="proposal-editor">
      <div className="sidebar">
        <h3>Sections</h3>
        {sections.map((section) => (
          <div
            key={section.id}
            className={`sidebar-item ${activeSection === section.name ? 'active' : ''}`}
            onClick={() => setActiveSection(section.name)}
          >
            {section.name}
            {section.name !== 'Cover' && (
              <button className="delete-btn" onClick={(e) => { e.stopPropagation(); handleDelete(section.id); }}>×</button>
            )}
          </div>
        ))}
        <button onClick={handleAddSection} style={{ marginTop: '10px' }}>+ Add Section</button>
        <button onClick={handleExport} style={{ marginTop: '10px' }}>Export Proposal</button>
      </div>
      <div className="editor-content">
        <button className="top-save-btn">Save</button>
        {sections.map((section, index) => (
          <div key={section.id}>
            {activeSection === section.name && renderSection()}
            <p className="page">Page {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bluetemplate;