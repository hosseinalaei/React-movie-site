import styled from 'styled-components';

const Style = styled.div`
.movie-bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // filter: blur(2px);
    // height: 100%;
}
.bg-filter{
    // background-color: rgba(26, 25, 31, 0.8);
    background-color: rgba(0,0,0, 0.8); 
    // background-image: linear-gradient(to left,rgba(0,0,0,0),rgba(26,25,31,0.6));
    // background-image: linear-gradient(to left,rgba(0,0,0,0.2),rgba(0,0,0,0.9));
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // z-index: 2;
    width: 100%;
    // height: 100vh;
    padding: 20px;
}
.movie img{
    width: 207px;
    border-radius: 4px;
}
.gallery-photo {
    // margin: 1px
}
.gallery-photo img{
    width: 100%;
    height: auto;
}
.gallery-photo img:hover{
    
}
`
export default Style;