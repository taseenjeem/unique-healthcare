import app from "@/providers/firebase.init";
import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";

const OrderHistory = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  const { isLoading, data } = useQuery({
    queryKey: ["Appointments"],
    queryFn: async () => {
      const response = await fetch(
        `https://unique-healthcare-server.vercel.app/appointments-by-query?patient_email=${user.email}`
      );
      const appointments = await response.json();
      return appointments;
    },
  });

  return (
    <>
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6 font-semibold text-primary text-xl">
          Your Appointment History
        </span>
      </span>

      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-5">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-primary">
                SL
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-primary">
                Appointment Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-primary">
                Appointment Time
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-primary">
                Appointed Doctor
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-primary">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.map((appointment, index) => (
              <tr key={appointment._id}>
                <td className="whitespace-nowrap px-4 py-2">{index + 1}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {appointment.appointment_date}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {appointment.appointment_time}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {appointment.appointed_doctor}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-orange-600">
                  {appointment.appointment_status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data?.length <= 0 && (
        <div className="py-5">
          <p className="text-xl font-semibold text-primary text-center">
            No Appointment Found
          </p>
        </div>
      )}
    </>
  );
};

export default OrderHistory;
