const Hello = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
        </div> /*props는 객체 이고 name은 프로퍼티 */
    
    );
}

export default Hello;