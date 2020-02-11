const Decorator = function(){
    this.paintStock = []
}

Decorator.prototype.addPaint = function(paint){
    this.paintStock.push(paint);
}

Decorator.prototype.checkPaint = function(){
    let total = 0 
    for (let paint of this.paintStock ){
        total += paint.litres
    } 
    return total
}

Decorator.prototype.enoughPaint = function (room) {
    if (room.area <= this.checkPaint()){
        return true 
    } else {
        return false
    }
}

Decorator.prototype.paintRoom = function (room){
if (this.enoughPaint(room) === true){
    room.finish()
} else 
    return "not enough paint"
}


module.exports = Decorator; 