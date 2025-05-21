import Button from "@/components/button";
import Image from "next/image";
export default function Page() {
  return (
    <div className="">
      <header className="flex justify-between items-center px-10 py-5 shadow-lg">
        <div>
          <Image
            src={"/assets/logo.png"}
            alt="tes"
            width={200}
            height={200}
          ></Image>
        </div>
        <nav>
          <ul className="flex flex-row gap-8 text-lg ">
            <li className="hover:text-gray-400 cursor-pointer transition-colors">
              Home
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors">
              Alur Pendaftaran
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors">
              Biaya Pendaftaran
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors">
              Fasilitas
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-10 mt-10 mb-24">
        {/* Kiri */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold  mb-4">SMK</h2>
          <h2 className="text-6xl font-bold text-[#18A558] mb-4">
            MADINATUL QURAN
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed w-[75%] mb-3"
         

            Sekolah Menengah Kejuruan MADINATULQURAN atau SMK MQ adalah salah
            satu sekolah di Kecamatan Jonggol Kabupaten Bogor, Jawa Barat yang
            beroperasi mulai tahun 2015 dan sudah terakreditasi dari BANS/M
            Kemendikbud.
          </p>
          <Button
            colorSchema="green"
            title="Daftar Sekarang"

            width="Large"

          ></Button>
        </div>
        {/* Kanan */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src={"/assets/section1.png"}
            alt="section"
            width={600}
            height={600}
          ></Image>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-10 py-10 mt-10 m-10 shadow-xl rounded-lg mb-24">
        <h1 className="text-4xl font-bold text-center mb-4">
          Alur Pendaftaran
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-[50%] mb-7">
          Sebagai panduan Anda untuk mengikuti program pembelajaran di sekolah
          kami, kami sediakan panduan alur pendaftaran sebagai berikut.
        </p>
        <div className="flex justify-between gap-20">
          <div>
            <Image
              src={"/assets/pencil.png"}
              alt="section"
              width={100}
              height={100}
            ></Image>
            <p>Daftar Online</p>
          </div>
          <div>
            <Image
              src={"/assets/mic.png"}
              alt="section"
              width={100}
              height={100}
            ></Image>
            <p>Wawancara</p>
          </div>
          <div>
            <Image
              src={"/assets/toa.png"}
              alt="section"
              width={100}
              height={100}
            ></Image>
            <p>Pengumuman</p>
          </div>
          <div>
            <Image
              src={"/assets/folder.png"}
              alt="section"
              width={100}
              height={100}
            ></Image>
            <p>Registrasi</p>
          </div>
          <div>
            <Image
              src={"/assets/notebook.png"}
              alt="section"
              width={100}
              height={100}
            ></Image>
            <p>Selesai</p>
          </div>
        </div>
      </section>
      <section className="px-10 py-10 mt-10 mb-24">
        <h1 className="text-4xl font-bold text-center mb-6">
          Biaya Pendaftaran
        </h1>
        <div className="flex flex-col gap-0 px-10">
          {/* Header */}
          <div className="flex justify-between font-semibold text-lg text-white bg-green-600 py-6 px-4">
            <div className="w-1/5 text-center text-lg">Gelombang</div>
            <div className="w-1/5 text-center text-lg">Pendaftaran</div>
            <div className="w-1/5 text-center text-lg">Uang Masuk</div>
            <div className="w-1/5 text-center text-lg">Daftar Ulang</div>
            <div className="w-1/5 text-center text-lg">SPP Bulanan</div>
          </div>
          {/* Row 1 */}
          <div className="flex justify-between text-gray-800 bg-green-100 py-6 px-4">
            <div className="w-1/5 text-center text-lg">
              Agustus – Desember 2024
            </div>
            <div className="w-1/5 text-center text-lg">Rp 450.000</div>
            <div className="w-1/5 text-center text-lg">Rp 14.500.000</div>
            <div className="w-1/5 text-center text-lg">Rp 3.500.000</div>
            <div className="w-1/5 text-center text-lg">Rp 2.500.000</div>
          </div>
          {/* Row 2 */}
          <div className="flex justify-between text-gray-800 bg-white py-6 px-4">
            <div className="w-1/5 text-center text-lg">
              Januari – Maret 2025
            </div>
            <div className="w-1/5 text-center text-lg">Rp 450.000</div>
            <div className="w-1/5 text-center text-lg">Rp 16.500.000</div>
            <div className="w-1/5 text-center text-lg">Rp 3.500.000</div>
            <div className="w-1/5 text-center text-lg">Rp 2.500.000</div>
          </div>
          {/* Row 3 */}
          <div className="flex justify-between text-gray-800 bg-green-100 py-6 px-4">
            <div className="w-1/5 text-center text-lg">April – Juni 2025</div>
            <div className="w-1/5 text-center text-lg">Rp 450.000</div>
            <div className="w-1/5 text-center text-lg">Rp 18.500.000</div>
            <div className="w-1/5 text-center text-lg">Rp 3.500.000</div>
            <div className="w-1/5 text-center text-lg">Rp 2.500.000</div>
          </div>
        </div>
      </section>
      <section className="px-14 py-10 mt-10 mb-24">
        <h1 className="text-2xl px-10 font-bold text-[#18A558] mb-6">
          Fasilitas SMK MADINATULQURAN :
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/sekolah.png"}
              alt=""
              width={70}
              height={50}
            ></Image>

            <p className="text-xl text-[#18A558] font-semibold">Smart School</p>
          </div>
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/asrama.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Asrama</p>
          </div>
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image src={"/assets/ac.png"} alt="" width={70} height={50}></Image>
            <p className="text-xl text-[#18A558] font-semibold">Kelas AC</p>
          </div>
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/multimedia.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Multimedia</p>
          </div>
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/wifi.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Wifi</p>
          </div>
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/masjid.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Masjid</p>
          </div>
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/saung.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">
              Saung Belajar
            </p>
          </div>
          <div className="bg-gray-100 p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/lapangan.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Lapangan</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#18A558] text-white py-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between gap-10">
      {/* Kiri: Logo & Alamat */}
      <div className="md:w-1/2">
        <Image
          src="/assets/logoMQ.png"
          alt="Logo"
          height={70}
          width={70}
        />
        <p className="text-sm mt-5 max-w-sm">
          Kp. Kebon Kelapa, RT.02/RW.011, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830
        </p>
      </div>

      {/* Kanan: Grid Menu */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-1/2">
        {/* Program Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Program Kami</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Belajar Mandiri</a></li>
            <li><a href="#" className="hover:underline">Mentoring</a></li>
            <li><a href="#" className="hover:underline">Komunitas</a></li>
          </ul>
        </div>

        {/* Sekolah */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sekolah</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Kurikulum</a></li>
            <li><a href="#" className="hover:underline">Kemitraan</a></li>
            <li><a href="#" className="hover:underline">Pengajar</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Bantuan</a></li>
            <li><a href="#" className="hover:underline">Syarat & Ketentuan</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>WhatsApp</li>
            <li>Support 24</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/80">
      Copyright © 2025
    </div>
  </div>
</footer>
    </div>
  );
}