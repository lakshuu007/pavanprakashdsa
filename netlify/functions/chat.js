export async function handler(event) {
    try {
      const { message } = JSON.parse(event.body);
  
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a DSA assistant for Java and Python. Answer clearly and concisely.\n\nUser: ${message}`
                  }
                ]
              }
            ]
          })
        }
      );
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          reply:
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response."
        })
      };
  
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Something went wrong." })
      };
    }
  }
  