import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FaPerson } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

const MarketingNavbar = () => (
    <Box bg="white" p="4" shadow="md" marginY={"1rem"} rounded="3xl">
        <Flex justify="space-between" align="center">
            <Link href="/">
                <Flex backgroundColor={"whitesmoke"} padding={"1rem"} rounded={"full"}>
                    <Image src="https://cdn.iconscout.com/icon/free/png-256/free-resume-1956282-1650445.png" alt="logo" width="2rem" />
                </Flex>
            </Link>

            <Heading>
                Resume Builder
            </Heading>

            <Flex gap={"1rem"}>
                <Link href="/about">
                    <Flex backgroundColor={"whitesmoke"} padding={"1rem"} rounded={"full"} _hover={{ backgroundColor: "gray.100" }}>
                        <FaPerson />
                    </Flex>
                </Link>
                <Link href="/contact">
                    <Flex backgroundColor={"whitesmoke"} padding={"1rem"} rounded={"full"} _hover={{ backgroundColor: "gray.100" }}>
                        <GrContact />
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    </Box>
);

export default MarketingNavbar;
