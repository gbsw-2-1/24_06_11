const Say = ({message}) => {
    return(
        <div>
            <h3>Message : {message}</h3>
        </div>

    )
}

// const Say = ({msgHandler}) => {
//     return(
//         <div>
//             <button onClick={() => msgHandler('안녕하세요.')}>입장</button>
//             <button onClick={() => msgHandler('안녕히 가세요!!')}>퇴장</button>
//         </div>

//     )
// }

export default Say;