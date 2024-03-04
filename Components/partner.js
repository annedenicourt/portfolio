import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Partner() {
  const currentyear = new Date().getFullYear();
  return (
    <a
      href="https://www.prestanumerique.fr/detail/annedenicourtgmail-com/"
      target="_blank"
    >
      <div className="w-40 py-2">
        <div className="font_bis font-bold text-center text-xs">Partenaire</div>
        <div className="mx-2">
          <Image
            //className={`${styles.image}`}
            src="/images/logo-prestanumerique.svg"
            alt="logo prestanumerique"
            width={500}
            height={230}
            layout="responsive"
            priority="true"
          />
        </div>
      </div>
    </a>
  );
}
