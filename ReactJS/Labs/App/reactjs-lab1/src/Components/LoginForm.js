import React from "react";

const LoginForm = () => {
	return (
		<>
			<div className="container my-5">
				<form>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">
							Email address
						</label>
						<input type="email" className="form-control" id="exampleInputEmail1" />
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
