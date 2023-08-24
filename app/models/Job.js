import { generateId } from "../utils/generateId.js";

export class Job {
    constructor(data) {
        this.id = generateId()
        this.jobTitle = data.jobTitle
        this.salary = data.salary
        this.description = data.description
        this.employmentType = data.employmentType
        this.imgUrl = data.imgUrl
        this.listingDate = new Date()
    }
    get JobsTemplate() {
        return /*html*/`
    <div class="col-md-10 elevation-5 rounded-top my-2" style="border: 2px solid">
        <div class="row">
            <div class="col-4 p-0">
                <img class="img-fluid rounded-start" src=${this.imgUrl}>
            </div>
                <div class="col-8">
                    <div class="d-flex justify-content-around pt-3">
                    <h1 class="text-center">${this.jobTitle} </h1>
                    <span>Salary: ${this.salary} </span>
                    <span>|</span>
                    <span> ${this.employmentType} </span>
                    <span>|</span>
                    <span>${this.listingDate.toLocaleDateString()}</span>
                    </div>
                </div>
                    <p>${this.description}</p>
                <div class="text-end py-2">
                <button class="btn btn-danger" onclick="app.JobsController.deleteJob('${this.id}')">Remove Job <i class="mdi mdi-delete"></i> </button>
                 </div>
            </div>
        </div>
    </div>`
    }


}


