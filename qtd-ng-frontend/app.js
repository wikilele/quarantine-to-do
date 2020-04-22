const express = require('express')
const path = require('path')

const app = express()

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/qtd-ng-frontend'))

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/qtd-ng-frontend/index.html'));
})

var port = process.env.NG_PORT || 4200
app.listen(port)
console.log('frontend started at: ' + 'localhost' + port)