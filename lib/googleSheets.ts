import { google } from 'googleapis';

// Initialize Google Sheets API
const getGoogleSheetsInstance = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
};

export const appendToSheet = async (email: string, timestamp: string, userAgent?: string, ip?: string) => {
  try {
    const sheets = getGoogleSheetsInstance();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheet ID not configured');
    }

    // Data to append to the sheet
    const values = [[
      timestamp,
      email,
      ip || 'unknown',
      userAgent || 'unknown',
      'Sample Downloaded'
    ]];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E', // Adjust range as needed
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    console.log('✅ Lead added to Google Sheet:', { email, timestamp });
    return response.data;
  } catch (error) {
    console.error('❌ Error adding to Google Sheet:', error);
    // Don't throw error - we don't want to break the user experience if sheets fail
    return null;
  }
};

export const initializeSheet = async () => {
  try {
    const sheets = getGoogleSheetsInstance();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheet ID not configured');
    }

    // Add headers if the sheet is empty
    const headers = [['Timestamp', 'Email', 'IP Address', 'User Agent', 'Action']];
    
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Sheet1!A1:E1',
      valueInputOption: 'RAW',
      requestBody: {
        values: headers,
      },
    });

    console.log('✅ Sheet headers initialized');
  } catch (error) {
    console.error('❌ Error initializing sheet:', error);
  }
}; 