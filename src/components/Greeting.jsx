import { useState, useEffect } from "preact/hooks";

export default function Greeting({messages}) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
    const [greeting, setGreeting] = useState(messages[0]);

    useEffect(() => {
  const interval = setInterval(() => {
    setGreeting(randomMessage());
    console.log("Greeting changed");
  }, 2000);

  return () => clearInterval(interval);
}, []);

    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
        </div>
    )
}