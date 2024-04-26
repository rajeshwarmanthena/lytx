import { stats2 } from "../constants";
import styles from "../style";

const Stats2 = () => (
  <><div className="text-center mb-4">
    <h2 className="text-white font-bold text-6xl">Improving safety on our roadways</h2>
    
    <p className="text-gray-400 mt-8 text-xl">Our passion for safety and saving lives drives incredible results.</p>
  </div><section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats2.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section></>
);

export default Stats2;
