console.log(Math.floor(Math.random() * 100) + 1); // Стащила с developer.mozilla из теории про Math-функции:)
String.prototype.trimEllip = function (length) {
  return this.length > length ? this.substring(0, length) + "..." : this;
} // Нашла на codegrepper, но не уверена, что это то, что нужно
