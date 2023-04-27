"use client";

import { useOrderContext } from '@/components/context';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { changeLogin } = useOrderContext();

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    });
    const data = await res.json();
    if (res.ok) {
      changeLogin();
      router.push("/admin");
    }
    else {
      alert(data);
    }
  }

  return (
    <div className="flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-slate-100 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-slate-700 underline">
          Sign in
        </h1>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-700"
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-slate-700 bg-slate-50 border rounded-md focus:border-blackfocus:ring-slate-700 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-slate-700"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-slate-700 bg-slate-50 border rounded-md focus:border-blackfocus:ring-slate-700 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button onClick={async () => await handleLogin()}
            className="w-full px-4 py-2 tracking-wide text-white bg-slate-500 transition-colors duration-200 transhtmlForm bg-blackrounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}