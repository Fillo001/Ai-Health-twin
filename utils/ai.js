export async function analyzeHealthData(data) {
  try {
    const { steps, sleep, mood } = data;
    return `You’ve walked ${steps} steps, slept ${sleep} hours, and your mood is ${mood}. Keep it up, and try drinking more water!`;
  } catch (error) {
    console.error('Failed to analyze health data:', error);
    return 'Error analyzing health data.';
  }
}
