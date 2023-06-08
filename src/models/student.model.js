import { v4 as uuidv4 } from "uuid";

export function StudentModel(studentData) {
    let name = studentData.studentName;
    let age = studentData.studentAge;
    let educationLevel = studentData.studentEducationLevel;
    let id = uuidv4();
    let credits = 100;

    const getEducationDegree = () => {
        return `${educationLevel}`
    };

    const getStudentCurrentCredits = () => {
        return `${credits}`
    };

    const completeStudentCredits = (creditsCompleted) => {
        credits -= creditsCompleted
    };

    return {
        id,
        name,
        age,
        getStudentEducationLevel: getEducationDegree,
        getStudentCurrentCredits: getStudentCurrentCredits,
        completeStudentCredits: completeStudentCredits
    }
}
  