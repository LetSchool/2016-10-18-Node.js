var events = require('events');
var util = require('util');

var MyObject = function() {
	this.count = 0;
};

// 直接繼承 EventEmitter 來讓我們的原型得到事件驅動的能力
util.inherits(MyObject, events.EventEmitter);

MyObject.prototype.touch = function() {
	this.count++;
	this.emit('touched', this.count);
};

var myObj = new MyObject();

myObj.on('touched', function(count) {
	console.log('Object was touched already. ' + count);
});

myObj.touch();
myObj.touch();
myObj.touch();
