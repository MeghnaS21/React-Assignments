const car={
    'brand':"lamborghini",
    'speed': 0,

    acelerate: function(value){
        return value;
    },

    brake: function(){
        var brakeValue;
        return brakeValue;
    },

    describe: function(){
        var describeCar;
        return describeCar;
    },
    status: function(){
        console.log(brand+" is running at "+this.speed+" km/h")
    }
};


// car.brand="lamborghini";
// car.speed = 356;
console.log(car.status());
