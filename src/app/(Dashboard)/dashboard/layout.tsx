"use client"

import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { DashboardSidebar } from "@/components/(Dashboard)/Sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex h="100vh" w={"full"} direction={{ base: "column", md: "row" }}>
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <Flex backgroundColor={"gray.100"} flex="1" p="6" direction={"column"}>
                {children}
            </Flex>
        </Flex>
    );
};

export default DashboardLayout