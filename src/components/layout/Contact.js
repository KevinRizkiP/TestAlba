import React from "react";

const Contact = () => {
  return (
    <div className="lg:max-w-7xl mx-auto items-center justify-center lg:mt-10 mt-4">
      <div className="w-full bg-yellow-300 rounded-xl py-10">
        <p>Is software important for your business</p>
        <h1 className="text-3xl mt-5">Build it with Albatech</h1>
        <button className="bg-transparent border border-black px-12 py-5 rounded-full font-bold mt-5">
          Consultation Now
        </button>
      </div>
      <div className="mt-10">
        <hr />
        <div className="flex flex-col lg:flex-row lg:gap-36 mt-10 mb-10 px-5 place-content-between w-full">
          <div className="text-left">
            <img src="/IMG/logo.png" alt="Logo" />
            <h1 className="mt-10">
              Albatech acts as a corporate partner to help digitiza their
              business to accelerate trends in remote work
            </h1>
            <img className="mt-10" src="/IMG/F_IG_Link.png" alt="Social-Logo" />
          </div>
          <div className="text-left mt-5">
            <p className="font-bold text-lg">Website</p>
            <p className="mt-5">About</p>
            <p className="mt-5">Service</p>
            <p className="mt-5">Portofolio</p>
            <p className="mt-5">Blog</p>
            <p className="mt-5">Career</p>
          </div>
          <div className="text-left mt-5">
            <p className="font-bold text-lg">Contact</p>
            <p className="mt-5">
              The Prominence Blok 38D No.25 JL. Jalur Sutera Barat, Alam Sutera,
              Kota Tanggerang. Banten 15143
            </p>
            <p className="mt-5">
              <span className="font-bold">P: </span>+62 81 1889 3383
            </p>
            <p className="mt-5">
              <span className="font-bold">E: </span>info@albatech.id
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
