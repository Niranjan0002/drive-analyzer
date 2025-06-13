import React from 'react';

const RecentFiles = ({ recentFiles, styles }) => (
  <div>
    <h2 style={styles.sectionHeader}>Recent Files</h2>
    <div style={styles.filesGrid}>
      {recentFiles.map((file, index) => (
        <div
          key={file.id}
          style={{
            ...styles.fileCard,
            animationDelay: `${index * 0.1}s`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            e.currentTarget.style.background = '#374151';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.background = '#1f2937';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={styles.fileCardTopBorder}></div>
          <div style={{ ...styles.fileIcon, background: file.gradient }}>
            <div style={styles.fileIconInner}></div>
          </div>
          <div style={styles.fileName}>{file.name}</div>
          <div style={styles.fileDetails}>{file.type} • {file.size}</div>
          <div style={styles.fileModified}>Modified {file.modified}</div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentFiles;
