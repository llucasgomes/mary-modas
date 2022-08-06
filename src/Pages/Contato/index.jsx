import Map from "../../components/Map";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <section className={styles.banner_contato}>
        <div class="mapa">
          <br />
          <Map />
        </div>
        <div class="formulario">
          <p>
            Mary Moda Intima nasceu do sonho de duas <strong>amigas</strong> em
            terem uma marca juntas, algo relacionado à moda. Uma marca que
            proporcione conforto, inclusão e possa atender a todos os gostos e
            públicos. Devido ao momento em que estamos vivendo aonde o home
            office têm se tornado o meio mais seguro para se trabalhar, veio a
            ideia de fabricarmos
            <strong>lingeries elaboradas</strong> de forma a facilitar a
            transição escritório-casa com elegância e sofisticação
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
