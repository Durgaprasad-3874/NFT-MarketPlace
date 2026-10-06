import React, { useState } from "react";
import { User, Check, CreditCard, KeyRound } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [savedMessage, setSavedMessage] = useState("");

  const tabs = ["Profile", "Application", "Security", "Activity", "Payment Method", "API"];

  const handleSave = (sectionName) => {
    setSavedMessage(`${sectionName} saved successfully!`);
    setTimeout(() => setSavedMessage(""), 2500);
  };

  return (
    <div>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="page-title">
            Setting
          </h1>

          <p className="page-subtitle">
            Welcome Setting Page
          </p>
        </div>

        {savedMessage && (
          <div className="flex items-center gap-1.5 rounded-lg bg-green-500/20 px-3 py-1.5 text-xs text-green-400 border border-green-500/30">
            <Check size={14} /> {savedMessage}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-7 flex flex-wrap gap-5 border-b border-white/5 pb-3 text-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition ${
              activeTab === tab
                ? "text-primary font-semibold border-b-2 border-primary pb-1"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Payment Method" ? (
        <section className="max-w-2xl">
          <h2 className="mb-3 text-sm font-semibold text-white">
            Payment Method
          </h2>

          <div className="dashboard-card flex items-start gap-3 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <CreditCard size={18} />
            </div>

            <div>
              <p className="text-xs font-semibold text-white">
                No payment provider connected
              </p>
              <p className="mt-1 text-xs text-gray-400">
                There are no saved payment methods to display. Connect a payment provider to securely add and manage payment methods.
              </p>
              <span className="mt-3 inline-flex rounded-md border border-white/10 px-2 py-1 text-[10px] text-gray-400">
                Not configured
              </span>
            </div>
          </div>
        </section>
      ) : activeTab === "API" ? (
        <section className="max-w-2xl">
          <h2 className="mb-3 text-sm font-semibold text-white">
            API Access
          </h2>

          <div className="dashboard-card flex items-start gap-3 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <KeyRound size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white">
                No API connection configured
              </p>
              <p className="mt-1 text-xs text-gray-400">
                API settings require a backend endpoint and server-side credentials. None are configured for this dashboard.
              </p>

              <dl className="mt-4 grid gap-3 border-t border-white/10 pt-3 text-xs sm:grid-cols-2">
                <div>
                  <dt className="text-gray-500">API endpoint</dt>
                  <dd className="mt-1 text-gray-300">Not configured</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Credentials</dt>
                  <dd className="mt-1 text-gray-300">Not configured</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      ) : activeTab === "Profile" ? (
        <>
      <div className="grid gap-5 lg:grid-cols-2">

        {/* User profile */}
        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">
            User profile
          </h2>

          <div className="dashboard-card p-4">

            <label className="mb-2 block text-[10px] text-gray-300">
              Full Name
            </label>

            <input
              className="input"
              defaultValue="John Smith"
            />

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <User size={16} />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-white">
                  John Smith
                </p>

                <p className="text-[8px] text-gray-400">
                  Welcome Setting Page
                </p>
              </div>
            </div>

            <button
              onClick={() => handleSave("User profile")}
              className="primary-button mt-4"
            >
              Save
            </button>

          </div>
        </section>

        {/* Update profile */}
        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">
            Update Profile
          </h2>

          <div className="dashboard-card p-4">

            <label className="mb-2 block text-[10px] text-gray-300">
              Email
            </label>

            <input
              className="input"
              type="email"
              defaultValue="john@example.com"
            />

            <label className="mb-2 mt-3 block text-[10px] text-gray-300">
              Password
            </label>

            <input
              className="input"
              type="password"
              defaultValue="password"
            />

            <button
              onClick={() => handleSave("Update profile")}
              className="primary-button mt-4"
            >
              Save
            </button>

          </div>
        </section>

      </div>

      {/* Personal information */}
      <section className="mt-7">

        <h2 className="mb-3 text-sm font-semibold text-white">
          Personal Information
        </h2>

        <div className="dashboard-card p-4">

          <div className="grid gap-4 md:grid-cols-2">

            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <label className="mb-2 block text-[10px] text-gray-300">
                  Info #{item}
                </label>

                <input className="input" placeholder={`Enter detail #${item}`} />
              </div>
            ))}

          </div>

          <button
            onClick={() => handleSave("Personal information")}
            className="primary-button mt-4"
          >
            Save
          </button>

        </div>
      </section>

        </>
      ) : (
        <section className="max-w-2xl">
          <h2 className="mb-3 text-sm font-semibold text-white">
            {activeTab}
          </h2>
          <div className="dashboard-card p-5 text-xs text-gray-400">
            This settings section is not configured yet.
          </div>
        </section>
      )}

    </div>
  );
}