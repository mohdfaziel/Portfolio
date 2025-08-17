import { useState } from "react";
import Avatar from "./Avatar";
import { personalData as PersonalData } from "./personalData.js";

function Bot() {
  const API_URL = import.meta.env.VITE_API;
  const [messageHistory, setMessageHistory] = useState("");
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const apiCall = async (inputText) => {
    if (!API_URL) {
      console.error("API URL is not configured.");
      setResponse("Yikes! My battery went down 🔋. Let's talk later.");
      return;
    }

    const prompt = `${PersonalData}\n\nChat History:\n${messageHistory}\n\nUser Question: ${inputText}`;
    setIsLoading(true);

    try {
      const data = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!data.ok) throw new Error(`HTTP error! status: ${data.status}`);

      const result = await data.json();
      const botResponse = result.candidates[0].content.parts[0].text;
      
      setMessageHistory(prev => prev + `\nUser: ${inputText}\nBot: ${botResponse}`);
      setResponse(botResponse);
    } catch (error) {
      console.error("API Error:", error);
      const funnyReplies = [
        "Oops... my brain just went to sleep 😴.",
        "Uh-oh... I think my Wi-Fi ran away 🏃💨.",
        "Hmm... something broke. Probably my coffee machine ☕.",
        "Yikes! My battery went down 🔋.",
        "Hold on... my internet hamster fell off the wheel 🐹.",
      ];
      setResponse(funnyReplies[Math.floor(Math.random() * funnyReplies.length)]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      apiCall(userInput);
      setUserInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="hidden md:flex fixed bottom-5 right-5 z-50">
      <div
        className="relative cursor-pointer"
      >
        <Avatar onClick={() => setShowChat((prev) => !prev)}/>

        {showChat && (
          <div
            className="absolute bottom-36 -left-52 bg-[#1e1f26]  rounded-2xl p-2 max-w-[20rem] shadow-lg flex flex-col space-y-3
                       animate-popIn z-50
                       before:content-[''] before:absolute before:-bottom-1 before:right-7 before:w-6 before:h-6 before:bg-[#1e1f26]  before:rotate-45"
          >
            <div className="bg-[#2b2d38] text-white p-3 rounded-lg text-sm shadow-inner max-h-24 overflow-y-auto">
              {response || "Hey, FazBot here. How can I help you?"}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask FazBot..."
                className="flex-1 z-10 px-3 py-2 bg-[#2b2d38] text-white placeholder-gray-400 rounded-lg outline-none border focus:border-[#ffae28]"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !userInput.trim()}
                className="bg-[#ffae28] z-10 hover:bg-[#ff9f1a] text-white px-3 py-2 rounded-lg transition disabled:bg-gray-500"
              >
                {isLoading ? (
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  "Ask"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bot;
