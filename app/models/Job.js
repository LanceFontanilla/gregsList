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
}