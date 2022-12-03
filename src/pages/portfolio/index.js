import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";



export const Portfolio = () => {


  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-5"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <Link to="/home"><FaCaretLeft style={{ fontSize: "2rem" }} /></Link>
          </Col>
        </Row>
        <div className="mb-2 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div className='proyects_div'>
                
                <h5>{data.title} {data.icons}</h5>
                <span className="proyect_subtitle" style={{ opacity: "0.5" }}>{data.subtitle}</span>
                <hr />

                <div key={i} className="po_item">
                  <img class="imagen" src={data.img} alt="" />
                  <div className="content imagediv">
                    <p>{data.desctiption}</p>
                    <a href={data.link} Target="_blank"><FaExternalLinkAlt /> Open project</a>
                    <a href={data.github} Target="_blank"><FaGithub /> GitHub</a>
                  </div>
                </div>
                <p style={{ opacity: "0.8" }}>{data.used}</p>
              </div>

            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
