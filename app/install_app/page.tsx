import React from "react";
import Image from "next/image";

const InstallApp = () => {
  return (
    <main>
      {/* Header */}
      <header className="w-full px-11 py-6 absolute top-0 left-0 z-10">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="object-contain"
        />
      </header>

      <section className="w-full flex flex-col justify-center bg-[url('/assets/background2.png')] bg-cover bg-bottom bg-no-repeat min-h-screen pt-32">
        {/* Konten Utama */}
        <div className="w-full flex flex-row px-11 justify-between items-center">
          {/* Kiri: Teks */}
          <div className="flex flex-col max-w-[38rem]">
            <h1 className="text-7xl font-bold text-white leading-tight">
              <span className="text-green-500">SMK</span> - Madinatul Quran
            </h1>
            <p className="text-7xl font-bold text-white mt-4">Application</p>

            <p className="text-2xl font-medium text-white mt-8">
              "Aplikasi ini dibuat khusus untuk PPDB SMK Madinatul Quran – Supaya mempermudah pendaftaran dan kenyamanan bersama, cepat, dan super praktis!"
            </p>
          </div>

          {/* Kanan: Gambar HP */}
          <div className="shrink-0">
            <Image
              src={"/assets/Phone.png"}
              alt="hp"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Bawah: Tombol & QR */}
        <div className="w-full flex flex-row px-11 justify-between items-center mt-12 mb-14">
          <button className="text-white bg-green-500 hover:bg-white hover:text-green-500 transition duration-200 font-medium rounded-xl px-5 py-3 w-[32rem] text-2xl shadow-2xl">
            Install
          </button>

          <div className="flex flex-col gap-2 items-end">
            <p className="text-white text-lg">Scan di sini :</p>
            <Image
              src={"/assets/QR.png"}
              alt="QR Code"
              width={150}
              height={150}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default InstallApp;

// tes