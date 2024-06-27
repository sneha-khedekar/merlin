import React, { useRef, useEffect } from "react";
import styles from "@/styles/NavigationButtons.module.css";

const NavigationButtons = ({ swiper }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <>
      <div ref={prevRef} className={styles.customPrevBtn}>
        Prev
      </div>
      <div ref={nextRef} className={styles.customNextBtn}>
        Next
      </div>
    </>
  );
};

export default NavigationButtons;
