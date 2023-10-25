import React from "react";
import "./popularsearch.scss";
import "../../index.scss";
import { StyledButton } from "../Button/StyledButton";

const PopularSearch = () => {
  return (
    <div className="popularSearch">
      <div className="popular__title-box">
        <h1 className="main-header">
          Popular
          <span>
            <em style={{ color: "grey", fontWeight: "200" }}>searches</em>
          </span>
        </h1>
      </div>
      <div className="popular-btn-container">
        <StyledButton fontSize="18px" className="popularStyledBtn">
          football
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          mens running trainers{" "}
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          football t-shirt
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          mens basketball jersy
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          mens basketball jersy
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          mens basketball jersy
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          mens basketball jersy
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          mens basketball jersy
        </StyledButton>
        <StyledButton fontSize="18px" className="popularStyledBtn">
          mens basketball jersy
        </StyledButton>
      </div>
    </div>
  );
};

export default PopularSearch;
