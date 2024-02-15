const openai = require('../config/ai')

const talk_mentor = async (req, res)=> {
    const mentor = req.query.name
    const user_text = req.query.usertext
  const prompt = user_text
  try{

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: `You are a project assistant that generates cool project ideas inspired by successful figures in 100 words. You are an idea mentor who aims at making the user a successfull founder and you are GPT version of famous and successful mentors. Right now please generate a project idea inspired by ${mentor} and mentor me to become a successful founder and behave and mentor me like ${mentor}.` }, { role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });
  const content = chatCompletion.choices[0].message.content.split('\n')
  res.status(200).json(
    {
      status: 'success',
      data: {
        mentor: mentor,
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

module.exports = talk_mentor