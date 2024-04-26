import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Stats2 from "./Stats2";

const Billing = () => (
  <><div className="text-center mb-4">
    <p className="text-gray-400 mt-8 text-xl">Our Story</p>
    <h2 className="text-white font-bold text-6xl">Redefining safety on our roadways with innovation backed by experience</h2>


  </div>
  <section id="about_us" className={layout.sectionReverse}>

      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Industry-leading fleet <br className="sm:block hidden" />  &
        compliance management solutions
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Lytx®, we harness the power of video and data to enable fleets to improve safety, efficiency, and productivity. We're trusted by more than 4,800 fleets that log billions of miles worldwide each year, contributing to a vast and ever-growing database of driving data we use to refine the accuracy and effectiveness of our solutions. Our clients can realize significant returns on investment by lowering operating and insurance costs. Most of all, we strive to save lives—on our roads and in our communities, every day. We dream of a world where no commercial driver is ever the cause of a collision.

        </p>

        
      </div>
    </section>
    <Stats2 styles={`mt-10`}/></>
    
);

export default Billing;
