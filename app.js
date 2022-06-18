const express = require('express')
const connection = require("./database");
const app = express()
app.use(express.json());
const port = 5000


app.get("/", (req, resp) => {
  connection.query(`select * from card_filter`, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})