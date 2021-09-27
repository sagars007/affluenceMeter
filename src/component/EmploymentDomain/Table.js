import React from "react";

export default function Table() {
  return (
    <div>
      <div className="table ">
        <div className="trow">
          <div className="cell">
            <div>Course</div>
          </div>
          <div className="cell cell2">
            <div>Tier</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Microsoft, Google, Walmart, Amazon, Flipkart</div>
          </div>
          <div className="cell cell2">
            <div>1</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>DELL, Adobe, ZS Associates, Sabre India </div>
          </div>

          <div className="cell cell2">
            <div>2</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Deloitte, Accenture, Infosys, TCS </div>
          </div>
          <div className="cell cell2">
            <div>3</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Other MSME business </div>
          </div>
          <div className="cell cell2">
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
