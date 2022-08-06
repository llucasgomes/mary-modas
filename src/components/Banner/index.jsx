import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <h2>
        Toda mulher merece uma lingerie que combine com sua personalidade.
      </h2>
      <p>
        Não deixe a sua auto-estima na mão de outras pessoas. Coloque uma bela
        lingerie e se sinta maravilhosa!
      </p>
    </section>
  );
}

export default Banner;
