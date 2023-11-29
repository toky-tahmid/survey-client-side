import { useState, useEffect } from "react";

const SeeAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setAllUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  useEffect(() => {

    if (selectedRole === "all") {
      setFilteredUsers(allUsers);
    } else {
      const filtered = allUsers.filter((user) => user.role === selectedRole);
      setFilteredUsers(filtered);
    }
  }, [selectedRole, allUsers]);

  const RoleChanged = (role) => {
    setSelectedRole(role);
  }
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {filteredUsers.length}</h2>
      </div>
      <div>
        {/* Filter buttons */}
        <div className="flex justify-center my-2">
          <button
            className={`mx-2 ${
              selectedRole === "all" ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            } py-2 px-4 rounded`}
            onClick={() => RoleChanged("all")}>
            All
          </button>
          <button
            className={`mx-2 ${
              selectedRole === "prouser" ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            } py-2 px-4 rounded`}
            onClick={() => RoleChanged("prouser")}
          >
            Pro User
          </button>
          <button
            className={`mx-2 ${
              selectedRole === "admin" ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            } py-2 px-4 rounded`}
            onClick={() => RoleChanged("admin")}
          >
            Admin
          </button>
          <button
            className={`mx-2 ${
              selectedRole === "surveyor" ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            } py-2 px-4 rounded`}
            onClick={() => RoleChanged("surveyor")}
          >
            Surveyor
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeeAllUsers;
