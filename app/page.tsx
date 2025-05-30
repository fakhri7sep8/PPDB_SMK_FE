import Button from "@/components/button";
import Image from "next/image";
export default function Page() {
  return (
    <div className="">
      <div className="bg-[url('/assets/background.png')] bg-cover bg-center bg-no-repeat min-h-screen">
        <header className="flex items-center px-10 py-5 bg-opacity-0 gap-[30rem]">
          <div>
            <Image
              src={"/assets/logo.png"}
              alt="tes"
              width={300}
              height={300}
            />
          </div>
          <nav>
            <ul className="flex flex-row gap-12 text-lg text-white">
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

        <section className="flex flex-col  items-center  px-10 py-10 mt-10 mb-24 w-full">
          <div className="w-[60%] text-center md:text-left gap-4 flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold  mb-4 text-white">
              <span className="text-[#18A558]">SMK</span> MADINATUL - QURAN
            </h2>
            <p className="text-white text-center leading-relaxed w-[100%] mb-3 text-xl">
              Sekolah Menengah Kejuruan MADINATULQURAN atau SMK MQ adalah salah
              satu sekolah di Kecamatan Jonggol Kabupaten Bogor, Jawa Barat yang
              beroperasi mulai tahun 2015 dan sudah terakreditasi dari BANS/M
              Kemendikbud.
            </p>
            <button
              className="group w-[20%] rounded-2xl bg-green-500 h-16 shadow-lg hover:bg-white transition-colors duration-300 flex items-center justify-center"
              style={{ boxShadow: "0 4px 15px rgba(24, 165, 88, 0.6)" }}
            >
              <p className="text-white text-xl group-hover:text-green-400 transition-colors duration-300">
                Daftar Sekarang
              </p>
            </button>
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <section className="flex flex-col items-center justify-center px-10 py-10 mt-10 w-[70%] shadow-xl rounded-lg mb-24">
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
            </div>
            <div>
              <Image
                src={"/assets/mic.png"}
                alt="section"
                width={100}
                height={100}
              ></Image>
            </div>
            <div>
              <Image
                src={"/assets/toa.png"}
                alt="section"
                width={100}
                height={100}
              ></Image>
            </div>
             <div>
              <Image
                src={"/assets/folder.png"}
                alt="section"
                width={100}
                height={100}
              ></Image>
            </div>
            <div>
              <Image
                src={"/assets/notebook.png"}
                alt="section"
                width={100}
                height={100}
              ></Image>
            </div>
          </div>
        </section>
      </div>
      <section className="px-10 py-10 mt-10 mb-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6">Galery</h1>
        <div className="grid grid-cols-2 gap-6 px-10 justify-center items-center w-full">
          <div className=" p-4 rounded-lg">
            <Image
              src={"/assets/Bg_1.png"}
              alt="Galery 1"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4 rounded-lg ">
            <Image
              src={"/assets/Bg_2.png"}
              alt="Galery 2"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className=" p-4 rounded-lg">
            <Image
              src={"/assets/Bg_3.png"}
              alt="Galery 1"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4 rounded-lg ">
            <Image
              src={"/assets/Bg_4.png"}
              alt="Galery 2"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className=" p-4 rounded-lg">
            <Image
              src={"/assets/Bg_5.png"}
              alt="Galery 1"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4 rounded-lg ">
            <Image
              src={"/assets/Bg_6.png"}
              alt="Galery 2"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
           <div className=" p-4 rounded-lg w-full">
            <Image
              src={"/assets/Bg_7.png"}
              alt="Galery 1"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
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
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/sekolah.png"}
              alt=""
              width={70}
              height={50}
            ></Image>

            <p className="text-xl text-[#18A558] font-semibold">Smart School</p>
          </div>
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/asrama.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Asrama</p>
          </div>
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image src={"/assets/ac.png"} alt="" width={70} height={50}></Image>
            <p className="text-xl text-[#18A558] font-semibold">Kelas AC</p>
          </div>
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/multimedia.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Multimedia</p>
          </div>
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/wifi.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Wifi</p>
          </div>
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
            <Image
              src={"/assets/masjid.png"}
              alt=""
              width={70}
              height={50}
            ></Image>
            <p className="text-xl text-[#18A558] font-semibold">Masjid</p>
          </div>
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
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
          <div className="bg-white p-4 pl-10 rounded-lg flex flex-row text-center shadow-md items-center gap-6">
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
      <section className="w-full items-center justify-center flex mb-16">
        <div className="w-[90%] flex flex-row justify-between items-center shadow-2xl h-64 p-9 rounded-4xl">
          <div className="flex flex-row gap-10 items-center justify-center shadow-2xl w-80 h-32 bg-white rounded-xl p-4">
            <Image
              src={"/assets/bulan.png"}
              alt="Logo"
              height={70}
              width={70}
            />
            <p className="font-bold text-xl text-green-500 w-[6rem]">Diniyyah & Umum</p>
          </div>
            <div className="flex flex-row gap-10 items-center justify-center shadow-xl w-80 h-32 bg-white rounded-xl p-4">
            <Image
              src={"/assets/terminal.png"}
              alt="Logo"
              height={70}
              width={70}
            />
             <p className="font-bold text-xl text-green-500 w-[6rem]">Software Engineer</p>
          </div>
            <div className="flex flex-row gap-10 items-center justify-center shadow-xl w-80 h-32 bg-white rounded-xl p-4">
            <Image
              src={"/assets/bagan.png"}
              alt="Logo"
              height={70}
              width={70}
            />
            <p className="font-bold text-xl text-green-500 w-[6rem]">Network Engineer</p>
          </div>
            <div className="flex flex-row gap-10 items-center justify-center shadow-xl w-80 h-32 bg-white rounded-xl p-4">
            <Image
              src={"/assets/piala.png"}
              alt="Logo"
              height={70}
              width={70}
            />
            <p className="font-bold text-xl text-green-500 ">Program Unggulan</p>
          </div>
        </div>
      </section>
      <section className="w-full my-36">
        <div className="grid grid-cols-3 gap-10 px-10 items-center justify-center">
          <Image
            src={"/assets/mikro.png"}
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src={"/assets/pens.png"}
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src={"/assets/red_hat.png"}
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
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
                Kp. Kebon Kelapa, RT.02/RW.011, Singasari, Kec. Jonggol,
                Kabupaten Bogor, Jawa Barat 16830
              </p>
            </div>

            {/* Kanan: Grid Menu */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-1/2">
              {/* Program Kami */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Program Kami</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Belajar Mandiri
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Mentoring
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Komunitas
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sekolah */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Sekolah</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Kurikulum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Kemitraan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Pengajar
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Bantuan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Syarat & Ketentuan
                    </a>
                  </li>
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
