class car{
    constructor(brand, speed){
        this.brand=brand;
        this.speed=speed
    }

    acelerate(value){
        console.log('Car is accelerating with ${value} km/h')
    }
    break(value){
        console.log('Car is accelerating with ${value} km/h')
    }
    describe(){
        console.log("This car is the latest model of our brand")
    }

    status(){
        console.log("This car is the latest model of our brand")
    }
}

const obj1=new car("Lamborghini", 356, "moving")