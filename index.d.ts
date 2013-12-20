declare module 'promisefy' {
	import stream = require('stream');
	function fold<T>(x: Q.Promise<Q.Promise<T>>): Q.Promise<T>;
	function fileExists(path: string): Q.Promise<boolean>;
	function mkdirp(path: string): Q.Promise<string>;
	function pipe(is: stream.ReadableStream, os: stream.WritableStream): Q.Promise<number[]>;
	function writeFile(filename: string, data: any): Q.Promise<number[]>;
	function readFile(filename: string): Q.Promise<NodeBuffer>;
}
