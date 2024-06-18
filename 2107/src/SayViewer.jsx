// const SayViewer = ( {message, color} ) => {
//     return(
//         <div>
//             <h3 style={{color: color}}>Message : {message}</h3>
//         </div>
//     )
// }

//props 사용하기
const SayViewer = ( props ) => {
    return(
        <div>
            <h3 style={{color: props.color}}>Message : {props.message}</h3>
        </div>
    )
}
export default SayViewer;
