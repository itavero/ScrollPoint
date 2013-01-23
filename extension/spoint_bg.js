// Hook up event
chrome.webNavigation.onCompleted.addListener(onNavCompleted);

// Run on navigation completed
function onNavCompleted(details) {
	chrome.tabs.executeScript(details.tabId, {
		'file': 'spoint.js',
		'runAt': 'document_start'
	});
}