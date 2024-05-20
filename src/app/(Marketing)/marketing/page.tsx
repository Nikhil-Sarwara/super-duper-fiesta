import { MarketingFooter } from "@/components/(Marketing)/Footer/footer";
import { MarketingHero } from "@/components/(Marketing)/Hero/hero";
import MarketingNavbar from "@/components/(Marketing)/NavigationBar/navbar";
import { Container, Flex } from "@chakra-ui/react";

const MarketingHome = () => {
    return (
        <main>
            <Container maxW="container.xl">
                {/* Marketing Navbar */}
                <MarketingNavbar />

                {/* Marketing Hero */}
                <MarketingHero />

                {/* Marketing Footer */}
                <MarketingFooter />
            </Container>
        </main>
    );
};

export default MarketingHome;
