import { useState, useEffect, useCallback } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [flagNewNumber, setFlagNewNumber] = useState(false);
    const [lotteryNumber, setLotteryNumber] = useState(0);

    const generateRandomNumber = useCallback(() => {
        console.info("Hey! I'm being invoked! 🤭🤭🤭🤭🤭");
        setLotteryNumber(Math.random() * 10);
    }, []);

    useEffect(() => {
        generateRandomNumber();
    }, [generateRandomNumber]); // Now the effect only runs when `generateRandomNumber` changes

    useEffect(() => {
        const countDown = () => setTimeout(() => setCount(count + 1), 1000);
        countDown();
    }, [count]);

    console.info(`Counter component rendered at ${new Date().toISOString()}`);

    return (
        <>
            <button onClick={() => setFlagNewNumber(!flagNewNumber)}>
                Generate new number
            </button>
            <p>Count is {count}</p>
            <p>Your lotery number is {lotteryNumber}</p>
        </>
    );
}

export default Counter;
