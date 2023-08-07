import logo from "../assets/logo.svg";
const Login = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <div
        className="shadow-[0px_0px_12px_2px_#444] flex flex-col 
      md:flex-row md:justify-center md:items-center
      max-w-[60rem] w-[90%] m-auto h-[90%] min-h-[30rem] gap-4"
      >
        <section
          className="
          w-full h-[50%]
        md:w-[50%] max-md:bg-[#6cbe9c]
        flex justify-center items-center "
        >
          <picture>
            <img src={logo} className="max-w-[10rem] rounded-full" alt="" />
          </picture>
        </section>
        <section className="w-[50%] m-auto flex justify-center items-center">
          <form action="" className="flex flex-col md:w-[60%] gap-3">
            <label htmlFor="">
              <p>Nombre :</p>
              <input
                type="text"
                className="w-full p-1 bg-white
                 text-black outline-none rounded-sm max-md:border-b"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              <p>Contraseña :</p>
              <input
                type="password"
                className="w-full p-1 bg-white
                 text-black outline-none rounded-sm max-md:border-b"
                name=""
                id=""
              />
            </label>
            <label htmlFor="" className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Guardar nombre</p>
            </label>
            <input
              type="submit"
              className="text-white bg-blue-950 p-1 rounded-sm"
            />
          </form>
        </section>
      </div>
    </div>
  );
};
export default Login;
