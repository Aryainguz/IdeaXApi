const get_index = (req, res)=> {
  try{
  res.status(200).json(
    {
        status: 'success',
        data: {
            message: 'Welcome to the project idea generator API'
        },
        routes: {
            '/': 'home',
            '/idea': 'idea',
            '/idea/mentor?name="Name Of Mentor You Want"': 'idea with mentor',
        }
      }
    )
}
catch(e){
  res.status(500).json({
    status: 'error',
    message: e.message
  })
}
}

module.exports = get_index