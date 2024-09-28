import "./style/login.css";

export default function Login() {
  return (
    <div className="container-fluid flex flex-col md:flex-row LoginImage justify-between items-center">
      <div className="Logo h-1/2 md:h-full w-full md:w-[47.5vw] bg-green-0 text-center flex justify-center items-center">
        <img
          src="hrm-high-resolution-logo-white-transparent.ico"
          alt=""
          className=""
        />
      </div>
      <div className="bg-white h-1/2 md:h-full w-full md:w-[47.5vw] card rounded-l-3xl text-center font-martel">
        <h1 className="text-blue-950 text-5xl mt-20 ">Welcome!</h1>
        <p className="text-palette-4 text-2xl  ">Please login to continue</p>
        <div className="mt-24">
          <label htmlFor="email" className="text-lg  text-palette-3">
            Email Address
          </label>
          <div>
            <input
              type="email"
              name="email"
              id="loginEmailId"
              className="bg-palette-5 text-palette-2 w-1/2"
            />
          </div>
          <label htmlFor="password" className="text-palette-3 text-lg">
            Password
          </label>
          <div>
            <input
              type="password"
              name="email"
              id="loginPasswordId"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
