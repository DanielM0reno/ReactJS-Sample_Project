import { useState } from 'react'


function ComponenteContador() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="card">
                <h3>Contador: <strong>{count}</strong></h3>
                <button onClick={() => setCount((count) => count + 1)}>Púlsame para aumentar contador</button>
            </div>
        </>
    )
}

export default ComponenteContador