import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import orangeCrisis from "../../Assets/Projects/orangeCrisis.png"; // Updated image import
import contextmap from "../../Assets/Projects/contextmap.png"; // Updated image import
import nfp from "../../Assets/Projects/nfp.png"; // Updated image import
import ia from "../../Assets/Projects/ia.png"; // Updated image import
import parl from "../../Assets/Projects/parl.png"; // Updated image import


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes articles récents
        </h1>
        <p style={{ color: "black" }}>
          Voici quelques articles publiés récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orangeCrisis}
              title="La crise de l’orange va-t-elle faire grimper les prix dans les rayons des supermarchés ?"
              date="20.10.24"
              name="Le Figaro"
              description="Face à une maladie qui décime la production brésilienne, principal exportateur mondial d’oranges, les prix ont triplé en deux ans."
              link="https://www.lefigaro.fr/conso/la-crise-de-l-orange-va-t-elle-faire-grimper-les-prix-dans-les-rayons-des-supermarches-20241020"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ia}
              title="Les caméras dopées à l’IA, nouvel outil des supermarchés contre le vol"
              date="02.10.24"
              name="Le Figaro"
              description="La vidéosurveillance augmentée, utilisée durant les JO de Paris dans l’espace public, se déploie petit à petit dans les grandes surfaces pour réduire les pertes causées par le vol à l’étalage."
              link="https://www.lefigaro.fr/societes/les-cameras-dopees-a-l-ia-nouvel-outil-des-supermarches-contre-le-vol-20241002"
            />
          </Col>
          </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contextmap}
              title="217 désistements, 409 duels et des reports de voix décisifs"
              date="03·07·24"
              name="Contexte"
              description="Après le dépôt officiel des candidatures, il est possible d’identifier les acteurs en présence et de mesurer le rapport de force entre le bloc d’extrême droite, celui du centre et du Nouveau Front populaire au second tour des législatives. À l’aide de cartes, Contexte vous propose une analyse des principales dynamiques à l’œuvre."
              link="https://www.contexte.com/article/pouvoirs/210-desistements-402-duels-et-des-reports-de-voix-decisifs_195889.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nfp}
              title="Les coulisses de la construction du « contrat de coalition » du Nouveau Front populaire"
              date="17·06·24"
              name="Contexte"
              description="Pour boucler un accord en un temps record, les négociateurs Insoumis, socialistes, écologistes et communistes avaient trois atouts dans leurs manches : le choix de s’appuyer sur leurs priorités communes, le rapprochement de leurs programmes lors des européennes et deux ans de travail partagé à l’Assemblée nationale."
              link="https://www.contexte.com/article/pouvoirs/les-coulisses-de-la-construction-du-contrat-de-coalition-du-front-populaire_194154.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parl}
              title="Au Parlement, derrière le débat sur le cumul des mandats, la question des moyens"
              date="30·05·24"
              name="Contexte"
              description="Un des objectifs de la loi de limitation du cumul des mandats de 2014 était de permettre aux députés et sénateurs d’exercer pleinement leur nouveau rôle révisé en 2008 dans la Constitution. Une promesse qui n’a pas réellement été tenue, rappellent de nombreux parlementaires. Qu’ils soient favorables ou opposés au cumul, tous évoquent l’enjeu des moyens qui leur sont alloués."
              link="https://www.contexte.com/article/pouvoirs/au-parlement-derriere-le-debat-sur-le-cumul-des-mandats-la-question-des-moyens_192395.html"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parl}
              title="Comment les macronistes ont fait du RN le premier parti d’opposition"
              date="20·06·22"
              name="Revue Regards"
              description="Sur 62 duels NUPES-RN, 35 circonscriptions reviennent à l’extrême droite, 27 à la NUPES. Une faillite du front républicain due à l’abstention massive de l’électorat LREM."
              link="https://regards.fr/article-comment-les-macronistes-ont-fait-du-rn-le-premier-parti-d-opposition/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parl}
              title="Aulnay-sous-Bois : comment l’État a abandonné le lycée Voillaume"
              date="09·06·22"
              name="Revue Regards"
              description="Manque de moyens, profs menacés de mort… face à l’urgence, le rectorat de Seine-Saint-Denis et la région Île-de-France sont aux abonnés absents."
              link="https://regards.fr/article-aulnay-sous-bois-comment-l-etat-a-abandonne-le-lycee-voillaume/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parl}
              title="Rachat de Twitter par Elon Musk : un danger pour la démocratie ?"
              date="29·04·22"
              name="Revue Regards"
              description="En trois semaines, Elon Musk est parvenu à racheter Twitter pour la modique somme de 41 milliards d’euros. Ce rachat éclair pose des questions sur la pérennité des systèmes démocratiques."
              link="https://regards.fr/article-elon-musk-twitter/"
            />
             </Col>
        </Row>


{/* Section 2 */}
<h1 className="project-heading">Autres articles</h1>
        <p style={{ color: "black" }}>
          Voici les pages vers lénsemble de mes artciles publiés.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Le Figaro"
              link="https://www.lefigaro.fr/auteur/clement-gros"
              buttonText="Lien vers la page"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Contexte"
              link="https://www.contexte.com/equipe/clement-gros-164905.html"
              buttonText="Lien vers la page"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Revue Regards"
              link="https://regards.fr/author/c-gros/"
              buttonText="Lien vers la page"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
