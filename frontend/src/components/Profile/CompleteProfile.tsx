import { useLocation } from "react-router-dom";

const CompleteProfile = () => {
  const location = useLocation();
  const role = location.state?.role;

  if (!role) {
    return <div>Please select role first</div>;
  }

  return (
    <div>
      <h1>Complete Profile as {role}</h1>
    </div>
  );
};



export default CompleteProfile;