import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AdminHome = () => {
  const {user} = useContext(AuthContext)
    return (
        <>
        <h1 className="text-4xl text-center font-bold">Welcome to Admin {user.displayName}</h1>
        <br />
        <hr />
       <div>
        <img className="mx-auto" src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" />
       </div>
       </>
    );
};

export default AdminHome;