import styled from "styled-components";

export const DivButton = styled.div`
  display: flex;
  margin-left: 50%;
  margin-bottom: 10px;
`;

export const ButtonDetails = styled.button`
  border: none;
  color: #00aaf0;
  outline: none;
  background-color: white;
`;

export const DivTrips = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(${(props) => props.lines}, 1fr);
  gap: 50px;
  column-gap: 100px;
  justify-content: center;
  padding: 15px;
`;

export const CardTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 1%;
`;

export const ImageTrip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  border-radius: 1%;
  margin: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Description = styled.div`
  width: 100%;
  padding: 0 10px;
  text-align: left;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
