import { useHook } from "../CustomHook/Hook";

const Data = () => {
    const { value, increment, decrement, reset } = useHook();

    return (
        <>
            <h1>{value}</h1>
            <button onClick={increment}>Incerment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
};

export default Data;