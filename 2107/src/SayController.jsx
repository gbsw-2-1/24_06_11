const SayController = ( {messageHandler} ) => {
    return(
        <div>
            <div>
                <button onClick={() => messageHandler("안녕하세요.")}>입장</button>
                <button onClick={() => messageHandler("안녕히계세요.")}>퇴장</button>
            </div>
        </div>
    )
}

export default SayController;