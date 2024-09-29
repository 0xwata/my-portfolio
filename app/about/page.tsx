
import { Timeline, Text, Divider } from '@mantine/core';

const About = () => {
    return (
        <div>
            <Divider color='white' />
            <Timeline active={1} bulletSize={24} lineWidth={2}>
                <Timeline.Item color="blue" title='2014. Tokuyama High School Gradutated'>
                    <Text>I graduated Tokuyama High School </Text>
                </Timeline.Item>
                <Timeline.Item color="blue" title='new blanch'>
                    <Text>Second item</Text>
                </Timeline.Item>
            </Timeline >
        </div >
    )
}

export default About