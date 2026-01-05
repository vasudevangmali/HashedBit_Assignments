import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: form });
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={submitHandler}>
        <h2>Book Seat</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            required
            value={form.mobile}
            onChange={(e) =>
              setForm({ ...form, mobile: e.target.value })
            }
          />
        </div>

        <button type="submit" className="submit-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
