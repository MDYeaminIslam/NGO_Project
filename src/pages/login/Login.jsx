

const Login = () => {
    return (
        <div>
            <section>
                <div className="hero min-h-screen bg-teal-800">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left w-1/2">
                            <h1 className="text-5xl font-bold text-white">Login now!</h1>
                            <p className="py-6 text-base-300">For over 7 years, ATC Tech Limited has been dedicated to providing innovative and sustainable solutions. Our team of skilled engineers is passionate about creating high-quality products that meet your needs while minimizing environmental impact. We are committed to exceeding your expectations and building long-lasting partnerships.</p>
                        </div>
                        <div className="card w-96 shrink-0  max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="email" placeholder="Enter phone number here.." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password here.." className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  bg-teal-500 hover:bg-teal-700 hover:text-white">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Login;