import { collection, query, where, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const q = query(collection(db, "users"), where("role", "==", "doctor"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const doctors = [];
      querySnapshot.forEach((doc) => {
        doctors.push(doc.data());
      });
      setDoctors(doctors);
    });
  };

  return (
    <div className="p-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Doctor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Doctor's Email
              </th>
              <th scope="col" className="px-6 py-3">
                Allocate Patient
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => {
              return (
                <tr className="bg-white border-b" key={doc.uid}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {doc.username}
                  </th>
                  <td className="px-6 py-4">{doc.email}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-yellow-600 hover:underline cursor-pointer">
                      Allocate Patient
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
