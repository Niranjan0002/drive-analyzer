import React from 'react';

const Header = ({ searchQuery, setSearchQuery, styles }) => (
  <div style={styles.header}>
    <h1 style={styles.headerTitle}>Google Drive Analyzer</h1>
    <input
      type="text"
      placeholder="Search your universe of files..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={styles.searchInput}
    />
    <div style={styles.headerIcons}>
      <button
        style={styles.iconButton}
        onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
      >
        🔔
      </button>
      <div style={styles.profileIcon}></div>
    </div>
  </div>
);

export default Header;
