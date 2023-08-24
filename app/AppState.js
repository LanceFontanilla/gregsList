import { Car } from "./models/Car.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { House } from "./models/House.js"
import { Job } from "./models/Job.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  // houses = [
  //   new House({
  //     address: "2103 N Heritage Way Meridian, ID 83646",
  //     room: 5,
  //     bath: 3,
  //     sqft: 3023,
  //     year: 2007,
  //     imgUrl: "https://photos.zillowstatic.com/fp/aed00a76c56232b0ad968b34c3ae729a-cc_ft_960.webp",
  //     price: 450000,
  //     description: "Beautiful house"
  //   }),
  //   new House({
  //     address: "974 E Esquel St, Kuna, ID 83634",
  //     room: 4,
  //     bath: 3,
  //     sqft: 2630,
  //     year: 2023,
  //     imgUrl: "https://photos.zillowstatic.com/fp/a1bd1bdae4ab2ef8bfcfa2ceed1bd8c6-o_a.webp",
  //     price: 675000,
  //     description: "The Savanna will exceed all of your expectations."
  //   })
  // ]

  houses = loadState('houses', [House])

  jobs = [
    new Job({
      jobTitle: "Bartender",
      salary: 6.50,
      description: "Looking for Bartender",
      employmentType: "part-time",
      imgUrl: ""
    }),
    new Job({
      jobTitle: "Barback",
      salary: 15,
      description: "Looking for Barback",
      employmentType: "part-time",
    }),
    new Job({
      jobTitle: "Security",
      salary: 18,
      description: "Looking for Security",
      empoloymentType: "full-time",
    })

  ]

  cars = loadState('cars', [Car])
  // cars = [

  //   new Car({
  //     make: "BMW",
  //     model: "335i",
  //     year: 1973,
  //     imgUrl: "https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627",
  //     price: 50000,
  //     isNew: true,
  //     description: "Mint",
  //     color: "silver"
  //   }),
  //   new Car(
  //     {
  //       make: "Mazda",
  //       model: "Miata",
  //       year: 1997,
  //       imgUrl: "https://bringatrailer.com/wp-content/uploads/2022/06/1997_mazda_mx-5-miata_img_1612-5-84972.jpg?fit=940%2C626",
  //       price: 8000,
  //       isNew: false,
  //       description: "Perfect for cruisin' down the coast",
  //       color: "black"
  //     }
  //   ),
  //   new Car(
  //     {
  //       make: "Muscle",
  //       model: "Car",
  //       year: 2043,
  //       imgUrl: "https://media.tenor.com/EgMfjYtMD3oAAAAC/car-jump.gif",
  //       price: 900000,
  //       isNew: false,
  //       description: "Getcha one of these bad boys",
  //       color: "red"
  //     }
  //   )

  // ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
