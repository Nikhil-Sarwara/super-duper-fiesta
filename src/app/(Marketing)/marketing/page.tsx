import MarketingNavbar from "@/components/(Marketing)/NavigationBar/navbar";
import { Container, Flex } from "@chakra-ui/react";

const MarketingHome = () => {
    return (
        <main>
            <Container maxW="container.xl">
                <MarketingNavbar />
                <h1>Marketing</h1>
                <p>This is the marketing home page</p>
            </Container>
        </main>
    );
};

export default MarketingHome;
