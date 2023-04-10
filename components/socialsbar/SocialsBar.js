import {  FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
function SocialsBar() {
  return (
    <section className={Styles.socialsBar}>
    {/* <a
//         href="https://www.facebook.com/hnccbits/"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <FaFacebook className={Styles.socialsBarIcons} size={ICON_SIZE} />
//       </a> */}
      <a
        href="https://www.instagram.com/code.hives/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a href="https://github.com/code22hives" target="_blank" rel="noreferrer">
        <FaGithub className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="https://www.linkedin.com/in/code-hives-gecp-0830a9250/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
