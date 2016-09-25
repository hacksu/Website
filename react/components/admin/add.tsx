interface AddProps {
    onClick: () => void
}

export function Add(props: AddProps) {
    return  <div onClick={props.onClick}>
                <img src="/images/ic_add_black_24px.svg"  alt="add"/>
            </div>
}

110876166819934794060
110947483314315320479