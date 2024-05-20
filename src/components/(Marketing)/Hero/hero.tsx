import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";

export const MarketingHero = () => {
    return (
        <Box bg="gray.100" p="8" rounded="3xl" shadow="md" marginX={"1rem"} marginY={"2rem"}>
            <Flex justify="space-between" align="center">
                <Box>
                    <Heading as="h1" size="3xl" fontWeight="bold" mb="2">
                        Build a professional resume in minutes
                    </Heading>
                    <Text fontSize="lg" mb="4">
                        Get started with our easy-to-use resume builder and get hired
                        faster.
                    </Text>
                    <Button
                        colorScheme="blue"
                        size="lg"
                        variant="solid"
                        rounded={"full"}
                    >
                        Get Started
                    </Button>
                </Box>
                <Image
                    src="https://play-lh.googleusercontent.com/9cStI0kHWmjALUEVwZwkuPhkwtuesVwSgQeHUA4YEqGRzF31yXYjjdpAQkW5DGqp2dE"
                    alt="resume builder"
                    width="20rem"
                    rounded={"3xl"}
                />
            </Flex>
        </Box>
    );
};
