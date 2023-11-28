import React from "react";
import { Wrapper } from "../wrapper";
import Roulette_Ph from "../../images/roulette.png";
import InteractiveMenu from "../menu";

export function MainSection() {
  return (
    <>
      <section className="bg-lightblue">
        <Wrapper>
          <div className="w-full flex justify-between py-10">
            <div className="relative w-5/12">
              <img src={Roulette_Ph} alt="" />
            </div>
            <div className="relative w-5/12 text-center">
              <h2>Про Наш Продукт</h2>
              <p className="py-6">
                Розміри одягу можуть бути заплутані. Різні бренди використовують
                унікальні виміри, а також різні шкали та одиниці виміру. Тому ми
                створили цей продукт, щоб допомогти вам розібратися у цьому. Ми
                зібрали таблиці розмірів та вимірювання від ваших улюблених
                брендів, все в одному місці.Наш продукт постійно розвивається.
                Ми постійно додаємо більше брендів до нашої бази даних розмірів,
                більше продуктів та більше модних та прилягаючих порад.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div className="w-full py-10">
            <h2 className="text-center">Який Розмір Ви Носите?</h2>
            <InteractiveMenu />
          </div>
        </Wrapper>
      </section>
    </>
  );
}
