import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"
import { Job } from "../models/Job.js"


function _saveJobs() {
    saveState('jobs', AppState.jobs)
}

class JobsService {
    deleteJob(jobId) {
        let foundJob = AppState.jobs.find(job => job.id == jobId)

        let filteredJobArr = AppState.jobs.filter(job => job.id != jobId)
        AppState.jobs = filteredJobArr
        _saveJobs()
    }
    createJob(formData) {
        let newJob = new Job(formData)
        AppState.jobs.push(newJob)

        AppState.emit('jobs')
        _saveJobs()
    }
}

export const jobsService = new JobsService()