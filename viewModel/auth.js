class RequestAuthRegister {
    constructor() {
        this.email = "";
        this.password = "";
        this.id = 0;
    }
}
class ResponseAuthRegister {
    constructor() {
        this.hash = "";
    }
}
class RequestAuthAuthenticate {
    constructor() {
        this.user = "";
        this.password = "";
    }
}
class ResponseAuthAuthenticate {
    constructor() {
        this.token = "";
    }
}
module.exports.ResponseAuthRegister = ResponseAuthRegister;
module.exports.RequestAuthRegister = RequestAuthRegister;
module.exports.RequestAuthAuthenticate = RequestAuthAuthenticate;
module.exports.ResponseAuthAuthenticate = ResponseAuthAuthenticate;