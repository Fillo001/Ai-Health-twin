import { useState } from 'react';
import { manageConsent } from '../utils/blockchain';

export default function Consent() {
  const [consent, setConsent] = useState(false);

  const handleConsent = async () => {
    const result = await manageConsent(consent);
    alert(result ? 'Consent updated successfully!' : 'Failed to update consent.');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Consent Management</h1>
      <p>Choose how your health data is shared.</p>
      <label>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        I consent to share anonymized data for research.
      </label>
      <br />
      <button onClick={handleConsent}>Update Consent</button>
    </div>
  );
}
