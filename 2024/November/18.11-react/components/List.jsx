import React from "react";

const List = ({ children, type = "ul" }) => {
    const Tag = type;
    return <Tag>{children}</Tag>;
};

export default List;
