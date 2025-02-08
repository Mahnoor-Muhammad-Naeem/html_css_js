const quotes = [
"The only way to do great work is to love what you do.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Believe you can and you're halfway there.",
"The future belongs to those who believe in the beauty of their dreams.",
"Your time is limited, don't waste it living someone else's life.",
"The only limit to our realization of tomorrow is our doubts of today.",
"Don't watch the clock; do what it does. Keep going.",
"Don’t be afraid to give up the good to go for the great.",
"Hardships often prepare ordinary people for an extraordinary destiny.",
"The best way to predict the future is to create it."
      ]
      
      const usedIndexes = new Set()
      const quoteElement = document.getElementById("quote")
      
      function generateQuote() {
          if (usedIndexes.size >= quotes.length) {
              usedIndexes.clear()
          }
      
          while (true) {
              const randomIdx = Math.floor(Math.random() * quotes.length)
      
              if (usedIndexes.has(randomIdx)) continue
      
              const quote = quotes[randomIdx]
              quoteElement.innerHTML = quote;
              usedIndexes.add(randomIdx)
              break
          }
      }
