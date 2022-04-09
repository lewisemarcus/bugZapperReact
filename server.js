const express = require("express")

const PORT = process.env.PORT || 3001
const app = express()
app.get("/", (req, res) => {
    return
})
app.use(express.static('statics'))

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});