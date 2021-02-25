import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserContoller';


const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();


router.post("/users", userController.create);
router.post("/surveys", surveyController.create);
router.get("/allsurveys", surveyController.show);
router.post("/sendmail", sendMailController.execute);

export{ router };

