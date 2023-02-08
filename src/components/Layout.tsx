import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import Sidebar from './Sidebar'

interface Props {
    children: ReactNode,
    isFull?: boolean
}

const Layout: FC<Props> = ({ children, isFull }) => {
    return (
        <div className="flex h-full w-full flex-col overflow-auto">
            <Sidebar />
            <div
                className={clsx(
                    'h-full w-full overflow-auto bg-umm-white',
                    !isFull
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default Layout