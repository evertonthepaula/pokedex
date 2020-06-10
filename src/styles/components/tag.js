import styled from 'styled-components';

const Tag = styled.span`
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

export default Tag;
