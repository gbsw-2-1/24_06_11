const SayColor = ({colorHandler}) => {
    return(
        <div>
            <button onClick={() => colorHandler("red")}>빨간색</button>
            <button onClick={() => colorHandler("green")}>초록색</button>
            <button onClick={() => colorHandler("blue")}>파란색</button>
        </div>
    );
}

export default SayColor;