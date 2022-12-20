import React from 'react'

function Box({ children, active }) {
    return (
        <div className={active ? 'box active' : 'box'}>
            {children}
        </div>
    )
}

export default Box
