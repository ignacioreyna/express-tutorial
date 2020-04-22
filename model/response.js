class Response {
    constructor(success, msg, payload=undefined) {
        this.success = success;
        this.msg = msg;
        this.payload = payload;
    }
}

module.exports = {
    Response,
}