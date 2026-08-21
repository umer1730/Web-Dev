function GreetingCard({ title, message }) { {/*props: recieve data from  from parent relationships to child relationships*/}
  return (
    <div className="greeting-card">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

export default GreetingCard;