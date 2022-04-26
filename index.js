export class Logger {
  static red(msg) {
    console.log(`%c ${msg}`, "color:red");
  }
  static yellow(msg) {
    console.log(`%c ${msg}`, "color:yellow");
  }
  static blue(msg) {
    console.log(`%c ${msg}`, "color:blue");
  }
}
