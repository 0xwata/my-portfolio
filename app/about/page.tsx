import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

const About = () => {
    return (
        <div>
            <Timeline>
                <TimelineItem>
                    <TimelineOppositeContent>
                        April 2010 - March 2013
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            Tokuyama High School
                        </Typography>
                        <Typography></Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        April 2014 - March 2018
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            Tohoku University
                        </Typography>
                        <Typography>Graduted from Mechanical Aerospace Engineering.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        April 2018 - March 2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            The University of Tokyo
                        </Typography>
                        <Typography>Graduted from Technolgy Management for Innovation</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        April 2020 - July 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            DMM.com LLC
                        </Typography>
                        <Typography>Worked as Android Engineering</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        July 2023 - Current
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            Freelance Engineer
                        </Typography>
                        <Typography>Worked for SARAH, inc and Forward inc</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

export default About;