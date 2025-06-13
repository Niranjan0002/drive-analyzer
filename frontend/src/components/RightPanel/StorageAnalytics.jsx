import React from 'react';

const StorageAnalytics = ({ storageData, styles }) => (
  <>
    {storageData.map((storage, index) => (
      <div key={index} style={styles.storageItem}>
        <div style={styles.storageHeader}>
          <span style={styles.storageType}>{storage.type}</span>
          <span style={styles.storageSize}>{storage.size}</span>
        </div>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${storage.percentage}%`,
              background: storage.color
            }}
          ></div>
        </div>
      </div>
    ))}
  </>
);

export default StorageAnalytics;
