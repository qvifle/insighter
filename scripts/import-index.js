(function () {

	const importPath = /*@__PURE__*/ JSON.parse('"scripts/index.js"');

	import(chrome.runtime.getURL(importPath));

})();
