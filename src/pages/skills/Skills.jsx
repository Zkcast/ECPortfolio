
import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./skills.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, technologies } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { Link } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";

export const Skills = () => {


    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormdata({ loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: contactConfig.YOUR_EMAIL,
            message: formData.message,
        };

        emailjs
            .send(
                contactConfig.YOUR_SERVICE_ID,
                contactConfig.YOUR_TEMPLATE_ID,
                templateParams,
                contactConfig.YOUR_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormdata({
                        loading: false,
                        alertmessage: "SUCCESS! Thank you for your message. We'll be in touch soon",
                        variant: "success",
                        show: true,
                        message: ''
                    });
                },
                (error) => {
                    console.log(error.text);
                    setFormdata({
                        alertmessage: `Faild to send!,${error.text}`,
                        variant: "danger",
                        show: true,
                    });
                    document.getElementsByClassName("co_alert")[0].scrollIntoView();
                }
            );
    };

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Contact</title>
                    <meta name="description" content='{meta.description}' />
                </Helmet>
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Skills</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                        <Link to="/home"><FaCaretLeft style={{fontSize: "2rem"}}/></Link>

                        {/* <code>Technologies that I have used in some projects</code> */}

                    </Col>
                </Row>
                <Row className="sec_sp">
                    {/* <Col lg="5" className="mb-2">
                        <h5 className="color_sec py-4">Technologies I asdasdon real proyects</h5>
                    </Col> */}
                    <Col>
                        <div className="po_images">
                            {technologies.map((data, i) => {
                                return (
                                    <a href={data.link} Target="_blank"><div className='proyects_div'>
                                        <img class="tech_image" src={data.image} alt="" />
                                        <h5 style={{ fontSize: "15px", marginTop: "0rem" }}>{data.title}</h5>
                                    </div>
                                    </a>
                                );
                            })}
                        </div>
                    </Col>

                </Row>
            </Container>
            <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        </HelmetProvider>
    )
}
