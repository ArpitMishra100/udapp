// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const FileDownload = ({onBack}) => {
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/download');
//         setFiles(response.data.files);
//       } catch (error) {
//         console.error('Error fetching files', error);
//       }
//     };

//     fetchFiles();
//   }, []);

//   const handleDownload = async (fileName) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/download/${fileName}`);
//       const { url } = response.data;
//       window.open(url);
//     } catch (error) {
//       console.error('Error generating download URL', error);
//     }
//   };
  

//   return (
//     <div>
//       <h2>Download Files</h2>
//       <ul>
//         {files.map((file) => (
//           <li key={file}>
//             {file} <button onClick={() => handleDownload(file)}>Download</button>
                  
//           </li>
//         ))}
//       </ul>
//       <button onClick={onBack}>Back to Home</button>
//     </div>
//   );
// };

// export default FileDownload;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFile, FaDownload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileDownload = ({ onBack }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(null);

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

  const handleDownload = async (fileName) => {
    setDownloading(fileName);
    try {
      const response = await axios.get(`http://localhost:5000/download/${fileName}`);
      const { url } = response.data;
      window.open(url);
    } catch (error) {
      console.error('Error generating download URL', error);
    } finally {
      setDownloading(null);
      fetchFiles();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: '#007bff' }}>Download Files</h2>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <div className="text-center">
            <p>Fetching Files...</p>
            <div className="spinner-border text-primary" role="status">
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
                  backgroundColor: '#f8f9fa',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e2e6ea')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f8f9fa')}
              >
                <FaFile style={{ marginRight: '10px' }} />
                {file}
                <button
                  onClick={() => handleDownload(file)}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <FaDownload />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {downloading && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <div className="text-center">
            <p>Downloading {downloading}...</p>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Downloading...</span>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center mt-3">
        <button onClick={onBack} className="btn btn-primary">Back to Home</button>
      </div>
    </div>
  );
};

export default FileDownload;

