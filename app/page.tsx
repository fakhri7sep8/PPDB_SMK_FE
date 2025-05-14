import Image from "next/image";
import Button from "./component/Button";
export default function Page() {
  return (
    <div className="font-family">
      <header className="flex justify-between items-center px-10 py-5 shadow-lg">
        <div>
          <Image src={"/assets/logo.png"} alt="tes" width={200} height={200}></Image>
        </div>
        <nav>
          <ul className="flex flex-row gap-8 text-lg ">
            <li className="hover:text-gray-400 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors">Alur Pendaftaran</li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors">Biaya Pendaftaran</li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors">Fasilitas</li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-10 mt-10 mb-24">
        {/* Kiri */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold  mb-4">SMK</h2>
          <h2 className="text-6xl font-bold text-[#18A558] mb-4"> MADINATUL QURAN</h2>
          <p className="text-gray-500 text-lg leading-relaxed w-[75%]"> 
            Sekolah Menengah Kejuruan MADINATULQURAN atau SMK MQ adalah salah satu sekolah di Kecamatan Jonggol Kabupaten Bogor, Jawa Barat yang beroperasi mulai tahun 2015 dan sudah terakreditasi dari BANS/M Kemendikbud.
          </p>
          <Button colorSchema="green" title="Daftar Sekarang" width="xl"></Button>
        </div>
        {/* Kanan */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image src={"/assets/section1.png"} alt="section" width={500} height={500}></Image>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-10 py-10 mt-10 m-10 bg-amber-200">
        <h1 className="text-4xl font-bold text-center mb-4">Alur Pendaftaran</h1>
        <p className="text-lg text-gray-600 text-center max-w-[50%]">
          Sebagai panduan Anda untuk mengikuti program pembelajaran di sekolah kami, kami sediakan panduan alur pendaftaran sebagai berikut.
        </p>
        <div className="flex justify-between gap-20">
          <div>
            <Image src={"/assets/pencil.png"} alt="section" width={100} height={100}></Image>
            <p>Daftar Online</p>
          </div>
          <div>
            <Image src={"/assets/mic.png"} alt="section" width={100} height={100}></Image>
            <p>Wawancara</p>
          </div>
          <div>
            <Image src={"/assets/toa.png"} alt="section" width={100} height={100}></Image>
            <p>Pengumuman</p>
          </div>
          <div>
            <Image src={"/assets/folder.png"} alt="section" width={100} height={100}></Image>
            <p>Registrasi</p>
          </div>
          <div>
            <Image src={"/assets/notebook.png"} alt="section" width={100} height={100}></Image>
            <p>Selesai</p>
          </div>
        </div>
      </section>
      <section className="px-10 py-10 mt-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-6">Biaya Pendidikan</h1>
        <div className="flex flex-col gap-0">
          {/* Header */}
          <div className="flex justify-between font-semibold text-lg text-white bg-green-600 py-3 px-4">
            <div className="w-1/5 text-center">Gelombang</div>
            <div className="w-1/5 text-center">Pendaftaran</div>
            <div className="w-1/5 text-center">Uang Masuk</div>
            <div className="w-1/5 text-center">Daftar Ulang</div>
            <div className="w-1/5 text-center">SPP Bulanan</div>
          </div>
          {/* Row 1 */}
          <div className="flex justify-between text-gray-800 bg-green-100 py-3 px-4">
            <div className="w-1/5 text-center">Agustus – Desember 2024</div>
            <div className="w-1/5 text-center">Rp 450.000</div>
            <div className="w-1/5 text-center">Rp 14.500.000</div>
            <div className="w-1/5 text-center">Rp 3.500.000</div>
            <div className="w-1/5 text-center">Rp 2.500.000</div>
          </div>
          {/* Row 2 */}
          <div className="flex justify-between text-gray-800 bg-white py-3 px-4">
            <div className="w-1/5 text-center">Januari – Maret 2025</div>
            <div className="w-1/5 text-center">Rp 450.000</div>
            <div className="w-1/5 text-center">Rp 16.500.000</div>
            <div className="w-1/5 text-center">Rp 3.500.000</div>
            <div className="w-1/5 text-center">Rp 2.500.000</div>
          </div>
          {/* Row 3 */}
          <div className="flex justify-between text-gray-800 bg-green-100 py-3 px-4">
            <div className="w-1/5 text-center">April – Juni 2025</div>
            <div className="w-1/5 text-center">Rp 450.000</div>
            <div className="w-1/5 text-center">Rp 18.500.000</div>
            <div className="w-1/5 text-center">Rp 3.500.000</div>
            <div className="w-1/5 text-center">Rp 2.500.000</div>
          </div>
        </div>
      </section>
    </div>
  );
}