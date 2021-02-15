import React, { useState } from 'react';
import Justify from '../../assets/justify';

import TreeTabs from './tree-tabs';
import { HeaderResponsive, RespLeft, Container, TitleArea } from './styles';

const TreeDoc: React.FC = () => {
  const [isOpenTab, setIsOpenTab] = useState<boolean>(false);

  const toggleTab = () => {
    setIsOpenTab(!isOpenTab);
  }

  return (
    <React.Fragment>
      <HeaderResponsive>
        <div>
          <RespLeft>
            <button onClick={toggleTab}>
              <Justify size={24} color="#0A72EF" />
            </button>
          </RespLeft>
        </div>
      </HeaderResponsive>
      <Container isOpenTab={isOpenTab}>
        <div className="wrapper">
          <TitleArea>
            <h1>Getting Started</h1>
          </TitleArea>
          <TreeTabs>
            <p>Hello World</p>
          </TreeTabs>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TreeDoc;