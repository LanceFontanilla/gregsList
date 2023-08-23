import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"


function _drawHouses() {
    console.log('drawing houses')
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HousesTemplate)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log('this is the Houses Controller')
        console.log('we got houses', AppState.houses)
        _drawHouses()
    }

    createHouse() {
        window.event.preventDefault()
        const formEvent = window.event.target

        console.log('form event')
        const formData = getFormData(formEvent)

        console.log('form data object', formData)

        formEvent.reset()




    }



}