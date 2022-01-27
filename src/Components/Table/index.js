import React from "react";
import "./style.css";

function Table() {
    return(
        //inventory listed as buttons
        <section id="table" className="inventoryTable">
            <div className="containter fluid">
                <div className="row">
                    <div className="col"><button type="button" class="btn btn-outline-dark">Kit 1</button>
                    </div>
                     <div className="col"><button type="button" class="btn btn-outline-dark">Kit 2</button>
                    </div>
                     <div className="col"><button type="button" class="btn btn-outline-dark">Kit 3</button>
                    </div>
                     <div className="col"><button type="button" class="btn btn-outline-dark">Kit 4</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Table;