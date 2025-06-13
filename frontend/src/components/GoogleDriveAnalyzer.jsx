import React, { useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import StatsCards from './StatsCards/StatsCards';
import RecentFiles from './RecentFiles/RecentFiles';
import RightPanel from './RightPanel/RightPanel';
import { styles } from './styles';

const GoogleDriveAnalyzer = () => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '🏠', color: '#ff6b6b' },
    { id: 'files', name: 'My Files', icon: '📁', color: '#4ecdc4' },
    { id: 'recent', name: 'Recent', icon: '🕒', color: '#45b7d1' },
    { id: 'shared', name: 'Shared', icon: '🤝', color: '#f7b731' },
    { id: 'favorites', name: 'Favorites', icon: '⭐', color: '#5f27cd' }
  ];

  const categoryItems = [
    { id: 'documents', name: 'Documents', icon: '📄', color: '#ff6348' },
    { id: 'images', name: 'Images', icon: '🖼️', color: '#2ed573' },
    { id: 'videos', name: 'Videos', icon: '🎬', color: '#3742fa' }
  ];

  const statsData = [
    { number: '1,247', label: 'Total Files', gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)' },
    { number: '8.4 GB', label: 'Used Space', gradient: 'linear-gradient(135deg, #f43f5e, #dc2626)' },
    { number: '23', label: 'Shared Items', gradient: 'linear-gradient(135deg, #60a5fa, #0891b2)' },
    { number: '156', label: 'Recent Files', gradient: 'linear-gradient(135deg, #4ade80, #059669)' }
  ];

  const recentFiles = [
    { id: 1, name: 'Marketing Strategy.pptx', type: 'PowerPoint', size: '4.2 MB', modified: '2 hours ago', gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)' },
    { id: 2, name: 'Design Assets', type: 'Folder', size: '28 items', modified: 'yesterday', gradient: 'linear-gradient(135deg, #f43f5e, #dc2626)' },
    { id: 3, name: 'Q4 Report.xlsx', type: 'Excel', size: '2.1 MB', modified: '1 day ago', gradient: 'linear-gradient(135deg, #60a5fa, #0891b2)' },
    { id: 4, name: 'Team Meeting.mp4', type: 'Video', size: '156 MB', modified: '3 days ago', gradient: 'linear-gradient(135deg, #4ade80, #059669)' },
    { id: 5, name: 'Contract Draft.docx', type: 'Word', size: '890 KB', modified: '1 week ago', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' },
    { id: 6, name: 'Photo Library', type: 'Folder', size: '142 items', modified: '2 weeks ago', gradient: 'linear-gradient(135deg, #2dd4bf, #f472b6)' }
  ];

  const activityTimeline = [
    { id: 1, action: 'File uploaded', file: 'Marketing Strategy.pptx', time: '2 hours ago', color: 'linear-gradient(135deg, #f87171, #fbbf24)' },
    { id: 2, action: 'Folder shared', file: 'Design Assets with team', time: 'Yesterday', color: 'linear-gradient(135deg, #60a5fa, #0891b2)' },
    { id: 3, action: 'File modified', file: 'Q4 Report.xlsx', time: '2 days ago', color: 'linear-gradient(135deg, #4ade80, #059669)' }
  ];

  const storageData = [
    { type: 'Documents', size: '3.2 GB', percentage: 45, color: 'linear-gradient(135deg, #7c3aed, #5b21b6)' },
    { type: 'Images', size: '2.8 GB', percentage: 38, color: 'linear-gradient(135deg, #f43f5e, #dc2626)' },
    { type: 'Videos', size: '2.4 GB', percentage: 32, color: 'linear-gradient(135deg, #60a5fa, #0891b2)' }
  ];

  const handleNavClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    setUploadStatus('✓ Files uploaded successfully!');
    setTimeout(() => {
      setUploadStatus('');
    }, 2000);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    handleFileUpload(e);
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        <Header
          styles={styles}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div style={styles.mainContent}>
          <Sidebar
            styles={styles}
            navigationItems={navigationItems}
            categoryItems={categoryItems}
            activeNavItem={activeNavItem}
            handleNavClick={handleNavClick}
          />

          <div style={styles.contentArea}>
            <StatsCards statsData={statsData} styles={styles} />
            <RecentFiles recentFiles={recentFiles} styles={styles} />
          </div>

          <RightPanel
            styles={styles}
            activityTimeline={activityTimeline}
            storageData={storageData}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleFileUpload={handleFileUpload}
            uploadStatus={uploadStatus}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input::placeholder {
          color: rgba(255, 255, 255, 0.8);
        }
        input:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default GoogleDriveAnalyzer;
