// Google Apps Script - updated to support JSONP and GET requests

function doGet(e) {
  const action = e.parameter.action;
  const callback = e.parameter.callback; // JSONP callback

  let result;

  if (action === 'getCards') {
    result = getCards();
  } else if (action === 'addCard') {
    result = addCard(e.parameter);
  } else {
    result = { error: 'Invalid action' };
  }

  // If JSONP callback provided, wrap response
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + JSON.stringify(result) + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function getCards() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const cards = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) {
      cards.push({
        id: data[i][0],
        designId: data[i][1],
        designTitle: data[i][2],
        designIcon: data[i][3],
        designGradient: data[i][4],
        sender: data[i][5],
        recipient: data[i][6],
        message: data[i][7],
        timestamp: data[i][8]
      });
    }
  }

  cards.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  return { cards: cards };
}

function addCard(params) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['ID', 'Design ID', 'Design Title', 'Design Icon', 'Design Gradient', 'Sender', 'Recipient', 'Message', 'Timestamp']);
  }

  sheet.appendRow([
    params.id,
    params.designId,
    params.designTitle,
    params.designIcon,
    params.designGradient,
    params.sender,
    params.recipient,
    params.message,
    params.timestamp
  ]);

  return { success: true };
}
