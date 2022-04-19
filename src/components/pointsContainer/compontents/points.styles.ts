import styled ,{css} from 'styled-components';

export const PointItem = styled.div`
${() => css`
width: 15px;
height: 15px;
border-radius: 50%;
position : absolute;
cursor: pointer;
background: blue;
transform: translate(-50%, 50%);
`}
`;
export const PointLabel = styled.span`
${() => css`
font-size: 14px;
-webkit-transform: translateY(20px);
-ms-transform: translateY(20px);
transform: translateY(10px);
position: absolute;
width: max-content;
`}
`;
