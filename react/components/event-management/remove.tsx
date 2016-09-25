interface RemoveProps {
    onClick: () => void
}

export function Remove(props: RemoveProps) {
    return  <div onClick={props.onClick}>
                <img src="images/ic_remove_black_24px.svg"  alt="add"/>
            </div>
}