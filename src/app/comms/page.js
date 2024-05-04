'use client';

import React, { useState } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Column,
  Grid,
  TextInput,
  Heading,
  Section,
  MultiSelect,
  FormGroup,
  Stack,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
} from '@carbon/react';
import { Information, Download } from '@carbon/icons-react';
import OutputArea from './OutputArea';

const items = [
  { id: 'government', text: 'Government' },
  { id: 'oil&gas', text: 'Oil & Gas' },
  { id: 'communications', text: 'Communications' },
];

export default function CommsPage() {
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [communicationType, setCommunicationType] = useState('');
  const [industry, setIndustry] = useState([]);
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const exportToDocx = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun(outputText)],
            }),
          ],
        },
      ],
    });

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    const fileName = `${projectName || 'Project'}_${formattedDate}.docx`;

    Packer.toBlob(doc)
      .then((blob) => {
        saveAs(blob, fileName);
      })
      .catch((err) => {
        console.error('Error exporting document:', err);
      });
  };

  const constructPrompt = () => {
    return `Generate a communication (${communicationType}) for ${clientName} regarding ${projectName}. Additional details can be found below: Industry: ${industry
      .map((item) => item.text)
      .join(', ')}, Communication Type: ${communicationType}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const prompt = constructPrompt();

    console.log('Sending prompt:', prompt); // Debugging output
    console.log('Using API Key:', process.env.REACT_APP_API_KEY); // Check if API key is loaded correctly

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization:
            'Bearer eyJraWQiOiIyMDI0MDQwNTA4MzkiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwiaWQiOiJJQk1pZC01NTAwMDAySFZBIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMmNlNzRkNTQtZmYxMi00ZDBhLWFkMWEtMTZmNzA5N2RkZWZlIiwiaWRlbnRpZmllciI6IjU1MDAwMDJIVkEiLCJnaXZlbl9uYW1lIjoiTm9haCIsImZhbWlseV9uYW1lIjoiUGV0cmllIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZW1haWwiOiJub2FocGV0cmllQGlibS5jb20iLCJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJhdXRobiI6eyJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZ2l2ZW5fbmFtZSI6Ik5vYWgiLCJmYW1pbHlfbmFtZSI6IlBldHJpZSIsImVtYWlsIjoibm9haHBldHJpZUBpYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6ImQxOGU4MWVhZjA4ZDRjNGE5MzA1OTNmN2IzNjYxM2FjIiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNzE0NDI2MTg2LCJleHAiOjE3MTQ0Mjk3ODYsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.f9cMELDI3mRaIgPh8-LN-l-oDo7nYRje7u-9ZO1cnqDl4R_ZYyf5ZCm8-TceIBkoZAjPYKqRBnjIvFOiVlONfZlSeuk4zwh9iUN3d2Dfn0S0lQfsWbnXYZHDc32gxSx8oAUh5ovYlq0bu0VRvDt38rCHnL1VQgUM94llRgIvmALUyaubQzd7NIMBU3Ygk_s2KEBkqw1v1FlZT_2F4X8PhtqDci28QOMSDre5HPmXlq5epppfQp-RrqMeeFabyxCmMoGpseqCUTDjgVDfqpZ4bPTFjsNQMfPzGlZQB2k9FgyXItpsYl8ywxBaaq4GbuI6YQXlZ1wI1VqaQ8lfro9zRA',
        },
        body: JSON.stringify({
          input: prompt,
          parameters: {
            decoding_method: 'greedy',
            max_new_tokens: 500,
            min_new_tokens: 0,
            stop_sequences: [],
            repetition_penalty: 1,
          },
          model_id: 'meta-llama/llama-3-70b-instruct',
          project_id: '80e28456-a694-4889-b818-1a7e3d0fc8a6',
        }),
      };

      const response = await fetch(
        `/api/ml/v1/text/generation?version=2023-05-29`,
        options
      );
      const text = await response.text(); // Fetch and log the raw text response

      if (!response.ok) {
        console.error('API call failed:', response.status, text); // Log the status and text if the response was not OK
        setError(`API call failed with status: ${response.status}`);
        setIsLoading(false);
        return;
      }

      try {
        const data = JSON.parse(text); // Try to parse JSON from the text
        if (data && data.results && data.results.length > 0) {
          setOutputText(data.results[0]?.generated_text || '');
        } else {
          setError('No generated text found in response');
        }
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError, text); // Log parsing errors and the raw text
        setError('Failed to parse JSON');
      }
    } catch (fetchError) {
      console.error('Error fetching data:', fetchError); // Log fetch errors
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid className="comms-page">
      <Column lg={16} md={8} sm={4} className="repo-comms__r1">
        <Breadcrumb
          noTrailingSlash
          aria-label="Breadcrumb for navigating the page"
        >
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </Column>
      <Column md={8} className="repo-comms__r2">
        <Section level={4}>
          <Heading>
            Communications Generator
            <Toggletip>
              <ToggletipButton label="Additional information">
                <Information />
              </ToggletipButton>
              <ToggletipContent align="right">
                <p>This form is the input to the LLM</p>
              </ToggletipContent>
            </Toggletip>
          </Heading>
        </Section>
        <FormGroup>
          <Stack gap={6}>
            <TextInput
              id="clientName"
              labelText="Client Name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <TextInput
              id="projectName"
              labelText="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <TextInput
              id="communicationType"
              labelText="Communication Type"
              helperText="Specify the type like email, memo, etc."
              value={communicationType}
              onChange={(e) => setCommunicationType(e.target.value)}
            />
            <MultiSelect
              label="Industry"
              id="industry"
              titleText="Industry"
              items={items}
              itemToString={(item) => (item ? item.text : '')}
              selectionFeedback="top-after-reopen"
              onChange={({ selectedItems }) => setIndustry(selectedItems)}
            />
            <Button type="button" onClick={handleSubmit} disabled={isLoading}>
              Submit
            </Button>
          </Stack>
        </FormGroup>
      </Column>
      <Column md={8} className="repo-comms__r2">
        <OutputArea
          text={outputText}
          isLoading={isLoading}
          exportToDocx={exportToDocx}
        >
          {' '}
        </OutputArea>
      </Column>
    </Grid>
  );
}
