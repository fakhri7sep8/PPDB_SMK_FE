"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function DetailSiswaPage() {
  const { id } = useParams();
  const [siswa, setSiswa] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:4000/calonsiswa/detail/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((res) => {
        setSiswa(res.siswa);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch detail:", err);
        setError("Gagal memuat data siswa");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">{error}</div>;
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
              <p className="border-b pb-1">{siswa.tempat_lahir}, {siswa.tanggal_lahir}</p>
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
    </div>
  );
}
