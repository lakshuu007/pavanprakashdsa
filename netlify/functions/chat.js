export async function handler(event) {
    try {
      const { message } = JSON.parse(event.body);
  
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
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
        const parts = data.candidates[0].content.parts;
        reply = parts.map(p => p.text).join("");
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ reply }),
      };
  
    } catch (error) {
      console.error("ERROR:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server error." }),
      };
    }
  }
  