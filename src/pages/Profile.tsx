import React, { useState } from "react";

const EditProfile = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState("John Traveler");
  const [email, setEmail] = useState("john@travel.com");
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState("");

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("Profile updated!");
    console.log({ photo, name, email, notifications, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6 border border-rose-200">
        <h2 className="text-3xl font-semibold text-rose-600 text-center">
          Edit Profile
        </h2>

        {/* Profile Photo */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src={photo || "/img/pic.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-rose-300"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="text-sm text-rose-600"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-rose-700">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-rose-300 px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-rose-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-rose-300 px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-rose-700">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-5 w-5 text-rose-600 focus:ring-rose-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-rose-700">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-rose-300 px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>

        {/* Balance */}
        <div>
          <label className="block text-sm font-medium text-rose-700">
            Account Balance ($)
          </label>
          <input
            type="number"
            readOnly
            className="mt-1 block w-full border border-rose-300 px-3 py-2 rounded-lg bg-gray-100 text-rose-700"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 rounded-lg transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
