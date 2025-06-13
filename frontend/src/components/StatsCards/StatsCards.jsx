import React from 'react';

const StatsCards = ({ statsData, styles }) => (
  <div style={styles.statsGrid}>
    {statsData.map((stat, index) => (
      <div key={index} style={{ ...styles.statCard, background: stat.gradient }}>
        <div style={styles.statCardDecoration}></div>
        <div style={styles.statContent}>
          <div style={styles.statNumber}>{stat.number}</div>
          <div style={styles.statLabel}>{stat.label}</div>
        </div>
      </div>
    ))}
  </div>
);

export default StatsCards;
