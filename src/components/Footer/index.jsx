import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <a href="https://www.instagram.com/marymodaintimaa_/" target="_blank">
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
          </a>

          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5592992459040&text=Ol%C3%A1,%20vim%20do%20Instagram!%20Gostaria%20de%20realizar%20uma%20compra."
          >
            <li>
              <i className="fa-brands fa-whatsapp"></i>
            </li>
          </a>
          <a
            href="https://www.tiktok.com/@marymodaintimaa?lang=pt-BR"
            target="_blank"
          >
            <li>
              <i className="fa-brands fa-tiktok"></i>
            </li>
          </a>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
