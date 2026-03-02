// Polymorphism: Polymorphism is a concept of having multiple implemenation with one single method.

// Two types of polymorphism:
// 1. Compile time polymorphism (Method overloading) --> having multiple methods with same name but different parameters in the same class. (Not supported in TypeScript)
// 2. Run time polymorphism (Method overriding) --> having a method in the child class with the same name and parameters as in the parent class. (Supported in TypeScript)

// Method overriding example:
class Math{

    // add(a: number, b: number): number {
    //     return a + b;
    // }

    // add(a: string, b: string): string {
    //     return a + b ;
    // }

    // internally Typescript  convert inot javaScript as below:

    // add(a,b){
    //     ]return a + b;
    // }


    // alternate 1
    add(a: any, b: any): any {
        return a + b;
    }

        // alternate 2
    sum(a: any, b?: any,c?: any): any {
        return a + b + c;
    }
}