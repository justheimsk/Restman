export class Observable {
  public observers: Array<() => any> = [];

  public subscribe(cb: () => any) {
    this.observers.push(cb);
  }

  public notify() {
    for (const observer of this.observers) {
      observer();
    }
  }
}
