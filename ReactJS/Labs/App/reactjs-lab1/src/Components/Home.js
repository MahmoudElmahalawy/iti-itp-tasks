import React, { Component } from "react";

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="row pt-5 g-4 align-items-center justify-content-center">
					<div className="col-12 col-md-6 my-5 text-center">
						<button
							type="button"
							className="btn btn-lg btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#loginModal"
						>
							Login
						</button>
					</div>

					<div className="col-12 col-md-6 my-5 text-center">
						<button
							type="button"
							className="btn btn-lg btn-outline-primary"
							data-bs-toggle="modal"
							data-bs-target="#registerModal"
						>
							Register
						</button>
					</div>
				</div>

				<div className="modal fade" id="loginModal" tabIndex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title" id="loginModalLabel">
									Login
								</h4>
								<span role="button" className="btn-close" data-bs-dismiss="modal">
									{" "}
									&times;{" "}
								</span>
							</div>
							<div className="modal-body">
								<form className="row g-3 needs-validation" id="loginForm" noValidate>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipUsername" className="form-label">
											Username
										</label>
										<input
											type="text"
											className="form-control"
											id="validationTooltipUsername"
											placeholder="Enter code sent to your email."
											required
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipUserPassword" className="form-label">
											Password
										</label>
										<input
											type="password"
											className="form-control"
											id="validationTooltipUserPassword"
											placeholder="*********"
											required
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="submit"
									className="btn btn-primary mx-auto"
									form="loginForm"
									id="loginFormBtn"
								>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="registerModal" tabIndex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title" id="registerModalLabel">
									Register
								</h4>
								<span role="button" className="btn-close" data-bs-dismiss="modal">
									{" "}
									&times;{" "}
								</span>
							</div>
							<div className="modal-body">
								<form className="row g-3 needs-validation" id="registerForm" noValidate>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipFname" className="form-label">
											First name
										</label>
										<input
											type="text"
											className="form-control"
											id="validationTooltipFname"
											placeholder="Mahmoud"
											required
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipLname" className="form-label">
											Last name
										</label>
										<input
											type="text"
											className="form-control"
											id="validationTooltipLname"
											placeholder="Hamdy"
											required
										/>
										<div className="valid-tooltip">Looks good!</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipAddress" className="form-label">
											Address
										</label>
										<input
											type="text"
											className="form-control"
											id="validationTooltipAddress"
											placeholder="Gharbia, Tanta, Nahas St., Building no. 123"
											required
										/>
										<div className="invalid-tooltip">Please provide a valid address.</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipEmail" className="form-label">
											Email
										</label>
										<div className="input-group has-validation">
											<span className="input-group-text">
												<i className="fa fa-envelope"></i>
											</span>
											<input
												type="email"
												className="form-control"
												id="validationTooltipEmail"
												placeholder="email@corporate.org"
												required
											/>
											<div className="invalid-tooltip">Please enter a valid email.</div>
										</div>
									</div>
									<div className="col-12 position-relative form-input-div">
										<label htmlFor="validationTooltipAge" className="form-label">
											Age
										</label>
										<div className="input-group has-validation">
											<input
												type="number"
												className="form-control"
												id="validationTooltipAge"
												min="18"
												max="65"
												placeholder="Must be between 15 and 99"
												required
											/>
											<span className="input-group-text">Years</span>
											<div className="invalid-tooltip">Please provide a valid age.</div>
										</div>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									className="btn btn-primary w-100"
									type="submit"
									form="registerForm"
									id="registerFormBtn"
								>
									Register
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
