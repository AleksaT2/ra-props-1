import React from "react";
import Star from "./Star";
import "./Stars.css"

function Stars(props) {
    if (props.count > 5 || props.count < 1) {
        return <></>
    }
    const liStars = [];
    for (let i = 0; i < props.count; i++) {
        liStars.push(<li><Star></Star></li>);
    }
    return (
    <ul className="card-body-stars u-clearfix">
        {...liStars}
    </ul>
    );
}

export default Stars;