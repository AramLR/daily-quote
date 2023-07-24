// Get daily quote

import { fetch } from '@tauri-apps/api/http'

// Function to get daily quote
async function getDailyQuote() {
  try {
    // Make a get request to the zenquotes api
    const res =
      await fetch(
        'https://zenquotes.io/api/today',
        {
          method: 'GET',
          timeout: 60
        }
      )

    if (!res.ok) {
      throw Error(
        "Couldn't get 200 code from API"
      )
    }

    const data =
      res.data[0]

    const quote = data.q
    const author = data.a

    return {
      quote,
      author
    }

    // Prevent any error
  } catch (error) {
    return error
  }
}

export { getDailyQuote }
