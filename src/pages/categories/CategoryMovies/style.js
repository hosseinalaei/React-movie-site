import styled from "styled-components";

const Style = styled.div`
.movie{
    position: relative;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px;
    solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
.movie-cover{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    background-color: #222028;
    img{
        max-width: 250px;
    }
}
.movie-title{
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    color: #fff;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    word-wrap: break-word;
}
`
export default Style;