import { createFileRoute } from "@tanstack/react-router";
import Counter from "../Counters/MemoCounter";

export const Route = createFileRoute("/counter-with-memo")({
    component: () => (
        <>
            <h1>Counter with memo</h1>
            <div className="card">
                <Counter />
            </div>
        </>
    ),
});
