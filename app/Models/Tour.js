export default class Tour {
  FIXME
  getLocation(_tourIndex) {
    let template = "<ul>";
    this.location.forEach((T, i) => {
      template += `
        <li>${T}<span class="text-danger" onclick="app.valuesController.removeLocation(${locationIndex}, ${i})">X</span></li>      
        `;
    });
    template += "</ul>";
    return template;
  }
  constructor(data) {
    this.name = data.name;
    this.location = data.location || [];
    //NOTE //figure out what to do with this
    //this.crustType = data.crustType || "Garlic Butter";
  }
  getTemplate(index) {
    let template = `
          <div class="col-4 border">
          <h1>${this.name}</h1>
          <h3>Events: </h3>
          `;
    template += this.getLocation(index);
    template += `
          <form onsubmit="app.tourController.addLocation(event, '${index}')">
                <div class="input-group mb-3">
                  <input
                  type="text"
                  name="locationName"
                  class="form-control"
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                    class="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                    >
                    Add Location  
                    </button>
                  </div>
                </div>
              </form> 
          `;
    template += `
          <button class="btn btn-danger" onclick="app.tourController.removeTour(${index})">Remove Tour</button>
        </div>`;
    return template;
  }




  //get Template() {
  //return this.title
  //}
}