function main() {
 var html = HtmlService.createHtmlOutputFromFile('index');
  html.setWidth(250);
  html.setHeight(310);
  SpreadsheetApp.getUi().showModelessDialog(html, '表單抽獎程式');
}

function setUserData(data) {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperties(data)
}

function getUserData() {
  var userProperties = PropertiesService.getUserProperties();
  return userProperties.getProperties()
}

function resetUserData() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteAllProperties();
}

function lotto(cellId, counter, isWriteToColumn, writeColumn, list, minNum, maxNum) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getRange(cellId);
  if (isWriteToColumn) {
    range.setValue(counter);
  }
  sheet.setActiveRange(range);

  setUserData({
    counter: counter,
    isWriteToColumn: isWriteToColumn,
    writeColumn: writeColumn,
    list: list,
    minNum: minNum,
    maxNum: maxNum
  });
}
