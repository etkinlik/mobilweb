const choo = require('choo')

const html = require('choo/html')
const log = require('choo-log')

const f7 = require('framework7')

const rooLayout =  (child) => {
    return (state, emit) => html `
    <body>
        ${child(state, emit)}
    </body>`
}

const app = choo()

app.use(log())

app.route('/', rooLayout(function () {
    return console.log('hello world')
}))

app.route('iletisim', rooLayout(function () {
    return console.log('iletisim sayfası')
}))

app.mount('body')
