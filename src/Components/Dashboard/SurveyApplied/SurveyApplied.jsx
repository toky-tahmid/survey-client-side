import { useState } from "react";
import useApplied from "../useApplied";
import useAxiosPublic from "../useAxiosPublic";
// import { AuthContext } from "../../../providers/AuthProvider";
import { FaRegEye } from "react-icons/fa";

const SurveyApplied = () => {
  const [data, setData] = useState({});
  //   const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [applied, refetch] = useApplied();
  console.log(applied);
  // const [appliedSurvey,SetAppliedSurvey] = useState()

  // const fetchSurveys = () => {
  //     fetch(`http://localhost:5000/pendingSurvey?pending=unPublish`)
  //       .then((res) => res.json())
  //       .then((data) => SetAppliedSurvey(data));
  //   };
  //   useEffect(() => {
  //     fetchSurveys();
  //   }, []);

  const handleChanging = (id) => {
    axiosPublic.patch(`/user?id=${id}`).then((res) => {
      console.log(res.data);
      if (res.data?.modifiedCount > 0) {
        refetch()
    }
    });
  };
  return (
    // <div>
    //   <div className="flex justify-evenly my-4">
    //     <h2 className="text-3xl">All Payments By Pro Users</h2>
    //     {/* <h2 className="text-3xl">Total Users: {appliedSurvey.length}</h2> */}
    //   </div>
    //   <div className="overflow-x-auto">
    //     <table className="table table-zebra w-full">
    //       <thead>
    //         <tr>
    //           <th>TransactionId</th>
    //           <th>Email</th>
    //           <th>Date</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {applied?.map((payment) => (
    //           <tr key={payment._id}>
    //             <th>{payment.title}</th>
    //             <td>{payment.email}</td>
    //             <td>{payment.date}</td>
    //             <td>
    //               <button
    //                 onClick={() => handleChanging(payment._id)}
    //                 className="btn btn-secondary"
    //               >
    //                 Survey
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr className="bg-slate-300 w-full text-lg ">
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applied?.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td> {item.trainerName} </td>
                  <td> {item.email} </td>
                  <td className="uppercase"> {item.role} </td>
                  <td>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className=""
                      onClick={async () => {
                        await setData(item);
                        document.getElementById("my_modal_1").showModal();
                      }}
                    >
                      <FaRegEye className="text-2xl "></FaRegEye>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/*  runging  */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> {data.title} </h3>
          {/* TODO */}
          {/* <form ref={form} onSubmit={handleSubmit} method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"></button>
            <input
              className="hidden"
              type="text"
              defaultValue={data.name}
              name="name"
            />
            <input
              className="hidden"
              type="email"
              defaultValue={data.email}
              name="email"
            />
            <button
              type="submit"
              className="badge badge-outline ml-[380px] mb-4 px-4 py-3 mt-6 "
            >
              Reject
            </button>
          </form> */}

          <div className="card-actions justify-end cursor-pointer">
            <button
              onClick={() => handleChanging(data._id)}
              className="badge badge-outline px-4 py-3 "
            >
              Confirm
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-secondary">Go</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SurveyApplied;
