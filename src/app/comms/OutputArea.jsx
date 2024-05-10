import React, { useEffect, useRef, useState } from 'react';
import {
  TextArea,
  Column,
  Heading,
  InlineLoading,
  Button,
  unstable__Slug as Slug,
  unstable__SlugContent as SlugContent,
  Link,
} from '@carbon/react';
import { Download } from '@carbon/icons-react';

const OutputArea = ({ text, isLoading, exportToDocx, modelURLs = {} }) => {
  const textAreaRef = useRef(null);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    if (textAreaRef.current) {
      const lineHeight = 20; // Adjust based on the CSS of the TextArea
      const padding = 16; // Adjust based on the CSS padding of the TextArea
      const textLength = text.split('\n').length;
      const newRows = Math.min(Math.max(textLength + 1, 10), 20); // Adjust min and max rows as needed
      setRows(newRows);
      textAreaRef.current.style.height = `${(newRows * lineHeight) + padding}px`;
    }
  }, [text]);

  return (
    <div className="output-area-wrapper">
      <Column lg={8} md={4} sm={2} className="output-area">
        {isLoading ? (
          <InlineLoading
            status="active"
            iconDescription="Loading"
            description="Loading data..."
          />
        ) : (
          <div className="output-container">
            <div className="header-container">
              <Heading size="md" className="output-heading">
                Generated Content{' '}
              </Heading>
              <Slug className="slug-position" aiText="AI">
                <SlugContent>
                  <p>AI explained </p>
                  <h3 className="header">watsonx BI Assistant</h3>
                  <p>IBM watsonx BI Assistant ....</p>
                  <hr className="slug-container-separator" />
                  <p>How it works</p>
                  <ul className="bullet-list">
                    <li>
                      <strong>Monitors.</strong> Monitors metrics and identifies
                      fluctuations and changes in business data.
                    </li>
                  </ul>
                  <hr />
                  <p>AI model</p>
                  {Object.keys(modelURLs).map((modelName) => (
                    <p key={modelName}>
                      {modelURLs[modelName] ? (
                        <Link href={modelURLs[modelName]} target="_blank">
                          {modelName}
                        </Link>
                      ) : (
                        <span>{modelName}</span>
                      )}
                    </p>
                  ))}
                </SlugContent>
              </Slug>
            </div>
            <TextArea
              ref={textAreaRef}
              value={text}
              rows={rows}
              className="outputText"
              readOnly
            />
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
    </div>
  );
};

export default OutputArea;
