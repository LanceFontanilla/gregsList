export const JobsView = /*html*/
    `

  <div class="container-fluid">
    <section class="row">
      <button class="btn btn-info col-2" data-bs-toggle="collapse" data-bs-target="#jobFormCollapse">
        List Job! <span class="mdi mdi-human"></span>
      </button>

      <div class="collapse" id="jobFormCollapse">

        <form class="row p-2" onsubmit="app.JobsController.createJob()">

          <div class="form-floating mb-3 col-4">
            <input required type="text" class="form-control" id="jobTitle" name="jobTitle" placeholder="Job Title">
            <label for="houseRoom">Job Title</label>
          </div>

          <div class="form-floating mb-3 col-4">
            <input required type="number" class="form-control" id="jobSalary" name="salary" placeholder="Job Salary">
            <label for="houseBath">Salary</label>
          </div>

          <div class="form-floating mb-3 col-4">
            <input required type="text" class="form-control" id="jobType" name="employmentType"
              placeholder="Employment Type">
            <label for="houseYear">Employment Type</label>
          </div>

          <div class="form-floating mb-3 col-12">
            <input required type="text" class="form-control" id="jobimgUrl" name="imgUrl" placeholder="Job imgUrl">
            <label for="jobimgUrl">Job Image Url</label>
          </div>

          <div class="form-floating">
            <textarea required maxLength="500" class="form-control" placeholder="Please describe your job."
              name="description" id="jobDescription" style="height: 100px"></textarea>
            <label for="jobDescription">Job Description</label>
          </div>
          <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
          <div class="text-end">
            <button type="submit" class="btn btn-info">Create Listing</button>
          </div>
        </form>
      </div>
  </div>

    




<section class="row justify-content-center" id="jobs">
    <!-- STUB Job template -->
    <div class="col-md-10 elevation-5 rounded-top">
        <div class="row">
            <div class="col-4 p-0">
                <img class="img-fluid rounded-start" src="https://media.timeout.com/images/105502506/750/562/image.jpg">
            </div>
            <div class="col-8">
                <div class="d-flex justify-content-around pt-3">
                    <h1 class="text-center">Bartender </h1>
                    <span>Salary: $6.50 </span>
                    <span>|</span>
                    <span>Full-Time </span>
                    <span>|</span>
                </div>
                <div class="d-flex justify-content-around pt-3">
                <p>Looking for bartender!</p>
                </div>
            </div>
        </div>
    </div>
</section>

`