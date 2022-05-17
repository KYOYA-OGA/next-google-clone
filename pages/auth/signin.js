import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

function Signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-29 lg:mt-40">
        {Object.values(providers).map((provider) => (
          <div className="grid place-items-center" key={provider.name}>
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
              alt="google logo"
              className="w-52 object-cover"
            />
            <p className="italic my-10 text-center">
              This website is created for learning purposes🙇
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
