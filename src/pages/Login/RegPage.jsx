
const RegPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-teal-800">
            <div className="card w-96 shrink-0  max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="Enter user_name here.." className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" placeholder="Enter phone number here.." className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password here.." className="input input-bordered" required />
                        {/* <label className="label">
                            <Link to={'/login_page/forgot_pass'} className="label-text-alt link link-hover">Forget password?</Link>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-emerald-500 hover:bg-teal-700 text-white">Sing Up </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegPage;