import { createStudent, getAllStudents, getStudentInfo, completeStudentCredits } from "../services/student.service.js";

export const createStudentHandler = async (req, res) => {
  const body = req.body;
  const student = await createStudent(body);

  return res.status(201).send(student);
};

export const getAllStudentsHandler = async (req, res) => {
  const students = await getAllStudents();

  return res.status(200).send(students);
};

export const getStudentInfoHandler = async (req, res) => {
    const studentId = req.params.id
    const student = await getStudentInfo(studentId);

    const studentInfo = {
        ...student,
        educationLevel: student.getStudentEducationLevel(),
        currentCredits: student.getStudentCurrentCredits(),
    }
    return res.status(200).send(studentInfo)
}


export const completeStudentCreditsHandler = async (req, res) => {
    const studentId = req.params.id;
    const creditsCompleted = req.body.creditsCompleted;
    const studentUpdated = await completeStudentCredits(studentId, creditsCompleted);

    const studentUpdatedInfo = {
        ...studentUpdated,
        educationLevel: studentUpdated.getStudentEducationLevel(),
        currentCredits: studentUpdated.getStudentCurrentCredits(),
    };
    
    return res.status(200).send(studentUpdatedInfo);
}