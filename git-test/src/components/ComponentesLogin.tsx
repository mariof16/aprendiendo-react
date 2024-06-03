import { Card} from "@mui/material"
import colors from "../styles/colors.theme"
import React from "react";

export const CardLogin = ({ children }: { children: React.ReactNode }) => {
    return (
        <Card sx={{
            width: "552px",
            height: "600px",
            margin: "auto",
            padding: "45px",
            backgroundColor: colors.background.default,
        }}>
             {children}
        </Card>
    );
};