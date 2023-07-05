class user {
    //hacemos el constructor para nuestros objetos
    constructor(name, id, account, password) {
        this._name = name;
        this._id = id;
        this._account = account;
        this._password = password;
    }
    //creamos nuestro metodo para validar la identidad del usuario
    validateUser(name, id, password) {
        if (name == "MARIA" && id == "12345" && password == "123456") {
            option = person1;
            return true;
        } else {
            if (name == "LUIS" && id == "23456" && password == "234567") {
                option = person2;
                return true;
            } else {
                if (name == "CAMILA" && id == "34567" && password == "345678") {
                    option = person3;
                    return true;
                } else {
                    console.log(
                        "los datos son incorrectos, porfavor verifiquelos e intente de nuevo"
                    );
                    return false;
                }
            }
        }
    }
    //se crea  el metodo para obtener el saldo de nuestra cuenta
    get account() {
        return this._account;
    }
    // se crea el metodo para modificar el saldo de nuestra cuenta
    set account(newAccount) {
        this._account = newAccount;
        return newAccount;
    }
}
// creamos la duncion para validar que el usuario ingrese un saldo correcto
function validateAccount(account, newAccount) {
    let validateAccount1 = account + newAccount;
    let validateAccount2 = newAccount - account;
    if (
        (validateAccount1 < 990 && validateAccount1 > 10) == true ||
        (validateAccount2 < 990 && validateAccount2 > 10) == true
    ) {
        return true;
    } else {
        return false;
    }
}
//pedimos los datos para ingresar del usuario
let nameOption = prompt("Ingrese su nombre de usuario").toUpperCase();
let idOption = prompt("Ingrese su id de usuario");
let passwordOption = prompt("Ingrese su password de usuario");

//creamos los objetos de nuestra clase usuario
let person1 = new user("MARIA", "12345", 10, "123456");
let person2 = new user("LUIS", "23456", 50, "234567");
let person3 = new user("CAMILA", "34567", 268, "345678");
let option = new user(nameOption, idOption, passwordOption);

//iniciamos la validcion para poder hacer las respectivas operaciones en nuestra cuenta
if (option.validateUser(nameOption, idOption, passwordOption)) {
    console.log(
        "le damos la bienvenida señor(a) ",
        nameOption,
        " a nuestro cajero autmatico \n",
        "por favor indequenos cual de las siguientes operaciones desea realizar \n",
        "oprimiendo el nimero correspondiente a la operacion \n",
        "1. consultar saldo de su cuenta\n",
        "2. cargar saldo a su cuenta \n",
        "3. retirar saldo de su cuenta \n",
        "4. salir "
    );
    let operacion = prompt(
        "ingrese el numero de la operacion que desea realizar"
    );
    if (operacion == 1) {
        console.log(
            "buenbenido ",
            nameOption,
            " su saldo actual es de: ",
            option.account
        );
    } else {
        if (operacion == 2) {
            let load = prompt(
                "ingrese el valor que desea cargar en su cuetnta"
            );
            load = parseInt(load);
            // option.account = load + option.account;
            // console.log(option.account);
            if (validateAccount(load, option.account) == true) {
                option.account = load + option.account;
                console.log(
                    "buenbenido ",
                    nameOption,
                    " su saldo actual es de: ",
                    option.account
                );
            } else {
                console.log(
                    "porfaor ingrese un valor valido, recuerde que es minimo $10 y maximo $990"
                );
            }
        } else {
            if (operacion == 3) {
                let load = prompt(
                    "ingrese el valor que desea retirar en su cuetnta"
                );
                load = parseInt(load);
                // option.account = option.account - load;
                // console.log(option.account);
                if (validateAccount(load, option.account) == true) {
                    option.account = option.account - load;
                    console.log(
                        "buenbenido ",
                        nameOption,
                        " su saldo actual es de: ",
                        option.account
                    );
                } else {
                    console.log(
                        "porfaor ingrese un valor valido, recuerde que es minimo $10 y maximo $990"
                    );
                }
            }
        }
    }
}
