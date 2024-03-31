import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <section className={styles.landingPageInner}>
      <div className={styles.frameParent}>
        <FrameComponent3 />
        <FrameComponent3 propWidth="162px" propPadding="unset" />
        <FrameComponent3 propWidth="162px" propPadding="unset" />
      </div>
    </section>
  );
};

export default FrameComponent;
