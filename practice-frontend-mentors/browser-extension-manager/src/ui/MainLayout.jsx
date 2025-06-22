import styles from './MainLayout.module.css'

function MainLayout({ children }) {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
}

export default MainLayout;