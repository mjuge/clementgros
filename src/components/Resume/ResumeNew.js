import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  const professionalTimeline = [
    {
      title: "Le Figaro",
      description: "Journaliste stagiaire au sein du service web Économie",
      time: "Septembre à Décembre 2024",
      details: "Rédaction d'articles, rédaction de brèves sur l'actualité économique.",
    },
    {
      title: "Contexte",
      description: "Journaliste stagiaire au sein du pôle Pouvoirs",
      time: "Février à Août 2024",
      details:
        "Édition du briefing quotidien, écriture de brèves et d’articles, suivi de la gauche aux élections européennes et législatives anticipées.",
    },
    {
      title: "Public Sénat",
      description: "Journaliste assistant de l'émission Bonjour Chez Vous !",
      time: "Septembre 2022 à Mars 2023",
      details:
        "Calage des invités de l’émission, préparation de l’émission (fiches, documentations pour la présentatrice, suivi du travail parlementaire), travail sur le Congrès des maires et le Salon de l’Agriculture.",
    },
    {
      title: "Revue Regards",
      description: "Journaliste stagiaire",
      time: "Février à Juillet 2022",
      details: "Écriture d'articles, travail de terrain sur les campagnes présidentielles et législatives, organisation d’une conférence en partenariat avec la Confédération nationale du logement.",
    },
  ];

  const educationTimeline = [
    {
      title: "Université Paris Dauphine-PSL",
      description: "Master 1 et 2 de Politiques publiques et opinion",
      time: "2021 - 2024",
      details: "Année de césure académique",
    },
    {
      title: "Lycée Henry IV, ENS-PSL",
      description: "Cycle Pluridisciplinaire d’études supérieures",
      time: "2018 - 2021",
      details: "Économie, Droit, Sociologie et Science politique",
    },
  ];

  const renderTimeline = (timelineData, sectionTitle) => (
    <div
      className="timeline-container"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 className="section-title" style={{ color: "black" }}>{sectionTitle}</h2>
      <div className="timeline">
        {timelineData.map((event, idx) => (
          <div className="timeline-event" key={idx}>
            <div className="timeline-date">{event.time}</div>
            <div className="timeline-event-icon"></div>
            <div className="timeline-event-copy">
              <h3>{event.title}</h3>
              <h4>{event.description}</h4>
              <p>{event.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {renderTimeline(professionalTimeline, "Expérience professionnelles")}
        {renderTimeline(educationTimeline, "Formation")}
      </Container>
    </div>
  );
}

export default ResumeNew;
