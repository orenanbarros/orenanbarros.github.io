import React, { useState , FormEvent} from 'react'
import emailjs from '@emailjs/browser'
import Modal from './Modal';





function ContactForm() {
    
    const [message , setMessage] = useState("")
    const [closeModal, setCloseModal] = useState(false)
    
    const sendEmail = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();     

        emailjs.sendForm('service_au5rcbh','template_jt1g49u',e.currentTarget,'qz2fHNuRySDsjmk0b')
        .then(function(response) {
            //console.log('SUCCESS!', response.status, response.text);
            setMessage("Obrigado pelo seu contato !")
            setCloseModal(!closeModal)
            setTimeout((e:FormEvent<HTMLFormElement>) => {            
                setCloseModal(false)
            }, 1500);
            e.currentTarget.reset()
            
        }, function(error) {
            //console.log('FAILED...', error);
            setMessage("Opss, houve algum erro ao enviar sua mensagem")
            setCloseModal(!closeModal)
        })
        
    }
    
    

    return (
        <div className='formEmail'>
          
            <form onSubmit={sendEmail}  className='flex flex-col'>
                <input id="name" type="text" name="namefrom" placeholder="Digite seu nome" required/>
                <input id="email" type="email" name="email_from" placeholder="Digite seu e-mail" required/>
                <textarea id="message" name="message" placeholder="Digite sua mensagem" rows={4} required/>
                <button type="submit" > Enviar </button>
            </form>
            <Modal text={message} buttonOk={true} close={closeModal} setCloseModal={setCloseModal}/>
            
        </div>
    )
}

export default ContactForm