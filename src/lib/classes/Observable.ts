export class Observable<T = void> {
  public observers: Array<(arg: T) => void> = [];

  public subscribe(cb: (arg: T) => void) {
    this.observers.push(cb);
  }

  public notify(arg?: T) {
    for (const observer of this.observers) {
      observer(arg || (null as T));
    }
  }
}
