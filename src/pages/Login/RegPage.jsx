import { useState } from "react";
import toast from "react-hot-toast";
import useMutaionHook from "../../../hooks/useMutationHook";
import { adminRegistration } from "../../../api/admin";
import { useNavigate } from "react-router-dom";
const initialState = {
  phoneNumber: null,
  name: null,
  password: null,
  confirmPassword: null,
};
const RegPage = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const { mutate, isError, errorMessage } = useMutaionHook(adminRegistration, {
    onSuccess: () => {
      toast.success("Registration Successfully");
      navigate("/auth/login");
    },
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      return toast.error("Password does not match");
    }
    mutate(formData);
  }
  return (
    <div className="w-full py-8 min-h-screen flex justify-center items-center bg-teal-800">
      <div className="card md:w-96 shrink-0  max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter user_name here.."
              className="input input-bordered"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Enter phone number here.."
              className="input input-bordered"
              name="phoneNumber"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password here.."
              className="input input-bordered"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="repeat password.."
              className="input input-bordered"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
          </div>
          {isError ? errorMessage : null}
          <div className="form-control mt-6">
            <button
              className="btn  bg-emerald-500 hover:bg-teal-700 text-white"
              onClick={handleSubmit}
            >
              Sing Up{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegPage;
