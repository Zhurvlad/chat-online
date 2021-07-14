export default ({isAuth, values, errors}) => {

    const rules = {
        email:(value) => {
            if (!value) {
                errors.email = 'Введите Е-Mail';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Не верный E-Mail';
            }
        },
        password:(value) => {
            if (!value) {
                errors.password = 'Введите пароль';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.password =  isAuth ? "Неверный пароль" :'Слишком лёгкий пароль';
            }
        }
    }

   Object.keys(values).forEach(
       key =>rules[key] && rules[key](values[key]))
}

