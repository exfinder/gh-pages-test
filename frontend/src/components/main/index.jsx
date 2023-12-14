import React from "react";
import { Wrapper } from "../wrapper";
import Roulette_Ph from "../../images/roulette.png";
import InteractiveMenu from "../menu";
import { Button } from "../button";
import { CalcSection } from "../calc";

export function MainSection() {
  return (
    <>
      <section className="bg-lightblue">
        <Wrapper>
          <div className="w-full flex sm:flex-col justify-between py-10">
            <div className="w-5/12 sm:w-full flex items-center sm:-mb-12">
              <img
                className="mx-auto sm:w-[300px] mr-0"
                src={Roulette_Ph}
                alt=""
              />
            </div>
            <div className="w-5/12 sm:w-9/12 text-center">
              <h2 className="sm:text-sm-h text-base-h">Про Наш Продукт</h2>
              <p className="py-6 sm:text-sm-p text-base-p">
                Ми створили продукт, щоб допомогти вам з розмірами одягу. У нас
                є таблиці розмірів та вимірювань від різних брендів, які
                постійно оновлюються. Ми додаємо нові бренди, продукти та модні
                поради, щоб усе було зручно та зрозуміло
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div className="w-full py-10">
            <h2 className="text-center sm:text-sm-h text-base-h">
              Який Розмір Ви Носите?
            </h2>
            <InteractiveMenu />
          </div>
        </Wrapper>
      </section>
      <section className="bg-darkgrey flex pb-16">
        <Wrapper>
          <CalcSection>
            <h2 className="text-center sm:text-sm-h text-base-h">
              Калькулятор розмірів
            </h2>
          </CalcSection>
        </Wrapper>
      </section>
    </>
  );
}
