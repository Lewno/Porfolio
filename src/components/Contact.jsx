import {useRef, useState } from "react"

import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [send, setSend] = useState({
    user_name:"",
    user_email:"",
    message:"",
  })  


  const sendEmail = (event) => {
    event.preventDefault();
    setSend({
        user_name:"",
        user_email:"",
        message:"",
      })
    emailjs.sendForm('service_ljrhbl3', 'template_27sb788', form.current, 'G1uiLuU2S7NfbH5Em')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleChange = (event) =>{
    setSend({
        ...send,
        [event.target.name] : event.target.value
    })
}

  return (
    <section className="w-full m-auto text-black dark:text-white mb-10 pt-20" id="contactame">
        <div className="w-[80%] 2xl:w-[70%] m-auto flex flex-col">
            <h2 className="text-center text-5xl font-bold mb-8">Contacto</h2>
            <div className="flex  items-center justify-center">
              <div className="w-full md:w-2/4 p-6 rounded-lg justify-center bg-slate-200 items-center dark:bg-gray-900 border-2  border-violet-900">
                  <form 
                  ref={form} 
                  onSubmit={sendEmail}
                  className="w-full flex flex-col gap-8 "
                  >
                      <label className="flex flex-col" >
                          <span className="dark:text-white mb-4">Nombre:</span>
                          <input 
                          type="text" 
                          name="user_name"
                          value={send.user_name} 
                          onChange={handleChange} 
                          placeholder="¿Cuál es tu nombre?"
                          className=" dark:bg-gray-800 border-2 border-violet-900 py-4 px-4 dark:text-white rounded-lg outline-none "    
                          />
                      </label>
                      <label className="flex flex-col" >
                          <span className="dark:text-white mb-4">Email:</span>
                          <input 
                          type="email" 
                          name="user_email"
                          value={send.user_email} 
                          onChange={handleChange} 
                          placeholder="¿Cuál es tu email?"
                          className=" dark:bg-gray-800 border-2 border-violet-900 py-4 px-4 dark:text-white rounded-lg outline-none "    
                          />
                      </label>
                      <label className="flex flex-col" >
                          <span className="dark:text-white mb-4">Mensaje:</span>
                          <textarea
                          rows="7" 
                          name="message"
                          value={send.message}  
                          onChange={handleChange}
                          placeholder="Coloca tu mensaje..."
                          className=" dark:bg-gray-800 border-2 border-violet-900 py-4 px-4 dark:text-white rounded-lg outline-none  resize-none"    
                          />
                      </label>
                      <input className=" text-white cursor-pointer w-40 p-3 m-auto rounded-lg bg-violet-600 hover:shadow-lg hover:shadow-violet-600/50 duration-300 text-xl" type="submit" value="ENVIAR" />
                  </form>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact