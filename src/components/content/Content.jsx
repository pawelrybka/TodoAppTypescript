
import styles from './Content.module.css';

const Content = ({ children }) => {
	return <main className={styles.root}>{children}</main>;
};

export default Content
