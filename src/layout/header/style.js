import styled from "styled-components";

const Style = styled.header`
        display: block;
        // position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #1a191f;
        z-index: 101;
        border-bottom: 1px solid #222028;
        background-color: #1a191f;
        // padding: 1rem 0;
        a {
                color: #fff;
        }
        .header-content {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                height: 70px;
                position: relative;
                z-index: 1;
                .button {
                        border: 2px solid #f9ab00;
                        // height: 40px;
                        // width: 40px;
                        border-radius: 6px;
                        background-color: #1a191f;
                        color: #fff;
                        padding: 0.375rem 2rem;

                        }
        }

`;

export default Style;