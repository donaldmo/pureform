import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';


export function LeadGrid() {

    return (
        <Container fluid>
            <SimpleGrid cols={2} style={{ height: '100vh' }}>
                <div style={{height: '100%'}} />
                <div style={{height: '100%'}} />
            </SimpleGrid>
        </Container>
    );
}