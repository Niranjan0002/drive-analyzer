import React from 'react';

const ActivityTimeline = ({ activityTimeline, styles }) => (
  <>
    {activityTimeline.map((item, index) => (
      <div key={item.id} style={styles.timelineItem}>
        <div style={{ ...styles.timelineDot, background: item.color }}></div>
        {index < activityTimeline.length - 1 && <div style={styles.timelineLine}></div>}
        <div style={styles.timelineContent}>
          <div style={styles.timelineAction}>{item.action}</div>
          <div style={styles.timelineFile}>{item.file}</div>
          <div style={styles.timelineTime}>{item.time}</div>
        </div>
      </div>
    ))}
  </>
);

export default ActivityTimeline;
