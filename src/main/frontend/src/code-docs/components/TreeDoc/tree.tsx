import React, { useState } from 'react';
import Justify from '../../assets/justify';

import TreeTabs from './tree-tabs';
import { HeaderResponsive, RespLeft, Container, TitleArea } from './styles';
import { Documentation } from '../../model/model';

interface TreeProps {
  pageId?: string;
  documentation: Documentation;
}

const TreeDoc: React.FC<TreeProps> = (props) => {
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
            <h1>{props.documentation.name}</h1>
          </TitleArea>
          <TreeTabs pageId={props.pageId} fields={props.documentation.pages} />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TreeDoc;