import { memo } from "react";

const DummyChild = memo(function DummyChild(props: {
    generator: () => number;
}) {
    console.log(`DummyChild component rendered at ${new Date().toISOString()}`);
    return (
        <p>
            A dummy child from the counter, generated random number{" "}
            {props.generator()}
        </p>
    );
});

export default DummyChild;
