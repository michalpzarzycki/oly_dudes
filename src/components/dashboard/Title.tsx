import React from 'react';
import Typography from '@material-ui/core/Typography';



interface TitleProps {
    children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }) => {
        return (
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  {children}
            </Typography>
        );
}