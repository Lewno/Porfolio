

const Contact = () => {
  return (
    <section className="w-full m-auto text-white mb-10">
        <div className="w-[80%] 2xl:w-[70%] m-auto flex flex-col">
            <h2 className="text-center text-5xl font-bold mb-8">Contacto</h2>
            <div className="flex  items-center justify-center">
              <div className="w-full md:w-2/4 p-6 rounded-lg justify-center items-center bg-gray-900">
                  <form className="w-full flex flex-col gap-8">
                      <label className="flex flex-col" >
                          <span className="text-white mb-4">Nombre:</span>
                          <input 
                          type="text" 
                          name="name"
                          placeholder="¿Cuál es tu nombre?"
                          className=" bg-gray-800 py-4 px-4 text-white rounded-lg outline-none border-none"    
                          />
                      </label>
                      <label className="flex flex-col" >
                          <span className="text-white mb-4">Email:</span>
                          <input 
                          type="email" 
                          name="email"
                          placeholder="¿Cuál es tu email?"
                          className=" bg-gray-800 py-4 px-4 text-white rounded-lg outline-none border-none"    
                          />
                      </label>
                      <label className="flex flex-col" >
                          <span className="text-white mb-4">Mensaje:</span>
                          <textarea
                          rows="7" 
                          name="message"
                          
                          placeholder="Coloca tu mensaje..."
                          className=" bg-gray-800 py-4 px-4 text-white rounded-lg outline-none border-none resize-none"    
                          />
                      </label>
                  </form>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact