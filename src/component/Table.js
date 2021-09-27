import React from "react";

export default function Table() {
  return (
    <div>
      <div className="table">
        <div className="trow">
          <div className="cell">
            <div>Course</div>
          </div>
          <div className="cell cell2">
            <div>Category</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>MBA, MD, CA</div>
          </div>
          <div className="cell cell2">
            <div>1</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>MTech, M.Sc., M. Com </div>
          </div>

          <div className="cell cell2">
            <div>2</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>BTech, B.E, M. A </div>
          </div>
          <div className="cell cell2">
            <div>3</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>BBA, BA etc </div>
          </div>
          <div className="cell cell2">
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
