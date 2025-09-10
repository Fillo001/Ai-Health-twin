import { useState } from 'react';
import { analyzeHealthData } from '../utils/ai';
import HealthCard from '../components/HealthCard';

export default function Dashboard() {
  const [healthData, setHealthData] = useState({ steps: 0, sleep: 0, mood: '' });
  const [insights, setInsights] = useState('');

  const handleAnalyze = async () => {
    const result = await analyzeHealthData(healthData);
    setInsights(result);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Health Dashboard</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Steps:
          <input
            type="number"
            value={healthData.steps}
            onChange={(e) => setHealthData({ ...healthData, steps: e.target.value })}
          />
        </label>
        <br />
        <label>
          Sleep (hours):
          <input
            type="number"
            value={healthData.sleep}
            onChange={(e) => setHealthData({ ...healthData, sleep: e.target.value })}
          />
        </label>
        <br />
        <label>
          Mood:
          <input
            type="text"
            value={healthData.mood}
            onChange={(e) => setHealthData({ ...healthData, mood: e.target.value })}
          />
        </label>
        <br />
        <button type="button" onClick={handleAnalyze}>Analyze</button>
      </form>
      {insights && <HealthCard title="Insights" content={insights} />}
    </div>
  );
}
