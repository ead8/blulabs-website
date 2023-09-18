import styles, { layout } from "../style";
import { services } from "../constants";

const Services = () => (
 <section id="services">
  {
    services.map(({icon,title,content})=>(
      <div id="title" className={layout.sectionReverse} key={title}>
      <div className={layout.sectionImgReverse}>
        <img src={icon} alt="Services" className="w-[100%] h-[80%] relative z-[5]" />
  
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
  
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {title}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         {content}
        </p>
  
      </div>
    </div>
    ))
  }
 </section>
);

export default Services;
