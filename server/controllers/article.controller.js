const Article = require('../models/article.model')

/** Создание */
module.exports.create = async (req, res) => {
  try {
    const article = new Article(req.body)
    await article.save()
    res.status(201).json({ message: 'Запись создана!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось создать запись!', error })
  }
}

/** Обновление */
module.exports.update = async (req, res) => {
  const $set = req.body
  try {
    await Article.findOneAndUpdate(
      { _id: req.params.id },
      { $set },
      { new: true }
    )
    res.json({ message: 'Данные обновленны!' })
  } catch (error) {
    res.status(500).json({ message: 'Не обновить данные!', error })
  }
}

/** Удаление */
module.exports.remove = async (req, res) => {
  try {
    await Article.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Запись удалена!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось удалить запись!', error })
  }
}

/** Вернуть по id */
module.exports.getById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
    res.status(200).json(article)
  } catch (error) {
    req.status(500).json({ message: 'Не удалось полуичть запись!', error })
  }
}

/** Вернуть весь список */
module.exports.getAll = async (req, res) => {
  try {
    const apis = await Article.find().sort({ created: -1 })
    res.json({ data: apis })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить список записей!' })
  }
}
