// Dynamically create header navbar
document.getElementById('navbar').innerHTML = `
  <nav class="navbar">
    <div class="logo">Suites</div>
    <ul>
      <li><a href="#">Home</a></li>
      <li class="dropdown">
        <a href="#">Rooms ▾</a>
        <div class="dropdown-content">
          <a href="#">Deluxe</a>
          <a href="#">Executive</a>
          <a href="#">Suite</a>
          <a href="#">Double</a>
          <a href="#">Single</a>
        </div>
      </li>
      <li><a href="#">Events</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
`;
// Book Now button logic
function bookRoom(roomName) {
  alert(`You selected: ${roomName}. Please scroll to the booking form.`);
  window.location.href = "#book"; // Scroll to booking section
}
