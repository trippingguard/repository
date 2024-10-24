const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mb-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-lg font-medium">
            Login using credentials from an Administrator
          </h3>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-5">
            <div>
              <label htmlFor="email" className="block font-medium leading-6">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-3 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block font-medium leading-6">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-3 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="font-semibold text-sky-500 hover:underline hover:underline-offset-4"
              >
                Forgot password?
              </a>
              <a
                href="#"
                className="font-semibold text-sky-500 hover:underline hover:underline-offset-4"
              >
                Don't have account?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-500 p-3 font-semibold leading-6 text-white shadow-sm hover:bg-orange-400"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
