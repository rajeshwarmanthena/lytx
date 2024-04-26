import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      We're proud to protect more than
<br className="sm:block hidden" /> 2.1 million drivers
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At Lytx®, we are'nt successful until you are. We celebrate each milestone and every step our customers take to improve safety, increase operational efficiency, and maintain compliance.
      Our amazing customers share our passion for improving safety on our roadways.

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
