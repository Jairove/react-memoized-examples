import { useCallback, useState } from "react";
import DummyChild from "./DummyChildWithProps";

function Counter() {
    const generateRandomNumber = useCallback(() => Math.random() * 10, []);

    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <DummyChild generator={generateRandomNumber} />
        </>
    );
}

export default Counter;
