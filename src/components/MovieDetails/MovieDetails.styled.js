import styled from "styled-components";
export const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
export const MovieTitle = styled.h1`
  align-self: center;
   font-family: 'Kreon', serif;
  font-weight: 700;
  font-size: 3em;
  color: brown;
  text-shadow:
    white 0.006em 0.006em 0.007em,
    #9c9c9c 1px 1px 1px,
    #9c9c9c 1px 2px 1px,
    #9c9c9c 1px 3px 1px,
    #9c9c9c 1px 4px 1px,
    #9c9c9c 1px 5px 1px,
    #9c9c9c 1px 6px 1px,
    #9c9c9c 1px 7px 1px,
    #9c9c9c 1px 8px 1px,
    #9c9c9c 1px 9px 1px,
    #9c9c9c 1px 10px 1px,
    #9c9c9c 1px 11px 1px,
    #9c9c9c 1px 12px 1px,
    rgba(16, 16, 16, 0.4) 1px 18px 6px,
    rgba(16, 16, 16, 0.2) 1px 22px 10px,
    rgba(16, 16, 16, 0.2) 1px 26px 35px,
    rgba(16, 16, 16, 0.4) 1px 30px 65px,
    white -0.15em -0.1em 100px;
  &:hover {
    margin-top: -20px;
    text-shadow:
    white 0.006em 0.006em 0.007em,
    #9c9c9c 1px 1px 1px,
    #9c9c9c 1px 2px 1px,
    #9c9c9c 1px 3px 1px,
    #9c9c9c 1px 4px 1px,
    #9c9c9c 1px 5px 1px,
    #9c9c9c 1px 6px 1px,
    #9c9c9c 1px 7px 1px,
    #9c9c9c 1px 8px 1px,
    #9c9c9c 1px 9px 1px,
    #9c9c9c 1px 10px 1px,
    #9c9c9c 1px 11px 1px,
    #9c9c9c 1px 12px 1px,
    rgba(16, 16, 16, 0.4) 1px 38px 26px,
    rgba(16, 16, 16, 0.2) 1px 42px 30px,
    rgba(16, 16, 16, 0.2) 1px 46px 65px,
    rgba(16, 16, 16, 0.4) 1px 50px 95px,
    white -0.15em -0.1em 100px;
  }
}
`;
 export const Overwiew = styled.p`
  color: brown;
`;
export const Release = styled.p`
  color: brown;
`;
export const Score = styled.p`
  color: brown;
`;
export const MovieDetailsDiv = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;
export const SpecificDetails = styled.div`
  display: flex;
   flex-direction: column;
`;
export const AditionalInfo = styled.p`
  color: brown;
  font-weight: 700;
`;
export const DetailsDiv = styled.div`
  display: wrap;
  flex-wrap: wrap;
 
`;
