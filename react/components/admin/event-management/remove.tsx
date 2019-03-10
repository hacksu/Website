import * as React from "react";

interface RemoveProps {
    onClick: () => void
}

export function Remove(props: RemoveProps) {
    return  <img src="/images/ic_remove_black_24px.svg" style={{display: "inline"}}  alt="add" onClick={props.onClick}/>

}