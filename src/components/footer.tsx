import { Typography } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './footer.module.css';

const { Link } = Typography;

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image
            src="/image/logoipsum-footer.svg"
            alt="Logo da empresa"
            width={150}
            height={50}
            className={styles.companyLogo}
          />
        </div>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
          <div className={styles.footerSocial}>
            <Link href="https://www.facebook.com/"><FacebookOutlined /></Link>
            <Link href="https://x.com/"><TwitterOutlined /></Link>
            <Link href="https://www.instagram.com/"><InstagramOutlined /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}