var pyBindings = require("bindings")("py_bindings");

var os = pyBindings.import("os");
console.log(os.path.basename(os.getcwd()))

pyBindings.eval("print", "pasu55");
