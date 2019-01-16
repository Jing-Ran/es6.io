# Summary

1. Prototype Inheritance

    When you put a method on the original constructor, it will be inherited by the rest of them.
    
2. Creating a Class

    Two ways to create a class
    
    * Class declaration 
        Using key word `class` followed by the class name and a class block.
        
        ```
        class Dog {
            ...
        }
        ```
    
    * Class expression

        ```
        const Dog = class {
            ...
        }
        ```
        
    When you create a class, a method is required is `constructor`, which is what happens when someone creates a new version.
    
3. Static method and Instance method

    Instance methods can be called on individual instances of the class.

    Static methods are invoked on the constructor rather than on instances of the class. Often used to create utility fns.y8 
    
    ```
    class Dog {
        constructor(name, breed) {
          this.name = name;
          this.breed = breed;
        } 
        // instance method 
        bark() {
          console.log(`Bark Bark! My name is ${this.name}`);
        }
        // static method
        static info() {
          console.log('Dogs are the best');
        }
    }
    ```
    
4. Getter and setter

    We don't call getters/setters as a fn:
    
    ```
    class Dog {
        constructor(name, breed) {
          this.name = name;
          this.breed = breed;
        } 
        
        bark() {
          console.log(`Bark Bark! My name is ${this.name}`);
        }
        
        get description() {
          return `${this.name} is a ${this.breed} type of dog`;
        }
        
        set nicknames(value) {
          this.nick = value.trim();
        }
        get nicknames() {
            return this.nick;
        }
    }
      
    const sunny = new Dog('Sunny', 'Golden Doodle');
    
    sunny.bark();
    console.log(sunny.description);
    
    sunny.nicknames = 'sun';
    console.log(sunny.nicknames);
    ```
    
5. `super`

    Call the thing that you are extending. 

       
    
    
    
    
