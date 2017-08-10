var html = require('choo/html')
var choo = require('choo')

var app = choo()
app.use(countStore)
app.route('/', mainView)
app.html('body')

function mainView (state, emit) {
    return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `

    function onclick () {
        emit('increment', 1)
    }
}

function countStore (state, emitter) {
    state.count = 0
    emitter.on('increment', function (count) {
        state.count += count
        emitter.emit('render')
    })
}