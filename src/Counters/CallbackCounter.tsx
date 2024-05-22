import { useCallback, useState } from "react";
import DummyChild from "./DummyChild";

function Counter() {
    const MyDummyChild = useCallback(() => <DummyChild />, []);

    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <MyDummyChild />
        </>
    );
}

export default Counter;
