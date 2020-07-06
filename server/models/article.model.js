const { model, Schema } = require('mongoose')

const articleSchema = new Schema({
  title: {
    type: String,
    maxlength: 255,
    require: true,
    index: true
  },
  desc: {
    type: String,
    default: ''
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('articles', articleSchema)
