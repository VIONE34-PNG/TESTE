import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  margin: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const Card = ({ title, description, imageUrl }) => (
  <CardContainer>
    <Image src={imageUrl} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;