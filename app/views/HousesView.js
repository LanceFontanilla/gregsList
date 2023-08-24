export const HousesView = /*html*/
  `
 <div class="container-fluid">
    <section class="row">
      <button class="btn btn-info col-2" data-bs-toggle="collapse" data-bs-target="#houseFormCollapse">
        List House! <span class="mdi mdi-home"></span>
      </button>

      <div class="collapse" id="houseFormCollapse">

        <form class="row p-2" onsubmit="app.HousesController.createHouse()">

          <div class="form-floating mb-3 col-4">
            <input required type="number" class="form-control" id="houseRoom" name="room" placeholder="# of Beds">
            <label for="houseRoom">Number of Beds</label>
          </div>

          <div class="form-floating mb-3 col-4">
            <input required type="number" class="form-control" id="houseBath" name="bath" placeholder="# of Baths ">
            <label for="houseBath">Number of Baths</label>
          </div>

          <div class="form-floating mb-3 col-4">
            <input required type="number" minLength="4" maxLength="4" class="form-control" id="houseYear" name="year"
              placeholder="Year Built">
            <label for="houseYear">Year Built</label>
          </div>

          <div class="form-floating mb-3 col-6">
            <input required type="number" class="form-control" max="10000000" id="housePrice" name="price"
              placeholder="House Price">
            <label for="housePrice">House Price</label>
          </div>

          <div class="form-floating mb-3 col-6">
            <input required type="number" class="form-control" id="houseSqft" name="sqft" placeholder="# Sq Ft">
            <label for="houseSqft">Number of Sq Feet</label>
          </div>

          <div class="form-floating mb-3 col-12">
            <input required type="text" class="form-control" id="houseAddress" name="address"
              placeholder="House address">
            <label for="houseAddress">House Address</label>
          </div>

          <div class="form-floating mb-3 col-12">
            <input required type="text" class="form-control" id="houseimgUrl" name="imgUrl" placeholder="House imgUrl">
            <label for="houseimgUrl">House Image Url</label>
          </div>

          <div class="form-floating">
            <textarea required maxLength="500" class="form-control" placeholder="Please describe your house"
              name="description" id="houseDescription" style="height: 100px"></textarea>
            <label for="houseDescription">House Description</label>
          </div>
          <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
          <div class="text-end">
            <button type="submit" class="btn btn-info">Create Listing</button>
          </div>
        </form>
      </div>
  </div>
    <section class="row justify-content-center" id="houses">
      <!-- STUB House template -->
      <div class="col-md-10 elevation-5 rounded-top">
        <div class="row">
          <div class="col-4 p-0">
            <img class="img-fluid rounded-start"
              src="https://photos.zillowstatic.com/fp/aed00a76c56232b0ad968b34c3ae729a-cc_ft_960.webp" alt="make model">
          </div>
          <div class="col-8">
            <div class="d-flex justify-content-around pt-3">
              <h1 class="text-center">PRICE </h1>
              <span>Bedroom </span>
              <span>|</span>
              <span>Bath </span>
              <span>|</span>
              <span>SqFt </span>
              <span>|</span>
              <span>Year </span>
            </div>
            <span class="text-center">Address</span>
            <p>Description</p>
          </div>
        </div>
      </div>
    </section>
`