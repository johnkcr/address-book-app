import { Card, CardContent, Typography } from "@mui/material";
import { CONTACT_FIELDS } from "../constant";
import React from "react";

const BusinessCard = ({ data }) => {
  return (
    <Card sx={{ width: 320, boxShadow: 0 }}>
      <CardContent> 
        {
          CONTACT_FIELDS.map(({id, label}) => (
            <Typography 
              key={id}
              sx={{ fontSize: 14 }} 
              gutterBottom
            >
              {label} : {data[label]}
            </Typography>
          ))
        }
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
