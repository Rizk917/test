import React from "react";
import ContactUs from "./contactUs";
import DeskHeader from "./deskheader";
import { useState } from "react";

function CntctusExt() {
    const [open, setOpen] = useState(true);
    return (
        <div className="cnt-wrapper">
            <DeskHeader open={open} setOpen={setOpen} />
            <ContactUs setOpen={setOpen} />
        </div>

    )
}

export default CntctusExt;

