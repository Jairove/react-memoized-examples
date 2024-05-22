import { createFileRoute } from "@tanstack/react-router";
import Counter from "../Counters/CallbackCounter";

export const Route = createFileRoute("/counter-with-callback")({
    component: () => (
        <>
            <h1>Counter with callback</h1>
            <div className="card">
                <Counter />
            </div>
        </>
    ),
});
