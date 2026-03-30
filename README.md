# VEROQ Sheets

[![License](https://img.shields.io/badge/license-MIT-2EE89A)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-2EE89A)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![VEROQ](https://img.shields.io/badge/powered%20by-VEROQ-2EE89A)](https://veroq.ai)

Pull live financial data into Google Sheets. Prices, technicals, earnings, sentiment — all with one function.

## Setup

1. Open any Google Sheet
2. Go to **Extensions > Apps Script**
3. Delete the default code and paste the contents of `sheets.js`
4. Go to **Project Settings > Script Properties**
5. Add property: `VEROQ_API_KEY` = your key from [veroq.ai/pricing](https://veroq.ai/pricing)
6. Save and return to your sheet

## Example

| | A | B |
|--|---|---|
| 1 | **Ticker** | **Price** |
| 2 | AAPL | `=VEROQ_PRICE("AAPL")` -> 248.80 |
| 3 | NVDA | `=VEROQ_PRICE("NVDA")` -> 167.46 |
| 4 | Signal | `=VEROQ_SIGNAL("AAPL")` -> LEAN_BUY (63/100) |
| 5 | Verify | `=VEROQ_VERIFY("AAPL beat earnings")` -> SUPPORTED (85%) |

## Functions

| Function | Example | Returns |
|----------|---------|---------|
| `=VEROQ_ASK(question)` | `=VEROQ_ASK("NVDA price")` | Summary text |
| `=VEROQ_PRICE(ticker)` | `=VEROQ_PRICE("AAPL")` | Current price |
| `=VEROQ_CHANGE(ticker)` | `=VEROQ_CHANGE("TSLA")` | Change % |
| `=VEROQ_RSI(ticker)` | `=VEROQ_RSI("NVDA")` | RSI value |
| `=VEROQ_SIGNAL(ticker)` | `=VEROQ_SIGNAL("MSFT")` | Trade signal |
| `=VEROQ_VERIFY(claim)` | `=VEROQ_VERIFY("AAPL beat earnings")` | Verdict |

## Links

- [VEROQ](https://veroq.ai) | [API Reference](https://veroq.ai/api-reference) | [Pricing](https://veroq.ai/pricing)