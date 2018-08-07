;(function() {
	var jQuery = window.$ = window.jQuery = function () {
		return new jQuery.fn.init();//产生一个init()的实例
	};
	jQuery.fn = jQuery.prototype = {
		init: function() {
			return this;
		},
		name : "jQuery",
		size : function () {
			return this.length;
		}
	};
	//在实例化前，将init.prototype覆盖为jQuery.prototype
	jQuery.prototype.init.prototype = jQuery.prototype;
})(window);