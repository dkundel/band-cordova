/// <reference path="src/types/cordova.d.ts" />

module BandPlugin {
	export module util {
		export function extend<T, U>(first: T, second: U): any /*T & U*/ {
		    let result = /*<T & U>*/ <any> {};
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

declare var module: any;
module.exports = BandPlugin;