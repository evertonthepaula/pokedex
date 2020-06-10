import styled from 'styled-components';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import cardBackground from '../../assets/img/card-background.png';

export const Container = styled.div`
  background-color: var(
    ${(props) =>
      props.color ? `--color-${props.color}-background` : 'transparent'}
  );
  background-image: url(${cardBackground});
  background-position: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  min-height: 400px;
  flex-wrap: wrap;
`;

export const Back = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 6%;
  left: 8%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
`;

export const Image = styled.img`
  margin: 0 20px;
`;

export const IdNumber = styled.span`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: rgba(23, 23, 27, 0.6);
`;

export const Name = styled.h1`
  display: block;
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 38px;
  text-transform: capitalize;
  color: #fff;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  flex: 1 1 60px;
  height: 25px;
  margin: 2px;
  padding: 5px;
  background-color: var(
    ${(props) => (props.color ? `--color-${props.color}` : 'transparent')}
  );
  border-radius: 3px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
`;

export const Info = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  background-color: #fff;
`;

export const Subtitle = styled.h3`
  margin: 10px 0;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  color: var(
    ${(props) => (props.color ? `--color-${props.color}` : '#000000')}
  );
`;

export const DefinitionList = styled.dl`
  width: 100%;

  & > dt {
    float: left;
    width: 50%;
    padding: 0;
    margin: 10px 0;
    font-size: 1.2rem;
    line-height: 19px;
    font-weight: 700;
    text-transform: capitalize;
  }
  & > dd {
    float: right;
    width: 50%;
    padding: 0;
    margin: 10px 0;
    font-size: 1.6rem;
    line-height: 19px;
  }
`;
