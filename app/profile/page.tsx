"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Auth from "@/hook/useAuth";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("/assets/profile.png");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { useGetProfile } = Auth();
  const { data } = useGetProfile();

  const handleSave = () => {
    alert("Profile saved!");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleClickImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#e8f5e9] to-[#f1f8e9]">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden border border-green-100">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#18A558]/80 to-[#18A558]/40 p-10 md:w-1/3 w-full">
            <div
              className="relative group cursor-pointer"
              onClick={handleClickImage}
              title="Click to change profile picture"
            >
              <Image
                src={profileImage}
                alt="Profile Image"
                width={160}
                height={160}
                className="rounded-full border-4 border-white shadow-lg object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-semibold">Ganti Foto</span>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              onClick={handleClickImage}
              className="mt-4 px-5 py-2 rounded-full bg-[#18A558] text-white font-semibold shadow hover:bg-[#15994a] transition"
            >
              Ubah Foto
            </button>
          </div>
          {/* Profile Form Section */}
          <div className="flex-1 flex flex-col justify-center p-10">
            <h1 className="text-3xl font-bold mb-8 text-[#18A558]">Profil Saya</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder={data?.username || "Username"}
                  className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#18A558] text-lg bg-transparent py-1"
                  defaultValue={data?.username}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={data?.email || "Email"}
                  className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#18A558] text-lg bg-transparent py-1"
                  defaultValue={data?.email}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#18A558] text-lg bg-transparent py-1"
                />
              </div>

            </div>
            <button
              onClick={handleSave}
              className="mt-4 px-8 py-2 rounded-full bg-gradient-to-r from-[#18A558] to-[#43e97b] text-white font-semibold shadow hover:from-[#15994a] hover:to-[#18A558] transition self-end"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
