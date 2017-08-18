const store = require('../store')

module.exports = (state, emitter) => {

    //state veri tabanı name space gibi düşünebiliriz
    state.index = {
        register: {
            email: '',
            password: '',
            gender: '',
            birthday: '',
            city: '',
            state: '',
            profession: '',
            maritalStatus: ''
        }
    }

    emitter.on('index:register:attempt', () => {
        console.log(state.index.register)

        if (state.index.register.email === "") {
            alert('E posta boş geçilemez')
            return false;
        }

        if (state.index.register.password === "") {
            alert('Şifre boş geçilemez')
            return false;
        }

        if (state.index.register.gender === "") {
            alert('Cinsiyet boş geçilemez')
            return false;
        }

        if (state.index.register.city === "") {
            alert('Şehir boş geçilemez')
            return false;
        }


        if (state.index.register.state === "") {
            alert('İlçe boş geçilemez')
            return false;
        }

        if (state.index.register.profession === "") {
            alert('Meslek boş geçilemez')
            return false;
        }

        if (state.index.register.maritalStatus === "") {
            alert('Medeni durum boş geçilemez')
            return false;
        }
        store.create('register', {
            'email': state.index.register.email,
            'password': state.index.register.password,
            'gender': state.index.register.gender,
            'birth_day': state.index.register.birthday,
            'city_id': state.index.register.city,
            'province_id': state.index.register.state,
            'profession_id': state.index.register.profession,
            'marital_status': state.index.register.maritalStatus

        }).then((user) => {
            console.log('success');
            state.global.success('Başarılı bir şekilde kayıt oldunuz. Haydi başlayalım.')

        }).catch((error) => {
            console.log('ERROR')
            state.global.error(error.response.data.message)

        });

    })
}