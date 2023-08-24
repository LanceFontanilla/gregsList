import { AppState } from "../AppState.js"
import { jobsService } from "../services/JobsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"
import { Pop } from "../utils/Pop.js"

function _drawJobs() {
    console.log('drawing jobs')
    let jobs = AppState.jobs
    let content = ''
    jobs.forEach(job => content += job.JobsTemplate)
    setHTML('jobs', content)
}

export class JobsController {
    constructor() {
        console.log('this is the Jobs Controller')
        _drawJobs()
        AppState.on('jobs', _drawJobs)
    }

    createJob() {
        window.event.preventDefault()
        const formEvent = window.event.target

        console.log('form event', formEvent)
        const formData = getFormData(formEvent)

        formEvent.reset()

        jobsService.createJob(formData)

    }
    async deleteJob(jobId) {
        if (await Pop.confirm("Are you sure you want to remove this listing?")) {
            jobsService.deleteJob(jobId)
        }
    }

}