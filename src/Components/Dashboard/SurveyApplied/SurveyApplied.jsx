/* eslint-disable react/prop-types */
import { useState } from "react";
import useApplied from "../useApplied";
import useAxiosPublic from "../useAxiosPublic";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const SurveyApplied = () => {
  const [data, setData] = useState({});
  const axiosPublic = useAxiosPublic();
  const [applied, refetch] = useApplied();
  console.log(applied);
  const handleChanging = (id) => {
    axiosPublic.patch(`/user?id=${id}`).then((res) => {
      console.log(res.data);
      if (res.data?.modifiedCount > 0) {
        refetch();
      }
    });
  };
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-slate-300 w-full text-lg ">
                <th>No.</th>
                <th>Title</th>
                <th>Time</th>
                <th>Voted</th>
              </tr>
            </thead>
            <tbody>
              {applied?.map((apply, index) => (
                <tr key={apply._id}>
                  <th>{index + 1}</th>
                  <td> {apply.title} </td>
                  <td> {apply.timestamp} </td>
                  <td className="uppercase"> {apply.total_votes} </td>
                  <td>
                    <button
                      onClick={async () => {
                        await setData(apply);
                        document.getElementById("my_modal_1").showModal();
                      }}
                    >
                      <MdOutlinePublishedWithChanges className="text-2xl " />
                    </button>
                  </td>
                  <td>
                    <button
                      className="max-w-[80px] w-full mr-10 font-bold text-[#1965a4be] hover:text-red-400 duration-300"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center"> {data.title} </h3>
          <div className="flex justify-evenly">
            <div className="card-actions cursor-pointer">
              <button
                onClick={() => handleChanging(data._id)}
                className="rounded-lg mt-6 bg-gradient-to-r from-pink-500 to-purple-500 py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300"
              >
                Publish
              </button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
      <div>
        <BarChart
          width={500}
          height={300}
          data={applied}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Bar
            dataKey="total_votes"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {applied.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default SurveyApplied;
