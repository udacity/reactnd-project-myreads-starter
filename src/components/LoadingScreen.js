import React from 'react'
import { css } from "@emotion/core";
import BarLoader from 'react-spinners/BarLoader'

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function LoadingScreen(props) {
    const { isLoading, text } =  props;
    return (
        <div className="loading-screen-container">
            <div className="sweet-loading">
                <BarLoader
                  css={override}
                  color={"#2e7c31"}
                  loading={isLoading}
                />
                <div className="loading-text">{text}</div>
            </div>
        </div>
    )
}
