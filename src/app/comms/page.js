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
  Accordion,
  AccordionItem,
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
            'Bearer eyJraWQiOiIyMDI0MDQwNTA4MzkiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwiaWQiOiJJQk1pZC01NTAwMDAySFZBIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMjY5Y2U5ZGItMmUwNi00NDlhLTk0MWYtNWY5MjAzODdhZWZkIiwiaWRlbnRpZmllciI6IjU1MDAwMDJIVkEiLCJnaXZlbl9uYW1lIjoiTm9haCIsImZhbWlseV9uYW1lIjoiUGV0cmllIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZW1haWwiOiJub2FocGV0cmllQGlibS5jb20iLCJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJhdXRobiI6eyJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZ2l2ZW5fbmFtZSI6Ik5vYWgiLCJmYW1pbHlfbmFtZSI6IlBldHJpZSIsImVtYWlsIjoibm9haHBldHJpZUBpYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6ImQxOGU4MWVhZjA4ZDRjNGE5MzA1OTNmN2IzNjYxM2FjIiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNzE0OTY5NjA0LCJleHAiOjE3MTQ5NzMyMDQsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.WgTLK7azehzFK7WFPhJ5GRZsAxfJAse094nPiEou6LsLhLdQdb_g8WyKpaPsSWwuq9TLLC7MLeWpqvTSNHRO7NWxlaH2XWcnb6gsEEbCvhFWvnMrgbBi9E-xaYj8as20oBAkw49keEvV6HQI6rrEo5H5Hum3IqK97IHgJkymxPAtf-Fk2i8GPPcclD8iibagXMQuPoPWEqfy-OBl6Mey36MFnRGCTr9i49F2o-eDtQBcedUZ-6IL_gaPsuCtI6wqPxwuHMopd3Og2wg56TPRJ3ql-Hm4hHv3oBfpo_waApNoePLZQM26RaFr59KGg7G37G-seaDA49srvILDRDKPCA',
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
            <a href="/">Home</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </Column>
      <Column md={8} className="repo-comms__r2">
        <Section level={4}>
          <Heading>
            Communications Generator
            <Information />
          </Heading>
        </Section>
        <Accordion className="my-accordion">
          <AccordionItem title="Project Details">
            <FormGroup>
              <Stack gap={6}>
                <TextInput
                  id="projectName"
                  labelText="Project Name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </Stack>
            </FormGroup>
          </AccordionItem>
          <AccordionItem title="Client Details">
            <FormGroup>
              <Stack gap={6}>
                <TextInput
                  id="clientName"
                  labelText="Client Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </Stack>
            </FormGroup>
          </AccordionItem>
          <AccordionItem title="Communication Details">
            <FormGroup>
              <Stack gap={6}>
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
              </Stack>
            </FormGroup>
          </AccordionItem>
          <AccordionItem title="Additional Information">
            <p>Enter any additional information here.</p>
          </AccordionItem>
        </Accordion>
        <Button type="button" onClick={handleSubmit} disabled={isLoading}>
          Submit
        </Button>
      </Column>
      <Column md={8} className="repo-comms__r2">
        <OutputArea
          text={outputText}
          isLoading={isLoading}
          exportToDocx={exportToDocx}
        />
      </Column>
    </Grid>
  );
}
