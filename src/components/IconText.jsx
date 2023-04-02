import {HiCalculator, HiClipboardList} from 'react-icons/hi';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  
  icon: {
    marginRight: '10px',
  },

  title: {
    marginLeft: '0.25rem',
    fontSize: '1.2rem',
    fontWeight: '500',
    color: 'var(--dark-blue)',
  }
};

const IconText = ({ text, order }) => {
  return (
    <div style={styles.container}>
      {order ? <HiClipboardList size={30} color="var(--dark-blue)"/> : <HiCalculator size={30} color="var(--dark-blue)"/>}
      <span style={styles.title}>{text}</span>
    </div>
  );
};

export default IconText;