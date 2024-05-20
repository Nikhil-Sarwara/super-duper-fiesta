import { MarketingHero } from "@/components/(Marketing)/Hero/hero";
import MarketingNavbar from "@/components/(Marketing)/NavigationBar/navbar";
import { Container, Flex } from "@chakra-ui/react";

const MarketingHome = () => {
    return (
        <main>
            <Container maxW="container.xl">
                <MarketingNavbar />
                <MarketingHero />
            </Container>
        </main>
    );
};

export default MarketingHome;
