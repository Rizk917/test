import React from "react";
import NewsCards from "./NewsCards";

function News(props) {
    return <div className="main-hero" onClick={() => props.setOpen(true)}>
        <h3>Your First News Page</h3>
        <NewsCards />
    </div>
}

export default News;