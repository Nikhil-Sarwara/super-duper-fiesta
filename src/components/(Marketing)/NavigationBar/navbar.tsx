import { Box, Flex, Image, Link } from "@chakra-ui/react";

const MarketingNavbar = () => (
    <Box bg="white" p="4" shadow="md">
        <Flex justify="space-between" align="center">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width="200px" />
            </Link>
            <Link href="/about">About</Link>
        </Flex>
    </Box>
);

export default MarketingNavbar;
