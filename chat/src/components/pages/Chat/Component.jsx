import React from "react";
import styles from "./Component.module.css";
import Photo from "./Photo";
import SearchEngine from "../Search/Search";

const Component = () => {
  return (
    <div className={styles.component}>
      <div className={styles.part1}>
       
        <div className={styles.img1}>
          <Photo className={styles.img1} />
        </div>
        <div className={styles.description}>
          <p className={styles.light}>susan</p>
          <p className={styles.text}>hhfhdshfduihfguiosfsdf...</p>
        </div>
        <div className={styles.notifications}>
          <span className="badge text-bg-primary">4</span>
          🙋🏻‍♂️
        </div>
      </div>
    </div>
  );
};

export default Component;
