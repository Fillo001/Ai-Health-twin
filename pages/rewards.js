import { useState } from 'react';

export default function Rewards() {
  const [tokens, setTokens] = useState(0);

  const claimTokens = () => {
    setTokens(tokens + 10); // Simulate claiming tokens
    alert('You’ve claimed 10 Health Tokens!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Rewards</h1>
      <p>Your Health Tokens: {tokens}</p>
      <button onClick={claimTokens}>Claim Tokens</button>
    </div>
  );
}
