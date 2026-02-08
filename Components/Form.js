import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { BsEnvelope } from "react-icons/bs";

export default function Form() {
  const captchaRef = useRef(null);
  const [captchaValid, setCaptchaValid] = useState(false);

  // Rendu dynamique du captcha
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        window.grecaptcha &&
        captchaRef.current &&
        !captchaRef.current.dataset.rendered
      ) {
        window.grecaptcha.render(captchaRef.current, {
          sitekey: "6LcRje8rAAAAABkuXhFzVW8qu228sMScYdEXqWyq",
          callback: () => setCaptchaValid(true), // appelé quand captcha coché
        });
        captchaRef.current.dataset.rendered = "true"; // pour ne pas renderer deux fois
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    const token = window.grecaptcha.getResponse();

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Captcha manquant",
        text: "Merci de valider le reCAPTCHA",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_if9q8wq",
        "contact_form",
        e.target,
        "user_BwL24v0D7KuEvBfg9MBkR",
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Super !",
            text: "Votre message a bien été envoyé",
          });
          document.getElementById("contact_form").reset();
          window.grecaptcha.reset();
          setCaptchaValid(false); // reset état du bouton
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Le message n’a pas pu être envoyé",
          });
        },
      );
  }

  return (
    <form
      id="contact_form"
      className="w-full md:w-4/6 mx-auto text-center"
      onSubmit={sendEmail}
    >
      <input type="hidden" name="contact_number" />
      <div className="flex flex-col items-center text-xl">
        <input
          className="w-full mt-6 p-1 border rounded-md"
          type="text"
          name="user_name"
          placeholder="Votre nom"
          required
        />
        <input
          className="w-full mt-6 p-1 border rounded-md"
          type="email"
          name="user_email"
          placeholder="Votre adresse mail"
          required
        />
      </div>

      <div className="mt-6 text-xl">
        <textarea
          className="w-full p-1 border rounded-md"
          rows="5"
          name="message"
          placeholder="Votre message"
          required
        />
      </div>

      {/* reCAPTCHA v2 rendu dynamiquement */}
      <div className="mt-4" ref={captchaRef}></div>

      <div className="flex justify-center">
        <button
          className="my-3 p-2 flex justify-center items-center font-bold border border-indigo-900 rounded-md disabled:opacity-50"
          type="submit"
          disabled={!captchaValid} // bouton bloqué tant que captcha non validé
        >
          <BsEnvelope className="mr-2" /> ENVOYER
        </button>
      </div>
    </form>
  );
}
