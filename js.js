function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var getElementByXpath('//*[@id="ember3997"]/div[1]/div/div/div/div')