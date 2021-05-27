class Stack {
  constructor(public frames: any[] = []) {}

  public isEmpty(): boolean {
    return this.frames.length === 0;
  }

  public push(value: any): void {
    const index = this.frames.length;
    this.frames[index] = value;
  }

  public pop(): any {
    const removedValue = this.frames[this.frames.length - 1];
    this.frames.splice(this.frames.length - 1, 1);
    return removedValue;
  }
}

const stack: Stack = new Stack();
stack.push("Epps");
console.log(stack);



