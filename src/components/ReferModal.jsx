import { collection, query, where, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";

const ReferModal = ({ setShowModal }) => {
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
    <>
      <div className="justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full h-full max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5 m-8">
            <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">Doctor's Detail</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

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
                          <a
                            href="#"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Assign
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ReferModal;
