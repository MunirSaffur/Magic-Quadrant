import styled, {css} from "styled-components";

export const PointsContainerStyle = styled.div`
${()=>css`
box-sizing: content-box;
width: 400px;
height: 400px;
position: relative;
`}
`;
interface AreaContProps {
    area: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }
  
  export const AreaCont = styled.div<AreaContProps>`
    ${({ area}) => css`
      font-size: 14px;
      color: #333;
      width: 200px;
      height: 200px;
      border: 1px solid #333;
      text-align: center;
      position: absolute;
      bottom: ${area.includes('bottom') && '0'};
      left: ${area.includes('left') && '25%'};
      right: ${area.includes('right') && '25%'};
      transform: translateX(${area.includes('left') ? '-50%' : '50%'});
    `}
  `;

  interface AreaLabelProps {
    float: 'top' | 'bottom';
  }

  export const AreaLabel = styled.div<AreaLabelProps>`
    ${({ float}) => css`
      font-size: 14px;
      color: #fff;
      padding: 5px 10px;
      background: #ADB9C3;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;
      border-radius: 5px;
      margin: 5px 0;
      top: ${float.includes('top') && '0'};
      bottom: ${float.includes('bottom') && '0'};
    `}
  `;