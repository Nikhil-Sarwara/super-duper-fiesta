"use client"

import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { DashboardSidebar } from "@/components/(Dashboard)/Sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex>
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <Flex>
                {children}
            </Flex>
        </Flex>
    );
};

export default DashboardLayout