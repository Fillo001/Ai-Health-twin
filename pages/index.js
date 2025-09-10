import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to AI Health Twin 🌟</h1>
      <p>Your personal AI-powered wellness companion.</p>
      <p>
        Empowering you to take control of your health with AI-driven insights and decentralized data privacy.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/dashboard">
          <a style={{ margin: '0 1rem', padding: '1rem 2rem', background: 'green', color: 'white', borderRadius: '5px' }}>Go to Dashboard</a>
        </Link>
        <Link href="/consent">
          <a style={{ margin: '0 1rem', padding: '1rem 2rem', background: 'blue', color: 'white', borderRadius: '5px' }}>Manage Consent</a>
        </Link>
      </div>
    </div>
  );
}
