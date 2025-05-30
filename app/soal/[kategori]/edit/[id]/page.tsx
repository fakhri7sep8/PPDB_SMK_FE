"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Sidebar from "@/components/sidebar";
import useSoal from "@/hook/useSoal";

export default function EditSoalPage() {
  const router = useRouter();
  const { id, kategori } = useParams() as { id: string; kategori: string };
  const { useUpdateSoal, useGetSoalById } = useSoal();
  const { mutate: updateSoal } = useUpdateSoal(id);
  const { data, isLoading, isError } = useGetSoalById(id);

  const [pertanyaan, setPertanyaan] = useState("");
  const [opsiJawaban, setOpsiJawaban] = useState([
    { kode: "A", isi: "", is_benar: false },
    { kode: "B", isi: "", is_benar: false },
    { kode: "C", isi: "", is_benar: false },
    { kode: "D", isi: "", is_benar: false },
  ]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setPertanyaan(data.pertanyaan);
      setOpsiJawaban(data.opsiJawaban);
    }
  }, [data]);

  const handleOpsiChange = (idx: number, field: "isi" | "is_benar", value: string | boolean) => {
    setOpsiJawaban((prev) =>
      prev.map((opsi, i) =>
        i === idx
          ? field === "is_benar"
            ? { ...opsi, is_benar: value as boolean }
            : { ...opsi, isi: value as string }
          : field === "is_benar" && value
          ? { ...opsi, is_benar: false }
          : opsi
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!pertanyaan.trim()) {
      setError("Pertanyaan wajib diisi.");
      return;
    }
    if (opsiJawaban.some((opsi) => !opsi.isi.trim())) {
      setError("Semua opsi jawaban wajib diisi.");
      return;
    }
    if (!opsiJawaban.some((opsi) => opsi.is_benar)) {
      setError("Pilih salah satu jawaban yang benar.");
      return;
    }

    updateSoal(
      {
        pertanyaan,
        kategori_pelajaran: kategori,
        opsiJawaban,
      },
      {
        onSuccess: () => {
          router.push(`/soal/${kategori}`);
        },
      }
    );
  };

  if (isLoading) {
    return <div className="ml-60 p-8">Loading soal...</div>;
  }

  if (isError) {
    return (
      <div className="ml-60 p-8 text-red-600">
        Gagal memuat soal. Coba lagi nanti ya.
      </div>
    );
  }

  return (
    <main className="min-h-screen flex bg-gray-50 ml-60">
      <Sidebar />
      <div className="flex-1 px-4 py-8 sm:px-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#18A558] mb-8">Edit Soal Kategori: {kategori}</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow border border-gray-100 space-y-6"
        >
          <div>
            <label className="block font-semibold mb-2">Pertanyaan</label>
            <textarea
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#18A558] resize-none"
              rows={3}
              value={pertanyaan}
              onChange={(e) => setPertanyaan(e.target.value)}
              placeholder="Tulis pertanyaan di sini..."
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Opsi Jawaban</label>
            <div className="grid grid-cols-1 gap-3">
              {opsiJawaban.map((opsi, idx) => (
                <div key={opsi.kode} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="is_benar"
                    checked={opsi.is_benar}
                    onChange={() => handleOpsiChange(idx, "is_benar", true)}
                    className="accent-[#18A558]"
                  />
                  <span className="font-bold w-5">{opsi.kode}.</span>
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:border-[#18A558]"
                    placeholder={`Jawaban ${opsi.kode}`}
                    value={opsi.isi}
                    onChange={(e) => handleOpsiChange(idx, "isi", e.target.value)}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">Pilih salah satu jawaban yang benar.</p>
          </div>
          {error && <div className="text-red-600 font-semibold">{error}</div>}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
              onClick={() => router.push(`/soal/${kategori}`)}
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-[#18A558] hover:bg-[#15994a] text-white font-bold"
            >
              Update Soal
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
