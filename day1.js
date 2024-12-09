// Class

class Car{
  constructor(name,rate){
      this.name=name
      this.price=rate
  }
  Cout(){
      return `${this.name} and ${this.price}`
  }
}

class model extends Car{
  constructor(name,rate,model){
      super(name,rate)
      this.model=model
  }
  
  C_Cout(){
      return ` ${this.name} and ${this.price} ${this.model} `
      //`${this.name} and ${this.price}`
  }
}
const C= new model("GWagon",200,"E61")
console.log(C.C_Cout(),C.Cout())


//Arrow Function
ABC = (value) => `Hello ${value}`
console.log(ABC(987472934))