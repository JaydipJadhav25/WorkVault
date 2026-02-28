import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectRole = () => {
  const [role, setRole] = useState<"client" | "freelancer" | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!role) return;
    navigate("/complete-profile", { state: { role } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold">Join as a client or freelancer</h1>

      <div className="flex gap-6 p-6">
        <button
          onClick={() => setRole("client")}
          className={`p-9  border rounded-xl ${
            role === "client" ? "bg-background border-orange-700 text-white" : ""
          }`}
        >
          I'm a client, hiring for a project
        </button>

        <button
          onClick={() => setRole("freelancer")}
          className={`p-9 border rounded-xl ${
            role === "freelancer" ? "border-orange-700 bg-background text-white" : ""
          }`}
        >
          I'm a freelancer, looking for work
        </button>
      </div>

      <button
        onClick={handleNext}
        disabled={!role}
        className="px-6 py-2 bg-green-700 text-white border rounded disabled:cursor-not-allowed disabled:bg-background/30 disabled:border-gray-600"
      >
        {
            !role ? "create Account" : <>
             {
                role === "client" ? "join as a Client" : "Apply as a Freelancer"
             }
            </>
        }
      </button>
    </div>
  );
};

export default SelectRole;
