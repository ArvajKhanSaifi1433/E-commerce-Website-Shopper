import React from "react";

function Login() {
  return (
    <section className=" bg-gradient-to-b from-fuchsia-100 to-white h-full py-20">
      <div className="container mx-auto flex justify-center items-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white p-8 flex flex-col gap-3 border"
          autoComplete="off"
        >
          <h1 className="font-bold tracking-wider text-2xl mb-4">Sing Up</h1>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              className="border border-slate-400 rounded p-2 text-sm  focus:outline-none"
              placeholder="Please Enter Your Name"
              required
              minLength="4"
            />
            <input
              className="border border-slate-400 rounded p-2 text-sm focus:outline-none"
              type="email"
              placeholder="Please Enter Your Email"
              required
            />
            <input
              className="border border-slate-400 rounded p-2 text-sm focus:outline-none"
              type="password"
              placeholder="Please Enter Your Password"
              required
              minLength="4"
              maxLength="15"
            />
          </div>
          <input
            type="submit"
            value="Continue"
            className="font-bold  bg-red-500 py-3 text-white rounded active:bg-red-600 mt-4"
          />
          <p className="mt-2  font-semibold">
            Already have an account?&nbsp;{" "}
            <span className="font-bold text-red-500">Login here</span>
          </p>
          <div className="flex gap-3 flex-nowrap">
            <input type="checkbox" required className="self-start mt-1" />
            <p className="text-sm">
              By continuing, i agree to the terms of use & privacy policy.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
