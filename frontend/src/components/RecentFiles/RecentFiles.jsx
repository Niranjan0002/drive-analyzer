// components/RecentFiles/RecentFiles.jsx
import React from 'react';

const RecentFiles = ({ recentFiles, styles }) => {
  return (
    <div style={styles.recentSection}>
      <h2 style={styles.sectionTitle}>Recent Files</h2>
      <div style={styles.recentGrid}>
        {recentFiles.map((file) => (
          <div key={file.id} style={{ ...styles.recentFileCard, background: file.gradient || '#1f2937' }}>
            <div style={styles.recentFileText}>
              <div style={styles.fileName}>{file.name}</div>
              <div style={styles.fileMeta}>{file.type} • {file.size}</div>
              <div style={styles.fileTime}>Modified {file.modified}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFiles;
