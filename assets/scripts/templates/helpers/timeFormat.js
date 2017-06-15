'use strict'
const moment = require('moment')

const timeFormat = (date, format) => {
  const di = parseInt(date)
  const time = moment(di)
  return time.format(format)
}

module.exports = timeFormat
