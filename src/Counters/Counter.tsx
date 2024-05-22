import { useState } from "react";
import DummyChild from "./DummyChild";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <DummyChild />
        </>
    );
}

export default Counter;
