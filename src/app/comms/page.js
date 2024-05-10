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
  Dropdown,
  TextArea,
} from '@carbon/react';
import { Information, Download } from '@carbon/icons-react';
import OutputArea from './OutputArea';

const items = [
  { id: 'aerospace_defence', text: 'Aerospace & Defence' },
  { id: 'automotive', text: 'Automotive' },
  { id: 'banking', text: 'Banking' },
  { id: 'chemicals_petroleum', text: 'Chemicals & Petroleum' },
  { id: 'consumer_products', text: 'Consumer Products' },
  { id: 'education', text: 'Education' },
  { id: 'electronics', text: 'Electronics' },
  {
    id: 'energy_environment_utilities',
    text: 'Energy, Environment, & Utilities',
  },
  { id: 'financial_markets', text: 'Financial Markets' },
  { id: 'government', text: 'Government' },
  { id: 'healthcare', text: 'Healthcare' },
  { id: 'insurance', text: 'Insurance' },
  { id: 'life_sciences', text: 'Life Sciences' },
  { id: 'media_entertainment', text: 'Media & Entertainment' },
  { id: 'industrial_products', text: 'Industrial Products' },
  { id: 'retail', text: 'Retail' },
  { id: 'telecommunications', text: 'Telecommunications' },
  { id: 'travel_transportation', text: 'Travel & Transportation' },
  { id: 'cross_industry', text: 'Cross Industry' },
];

const communicationMethodsList = [
  { id: '1', text: 'Email' },
  { id: '2', text: 'Phone Call' },
  { id: '3', text: 'Video Call' },
  { id: '4', text: 'Instant Messaging' },
  { id: '5', text: 'In-Person Meeting' },
  { id: '6', text: 'Project Management Software' },
  { id: '7', text: 'Collaboration Tools' },
  { id: '8', text: 'Status Reports' },
  { id: '9', text: 'Newsletters' },
  { id: '10', text: 'Memos' },
  { id: '11', text: 'Presentations' },
  { id: '12', text: 'Workshops' },
  { id: '13', text: 'Surveys and Polls' },
  { id: '14', text: 'Documentation Sharing' },
  { id: '15', text: 'Bulletin Boards' },
  { id: '16', text: 'Town Hall Meetings' },
  { id: '17', text: 'Webinars' },
  { id: '18', text: 'Social Media' },
  { id: '19', text: 'Project Dashboards' },
  { id: '20', text: 'Feedback Forms' },
];

const tonesList = [
  { id: '1', text: 'Formal' },
  { id: '2', text: 'Informal' },
  { id: '3', text: 'Professional' },
  { id: '4', text: 'Casual' },
  { id: '5', text: 'Friendly' },
  { id: '6', text: 'Urgent' },
  { id: '7', text: 'Encouraging' },
  { id: '8', text: 'Motivational' },
  { id: '9', text: 'Neutral' },
  { id: '10', text: 'Positive' },
  { id: '11', text: 'Concise' },
  { id: '12', text: 'Detailed' },
  { id: '13', text: 'Authoritative' },
  { id: '14', text: 'Empathetic' },
  { id: '15', text: 'Optimistic' },
  { id: '16', text: 'Persuasive' },
  { id: '17', text: 'Inquisitive' },
  { id: '18', text: 'Direct' },
  { id: '19', text: 'Supportive' },
  { id: '20', text: 'Cautionary' },
];

export default function CommsPage() {
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [audienceType, setAudienceType] = useState('');
  const [industry, setIndustry] = useState([]);
  const [communicationMethod, setCommunicationMethod] = useState([]);
  const [tone, setTone] = useState(tonesList[0]);
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [purpose, setPurpose] = useState('');
  const [keyMessages, setKeyMessages] = useState('');
  const [technology, setTechnology] = useState('');
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
    return `
      Generate a communication (${
        communicationMethod.text
      }) for the project "${projectName}" managed by ${clientName}. 
      Audience: ${audienceType}. 
      Purpose: ${purpose}. 
      This communication should address change management aspects. 
      The tone should be ${tone.text}. 
      Technology involved: ${technology}.
      Key points to cover include: ${additionalDetails}. 
      Key messages to highlight: ${keyMessages}.
      The industry context is ${industry.map((item) => item.text).join(', ')}. 
      Ensure the communication supports stakeholders through the change process, providing clear and actionable information.
    `;
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
            'Bearer eyJraWQiOiIyMDI0MDUwNTA4MzkiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwiaWQiOiJJQk1pZC01NTAwMDAySFZBIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMzUxNDljNDEtYzljMi00ZmEyLTk3MGUtZGJmYmEyYzAxZWYwIiwiaWRlbnRpZmllciI6IjU1MDAwMDJIVkEiLCJnaXZlbl9uYW1lIjoiTm9haCIsImZhbWlseV9uYW1lIjoiUGV0cmllIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZW1haWwiOiJub2FocGV0cmllQGlibS5jb20iLCJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJhdXRobiI6eyJzdWIiOiJub2FocGV0cmllQGlibS5jb20iLCJpYW1faWQiOiJJQk1pZC01NTAwMDAySFZBIiwibmFtZSI6Ik5vYWggUGV0cmllIiwiZ2l2ZW5fbmFtZSI6Ik5vYWgiLCJmYW1pbHlfbmFtZSI6IlBldHJpZSIsImVtYWlsIjoibm9haHBldHJpZUBpYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6ImQxOGU4MWVhZjA4ZDRjNGE5MzA1OTNmN2IzNjYxM2FjIiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNzE1MzcxMzY2LCJleHAiOjE3MTUzNzQ5NjYsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.wyL7331FPCG3tN9rxWR-XSsNGRI7dBO6qR-qRMukDjoqzNPMc8GWuVTAx9TOOIh0wGRMT6wnmAe8NANTM5SZELiANmWzD4h066e8Gw36hRI8kEfjV5CL9uzy1YzJ2zhojo3hMfZLC6cEXZQFLXXAm7QVqh6ePRtooFSPrepmP3CcmUb56Ga9R60WUwuZsMi3_aqkeYI2zyhg5epfG589tgGvYJ8sCYk2X0FmbpCbLf5s-sI_95JgMHOGPmIHe0L1pzj6jtFR_cnMzeYcVaFxsDG1nIU2jgtLhwwAm4ZhDrGcUqjfrXKyqxSslE30uRVhj4geVF341pcI9kQ-0O22jg',
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
          <Heading>Communications Generator</Heading>
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
                <TextInput
                  id="Technology"
                  labelText="Technology"
                  //value={technology}
                  //onChange={(e) => setProjectName(e.target.value)}
                />
                <TextInput
                  id="clientName"
                  labelText="Client Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
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
          <AccordionItem title="Audience & Delivery">
            <FormGroup>
              <Stack gap={6}>
                <TextInput
                  id="audience"
                  labelText="Audience"
                  value={audienceType}
                  onChange={(e) => setAudienceType(e.target.value)}
                />
                <Dropdown
                  id="communication-method"
                  titleText="Preferred Communication Method"
                  helperText="Select your preferred method of communication"
                  label="Select a method"
                  items={communicationMethodsList}
                  itemToString={(item) => (item ? item.text : '')}
                  onChange={(e) => setCommunicationMethod(e.selectedItem)}
                  value={communicationMethod}
                />
              </Stack>
            </FormGroup>
          </AccordionItem>
          <AccordionItem title="Communication Content">
            <FormGroup>
              <Stack gap={6}>
                <TextInput
                  id="purpose"
                  labelText="Purpose"
                  helperText="Specify the purpose of the communication"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                />
                <TextArea
                  labelText="Key Messages"
                  helperText="Highlight the key messages to be communicated"
                  rows={4}
                  id="key-messages"
                  value={keyMessages}
                  onChange={(e) => setKeyMessages(e.target.value)}
                />
                <Dropdown
                  id="tone-selection"
                  titleText="Select Communication Tone"
                  helperText="Choose the tone for your communication"
                  label="Select a tone"
                  direction="bottom"
                  items={tonesList}
                  itemToString={(item) => (item ? item.text : '')}
                  onChange={(e) => setTone(e.selectedItem)}
                  value={tone}
                />
              </Stack>
            </FormGroup>
          </AccordionItem>
          <AccordionItem title="Additional Information">
            <TextArea
              labelText="Additional Details"
              //helperText="Optional helper text"
              rows={4}
              id="text-area-1"
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
            />{' '}
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
