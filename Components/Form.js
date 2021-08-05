import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

export default function Form() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_if9q8wq', 'contact_form', e.target, 'user_BwL24v0D7KuEvBfg9MBkR')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon: 'success',
                title: 'Super !',
                text: 'Votre message a bien été envoyé',
              })
              document.getElementById('contact_form').reset()

          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <form className="text-center rounded" id="contact_form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="">
                <label htmlFor="name"></label>
                <input className="form-control" type="text" name="user_name" id="name" placeholder="Votre nom" required />
                <label htmlFor="email"></label>
                <input className="form-control" type="email" name="user_email" id="email" placeholder="Votre adresse mail" required />
            </div>
            <div>
                <label htmlFor="message"></label>
                <textarea className="form-control" rows="5" name="message" id="message" placeholder="Votre message" required />
            </div>
            <button className='btn btn-outline-dark mt-3 mb-3 fw-bold' type="submit"><i className="bi bi-envelope-fill"></i> ENVOYER</button>
        </form>       
  )
}
