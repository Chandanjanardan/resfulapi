const jwt= require("jsonwebtoken")
function authorization(name){
    payload={
        cliendid:"123",
        clientsec:"3111230"
    }
    const token =jwt.sign({payload},"jwtprivatekey");
    return token
}
authorization()

module.exports=authorization;