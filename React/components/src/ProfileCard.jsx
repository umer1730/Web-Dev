function ProfileCard({name,profession,age,city,university}){
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Profession: {profession}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>University: {university}</p>
    </div>
  );
}

export default ProfileCard;