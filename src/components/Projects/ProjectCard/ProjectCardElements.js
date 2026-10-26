import styled from "@emotion/styled";

export const Card = styled.article`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 18px 50px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px) saturate(1.4);
  border-radius: 22px;
  overflow: hidden;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const CardLeft = styled.div`
  min-height: 220px;
  background: #1c2420;

  img {
    width: 100%;
    height: 100%;
    min-height: 220px;
    object-fit: cover;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 1.5rem 1.3rem;

  h3 {
    font-family: "Fraunces", serif;
    font-size: 1.7rem;
    font-weight: 560;
    letter-spacing: -0.03em;
  }

  p {
    margin-top: 0.55rem;
    margin-bottom: 0.9rem;
    line-height: 1.55;
    color: #d5deea;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TechCard = styled.span`
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.1);
  border: 1px solid rgba(125, 211, 252, 0.22);
  padding: 0.28rem 0.65rem;
  font-size: 0.84rem;
  color: #e7eef8;
`;
