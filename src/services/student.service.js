import {StudentModel} from '../models/student.model.js';

let students = [];

export const createStudent = async (studentData) => {
    let newStudent = StudentModel(studentData);
    students.push(newStudent);
    return newStudent;
};

export const getAllStudents = async () => {
    return students;
};

export const getStudentInfo = async (studentId) => {
    const student = students.find(student => student.id === studentId);
    return student;
}

export const completeStudentCredits = async (studentId, creditsCompleted) => {
    const studentIndex = students.findIndex((student) => student.id === studentId);
    students[studentIndex].completeStudentCredits(creditsCompleted);
    return students[studentIndex];
}


