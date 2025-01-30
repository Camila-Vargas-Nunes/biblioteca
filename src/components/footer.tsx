import { Typography } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Link } = Typography;

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./image/logoipsum-footer.svg" alt="Logo da empresa" className="company-logo" />
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-links" style={{ color: "#FFFFFF" }}>
            <Link style={{ color: "#FFFFFF" }} href="#">Terms & Conditions</Link>
            <Link style={{ color: "#FFFFFF" }} href="#">Privacy Policy</Link>
          </div>
          <div className="footer-social">
            <Link style={{ color: "#FFFFFF" }} href="#"><FacebookOutlined /></Link>
            <Link style={{ color: "#FFFFFF" }} href="#"><TwitterOutlined /></Link>
            <Link style={{ color: "#FFFFFF" }} href="#"><InstagramOutlined /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}