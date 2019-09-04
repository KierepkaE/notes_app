function Foo() {
  this.bar = "baz";
  this.thing = "thingy";
  this.sequence = [1, 2, 3];
  this.string = "Mystring";
}

Foo.prototype.error = function() {
  throw "This is an error";
};

Foo.prototype.notAnError = function() {
  return true;
};

let foo = new Foo();
console.log("toEqual");
console.log("--------------------------------------");

console.log("Should pass: " + expect(foo.bar).toEqual("baz"));
console.log("Should fail: " + expect(foo.bar).toEqual("plop"));

console.log("--------------------------------------");
console.log("toContain - Arrays");
console.log("--------------------------------------");

console.log("Should pass: " + expect(foo.sequence).toContain(2));
console.log("Should fail: " + expect(foo.sequence).toContain(4));

console.log("--------------------------------------");
console.log("toContain - Strings");
console.log("--------------------------------------");

console.log("Should pass: " + expect(foo.string).toContain("Mystring"));
console.log("Should fail: " + expect(foo.string).toContain("SNOT"));

console.log("--------------------------------------");
console.log("notToContain");
console.log("--------------------------------------");

console.log("Should pass: " + expect(foo.sequence).notToContain(4));
console.log("Should fail: " + expect(foo.sequence).notToContain(3));

console.log("--------------------------------------");
console.log("toRaiseError");
console.log("--------------------------------------");

console.log("Should pass: " + expect(foo.error).toRaiseError());
console.log("Should fail: " + expect(foo.notAnError).toRaiseError());

console.log("--------------------------------------");
console.log("notToRaiseError");
console.log("--------------------------------------");

console.log("Should pass: " + expect(foo.notAnError).notToRaiseError());
console.log("Should fail: " + expect(foo.error).notToRaiseError());

console.log("--------------------------------------");
console.log("toRaiseError - with expected message");
console.log("--------------------------------------");

console.log(
  "Should pass: " + expect(foo.error).toRaiseError("This is an error")
);
console.log(
  "Should fail: " + expect(foo.error).toRaiseError("Another error message")
);
console.log(
  "Should pass: " + expect(foo.notAnError).notToRaiseError("This is an error")
);
console.log(
  "Should fail: " + expect(foo.error).notToRaiseError("This is an error")
);

//testing describe and it blocks

describe("#toEqual", function() {
  it("Should return true if foobar equals baz", function() {
    console.log(expect(foo.bar).toEqual("baz"));
  });
});

//testing multiple expects
//this needs to return true if ALL are true &&
//this needs to return false if one is false ||
describe("#toEqual", function() {
  it("Should return true if ALL are true", function() {
    console.log(expect(foo.bar).toEqual("baz"));
    console.log(expect(foo.thing).toEqual("thingy"));
  });

  it("Should return false if foo.bar does not equal baz", function() {
    console.log(expect(foo.bar).toEqual("plop"));
  });
});
