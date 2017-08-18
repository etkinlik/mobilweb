const alert = require('sweetalert2')

module.exports = (state, emitter) => {

    state.global = {
        info : (message) => {
            alert({
                title: 'Bilgi',
                text: message,
                type: 'info',
            })
        },
        success : (message) => {
            alert({
                title: 'Başarılı',
                text: message,
                type: 'success',
            })
        },
        error : (message) => {
            alert({
                title: 'Hata',
                text: message,
                type: 'error',
            })
        }
    }
}