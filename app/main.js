import TourController from "./Controllers/TourController.js";


class App {
    constructor() {
        this.tourController = new TourController()
    }
}

window['app'] = new App()