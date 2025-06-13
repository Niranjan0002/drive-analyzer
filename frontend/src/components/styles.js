export const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #7c3aed, #5b21b6, #6b46c1)',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  mainWrapper: {
    background: '#111827',
    borderRadius: '24px',
    overflow: 'hidden',
    height: 'calc(100vh - 40px)',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    background: 'linear-gradient(135deg, #f87171, #fbbf24)',
    padding: '24px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitle: {
    color: 'white',
    fontSize: '32px',
    fontWeight: '800',
    margin: 0
  },
  searchInput: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50px',
    padding: '16px 24px',
    width: '384px',
    color: 'white',
    fontSize: '16px',
    outline: 'none'
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  iconButton: {
    width: '44px',
    height: '44px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    fontSize: '16px'
  },
  profileIcon: {
    width: '44px',
    height: '44px',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '50%'
  },
  mainContent: {
    flex: 1,
    display: 'flex'
  },
  sidebar: {
    width: '280px',
    background: '#1f2937',
    padding: '24px'
  },
  sidebarSection: {
    marginBottom: '32px'
  },
  sectionTitle: {
    color: '#9ca3af',
    fontSize: '12px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    letterSpacing: '1px',
    fontWeight: '600'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    marginBottom: '8px',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    position: 'relative',
    overflow: 'hidden'
  },
  navItemActive: {
    background: 'linear-gradient(135deg, #f87171, #fbbf24)'
  },
  navIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    marginRight: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px'
  },
  navText: {
    color: 'white',
    fontWeight: '500',
    fontSize: '16px'
  },
  contentArea: {
    flex: 1,
    background: '#111827',
    padding: '32px',
    overflowY: 'auto'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '32px'
  },
  statCard: {
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  statCardDecoration: {
    position: 'absolute',
    top: '-50%',
    right: '-50%',
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    transform: 'rotate(45deg)'
  },
  statContent: {
    position: 'relative',
    zIndex: 10
  },
  statNumber: {
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px'
  },
  sectionHeader: {
    color: 'white',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px'
  },
  filesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  fileCard: {
    background: '#1f2937',
    borderRadius: '16px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.4s',
    position: 'relative',
    overflow: 'hidden',
    opacity: 0,
    transform: 'translateY(30px)',
    animation: 'fadeInUp 0.6s ease forwards'
  },
  fileCardTopBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #f87171, #fbbf24, #0891b2, #7c3aed)'
  },
  fileIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    marginBottom: '20px',
    position: 'relative'
  },
  fileIconInner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '28px',
    height: '28px',
    background: 'white',
    borderRadius: '4px'
  },
  fileName: {
    color: 'white',
    fontWeight: '600',
    marginBottom: '8px',
    fontSize: '16px'
  },
  fileDetails: {
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '4px'
  },
  fileModified: {
    color: '#6b7280',
    fontSize: '12px'
  },
  rightPanel: {
    width: '320px',
    background: '#1f2937',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  panelCard: {
    background: '#111827',
    borderRadius: '16px',
    padding: '20px'
  },
  panelTitle: {
    color: 'white',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '20px'
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    marginBottom: '20px'
  },
  timelineDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '16px',
    marginTop: '4px',
    position: 'relative',
    zIndex: 10
  },
  timelineLine: {
    position: 'absolute',
    left: '6px',
    top: '16px',
    bottom: 0,
    width: '2px',
    background: '#374151'
  },
  timelineContent: {
    flex: 1
  },
  timelineAction: {
    color: 'white',
    fontWeight: '600',
    fontSize: '14px',
    marginBottom: '2px'
  },
  timelineFile: {
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '4px'
  },
  timelineTime: {
    color: '#6b7280',
    fontSize: '12px'
  },
  storageItem: {
    marginBottom: '20px'
  },
  storageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  storageType: {
    color: 'white',
    fontSize: '14px'
  },
  storageSize: {
    color: 'white',
    fontSize: '14px'
  },
  progressBar: {
    background: '#374151',
    height: '6px',
    borderRadius: '3px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.5s'
  },
  uploadArea: {
    border: '2px dashed #4b5563',
    borderRadius: '16px',
    padding: '40px',
    textAlign: 'center',
    transition: 'all 0.3s',
    cursor: 'pointer'
  },
  uploadIcon: {
    fontSize: '32px',
    marginBottom: '12px'
  },
  uploadText: {
    color: 'white',
    fontWeight: '600',
    marginBottom: '4px'
  },
  uploadSubtext: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  uploadSuccess: {
    color: '#4ade80',
    fontWeight: '600'
  }
};
