import TourService from "../Services/TourService.js";

//Private
let _tourService = new TourService()

function _drawTours() {
    let template = "";
    let tours = _tourService.Tours;
    tours.forEach((tours, i) => {
        template += tours.getTemplate(i);
    });
    document.querySelector("#tours").innerHTML = template;
}

export default class TourController {
    constructor() {
        console.log("message");
        _drawTours();
    }

    addTour(event) {
        event.preventDefault();
        let formData = event.target;
        let newTour = {
            name: formData.tourName.value
        };
        _tourService.addTour(newTour);
        _drawTours();
    }
    addLocation(event, tourIndex) {
        event.preventDefault();
        _tourService.addLocation(event.target.locationName.tour, tourIndex);
        _drawTours();
    }

    removeTour(tourIndex) {
        if (!window.confirm("Are you sure you want to cancel the tour event?")) {
            return;
        }
        _tourService.removeTour(tourIndex);
        _drawTours();
    }

    removeLocation(tourIndex, locationIndex) {
        _tourService.removeLocation(tourIndex, locationIndex);
        _drawTours();
    }


}