import React, { Component } from "react";

export default class StudentAdd extends Component {
	addStudent = () => {
		let newStudent = {
			name: document.getElementById("studentName").value,
			age: document.getElementById("studentAge").value,
			courses: Array.from(
				document.getElementById("studentCourses").querySelectorAll("option:checked"),
				(opt) => opt.value
			),
			trackName: document.getElementById("studentTrack").value,
			dateOfBirth: document.getElementById("studentDateOfBirth").value,
			address: document.getElementById("studentAddress").value,
		};

		this.props.addToAppState(newStudent);
	};
	render() {
		return (
			<div className="my-5">
				<form className="row gx-3 gy-2 align-items-center">
					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentName">
							Name
						</label>
						<input type="text" className="form-control" id="studentName" placeholder="Jane Doe" />
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentAge">
							Age
						</label>
						<input type="number" className="form-control" id="studentAge" placeholder="20" />
					</div>

					<div className="col-md-2">
						<select className="form-select" id="studentCourses" size="1" multiple>
							<option disabled>Courses</option>
							<option value="HTML">HTML</option>
							<option value="CSS">CSS</option>
							<option value="JS">JS</option>
							<option value="React">React</option>
							<option value="Angular">Angular</option>
						</select>
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentTrack">
							Track Name
						</label>
						<input type="text" className="form-control" id="studentTrack" placeholder="Web Development" />
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentDateOfBirth">
							Date of birth
						</label>
						<input
							type="number"
							className="form-control"
							id="studentDateOfBirth"
							placeholder="1999"
							min="1990"
							max="2005"
						/>
					</div>

					<div className="col-md-2">
						<label className="visually-hidden" htmlFor="studentAddress">
							Address
						</label>
						<input type="text" className="form-control" id="studentAddress" placeholder="Mansoura, St.12" />
					</div>

					<div className="col-auto m-auto mt-3">
						<button type="button" className="btn btn-success" onClick={this.addStudent}>
							Add Student
						</button>
					</div>
				</form>
			</div>
		);
	}
}
