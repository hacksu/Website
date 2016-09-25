interface AddProps {
    onClick: () => void
}

export function Add(props: AddProps) {
    return  <div onClick={props.onClick}>
                <img src="/images/ic_add_black_24px.svg"  alt="add"/>
            </div>
}