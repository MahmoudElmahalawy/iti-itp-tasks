import React, { Component } from "react";

import StudentList from "./Students/StudentList";
import StudentAdd from "./Students/StudentAdd";
import StudentShowAdd from "./StudentShowAdd";

export default class StudentAppCom extends Component {
	state = {
		students: [
			{
				id: 1,
				name: "Ahmed",
				age: "20",
				courses: ["CSS", "HTML"],
				trackName: "Web dev",
				dateOfBirth: "2001",
				address: "Mansoura",
			},
			{
				id: 2,
				name: "Bassant",
				age: "21",
				courses: ["CSS", "HTML"],
				trackName: "Web dev",
				dateOfBirth: "2000",
				address: "Cairo",
			},
			{
				id: 3,
				name: "Hamada",
				age: "21",
				courses: ["HTML", "JS", "ReactJS"],
				trackName: "Web dev",
				dateOfBirth: "2000",
				address: "Cairo",
			},
		],
		isListShown: true,
	};

	showAdd = () => {
		this.setState({ isListShown: !this.state.isListShown });
	};
	addToAppState = (student) => {
		const id = Math.floor(Math.random() * 1000) + 1;

		const newStudent = { id, ...student };
		this.setState({ students: [...this.state.students, newStudent] });
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
			<>
				<StudentShowAdd showAdd={this.showAdd} />
				{!this.state.isListShown && <StudentAdd addToAppState={this.addToAppState} />}
				{this.state.isListShown && (
					<StudentList
						students={this.state.students}
						deleteFromAppState={this.deleteFromAppState}
						fillEditModal={this.fillEditModal}
						confirmEditOfStudent={this.confirmEditOfStudent}
					/>
				)}
			</>
		);
	}
}
