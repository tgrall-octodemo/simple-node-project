const express = require('express')
const app = express()
const port = 8080

const x = "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";

app.get('/', (req, res) => {
  res.send('Hello World from Node!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
