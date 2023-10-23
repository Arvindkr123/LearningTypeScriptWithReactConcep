import Parent from '@/components/ChildParent/Parent'
import SecondChild from '@/components/ChildParent/SecondChild'
import React from 'react'

const ChildrenPropsExample = () => {
    return (
        <div>
            <Parent>
                <SecondChild />
            </Parent>
        </div>
    )
}

export default ChildrenPropsExample