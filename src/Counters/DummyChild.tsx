function DummyChild() {
    console.info(
        `DummyChild component rendered at ${new Date().toISOString()}`
    );
    return <p>A dummy child from the counter</p>;
}

export default DummyChild;
