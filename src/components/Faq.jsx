import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

    const Faq = () => {
        const [expanded, setExpanded] = useState(false);
    
        const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
        const data = [
            {
                id: "panel2",
                question: "How long did it take to complete this?",
                details:
                    "I was completely new to backend and was learning on the go when i started this, Hence it took me around 5 months to finish minimum requirements of this project. "
            },
            {
                id: "panel1",
                question: "I am a beginner with open source or with MERN, can I contribute in this repository ?",
                details: "Anybody can contribute to this project. We can improve only by learning from others code and implementing it ourself."
            },
        ];

    return (
        <div id='faq'>
        <Box style={{ paddingBottom: "100px", background: 'rgb(12, 17, 24)' }}>
        <Box
            style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontWeight: 900,
            marginBottom: "40px",
            }}
        >
            <Typography
            style={{ fontSize: '43px', borderBottom: '3px solid #10dac1', color: "#4a73b5", fontWeight: 600, }}
            >
            FAQs
            </Typography>
        </Box>
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            }}
        >
            {data.map((data) => {
            const { id, question, details } = data;
            return (
                <Accordion
                expanded={expanded === id}
                key={id}
                onChange={handleChange(id)}
                style={{ color: '#4a73b5', width: '85%', padding: '5px', backgroundColor: "rgb(18, 21, 26)" }}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#17b078" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: "bold" }}>
                    {question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ marginBottom: "0px" }}>
                    <Typography style={{ fontWeight: 580, color: "#f5f5f5" }}>{details}</Typography>
                </AccordionDetails>
                </Accordion>
            );
            })}
        </div>
        </Box>
        </div>
    )
}

export default Faq;
