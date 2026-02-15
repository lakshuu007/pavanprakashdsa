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
                role: "user",
                parts: [{ text: message }],
              },
            ],
          }),
        }
      );
  
      const data = await response.json();
  
      console.log("Gemini response:", JSON.stringify(data));
  
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.candidates?.[0]?.content?.parts?.[0] ||
        "No response.";
  
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
  