const OpenAI = require('openai')
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API, // This is the default and can be omitted
  });

module.exports = openai;