const Paint = function (litres) {
    this.litres = litres;

}
Paint.prototype.empty = function(){
    this.litres = 0
}

Paint.prototype.checkIfEmpty = function(){
    
    if (this.litres === 0){
    return true 
    }
    else {
        return false
    }
}
module.exports = Paint;