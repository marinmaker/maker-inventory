import React from "react";
import "./style.css";

function Edit(){
    return(
        <section id="footer" className="footer">
            <div id="content" className="flex-shrink-0 row edit-row">
                {/* edit a kit button */}
                <div id="edit-btn" className="edit-btn">
                    <button type="button" className="btn btn-outline-warning edit">Edit a Kit</button>
                </div>
                {/* Add a kit button */}
                <div id="add-btn" className="add-btn">
                    <button type="button" className="btn btn-outline-success add">Add a Kit</button>
                </div>
            </div>
        </section>
    );
}
export default Edit;