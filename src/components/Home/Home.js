import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="project-section" >
        <Particle />
        <Container className="project-heading">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className="main-name"> CLEMENT GROS</strong>
              </h1>
            </Col>
            <Col md={4} className="home-header">
            <p style={{ color: "black" }}>
            Une première cathédrale est détruite par les Danois en 875. Une deuxième, construite à l'époque romane, est endommagée par Henri II Plantagenêt en 1170. La construction de l'édifice actuel commence en 1230. Une première série de campagnes de travaux permet la reconstruction de la façade et de la nef entre le deuxième tiers du XIIIe siècle et les premières décennies du XIVe siècle. Après un temps d'arrêt, une seconde série de travaux aboutit à la reprise du transept et la reconstruction du chevet, achevée en 1539.

L'édifice présente des ressemblances avec les grandes cathédrales normandes, dont elle a subi l'influence architecturale : la façade s'inspire des cathédrales de Lisieux et Coutances ; la nef et le chevet présentent un passage mural au pied des fenêtres hautes, et une partie des vitraux reprend la forme en mitre des baies anglo-normandes. L'édifice présente en outre la particularité d'avoir conservé en partie son transept roman, remanié et remis au goût du jour à la fin du Moyen Âge.
           </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
