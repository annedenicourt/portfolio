import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { allSteps } from "../datas/dataList";

export default function Steps() {
  const [step, setStep] = useState(0);
  const ref = useRef(null);
  const numberOfSteps = [1, 2, 3, 4, 5];

  useEffect(() => {
    handleProgressBar(step);
  }, [step]);

  /* useEffect(() => {
    const interval = setInterval(() => {
      if (step <= 3) {
        setStep(step + 1);
      } else {
        setStep(0);
      }
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval);
  }, [step]); */

  const handleProgressBar = () => {
    const progress = (step / 4) * 100;
    const progressBar = ref.current;
    progressBar.style.width = `${progress}%`;
    progressBar.style.transition = `width 0.7s ease-in-out`;
  };

  return (
    <div className="w-11/12 md:w-11/12 lg:w-3/4 mx-auto">
      <div>
        <div className="h-0.5 -mb-4 md:-mb-6 bg-gray-300">
          <span ref={ref} className="h-0.5 block bg-orange-300"></span>
        </div>
        <div className="flex justify-between">
          {numberOfSteps?.map((stepItem, index) => {
            return (
              <div key={`step-${index}`}>
                <div
                  className={`p-3 w-6 h-6 md:w-10 md:h-10 flex items-center justify-center text-lg md:text-2xl border rounded-full shadow-lg cursor-pointer ${
                    step >= index ? "blue-bg text-white" : "bg-white"
                  } hover:bg-sky-950 hover:text-white`}
                  onClick={() => setStep(index)}
                >
                  {stepItem}
                </div>
                {step === index && (
                  <div className="flex justify-center">
                    <IoMdArrowDropdown size={30} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="w-full h-72 md:h-60 mx-auto flex border rounded-lg shadow-lg">
          <div className="w-1/3 hidden md:flex flex-col justify-center">
            <div className="w-4/5 mx-auto">
              <Image
                className={`${styles.image}`}
                src={allSteps[step].image}
                alt={`illustration ${allSteps[step].name}`}
                width={500}
                height={230}
                layout="responsive"
                priority="true"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 m-0 md:m-4 pl-4 flex flex-col justify-center text-left border-0 md:border-l">
            <div
              className={`mb-6 text-xl md:text-2xl font-bold font_bis uppercase`}
            >
              {allSteps[step]?.name}
            </div>
            <div className="font_bis text-base md:text-lg font-light">
              {allSteps[step]?.content}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center text-xl">
        <div
          className={`mx-8 flex items-center ${
            step >= 1 ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => {
            if (step >= 1) {
              setStep(step - 1);
            }
          }}
        >
          <BsChevronLeft />
          <div className="text-sm md:text-base">Étape précédente</div>
        </div>
        <div
          className={`mx-8 flex items-center ${
            step <= 3 ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => {
            if (step <= 3) {
              setStep(step + 1);
            }
          }}
        >
          <div className="text-sm md:text-base">Étape suivante</div>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}
