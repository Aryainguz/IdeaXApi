# IdeaXApi

An Api to get project ideas for your next project, Get ideas inspired by famous figures and their contributions to science, technology, engineering, and mathematics (STEM) by providing mentor name in endpoint.

## Overview

This project provides a RESTful API endpoint (`/api/idea`) that responds with random project ideas inspired by random famous figures. The ChatGPT API is used to enhance the creativity of project suggestions.

Customize mentor in endpoint (`/api/idea/mentor?name="mentor name"`) for the project idea. 

## Getting Started

1. **Installation:**
   - Clone the repository.
   - Install dependencies: `npm install`.

2. **Configuration:**
   - Obtain an OpenAI API key and replace `'YOUR_OPENAI_API_KEY'` in the code.
   - Implement logic to fetch random figures from an external API (replace the placeholder URL).

3. **Run the Server:**
   - Start the Express server: `npm start`.

4. **Usage:**
   - Access the API endpoint: `http://localhost:3000/api`.
   - Receives a JSON response with a random project idea and associated figure.


## Configuration

- Set your OpenAI API key in the code.

## API Endpoint

- **GET /api/idea**
- **GET /api/idea/mentor?name="Mentor Name"**

  - Returns a JSON response with a random project idea and associated figure.

## Example Response

```json
{
"status": "success",
"data": {
"mentor": ""Elon Musk"",
"title": "Project Title: "Solar Revolution: Empowering Communities through Renewable Energy"",
"description": "Project Description: This project seeks to create a sustainable future by harnessing the power of solar energy and addressing the global energy crisis. Taking inspiration from Elon Musk's vision for a renewable energy future, the project aims to establish solar-powered microgrids in rural communities with limited access to electricity. By introducing affordable solar panels, energy storage systems, and training local technicians, the project aims to empower these communities with clean and reliable electricity, improving their quality of life, stimulating economic growth, and reducing carbon emissions. The project also includes educational programs to promote renewable energy awareness and sustainable practices."
}
}
```

## Notes

- Ensure compliance with OpenAI's usage policies.
- Customize the project idea generation logic and response structure as needed.

---

This concise README provides essential information for developers to set up, configure, and use the project. Feel free to adjust it further based on specific project details and requirements.
