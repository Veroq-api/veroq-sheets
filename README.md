# VEROQ Sheets

Pull live financial data into Google Sheets. Prices, technicals, earnings, sentiment — all with one function.

## Setup

1. Open Google Sheets
2. Extensions → Apps Script
3. Paste the code from `sheets.js`
4. Set your API key: `VEROQ_API_KEY` in Script Properties
5. Use `=VEROQ_ASK("NVDA price")` in any cell

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
