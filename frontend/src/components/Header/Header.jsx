// components/Header/Header.jsx
import React, { useState } from 'react';

const Header = ({ styles, searchQuery, setSearchQuery, toggleSidebar, user }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    setShowConfirm(false);
    window.location.href = 'http://localhost:5000/logout';
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div style={styles.header}>
      <button onClick={toggleSidebar} style={styles.iconButton}>☰</button>
      <h1 style={styles.headerTitle}>Google Drive Analyzer</h1>
      <input
        type="text"
        placeholder="Search your universe of files..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.headerIcons}>
        {user?.picture && (
          <img
            src={user.picture}
            alt="Profile"
            style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '8px' }}
            title={user.email}
          />
        )}
        <span style={{ color: 'white', marginRight: '12px' }}>{user?.name}</span>
        <button onClick={handleLogout} style={styles.logoutButton}>🚪 Logout</button>
      </div>

      {showConfirm && (
        <div style={styles.confirmOverlay}>
          <div style={styles.confirmBox}>
            <p style={{ marginBottom: '16px' }}>Are you sure you want to log out?</p>
            <button onClick={confirmLogout} style={styles.confirmButton}>Yes</button>
            <button onClick={cancelLogout} style={styles.cancelButton}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;