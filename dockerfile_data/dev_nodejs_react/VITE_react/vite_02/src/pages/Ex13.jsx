import { useState } from 'react'


const Ball = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })


    return (
        <>
            <h1>13.</h1>
            <div
                onPointerMove={(e) => {
                    console.log(e.clientX, e.clientY)
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    })
                }}
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'Green'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        backgroundColor: 'yellow',
                        borderRadius: '50%',
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        left: -10,
                        top: -10,
                        width: 20,
                        height: 20
                    }}
                />

            </div>
        </>
    )
}


export default Ball