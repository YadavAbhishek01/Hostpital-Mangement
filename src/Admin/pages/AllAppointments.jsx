import React, { useEffect, useState } from "react";
import DraggableDialog from "../../Componets/DraggableDialog";

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const appoint = JSON.parse(localStorage.getItem("Appoinments")) || [];
    setAppointments(appoint);
  }, []);

  const DeleteAppointment = () => {
    const cancelappoin = appointments.filter((doc) => doc.id !== deleteId);
    setAppointments(cancelappoin);
    localStorage.setItem("Appoinments", JSON.stringify(cancelappoin));
    setOpen(false);
  };

  const handleCancel = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Title */}
      <div className="flex items-center justify-center gap-3 flex-wrap text-center">
        <img
          src="https://img.icons8.com/?size=100&id=QTADNrdh5I0o&format=png&color=000000"
          alt=""
          className="w-8"
        />
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 mt-2">
          All Appointments
        </h1>
      </div>

      {/* Table / List */}
      <div className="overflow-hidden rounded-lg shadow-md mt-6">
        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-7 text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-3">
          <p>#</p>
          <p>Patient Name</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p className="text-center">Action</p>
        </div>

        {appointments.length > 0 ? (
          <div className="divide-y">
            {appointments
              .slice()
              .reverse()
              .map((doc, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-7 items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  {/* Mobile Card Style */}
                  <div className="md:hidden space-y-2">
                    <p className="font-medium">
                      <span className="font-semibold">Patient:</span>{" "}
                      {doc.Patient_details?.PatientsName}
                    </p>
                    <p>
                      <span className="font-semibold">Age:</span>{" "}
                      {doc.Patient_details?.Age || "-"}
                    </p>
                    <p>
                      <span className="font-semibold">Date & Time:</span>{" "}
                      {doc.Date}{" "}
                      <span className="text-gray-500">{doc.Time}</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={doc.image}
                        alt=""
                        className="w-10 rounded-full"
                      />
                      <p className="text-xs">{doc.name}</p>
                    </div>
                    <p className="text-green-600 font-semibold text-xs">
                      ${doc.Fees || "0"}
                    </p>
                    <button
                      className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                      onClick={() => handleCancel(doc.id)}
                    >
                      Cancel
                    </button>
                  </div>

                  {/* Desktop Table Cells */}
                  <p className="hidden md:block font-medium">{i + 1}</p>
                  <p className="hidden md:block">
                    {doc.Patient_details?.PatientsName}
                  </p>
                  <p className="hidden md:block">
                    {doc.Patient_details?.Age || "-"}
                  </p>
                  <p className="hidden md:block">
                    {doc.Date}{" "}
                    <span className="text-gray-500">{doc.Time}</span>
                  </p>
                  <div className="hidden md:flex items-center justify-center flex-col">
                    <img src={doc.image} alt="" className="w-10 rounded-full" />
                    <p className="text-xs">{doc.name}</p>
                  </div>
                  <p className="hidden md:block text-green-600 font-semibold text-xs">
                    ${doc.Fees || "0"}
                  </p>
                  <div className="hidden md:flex justify-center">
                    <button
                      className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                      onClick={() => handleCancel(doc.id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-3">
            <img
              src="https://img.icons8.com/?size=100&id=igRGF9zPpSqN&format=png&color=000000"
              alt=""
              className="w-8"
            />
            <p>No appointments available</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <DraggableDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={DeleteAppointment}
        title="Delete Confirmation"
        message="Are you sure you want to delete this appointment?"
        submitBtn={"OK"}
      />
    </div>
  );
};

export default AllAppointments;
