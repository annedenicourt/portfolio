import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <>
      <div className="mx-0 mt-5 pb-5 text-center">
        <div className="w-full md:w-4/5 mx-auto mb-2">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-around">
            <div className="">
              Copyright@ {currentyear} | Tous droits réservés
            </div>
            <div className="w-1/2 md:w-1/4 mx-auto">
              <Image
                className={`${styles.image}`}
                src="/images/groupe.png"
                alt="illustration groupe travail"
                width={1200}
                height={681}
                layout="responsive"
                priority="true"
              />
            </div>

            <div className="">Site réalisé avec REACT et NEXT.JS</div>
          </div>
        </div>
      </div>
    </>
  );
}
