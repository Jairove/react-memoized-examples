import { useMemo, useState } from "react";
import DummyChild from "./DummyChild";

function Counter() {
    const myDummyChild = useMemo(() => <DummyChild />, []);

    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            {myDummyChild}
        </>
    );
}

export default Counter;
