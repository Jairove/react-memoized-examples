import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Understanding callbacks and memoized components</h1>
            <h2>Simple examples</h2>
            <Link to="/counter">Simple Counter</Link>
            <Link to="/counter-with-callback">Counter with callback</Link>
            <Link to="/counter-with-memo">Counter with memo</Link>
            <h2>Examples with props</h2>
            <Link to="/counter-with-memo-props">
                Counter with children with props
            </Link>
            <Link to="/counter-with-memo-callback">
                Counter with children with props and callback
            </Link>
            <Link to="/counter-alone">Counter without children</Link>
        </div>
    ),
});
