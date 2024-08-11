import styled from "styled-components";
export const CastImage = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
`;
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;
export const CastItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  gap: -5px;
  background-color: white;
  border-radius: 5px;
  max-height: 300px;

  box-shadow: inset 12px 10px 11px -10px rgba(1, 0, 0, 1);
`;
export const MemberName = styled.p`
  max-width: 100px;
  font-size: 12px;
  font-family: 'Cantarel';
  color: black;
  text-shadow: 1px 1px 2px yellow;
`;
export const CharacterName = styled.p`
  max-width: 200px;
  font-size: 12px;
  max-width: 100px;
  font-family: 'Cantarel';
  color: black;
  text-shadow: 1px 1px 2px yellow;
`;
export const CastTitle = styled.h2`
  color: brown;
  font-size: 20px;
  text-align: center;
`;