
const Footer = () => {
  return (
    <footer  className="dark:bg-gray-900 w-full bg-slate-200 w-ful border-t border-slate-400 dark:text-white sticky">
        <div className="flex flex-col   justify-between py-8 text-xl md:flex-row  items-center w-[80%] 2xl:w-[70%] m-auto ">
          <div className="text-center">
            <p className="mb-4 md:m-0">{new Date().getFullYear()} &copy; Todos los derechos reservados</p>
          </div>
          <div className="mt-4 md:m-0">Creado con <span>❤</span> por <a href="https://github.com/Lewno" target="_blank" rel="noreferrer" className=" underline">Lewno</a></div>
        </div>
    </footer>
  )
}

export default Footer