import { createFileRoute } from "@tanstack/react-router";
import Counter from "../Counters/Counter";

export const Route = createFileRoute("/counter")({
    component: () => (
        <>
            <h1>Simple Counter</h1>
            <div className="card">
                <Counter />
            </div>
        </>
    ),
});
