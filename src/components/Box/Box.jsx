const Box = (props) => {
    return (
        <main>
        <div className="card">
            <div className="pic"></div>
        <p><b>ID:</b> {props.id}</p>
         <p><b>Name:</b> {props.name}</p>
         <p><b>Title:</b> {props.title}</p>
         <p><b>Age:</b> {props.age}</p>
         <p><b>Pet:</b> {props.myanimal}</p>
         </div>
        </main>
    );
};
export default Box;