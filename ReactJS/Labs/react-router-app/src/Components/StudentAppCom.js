import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Main from "./Main";

export default class StudentAppCom extends Component {
	state = {
		students: null,
		isListShown: true,
	};
	//Get Data From Api
	//Life Cycle
	componentDidMount() {
		alert("componentDidMount");
		//Calling API
		this.getData();
	}

	async getData() {
		try {
			const response = await fetch("http://localhost:3004/students");
			const responseJSON = await response.json();

			responseJSON.then((data) => {
				console.log(data);
				this.setState({
					students: data,
				});
			});
		} catch (error) {
			console.log("App Component - getCollection() error", error);
		}
	}

	showAdd = () => {
		this.setState({ isListShown: !this.state.isListShown });
	};
	deleteFromAppState = (studentIndex) => {
		this.state.students.splice(studentIndex, 1);

		this.setState({ students: [...this.state.students] });
	};

	fillEditModal = (studentIndex) => {
		document.getElementById("editStudentName").value = this.state.students[studentIndex].name;
		document.getElementById("editStudentAge").value = this.state.students[studentIndex].age;
		// Array.from(
		// 	document.getElementById("editStudentCourses").querySelectorAll("option:checked"),
		// 	(opt) => opt.value
		// ),
		document.getElementById("editStudentTrack").value = this.state.students[studentIndex].trackName;
		document.getElementById("editStudentDateOfBirth").value = this.state.students[studentIndex].dateOfBirth;
		document.getElementById("editStudentAddress").value = this.state.students[studentIndex].address;
	};

	confirmEditOfStudent = (studentIndex) => {
		console.log(studentIndex);
		// 1. Make a shallow copy of the items
		let students = [...this.state.students];
		// 2. Make a shallow copy of the item you want to mutate
		let student = { ...students[studentIndex] };
		// 3. Replace the property you're interested in
		student.name = document.getElementById("editStudentName").value;
		student.age = document.getElementById("editStudentAge").value;
		// Array.from(
		// 	document.getElementById("editStudentCourses").querySelectorAll("option:checked"),
		// 	(opt) => opt.value
		// ),
		student.trackName = document.getElementById("editStudentTrack").value;
		student.dateOfBirth = document.getElementById("editStudentDateOfBirth").value;
		student.address = document.getElementById("editStudentAddress").value;
		// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
		students[studentIndex] = student;
		// 5. Set the state to our new copy
		this.setState({ students });
	};

	render() {
		return (
			<BrowserRouter>
				{!sessionStorage.getItem("loginId") && <Route component={Home} path="/" exact />}
				<Route component={() => <Main data={this.state.students} />} path="/main" exact />
			</BrowserRouter>
		);
	}
}
