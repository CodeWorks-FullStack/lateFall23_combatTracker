import { CharactersController } from './controllers/CharactersController.js';
import { router } from './router-config.js';

class App {

  router = router

  CharactersController = new CharactersController()
}


const app = new App()
// @ts-ignore
window.app = app
