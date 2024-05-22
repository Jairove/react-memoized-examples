import { createFileRoute } from "@tanstack/react-router";
import Counter from "../Counters/MemoCounterWithChildrenProps";

export const Route = createFileRoute("/counter-with-memo-props")({
    component: () => (
        <>
            <h1>Counter with memo and children with props</h1>
            <div className="card">
                <Counter />
            </div>
        </>
    ),
});
