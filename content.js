if (document.readyState === 'complete' || document.readyState === 'interactive') {
    replaceDT();
} else {
    document.addEventListener('DOMContentLoaded', replaceDT);
}

function replaceDT() {
    chrome.storage.sync.get({
        wordDT: 'Not My President',
        replaceDT: false
      }, function(options) {
        if (options.replaceDT) {
            htmlReplace();
            window.setInterval(function() {
                htmlReplace(options.wordDT);
            }, 5000);
        }
    });
}

function htmlReplace(replace) {
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/donald\sjohn\strump/gi, replace);
                replacedText = replacedText.replace(/donald\sj[.]\strump/gi, replace);
                replacedText = replacedText.replace(/donald\strump/gi, replace);
                replacedText = replacedText.replace(/Trump/g, replace);
                replacedText = replacedText.replace(/president\strump/gi, 'president ' + replace);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

