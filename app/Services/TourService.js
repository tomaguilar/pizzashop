import Tour from "../Models/Tour.js";



let _state = {
    tours: []
};

export default class TourService {
    removeLocation(tourIndex, locationIndex) {
        _state.tours[tourIndex].locations.splice(locationIndex, 1);
        this.saveTours();
    }
    removeTour(tourIndex) {
        _state.tours.splice(tourIndex, 1);
        this.saveTours();
    }
    addLocation(location, tourIndex) {
        _state.tours[tourIndex].locations.push(location);
        this.saveTours();
    }
    addTour(newTour) {
        _state.tours.push(new Tour(newTour));
        this.saveTours();
    }

    constructor() {
        console.log("Go on a tour!!!");
        this.loadTours();
    }
    get Tours() {
        return _state.tours.map(T => new Tour(T));
    }

    saveTours() {
        localStorage.setItem("tours", JSON.stringify(_state.tours));
    }

    loadTours() {
        let savedTours = JSON.parse(localStorage.getItem("tours"));
        if (savedTours) {
            _state.tours = savedTours;
        }
    }




}
