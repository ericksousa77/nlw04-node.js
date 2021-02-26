import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NPSController } from './controllers/NPSController';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserContoller';


const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NPSController();


router.post("/users", userController.create);
router.post("/surveys", surveyController.create);
router.get("/allsurveys", surveyController.show);
router.post("/sendmail", sendMailController.execute);
router.get("/answers/:value",answerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export{ router };

