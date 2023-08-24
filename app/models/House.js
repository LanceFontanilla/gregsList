import { generateId } from "../utils/generateId.js"


export class House {

  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.room = data.room
    this.bath = data.bath
    this.sqft = data.sqft
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.description = data.description
    this.listingDate = new Date()
  }
  get HousesTemplate() {
    return /*html*/ `
      <div class= "col-md-10 elevation-5 rounded-top my-2" style= "border: 2px solid">
        <div class="row">
          <div class="col-4 p-0">
            <img class="img-fluid rounded-start"
              src=${this.imgUrl}>
          </div>
          <div class="col-8">
            <div class="d-flex justify-content-around pt-3">
              <h1 class="text-center">$${this.price} </h1>
              <span>${this.room} Beds </span>
              <span>|</span>
              <span>${this.bath} Bath</span>
              <span>|</span>
              <span>${this.sqft} SqFt</span>
              <span>|</span>
              <span>Built: ${this.year}</span>
            </div>
            <span class="text-center">${this.address}</span>
            <p>${this.description}</p>
             <div class="text-end py-2">
                <button class="btn btn-danger" onclick="app.HousesController.deleteHouse('${this.id}')">Remove Listing <i class="mdi mdi-delete"></i> </button>
            </div>
          </div>
        </div>
      </div>`
  }


}