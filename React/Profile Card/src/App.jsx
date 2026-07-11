import ProfileCard from './profile_card'


function App() {
  return (
    <>
      <ProfileCard
        name = "Asad"
        profession = "Software Engineer"
        age = {24}
        city = "Lahore"
      />

      <ProfileCard
        name = "Ali"
        profession = "Machine learning Engineer"
        age = {26}
        city = "Islamabad"
      />   

      <ProfileCard
        name = "Saim"
        profession = "Web Developer"
        age = {23}
        city = "Karachi"
      />

      <ProfileCard
        name = "Hamza"
        profession="Data scientist"
        age = {28}
        city = "Multan"
      />
    </>
  );
}

export default App
