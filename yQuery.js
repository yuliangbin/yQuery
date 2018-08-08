;(function() {
	var 
		_jQuery = window.jQuery,//存储外部jQuery变量
		_$ = window.$,//存储外部$变量
		
		jQuery = window.$ = window.jQuery = function (selector,context) {
			return new jQuery.fn.init(selector,context);//产生一个init()的实例
		};
		
	jQuery.fn = jQuery.prototype = {
		
		constructor: jQuery,
		
		init: function(selector,context) {	//定义选择器的构造器
			selector = selector || document;	//默认值为document
			context = context || document;	//默认值为document
			if (selector.nodeType) {	//如果传入的参数是DOM节点
				this[0] = selector;		//把参数节点传递给实例对象的数组
				this.length = 1;		//设置长度为1
				this.context = selector;
				return this;	//返回jQuery对象
			}
			if (typeof selector === 'string') {//如果传进来的是标签字符串
				let ele = context.getElementsByTagName(selector);	//获取指定名称的元素
				for (let i = 0; i < ele.length; i++) {	//将获取到的元素放入实例对象中
					this[i] = ele[i];
				}
				this.length = ele.length;
				return this;
			} else {
				this.length = 0;
				this.context = context;
				return this;
			}
		},
	
		//定义jQuery中的html()方法
		html: function(val) {
			if (val) {
				for (let i = 0; i < this['length']; i++){
					//console.log(this);
					this[i].innerHTML = val; 
					//console.log('success');
				}
			}else {
				return this[0].innerHTML;
			}	
		},
		
		name : "jQuery",
		
		size : function () {
			return this.length;
		}
	};
	
	//功能扩展函数，接受一个对象作为参数(实现批量的扩展)
	jQuery.extend = jQuery.prototype.extend = function (obj) {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				this[key] = obj[key];
			}
		}
		return this;
	}
	
	//解决命名冲突的问题
	jQuery.noConflict = function( deep ) {
			window.$ = _$;//将外部变量又重新赋值给$
			if ( deep )
				window.jQuery = _jQuery;//将外部变量又重新赋值给jQuery
			return this;
	};
	
	//在实例化前，将init.prototype覆盖为jQuery.prototype
	jQuery.prototype.init.prototype = jQuery.prototype;

})(window);