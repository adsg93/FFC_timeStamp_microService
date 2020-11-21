let moment = require('moment')

let timestamp = (stamp) => {

    //check if the stamp is a valid date input and not string
    let date = new Date(stamp)
    let isValid = moment(date).isValid();

    if (isValid) {

        //check if the date is in UTC or UNIX. If true UTC, else UNIX
        let isUTC = moment(stamp).isValid()

        //Conditional response based on the time format 
        if (isUTC) {
            let u = new Date(stamp)
            return {
                unix: u.getTime(),
                utc: u.toUTCString(),
            }
        } else {
            let v = new Date(stamp * 1)
            return {
                unix: v.getTime(),
                utc: v.toUTCString(),
            }
        }
    } else{
        return{
            error: 'invalid input!'
        }
    }
}
module.exports = timestamp