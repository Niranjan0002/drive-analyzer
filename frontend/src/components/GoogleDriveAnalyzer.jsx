import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import StatsCards from './StatsCards/StatsCards';
import RecentFiles from './RecentFiles/RecentFiles';
import RightPanel from './RightPanel/RightPanel';
import MyFiles from './MyFiles/MyFiles';
import SharedFiles from './SharedFiles/SharedFiles';
import FavoriteFiles from './FavoriteFiles/FavoriteFiles';
import { getResponsiveStyles } from './styles';

const GoogleDriveAnalyzer = ({ user }) => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const [recentFiles, setRecentFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [sharedFiles, setSharedFiles] = useState([]);
  const [favoriteFiles, setFavoriteFiles] = useState([]);

  const [storage, setStorage] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const styles = getResponsiveStyles();

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  useEffect(() => {
    fetch('http://localhost:5000/files', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setRecentFiles(data.slice(0, 12)));

    fetch('http://localhost:5000/all-files', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setAllFiles(data));

    fetch('http://localhost:5000/shared', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setSharedFiles(data));

    fetch('http://localhost:5000/favorites', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setFavoriteFiles(data));

    fetch('http://localhost:5000/storage', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setStorage(data));
  }, []);

  const handleNavClick = (itemName) => setActiveNavItem(itemName);

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

  const filteredRecentFiles = recentFiles.filter(file =>
    file.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        <Header
          styles={styles}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          toggleSidebar={toggleSidebar}
          user={user}
          activeNavItem={activeNavItem}
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
            {activeNavItem === 'Dashboard' && (
              <>
                <StatsCards styles={styles} />
                <RecentFiles
                  recentFiles={filteredRecentFiles}
                  styles={styles}
                  setFiles={setRecentFiles}
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeNavItem === 'My Files' && (
              <MyFiles
                files={allFiles}
                styles={styles}
                setFiles={setAllFiles}
                searchQuery={searchQuery}
              />
            )}

            {activeNavItem === 'Shared' && (
              <SharedFiles
                files={sharedFiles}
                styles={styles}
                setFiles={setSharedFiles}
                searchQuery={searchQuery}
              />
            )}

            {activeNavItem === 'Favorites' && (
              <FavoriteFiles
                files={favoriteFiles}
                styles={styles}
                setFiles={setFavoriteFiles}
                searchQuery={searchQuery}
              />
            )}
          </div>

          <RightPanel
            styles={styles}
            storageData={storage ? formatStorageData(storage) : []}
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
