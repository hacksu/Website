interface AddProps {
    onClick: () => void
}

export function Add(props: AddProps) {
    return  <img src="/images/ic_add_black_24px.svg" style={{display: "inline"}}  alt="add" onClick={props.onClick}/>
}
