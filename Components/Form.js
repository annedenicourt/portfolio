import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { BsEnvelope } from "react-icons/bs";

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_if9q8wq",
        "contact_form",
        e.target,
        "user_BwL24v0D7KuEvBfg9MBkR"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Super !",
            text: "Votre message a bien été envoyé",
          });
          document.getElementById("contact_form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form
      className="w-full md:w-4/6 mx-auto text-center"
      id="contact_form"
      onSubmit={sendEmail}
    >
      <input type="hidden" name="contact_number" />
      <div className="flex flex-col items-center text-xl">
        <label htmlFor="name"></label>
        <input
          className="w-full mt-6 p-1 border rounded-md"
          type="text"
          name="user_name"
          id="name"
          placeholder="Votre nom"
          required
        />
        <label htmlFor="email"></label>
        <input
          className="w-full mt-6 p-1 border rounded-md"
          type="email"
          name="user_email"
          id="email"
          placeholder="Votre adresse mail"
          required
        />
      </div>
      <div className="mt-6 text-xl">
        <label htmlFor="message"></label>
        <textarea
          className="w-full p-1 border rounded-md"
          rows="5"
          name="message"
          id="message"
          placeholder="Votre message"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          className="my-3 p-2 flex justify-center items-center font-bold border border-indigo-900 rounded-md"
          type="submit"
        >
          <BsEnvelope className="mr-2" /> ENVOYER
        </button>
      </div>
    </form>
  );
}
