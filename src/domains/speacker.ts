export default class Speaker {
  private _name: string;

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
