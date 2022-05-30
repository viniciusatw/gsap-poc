import styled from '@emotion/styled';

export const SmoothWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #4682B4;

`;
export const SmoothContent = styled.div`
    width: 100%;
    height: 100%;

    display:grid;
    place-items: center;
`;

export const Boxes = styled.div`
    display: flex;
    gap: 32px;

    width: 100vw;
    height: 100vh;

    display:grid;
    place-items: center;
`;

export const Box = styled.div`
    width: 100px;
    height: 100px;

    background-color: ${props => props.color};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color:#f7f7f7;
`;