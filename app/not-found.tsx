import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-200 px-6 text-center select-none">
      
      <div className="mb-10">
        <Image
          src="/assets/logo-smk.png"
          alt="SMK Madinatul Quran"
          width={120}
          height={120}
          className="object-contain rounded-full shadow-lg"
          priority
        />
      </div>

      <h1 className="text-[10rem] font-extrabold text-green-800 mb-6 animate-pulse drop-shadow-md">
        404
      </h1>

      <p className="text-2xl text-green-900 max-w-lg mb-8 leading-relaxed font-medium">
        Maaf, halaman yang kamu cari tidak ditemukan.
        <br />
        Mungkin alamatnya salah atau halaman sudah dipindahkan.
      </p>

      <a
        href="/"
        className="inline-flex items-center gap-3 px-8 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-400"
        aria-label="Kembali ke Beranda"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 20.25V9.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 22.5V12h6v10.5" />
        </svg>
        Kembali ke Beranda
      </a>

      <footer className="mt-20 text-green-700 text-sm opacity-80 font-light">
        &copy; {new Date().getFullYear()} SMK Madinatul Quran. Semua hak cipta dilindungi.
      </footer>
    </div>
  );
}
