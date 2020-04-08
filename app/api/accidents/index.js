const { Router } = require('express')

const { Accident } = require('../../models')

const router = new Router()

router.get('/', (req, res) => {
  try {
    const accident = {"accidents":[...Accident.get()]}
    res.status(200).json()
  } catch (err) {
    res.status(500).json(err)
  }
})
router.get('/:accidentId', (req, res) => {
  try {
    res.status(200).json(Accident.getById(req.params.accidentId))
  } catch (err) {
    res.status(500).json(err)
  }
})
router.post('/', (req, res) => {
  try {
    const accident = Accident.create({ ...req.body })
    res.status(201).json(accident)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})




module.exports = router