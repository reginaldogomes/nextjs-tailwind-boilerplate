import { ReactChild, ReactFragment, ReactPortal } from 'react'

export default function Title(props: {
    children:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined
}) {
    return <h1>{props.children}</h1>
}
