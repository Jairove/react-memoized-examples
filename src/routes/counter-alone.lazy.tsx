import { createFileRoute } from "@tanstack/react-router";
import Counter from "../Counters/CounterWithoutChildren";

export const Route = createFileRoute("/counter-alone")({
    component: () => (
        <>
            <h1>Counter without children</h1>
            <div className="card">
                <Counter />
            </div>
        </>
    ),
});
