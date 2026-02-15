export async function handler(event) {
    try {
      const { message } = JSON.parse(event.body);
  
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: message }],
              },
            ],
          }),
        }
      );
  
      const data = await response.json();
  
      console.log("FULL GEMINI RESPONSE:", JSON.stringify(data));
  
      let reply = "No response.";
  
      if (data.candidates && data.candidates.length > 0) {
        reply = data.candidates[0].content.parts
          .map(p => p.text)
          .join("");
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ reply }),
      };
  
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server error." }),
      };
    }
  }
  