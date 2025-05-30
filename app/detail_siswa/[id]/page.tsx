"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import useDetailSiswaModule from "@/hook/useDetailPeserta";
import { use } from "react";

export default function DetailSiswaPage({params}: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const siswaId = String(id);
  const { useGetDetailSiswa } = useDetailSiswaModule();
  const { data: siswa, isLoading, error } = useGetDetailSiswa(siswaId);

  if (isLoading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        Gagal memuat data siswa
      </div>
    );
  }

  if (!siswa) {
    return <div className="p-6 text-center">Data siswa tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div className="bg-white border rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Data diri</h2>

        <div className="flex flex-col items-center mb-6">
          <Image
            src="/assets/profile.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <p className="mt-3 font-semibold">{siswa.nama_lengkap}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="border p-4 rounded-md space-y-4">
            <div>
              <p className="text-sm text-gray-500">Tempat, tanggal Lahir</p>
              <p className="border-b pb-1">
                {siswa.tempat_lahir}, {siswa.tanggal_lahir}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Jenis Kelamin</p>
              <p className="border-b pb-1">{siswa.jenis_kelamin}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Alamat Rumah</p>
              <p className="border-b pb-1">{siswa.alamat}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Telepon/WA</p>
              <p className="border-b pb-1">{siswa.no_hp}</p>
            </div>
          </div>

          <div className="border p-4 rounded-md space-y-4">
            <div>
              <p className="text-sm text-gray-500">Asal Sekolah</p>
              <p className="border-b pb-1">{siswa.asal_sekolah}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">NISN</p>
              <p className="border-b pb-1">{siswa.nisn}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">NIK</p>
              <p className="border-b pb-1">{siswa.nik}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tahun Ajaran</p>
              <p className="border-b pb-1">{siswa.tahun_ajaran}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Div tambahan untuk berkas */}
      <div className="bg-white border rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Berkas Upload</h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">No</p>
            <p className="border-b pb-1">1</p> {/* Ganti kalau ada logic urutan */}
          </div>
          <div>
            <p className="text-sm text-gray-500">NISN</p>
            <p className="border-b pb-1">{siswa.nisn}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Nama Siswa</p>
            <p className="border-b pb-1">{siswa.nama_lengkap}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Berkas (Preview)</p>
            {siswa.berkas_url ? (
              siswa.berkas_url.endsWith(".pdf") ? (
                <a
                  href={siswa.berkas_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Lihat PDF
                </a>
              ) : (
                <Image
                  src={siswa.berkas_url}
                  alt="Berkas"
                  width={300}
                  height={200}
                  className="rounded-md border"
                />
              )
            ) : (
              <p className="text-gray-400 italic">Tidak ada berkas diupload.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}