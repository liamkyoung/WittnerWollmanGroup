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
  //     key: '[REDACTED]',
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
