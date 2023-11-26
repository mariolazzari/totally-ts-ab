function loggedMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext
) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  intro(guest: string) {
    console.log(`Hello ${guest}, my name is ${this.name}.`);
  }
}

const person = new Person("Mario");
person.intro("Mariarosa");
