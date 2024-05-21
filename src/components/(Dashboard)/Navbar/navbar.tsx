import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MdSettings } from "react-icons/md";

const DashboardNavbar = () => {
    return (
        <Box bg="gray.100" p="4" shadow="md" margin={"1rem"} rounded="3xl">
            <Flex justify="space-between" align="center">
                <Link href="/">
                    <Flex backgroundColor={"white"} padding={"1rem"} rounded={"full"} _hover={{ backgroundColor: "whitesmoke" }}>
                        <UserButton />
                    </Flex>
                </Link>

                <Link href="/dashboard">
                    <Flex _hover={{ backgroundColor: "white", paddingY: "0.5rem", paddingX: "1rem", borderRadius: "full" }}>
                        <Heading>
                            Resume Review
                        </Heading>
                    </Flex>
                </Link>

                <Flex gap={"1rem"}>
                    <Link href="/dashboard/settings">
                        <Flex backgroundColor={"white"} padding={"1rem"} rounded={"full"} _hover={{ backgroundColor: "whitesmoke" }}>
                            <MdSettings />
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default DashboardNavbar;