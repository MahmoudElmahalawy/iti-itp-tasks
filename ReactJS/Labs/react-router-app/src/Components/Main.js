import React, { Component } from "react";
import Header from "./Header";
import StudentShowAdd from "./Student/StudentShowAdd";
import StudentAdd from "./Student/StudentAdd";
import StudentList from "./Student/StudentList";

export default class Main extends Component {
	state = {
		students: null,
		isListShown: true,
	};
	render() {
		const {
			students,
			showAdd,
			isListShown,
			addToAppState,
			deleteFromAppState,
			fillEditModal,
			confirmEditOfStudent,
		} = this.props;
		return (
			<>
				<Header />
				<StudentShowAdd showAdd={showAdd} />
				{!isListShown && <StudentAdd addToAppState={addToAppState} />}
				{isListShown && (
					<StudentList
						students={students}
						deleteFromAppState={deleteFromAppState}
						fillEditModal={fillEditModal}
						confirmEditOfStudent={confirmEditOfStudent}
					/>
				)}
			</>
		);
	}
}
