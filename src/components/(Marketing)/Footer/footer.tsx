import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const MarketingFooter = () => (
    <Box backgroundColor={"gray.600"} p="8" rounded="full" shadow="md" marginY={"2rem"}>
        <Flex justify="space-between" align="center">
            <Flex flexDir={"column"} color={"gray.800"} backgroundColor={"white"} padding={"1rem"} rounded={"full"} paddingX={"1rem"}>
                <Text fontSize="sm" fontWeight={"thin"} >
                    Copyright &copy; {new Date().getFullYear()}
                </Text>
                <Text fontSize="sm" fontWeight={"thin"} >
                    Super Duper Fiesta. All rights reserved.
                </Text>
            </Flex>
            <Flex gap="2rem" backgroundColor={"whitesmoke"} padding={"1rem"} rounded={"full"} _hover={{ backgroundColor: "gray.100" }}>
                <Link href="https://www.linkedin.com/">
                    <Flex backgroundColor={"white"} padding={"1rem"} rounded={"full"} _hover={{ backgroundColor: "gray.200" }}>
                        <BsLinkedin fontSize={"1.5rem"} />
                    </Flex>
                </Link>
                <Link href="https://github.com/super-dupar-fiesta">
                    <Flex backgroundColor={"white"} padding={"1rem"} rounded={"full"} _hover={{ backgroundColor: "gray.200" }}>
                        <BsGithub fontSize={"1.5rem"} />
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    </Box>
);
