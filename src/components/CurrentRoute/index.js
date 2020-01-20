import styled from 'styled-components';

const CurrentRoute = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: #333;
  color: #f7f7f7;
  font-size: 12px;
  line-height: 15px;
  padding: 4px 10px;
  min-width: 320px;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  div {
    width: 210px;
    min-width: 210px;
    margin: 0 auto;
  }
`;

export default CurrentRoute;
