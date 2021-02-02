import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `};
  @media only screen and (max-width: 768px) {
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-around;
`;

export const ListCardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

export const ListCardContainerStriped = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;

  >div:nth-child(even)>div{
    background-color: #f4f4f4;
  }
`;

export const AlignContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 70px;
`;

export const AlignContentHistory = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
`;

// object para o historico de medicoes com o formato
// {index: {"name": "<nomeMedicao>", "unit": "<unidadeMedicao>"}}
// o ideal é usar um json em um arquivo para manter consistencia entre frontend e backend
export const MeasurementsDict = {
  1: { name: 'Pressao Arterial', unit: '' },
  2: { name: 'Frequencia Cardiaca', unit: 'cm' },
  3: { name: 'Circunferencia Abdominal', unit: 'cm' },
  4: { name: 'Passos por dia', unit: '' },
};
