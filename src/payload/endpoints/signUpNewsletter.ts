import type { PayloadHandler } from 'payload/config'
// import { google } from 'googleapis'
// Define the Google Sheets API scope
// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

// const spreadsheetId = process.env.SPREADSHEET_ID // Add your Google Sheets ID to env variables
export const signUpNewsletter: PayloadHandler = async (req, res) => {
  return res.status(200).json({ message: 'Example' })

  // if (req.method !== 'POST') {
  //   return res.status(405).json({ error: 'Method not allowed' })
  // }
  // try {
  //   // Authenticate using service account credentials
  //   const auth = new google.auth.JWT({
  //     email: 'ww-webapp-api@decoded-pilot-442622-s9.iam.gserviceaccount.com',
  //     key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgzag8k31OuJgV\n/hbljjTzmr0qcTfzFIaLVqfPAmxOaSOJgoQS0t42R5Q+Ow57gtA+q5s7OTWMNRms\nJngJiyXHHP6IY63+Slmq6PhthbSpflIpRXlQHg3lyQDfdm1qXpH++tcTp1FdMWfT\nYJGntajxxIhb0BzAsMBETCMCbIoGA4Jo6TtNenSPh+8Ti+HiITPj1yDI5g33R41f\n0WE8fIuVUnwwSfx6fQMsWVjvCCJLPSwqU/bMBj3geubH1MCdRYRYsFFSDYqbntUs\nQ79+/38KzEWH14fL8AP+6KBYX9Jjl+4d68pvrvcN7QQas1kHgYvMgfpywyFHiQZB\n5iFCHtlHAgMBAAECggEAISurS6ulCqsbfFXoxTu7gpDl+q5WO0d9pZqfjR1T2Czq\nDsCkm/lxq0LCur+V8jZ+3J6rq+DWQfDmNdPNqTJR/avmeZ4OU0llC9N5A6a0KM6N\nBkR1jOhWN5NqIa6dTXbqqO13lm9KYm4Bm+Hsyeq4Sf8fncjlVX5gevY1tpdLNYgJ\nvg2/Sve/R4FtmkxQjo0B4czUY3+rFSGYatGehxuyDH5RwpUz6BsKrzZlwLre7Ci/\nCgHFtjLB1tVEQYG8xBWTr3RXAqmy8SwwxtGHFAjfh0rY5gvK70XIJVgtqa3bjbBK\n1ivHnfxla0ZBfsJTJo4lEckRV4ceFvRW0xBeD2NjsQKBgQDeNSZl31egl1e3tqnj\nQr93OaSA05tiC42ehIF+7XhHkJdttemKxyWfksDLguTWBn5x6DPiiEfGpvjz4QgC\ny1EudiF5uKWzobWENKMpCouuMNSBFPbF8LyxjchFpnKS7WwPnFQHCUiGmgwLhHVJ\nhjHgRonzpauuP9mSSKiniHeJHwKBgQC5QfQ7Y4MTnBGYHRaB/H/4Vjh91CbtgETS\nC/VwCH5dM0APdu5X9dPmN8T1b+nQWUc8ViUCB443HTIhbq/W6gQYSNn5ALpG6UOM\ne+REntUx0jc8/9OnWBwZI2L9s5VSe3UfsfajYhUZospKKgszCCuHF1cfT/h+5td4\nOgSDQTqi2QKBgAriO5E90ULyZr9+2O9is5IZZq9QrgmtWzBqeRVIeF24/VHIWToM\n6xDX1U2iiabaBpN5tiDgX/Og9gyr9wJ8BuvpqVYW7zbPMt7Y3S0DcTgE+EOiTTwA\nwJ1Jvod60Z3UtzhEhfEaSU0eenyN7li9k+/SRKuEb9ZHFlcN7ATYsFItAoGBAIm/\nirRmB96a21I5vrSkZRroMVUOXGuYRpPQJI1LI3p1Uxqsmgh5VzgFG8RLlJVA7QDm\nJNpfd9VvNgk53jF1C9pqwPivG9MCOyHINTD40Rkcb8pBhsUVdL8UWtS9pTgRaENK\n9lMB6SKIstV2caFeX88xAazcr67cQja5HQXjiI/xAoGBAN2mlPWxPfSaGTNkhGUK\nS9hH3XELtujLTGP3cjxQWkX5RDj3QZwRn3HiR7nT9PD1OrEHmInEuXLBayO1QlRf\nQbjmsSghN7oX42shHMl05haDrOrBrYlvvgVyGsah44Bvr8JgOddFSY3C90ec+eh6\nGyWzaGS5FWQaPmHEO7kvf4Vq\n-----END PRIVATE KEY-----\n',
  //     scopes: SCOPES,
  //   })
  //   const sheets = google.sheets({ version: 'v4', auth })
  //   // Extract data from request body
  //   const { values } = req.body // Expecting `values` as a 2D array
  //   if (!values || !Array.isArray(values)) {
  //     return res.status(400).json({ error: 'Invalid data format' })
  //   }
  //   const response = await sheets.spreadsheets.values.update({
  //     spreadsheetId: spreadsheetId,
  //     range: 'Sheet1!A1',
  //     valueInputOption: 'RAW', // RAW: input as is, USER_ENTERED: evaluates formulas
  //     requestBody: {
  //       values: values, // A 2D array of values to write
  //     },
  //   })
  //   res.status(200).json({ message: 'Data written successfully!' })
  // } catch (error) {
  //   console.error('Error writing to Google Sheets:', error)
  //   res.status(500).json({ error: 'Internal Server Error' })
  // }
}
