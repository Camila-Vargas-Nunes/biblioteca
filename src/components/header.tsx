import Image from 'next/image';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Image
          src="/image/logoipsum-logo-header.svg"
          alt="Logo da empresa"
          width={150}
          height={50}
          className={styles.headerLogo}
        />
      </div>
    </header>
  );
}