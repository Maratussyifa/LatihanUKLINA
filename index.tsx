// pages/index.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Fungsi untuk menangani login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Cek apakah email dan password valid
    if (email && password) {
      // Jika valid, arahkan ke dashboard
      router.push('/dashboard');
    } else {
      // Jika tidak valid, tampilkan alert
      alert('Please fill out both fields.');
    }
  };

  return (
    <div className="login-page">
      {/* Background Image */}
      <div className="background-image"></div>

      <div className="form-container">
        <h1 className="title">Registration</h1>
        <h2 className="subtitle">Access your account</h2>

        {/* Form Login */}
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
