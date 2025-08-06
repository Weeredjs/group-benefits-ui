import React from "react";

export default function ProfilePage() {
  return (
    <main className="bg-background min-h-[80vh] py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl shadow-soft p-8 flex flex-col items-center">
          <img
            src="https://www.eastcoastemployeebenefits.com/wp-content/uploads/2023/07/ECEB-Logo.png"
            alt="Profile"
            className="w-24 h-24 mb-6 rounded-full border-4 border-primary shadow-md object-contain bg-white"
          />
          <h2 className="font-heading text-3xl text-primary mb-2">My Profile</h2>
          <div className="text-text font-body text-lg mb-4 text-center">
            <p>Welcome, <span className="font-semibold">[User Name]</span>!</p>
            <p className="mt-2">Manage your account details and preferences here.<br/>
            <span className="text-accent font-semibold">Profile management coming soon.</span>
            </p>
          </div>
          <button
            className="mt-6 px-6 py-2 rounded-xl bg-primary text-white font-heading font-semibold shadow-soft hover:bg-accent transition"
            disabled
          >
            Edit Profile (Coming Soon)
          </button>
        </div>
      </div>
    </main>
  );
}