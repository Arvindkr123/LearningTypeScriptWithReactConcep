import React from 'react'

const Parent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>This is a parent Component</h1>
            {children}
        </div>
    )
}

export default Parent