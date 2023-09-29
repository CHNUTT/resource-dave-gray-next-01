import styles from './styles.module.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default RootLayout;
