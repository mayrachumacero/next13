import styles from './styles.module.css';
const Footer = () => {
    return (
        
        <footer className={styles.footer}>
            <div className={styles.column}>
              
            </div>
            <table>

            <tr>
              <td><strong>Sistemap</strong></td>
              <td><strong>Conectate con nostros</strong></td>
              <td><img src='next.svg' alt=''/></td>
              <td><img src='vercel.svg' alt=''/></td>
              <td><img src='LogoSeminario.jpeg' alt=''/></td>
            </tr>
            <tr>
              <td>Home</td>
              <td>Facebook</td>
            </tr>
 
            <tr>
              <td>Post</td>
              <td>Twitter</td>
            </tr>
            <tr>
              <td>About</td>
              <td>TikTok</td>
            </tr>
            </table>
       </footer>
   );
}
export default Footer;
