import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const bookingId = Math.floor(100000 + Math.random() * 900000);

  if (!state) {
    return <h3>No booking details found</h3>;
  }

  return (
    <div className="confirmation-container">
      <div className="ticket">
        <h2>🎉 Seat Booked Successfully!</h2>

        <div className="ticket-details">
          <p>
            <strong>Booking ID:</strong> #{bookingId}
          </p>
          <p>
            <strong>Name:</strong> {state.name}
          </p>
          <p>
            <strong>Email:</strong> {state.email}
          </p>
          <p>
            <strong>Mobile:</strong> {state.mobile}
          </p>
        </div>

        <button className="home-btn" onClick={() => navigate("/")}>
          Back to Movies
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
