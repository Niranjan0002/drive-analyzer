import React from 'react';

const QuickUpload = ({ styles, handleDrop, handleDragOver, handleFileUpload, uploadStatus }) => (
  <div
    style={styles.uploadArea}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    onClick={handleFileUpload}
    onMouseEnter={(e) => {
      e.target.style.borderColor = '#f87171';
      e.target.style.background = 'rgba(248, 113, 113, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.target.style.borderColor = '#4b5563';
      e.target.style.background = 'transparent';
    }}
  >
    {uploadStatus ? (
      <div style={styles.uploadSuccess}>{uploadStatus}</div>
    ) : (
      <>
        <div style={styles.uploadIcon}>📁</div>
        <div style={styles.uploadText}>Drop files here</div>
        <div style={styles.uploadSubtext}>or click to browse</div>
      </>
    )}
  </div>
);

export default QuickUpload;
