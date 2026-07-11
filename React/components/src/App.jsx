import "./App.css";
import Navbar from "./Navbar";
import GreetingCard from "./GreetingCard";
import ProfileCard from "./ProfileCard";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
      <GreetingCard
        title="Netsol Technology"
        message="Our Team Our Nation.Big Startup Filled Condition..."
      />
      </section>
      
      <section id="profiles">
      <div className="profile-container">
        <ProfileCard
          name="Hassam Ali"
          profession="Software Engineer / Founder"
          age={30}
          city = "Rahim Yar Khan"
          university = "FAST"
        />

        <ProfileCard
          name="Azan"
          profession="Machine Learning Engineer / Co-Founder"
          age={26}
          city = "Islamabad"
          university = "NUST"
        />

        <ProfileCard
          name="Asad"
          profession="Software Engineer"
          age={24}
          city = "Lahore"
          university = "LUMS"
        />

        <ProfileCard
          name="Saad"
          profession="Web Developer"
          age={23}
          city = "Karachi"
          university = "IBA Karachi"
        />
        
        <ProfileCard
          name="Arslan"
          profession="Data Scientist"
          age={28}
          city = "Sadiqabad"
          university = "Punjab University"
        />
        
        <ProfileCard
          name="Hamza"
          profession="Cyber Analyst"
          age={27}
          city = "Lahore"
          university = "GIKI"
        />
        
        <ProfileCard
          name="Zain"
          profession="Game Developer"
          age={28}
          city = "Sadiqabad"
          university = "COMSATS Islamabad"
        />
      </div>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;