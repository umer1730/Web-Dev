function GreetingCard({ title, message }) {
  return (
    <div className="greeting-card">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

export default GreetingCard;