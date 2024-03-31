import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./landing-page1.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <header className={styles.landingPageInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <nav className={styles.collectionsMenuWrapper}>
            <nav className={styles.collectionsMenu}>
              <div className={styles.menuitemWrapper}>
                <div className={styles.menuitem}>MenuItem</div>
              </div>
              <div className={styles.collectionsWrapper}>
                <div className={styles.collections}>Collections</div>
              </div>
              <div className={styles.bestsellers}>Bestsellers</div>
              <div className={styles.dailywear}>Dailywear</div>
            </nav>
          </nav>
        </div>
      </header>
      <div className={styles.someCoolHeadingParent}>
        <h1 className={styles.someCoolHeading}>Some cool heading</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-31@2x.png"
            />
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default LandingPage;
