import React from 'react';
import { TextArea, Column, InlineLoading, Button } from '@carbon/react';
import { Download } from '@carbon/icons-react';

const OutputArea = ({ text, isLoading, exportToDocx }) => {
  return (
    <Column lg={8} md={4} sm={2} className="output-area">
      {isLoading ? (
        <InlineLoading status="active" iconDescription="Loading" description="Loading data..." />
      ) : (
        <div className="output-container">
          <TextArea labelText="Generated Output" value={text} rows={10} className="outputText" readOnly />
          <Button
            className="download-btn"
            hasIconOnly
            renderIcon={Download}
            onClick={exportToDocx}
            iconDescription="Download document"
            title="Download"
            kind="ghost"
          />
        </div>
      )}
    </Column>
  );
};

export default OutputArea;
