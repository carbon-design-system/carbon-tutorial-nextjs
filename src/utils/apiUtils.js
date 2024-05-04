// apiUtils.js
export async function generateText(inputData) {
  const url =
    'https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer "eyJraWQiOiIyMDI0MDQwNTA4MzkiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwiaWQiOiJJQk1pZC01NTAwMDAySFZBIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiZWY3MDc3YmYtMDcxMy00MzBlLWI1NTgtNDdkYjhjZjM5MjU1IiwiaWRlbnRpZmllciI6IjU1MDAwMDJIVkEiLCJnaXZlbl9uYW1lIjoiTm9haCIsImZhbWlseV9uYW1lIjoiUGV0cmllIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZW1haWwiOiJub2FocGV0cmllQGlibS5jb20iLCJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJhdXRobiI6eyJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZ2l2ZW5fbmFtZSI6Ik5vYWgiLCJmYW1pbHlfbmFtZSI6IlBldHJpZSIsImVtYWlsIjoibm9haHBldHJpZUBpYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6ImQxOGU4MWVhZjA4ZDRjNGE5MzA1OTNmN2IzNjYxM2FjIiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNzEzOTMxMDU2LCJleHAiOjE3MTM5MzQ2NTYsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.aPgJjqR3qcOo6jbpWdjV4stwc3Cq1HsMjXpeMf0FfTkXywcfDxZ866LKZ8QPAmP943ajgmAfubFPpBAhQ5s0d7mbLT3UAOsZWjlc1Wmc1nmSdAEhK_HsWer6kGm2LYzRVj9qmIJ6jlbG7N-zUwr0TJpOsqWzJ5064l2iuCYvWiHLbXLrZJD1oWPAcvg_VTMgZaoPGDtnekfAr8YXJLbDn11iNByO38CLPGMhnDBTxuNp61RcBQ4k5yE78fgu5ElK3DKJzOQXEeYW-9MWdxO6l8wG1PLyXKosw8Zme54ptP4sg-EvUAYVNdrxk1DXLqKIMlDJkJEy-hWGRcA58hF4Bw"', // Ensure your token is correctly placed within quotes.
  };
  const body = {
    input: inputData,
    parameters: {
      decoding_method: 'greedy',
      max_new_tokens: 200,
      min_new_tokens: 0,
      stop_sequences: [],
      repetition_penalty: 1,
    },
    model_id: 'meta-llama/llama-3-70b-instruct',
    project_id: '80e28456-a694-4889-b818-1a7e3d0fc8a6',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error making fetch request:', error.message);
    throw error; // Rethrow the error for caller to handle if needed
  }
}
