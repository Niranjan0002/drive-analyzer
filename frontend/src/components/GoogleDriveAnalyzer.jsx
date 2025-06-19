// components/GoogleDriveAnalyzer.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import StatsCards from './StatsCards/StatsCards';
import RecentFiles from './RecentFiles/RecentFiles';
import RightPanel from './RightPanel/RightPanel';
import { getResponsiveStyles } from './styles';

const GoogleDriveAnalyzer = ({ user }) => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [realFiles, setRealFiles] = useState([]);
  const [realStorage, setRealStorage] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const styles = getResponsiveStyles();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    fetch('http://localhost:5000/files', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setRealFiles(data));

    fetch('http://localhost:5000/storage', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setRealStorage(data));
  }, []);

  const handleNavClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    setUploadStatus('✓ Files uploaded successfully!');
    setTimeout(() => setUploadStatus(''), 2000);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    handleFileUpload(e);
  };

  const formatStorageData = (storage) => {
    const used = parseInt(storage.usage);
    const total = parseInt(storage.limit);
    return [
      {
        type: 'Used',
        size: `${(used / (1024 ** 3)).toFixed(1)} GB`,
        percentage: Math.round((used / total) * 100),
        color: 'linear-gradient(135deg, #7c3aed, #5b21b6)'
      }
    ];
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        <Header
          styles={styles}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          toggleSidebar={toggleSidebar}
          user={user}
        />

        <div style={styles.mainContent}>
          {isSidebarVisible && (
            <Sidebar
              styles={styles}
              activeNavItem={activeNavItem}
              handleNavClick={handleNavClick}
            />
          )}

          <div style={styles.contentArea}>
            <StatsCards styles={styles} />
            <RecentFiles recentFiles={realFiles} styles={styles} />
          </div>

          <RightPanel
            styles={styles}
            storageData={realStorage ? formatStorageData(realStorage) : []}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleFileUpload={handleFileUpload}
            uploadStatus={uploadStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleDriveAnalyzer;
