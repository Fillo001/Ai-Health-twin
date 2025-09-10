export default function HealthCard({ title, content }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
