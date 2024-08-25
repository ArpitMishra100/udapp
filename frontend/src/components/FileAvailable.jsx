
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileAlt } from 'react-icons/fa';

const FileAvailable = ({ onBack }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/download');
        setFiles(response.data.files);
      } catch (error) {
        console.error('Error fetching files', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="text-center">
          <h2>Fetching your files...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Available Files</h2>
      </div>
      <ul className="list-group">
        {files.map((file) => (
          <li
            key={file}
            className="list-group-item d-flex align-items-center"
            style={{
              marginBottom: '10px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f8f9fa',
              transition: 'background-color 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e9ecef')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8f9fa')}
          >
            <FaFileAlt style={{ marginRight: '10px', color: '#17a2b8' }} /> <b>{file}</b>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={onBack}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default FileAvailable;
