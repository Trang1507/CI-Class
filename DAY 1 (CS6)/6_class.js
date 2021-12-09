class Car {
    name;
    speed;
    brand;
    color;

    constructor(name,speed,brand,color){
        this.name = name;
        this.speed = speed;
        this.brand = brand;
        this.color = color;
    }

    paint = (newColor) => {
        console.log('CURRENT COLOR ' + this.color + '.Changing to '+newColor)
        this.color = newColor;
    }
    drive (){
        console.log(this.name + ' is driving at ' +this.speed + ' km/h')
    }
}

const fendi = new Car ('Fendi',100,'VinFast','black')
const luxa = new Car ('luxa',100,'VinFast','white')

fendi.drive();
luxa.drive();

fendi.paint('blue')
luxa.paint('red')