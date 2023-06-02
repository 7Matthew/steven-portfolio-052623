export default function AnimatedBG({ children }) {
    return (
        <>
            <div className="area">
                <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {children}
            </div>
        </>
    );
}