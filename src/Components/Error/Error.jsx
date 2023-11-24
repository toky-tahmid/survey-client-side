import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://www.freeparking.co.nz/learn/wp-content/uploads/2023/06/768x385-21.png")' }}>
      <div className="text-black text-center ml-96 flex mt-72">
        <p className="text-2xl mt-2 mr-8 font-bold">Return to</p> <Link to="/"><button className="btn glass mr-44 btn-wide text-xl font-bold text-black">Home</button></Link>
      </div>
    </div>
    );
};

export default Error;