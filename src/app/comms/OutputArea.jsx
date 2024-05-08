import React from 'react';
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
            <TextArea value={text} rows={10} className="outputText" readOnly />
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
