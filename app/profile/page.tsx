"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/sidebar";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("/assets/profile.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="flex w-[70%] bg-white rounded-lg shadow-lg ml-48">
          <div className="flex flex-row justify-between w-full p-10 gap-6 items-center">
            <div className="flex flex-col w-full">
              <h1 className="text-5xl font-bold mb-8">Profile</h1>
              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <label className="text-xs font-semibold text-gray-600">
                    USER NAME
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Jane Walters"
                    className="w-full border-b focus:outline-none focus:border-green-500 text-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="j.walters@domain.com"
                    className="w-full border-b focus:outline-none focus:border-green-500 text-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className="w-full border-b focus:outline-none focus:border-green-500 text-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">
                    LOCATION
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Dubai, UAE"
                    className="w-full border-b focus:outline-none focus:border-green-500 text-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">
                    PHONE
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 012 345 678"
                    className="w-full border-b focus:outline-none focus:border-green-500 text-lg"
                  />
                </div>
              </div>
              <button
                onClick={handleSave}
                className="mt-4 self-start px-6 py-2 rounded bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow "
              >
                SAVE
              </button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div
                className="cursor-pointer"
                onClick={handleClickImage}
                title="Click to change profile picture"
              >
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  width={500}
                  height={500}
                />
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
                className="px-4 py-1 text-sm rounded bg-green-600 text-white border border-transparent hover:bg-white hover:border-green-800 duration-150 hover:text-green-500"
              >
                Change Photo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
