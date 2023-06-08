import {
  completeStudentCreditsHandler,
  createStudentHandler,
  getAllStudentsHandler,
  getStudentInfoHandler
} from "./controller/student.controller.js";

function routes(app) {
  app.get("/healthcheck", (req, res) => res.sendStatus(200));

  app.post("/api/student", createStudentHandler);

  app.get("/api/student", getAllStudentsHandler);

  app.get("/api/student/:id", getStudentInfoHandler);

  app.post("/api/student/:id/credits", completeStudentCreditsHandler);
}

export default routes;
