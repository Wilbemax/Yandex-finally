"use client";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Card } from "../Card/Card";
import Styles from "./CardsSlider.module.css";
import Link from "next/link";

export const CardsSlider = (props) => {
  useEffect(() => {
    const options = {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 10,
      centerSlides: true,
      autoplay: {
        enabled: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        enabled: true,
        clickable: true,
      },
      breakpoints: {
        450: {
          loop: true,
          spaceBetween: 20,
          slidesPerView: "auto",
          centerSlides: true,
          speed: 8000,
          disableOnInteraction: false,
          autoplay: {
            enabled: true,
            delay: 0,
          },
          pagination: {
            enabled: false,
          },
        },
      },

      modules: [Autoplay, Pagination],
    };

    const swiper = new Swiper(".swiper", options);
  }, []);
  return (
    <>
      <div className={`swiper ${Styles["slider"]}`}>
        <ul className={`swiper-wrapper ${Styles["slider-wrapper"]}`}>
          {props.data.map((item, i) => {
            return (
              <li className={`swiper-slide ${Styles["slide"]}`} key={i}>
                <Link href={`/games/${item.id}`}>
                  <Card {...item} />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={`swiper-pagination ${Styles["pagination"]}`}></div>
      </div>
    </>
  );
};