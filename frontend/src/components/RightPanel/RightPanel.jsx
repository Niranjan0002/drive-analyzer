import React from 'react';
import ActivityTimeline from './ActivityTimeline';
import StorageAnalytics from './StorageAnalytics';
import QuickUpload from './QuickUpload';

const RightPanel = ({ styles, activityTimeline, storageData, handleDrop, handleDragOver, handleFileUpload, uploadStatus }) => (
  <div style={styles.rightPanel}>
    <div style={styles.panelCard}>
      <h3 style={styles.panelTitle}>Activity Timeline</h3>
      <ActivityTimeline activityTimeline={activityTimeline} styles={styles} />
    </div>

    <div style={styles.panelCard}>
      <h3 style={styles.panelTitle}>Storage Analytics</h3>
      <StorageAnalytics storageData={storageData} styles={styles} />
    </div>

    <div style={styles.panelCard}>
      <h3 style={styles.panelTitle}>Quick Upload</h3>
      <QuickUpload
        styles={styles}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleFileUpload={handleFileUpload}
        uploadStatus={uploadStatus}
      />
    </div>
  </div>
);

export default RightPanel;
