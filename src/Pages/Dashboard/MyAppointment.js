import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-4xl font-bold mx-6 mb-6 border-b-2 border-blue-600 pb-4">
        My Appointment {appointments.length}
      </h2>
      <div className="overflow-x-auto px-7">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appoin, index) => (
              <tr key={appoin._id}>
                <td>{index + 1}</td>
                <td>{appoin.patientName}</td>
                <td>{appoin.date}</td>
                <td>{appoin.slot}</td>
                <td>{appoin.treatment}</td>
                <td>
                  {appoin.price && !appoin.paid && (
                    <Link to={`/dashboard/payment/${appoin._id}`}>
                      <button className="btn btn-xs bg-green-500 border-0">
                        Payment
                      </button>
                    </Link>
                  )}
                  {appoin.price && appoin.paid && (
                    <span className="text-green-500 font-bold">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;