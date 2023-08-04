const handle404Error = function(req,res){
    res.status(404);
    res.send(["ERROR 404, Não Encontrado"])
}

module.exports = handle404Error;