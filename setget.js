class Dog {
    setName(name){
        this.name = name;
    }
    getName(){
        console.log(this.name)
    }
    getSound(){
        console.log(this.sound);
    }
    setSound(sound){
        this.sound = sound;
    }
    
}
var dd = new Dog();
dd.setName("puppy");
dd.getName();
dd.setSound("bowbow");
dd.getSound();