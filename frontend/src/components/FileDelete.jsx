
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFile, FaTrashAlt, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileDelete = ({ onBack }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [alertFile, setAlertFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

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

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDelete = async (fileName) => {
    setAlertFile(null);
    setDeleting(true);
    try {
      const response = await axios.get(`http://localhost:5000/delete/${fileName}`);
      const { url } = response.data;

      const deleteResponse = await fetch(url, { method: 'DELETE' });

      if (deleteResponse.ok) {
        setFiles(files.filter((file) => file !== fileName));
        setSuccessMessage(`File "${fileName}" deleted successfully`);
      } else {
        alert('Failed to delete file');
        console.error('Failed to delete file', deleteResponse.statusText);
      }
    } catch (error) {
      console.error('Error generating or using the pre-signed delete URL', error);
    } finally {
      setDeleting(false);
    }
  };

  const handleAlertDelete = () => {
    if (alertFile) {
      handleDelete(alertFile);
    }
  };

  const handleSuccessOk = () => {
    setSuccessMessage('');
    fetchFiles();
  };

  return (
    <div className="container mt-5" style={{ color: '#b22222' }}>
      <h2>Delete Files</h2>
      <p className="text-danger">Once deleted, files can't be retrieved.</p>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <div className="text-center">
            <p>Fetching files...</p>
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <ul className="list-group w-50">
            {files.map((file) => (
              <li
                key={file}
                className="list-group-item d-flex align-items-center justify-content-between"
                style={{
                  backgroundColor: '#f8f8f8',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e8e8e8')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f8f8f8')}
              >
                <FaFile style={{ marginRight: '10px' }} />
                {file}
                <button
                  onClick={() => setAlertFile(file)}
                  className="btn btn-danger btn-sm"
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={onBack} className="btn btn-danger mt-3">Back to Home</button>
      {alertFile && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="close" onClick={() => setAlertFile(null)} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <FaExclamationTriangle className="text-warning" style={{ fontSize: '2em' }} />
                <p>Are you sure you want to delete file "{alertFile}"? It can't be retrieved again.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setAlertFile(null)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={handleAlertDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {deleting && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <div className="text-center">
            <p>Deleting file...</p>
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Deleting...</span>
            </div>
          </div>
        </div>
      )}
      {successMessage && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
              </div>
              <div className="modal-body text-center">
                <FaCheckCircle className="text-success" style={{ fontSize: '2em' }} />
                <p>{successMessage}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={handleSuccessOk}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDelete;
