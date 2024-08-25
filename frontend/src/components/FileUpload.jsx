
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FileUpload = ({ onBack }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  const [timer, setTimer] = useState(10);
  const countdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    
  };

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const response = await axios.get(`http://localhost:5000/upload?file_name=${selectedFile.name}`);
      const url = response.data.url;

      await axios.put(url, selectedFile, {
        headers: {
          'Content-Type': selectedFile.type,
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      setAlertType('success');
    } catch (error) {
      console.error('Error uploading file', error);
      setAlertType('error');
    } finally {
      setShowAlert(true);
      setTimer(10);
      setUploadProgress(0);
      startCountdown();
      startTimeout();
      // Clear the input field
      fileInputRef.current.value = '';
    }
  };

  const startCountdown = () => {
    countdownRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdownRef.current);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const startTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      clearInterval(countdownRef.current);
      resetComponentState();
      setShowAlert(false);
      onBack(); // Navigate back to home page
    }, 10000);
  };

  const resetComponentState = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setShowModal(false);
    setAlertType('');
  };

  const confirmUpload = () => {
    setShowModal(false);
    setUploadProgress(0);
    handleUpload();
  };

  const handleCancelRedirect = () => {
    clearTimeout(timeoutRef.current);
    clearInterval(countdownRef.current);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Upload File</h2>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              ref={fileInputRef} // Add the ref here
            />
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={onBack}>
              Back to Home
            </button>
            <button
              className="btn btn-success"
              onClick={() => setShowModal(true)}
              disabled={!selectedFile}
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="progress mt-3">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${uploadProgress}%` }}
            aria-valuenow={uploadProgress}
            aria-label="Info striped example"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      )}

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        tabIndex="-1"
        style={{ display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Upload</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to upload this file? This action cannot be reverted back.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={confirmUpload}
              >
                Yes, Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center">
              <div className="modal-body">
                {alertType === 'success' ? (
                  <FaCheckCircle size={60} color="green" />
                ) : (
                  <FaTimesCircle size={60} color="red" />
                )}
                <p className="mt-3">
                  {alertType === 'success' ? 'Successful upload' : 'Failed to upload, Try Again'}
                </p>
                <div className="d-flex justify-content-around mt-3">
                  <button className="btn btn-secondary" onClick={onBack}>Home</button>
                  {alertType === 'success' ? (
                    <button className="btn btn-primary" onClick={() => { setShowAlert(false); resetComponentState(); handleCancelRedirect(); }}>Upload Another File</button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => { setShowAlert(false); resetComponentState(); handleCancelRedirect(); }} >Try Again</button>
                  )}
                </div>
                <p className="mt-3">Redirecting to home page in {timer} seconds.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
