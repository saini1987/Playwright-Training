// Run Time Polymorphism(overriding) : having same method name in parent and child class with different implementation is called run time polymorphism or method overriding

class parent {

    add(a: number, b: number): number {
        return a + b;
    }

}

class child extends parent {

    add(a: number, b: number,c?:number): number {
        if(c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

let obj1 = new parent();
console.log(obj1.add(10, 20));

let obj2 = new child();
console.log(obj2.add(10, 30));
console.log(obj2.add(10, 30, 10));