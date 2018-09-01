const express = require('express')
const request = require('superagent')

const db = require('./db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.getBooks()
    .then(books => {
      res.json({books})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/book/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getBookById(id)
    .then(book => {
      res.json({book})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// router.get('/toread', (req, res) => {
//   db.getBooksByStatus('toread')
//     .then(books => {
//       res.json({books})
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })

router.get('/:status', (req, res) => {
  const status = req.params.status
  db.getBooksByStatus(status)
    .then(books => {
      res.json({books})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/', (req, res) => {
  db.updateStatus(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addBook(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/subreddit/:subreddit', (req, res) => {
  request
    .get(`http://www.reddit.com/r/${req.params.subreddit}.json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router
