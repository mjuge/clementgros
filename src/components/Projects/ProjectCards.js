import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgArrowTopRightR } from "react-icons/cg";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      {/* Conditional rendering for the image */}
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ borderRadius: "10px" }}
        />
      )}

      <Card.Body>
        {/* Title */}
        <Card.Title>{props.title}</Card.Title>

        {/* Date and Name */}
        {(props.date || props.name) && (
          <Card.Text
            className="project-meta"
            style={{
              marginBottom: "10px",
              color: "#666",
              fontSize: "0.9em",
            }}
          >
            {props.date && (
              <span className="project-date" style={{ fontWeight: "bold" }}>
                {props.date}
              </span>
            )}
            {props.date && props.name && " | "}
            {props.name && (
              <span className="project-name" style={{ fontStyle: "italic" }}>
                {props.name}
              </span>
            )}
          </Card.Text>
        )}

        {/* Description */}
        {props.description && (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        )}

        {/* Button */}
        {props.link && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="primary"
              href={props.link}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                fontSize: "14px",
                padding: "6px 12px",
              }}
            >
              <CgArrowTopRightR size={16} />
              {props.buttonText || "Lien vers l'article"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

