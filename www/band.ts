/// <reference path="src/types/cordova.d.ts" />

module cordova.plugins.band {
	export module util {
		export function extend<T, U>(first: T, second: U): T & U {
		    let result = <T & U> {};
		    for (let id in first) {
		        result[id] = first[id];
		    }
		    for (let id in second) {
		        result[id] = second[id];
		    }
		    return result;
		}
	}
}

cordova.define('band', (require, exports, module) => {
	module.exports = cordova.plugins.band;
});