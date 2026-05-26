import { Grid, Column } from '@carbon/react';

function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

const InfoSection = ({ className, heading, children }) => (
  <Grid className={`${className} info-section`}>
    <Column lg={16} md={8} sm={4} xlg={4} className="landing-page__r3">
      <h3 className="info-section__heading">{heading}</h3>
    </Column>
    {children}
  </Grid>
);

const InfoCard = ({ heading, body, icon }) => {
  const splitHeading = createArrayFromPhrase(heading);

  return (
    <Column sm={4} md={8} lg={5} xlg={4} className="info-card">
      <div>
        <h4 className="info-card__heading">
          {`${splitHeading[0]} `}
          <strong>{splitHeading[1]}</strong>
        </h4>
        <p className="info-card__body">{body}</p>
      </div>
      {icon()}
    </Column>
  );
};

export { InfoSection, InfoCard };
