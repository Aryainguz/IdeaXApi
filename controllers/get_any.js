const openai = require('../config/ai')

const get_any = async (req, res)=> {
  const prompt = `Generate a project idea `
  try{

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a project assistant that generates cool project ideas inspired by successful figures in 100 words' }, { role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });
  const content = chatCompletion.choices[0].message.content.split('\n')
  res.status(200).json(
    {
      status: 'success',
      data: {
        // content: content,
        title: content[0],
        description: content[2]
      }
    })
}
catch(e){
  res.status(500).json({
    status: 'error',
    message: e.message
  })
}
}

module.exports = get_any