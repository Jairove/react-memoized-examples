import { createFileRoute } from "@tanstack/react-router";
import Counter from "../Counters/MemoCounterWithChildrenPropsWithCallback";

export const Route = createFileRoute("/counter-with-memo-callback")({
    component: () => (
        <>
            <h1>Counter with memo and children with props and callback</h1>
            <div className="card">
                <Counter />
            </div>
        </>
    ),
});
