/**
 * VEROQ for Google Sheets
 * Pull live financial intelligence into your spreadsheet.
 *
 * Setup: Add your VEROQ_API_KEY to Script Properties
 * (File → Project properties → Script properties)
 */

const API_BASE = "https://api.veroq.ai/api/v1";

function getApiKey() {
  return PropertiesService.getScriptProperties().getProperty("VEROQ_API_KEY") || "";
}

function veroqFetch(path, options = {}) {
  const url = API_BASE + path;
  const resp = UrlFetchApp.fetch(url, {
    headers: { "X-API-Key": getApiKey(), "Content-Type": "application/json" },
    muteHttpExceptions: true,
    ...options,
  });
  return JSON.parse(resp.getContentText());
}

/**
 * Ask any financial question.
 * @param {string} question The question to ask
 * @return {string} Summary answer
 * @customfunction
 */
function VEROQ_ASK(question) {
  if (!question) return "Enter a question";
  const data = veroqFetch("/ask", {
    method: "post",
    payload: JSON.stringify({ question }),
  });
  return data.summary || "No answer available";
}

/**
 * Get current price for a ticker.
 * @param {string} ticker Stock ticker symbol
 * @return {number} Current price
 * @customfunction
 */
function VEROQ_PRICE(ticker) {
  if (!ticker) return "Enter a ticker";
  const data = veroqFetch("/ticker/" + encodeURIComponent(ticker));
  return data.price?.current || "N/A";
}

/**
 * Get price change percentage.
 * @param {string} ticker Stock ticker symbol
 * @return {number} Change percentage
 * @customfunction
 */
function VEROQ_CHANGE(ticker) {
  if (!ticker) return "Enter a ticker";
  const data = veroqFetch("/ticker/" + encodeURIComponent(ticker));
  return data.price?.change_pct || 0;
}

/**
 * Get RSI for a ticker.
 * @param {string} ticker Stock ticker symbol
 * @return {number} RSI value
 * @customfunction
 */
function VEROQ_RSI(ticker) {
  if (!ticker) return "Enter a ticker";
  const data = veroqFetch("/ticker/" + encodeURIComponent(ticker) + "/technicals");
  return data.latest?.rsi_14 || data.signal_summary?.rsi_14 || "N/A";
}

/**
 * Get trade signal for a ticker.
 * @param {string} ticker Stock ticker symbol
 * @return {string} Signal (buy/sell/hold)
 * @customfunction
 */
function VEROQ_SIGNAL(ticker) {
  if (!ticker) return "Enter a ticker";
  const data = veroqFetch("/ask", {
    method: "post",
    payload: JSON.stringify({ question: ticker + " trade signal" }),
  });
  const ts = data.trade_signal;
  return ts ? ts.action.toUpperCase() + " (" + ts.score + "/100)" : "N/A";
}

/**
 * Verify a claim.
 * @param {string} claim The claim to verify
 * @return {string} Verdict with confidence
 * @customfunction
 */
function VEROQ_VERIFY(claim) {
  if (!claim) return "Enter a claim";
  const data = veroqFetch("/verify", {
    method: "post",
    payload: JSON.stringify({ claim }),
  });
  return data.verdict ? data.verdict.toUpperCase() + " (" + Math.round(data.confidence * 100) + "%)" : "Error";
}
