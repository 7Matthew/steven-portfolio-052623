export default function Divider ({title, id="", children}) {
    return(
        <>
            <div className="container-fluid" id={id}>
                <div className="row text-center bg-info-subtle p-3" >
                    <h1 style={{fontSize:"60px", fontWeight:'bolder'}}><b>{title}</b></h1>
                    <h4>{children}</h4>
                </div>
            </div>
        </>
    );
}