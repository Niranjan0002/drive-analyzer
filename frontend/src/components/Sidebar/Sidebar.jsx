import React from 'react';

const Sidebar = ({ styles, navigationItems, categoryItems, activeNavItem, handleNavClick }) => (
  <div style={styles.sidebar}>
    <div style={styles.sidebarSection}>
      <h3 style={styles.sectionTitle}>Navigation</h3>
      {navigationItems.map((item) => (
        <div
          key={item.id}
          onClick={() => handleNavClick(item.name)}
          style={{
            ...styles.navItem,
            ...(activeNavItem === item.name ? styles.navItemActive : {})
          }}
          onMouseEnter={(e) => {
            if (activeNavItem !== item.name) e.target.style.background = '#374151';
          }}
          onMouseLeave={(e) => {
            if (activeNavItem !== item.name) e.target.style.background = 'transparent';
          }}
        >
          <div style={{ ...styles.navIcon, backgroundColor: item.color }}>{item.icon}</div>
          <span style={styles.navText}>{item.name}</span>
        </div>
      ))}
    </div>

    <div style={styles.sidebarSection}>
      <h3 style={styles.sectionTitle}>Categories</h3>
      {categoryItems.map((item) => (
        <div
          key={item.id}
          style={styles.navItem}
          onMouseEnter={(e) => e.target.style.background = '#374151'}
          onMouseLeave={(e) => e.target.style.background = 'transparent'}
        >
          <div style={{ ...styles.navIcon, backgroundColor: item.color }}>{item.icon}</div>
          <span style={styles.navText}>{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
