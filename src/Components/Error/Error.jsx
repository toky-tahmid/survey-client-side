import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13616.jpg?w=740&t=st=1700833515~exp=1700834115~hmac=9a4dffdc09f46c3264ad3245e87c1e978aae7bb1d9373fe4999010c89edef2ab")' }}>
      <div className="text-white text-center ml-96 flex mt-96">
        <p className="text-2xl mt-2 mr-8 font-bold">Return to</p> <Link to="/"><button className="btn glass mr-44 btn-wide text-xl font-bold text-black">Home</button></Link>
      </div>
    </div>
    );
};

export default Error;