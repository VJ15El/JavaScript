class Person
{
    constructor(name,age,...args)
    {
        this.name = name,
        this.age = age,
        this.args = args
    }
}

const details = new Person("Vijay",28,weight=55,gender="Male",height=175,profession="Developer")
console.log(details);