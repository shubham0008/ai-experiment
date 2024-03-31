import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  propWidth,
  propPadding,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.icons8Sedan1001Wrapper}>
        <img
          className={styles.icons8Sedan1001}
          loading="lazy"
          alt=""
          src="/icons8sedan100-1@2x.png"
        />
      </div>
      <div className={styles.someText}>{`Some text `}</div>
    </div>
  );
};

export default FrameComponent3;
