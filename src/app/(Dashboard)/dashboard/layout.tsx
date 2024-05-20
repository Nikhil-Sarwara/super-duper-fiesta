"use client"

import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex>
            {/* Sidebar */}
            <Box
                width="250px"
                bg="white"
                boxShadow="lg"
                p="6"

            >
                <Heading mb="8" size="lg" textAlign="center">
                    Resume Review
                </Heading>
                <VStack align="stretch" spacing="4">
                    <Link href="/dashboard" >
                        Dashboard
                    </Link>
                    <Link href="/dashboard/reviews" >
                        Reviews
                    </Link>
                    <Link href="/dashboard/settings">
                        Settings
                    </Link>
                </VStack>
            </Box>

            {/* Main Content */}
            <Flex>
                {children}
            </Flex>
        </Flex>
    );
};

export default DashboardLayout