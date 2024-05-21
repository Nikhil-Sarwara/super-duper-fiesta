import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiLeftArrow } from "react-icons/bi";
import { MdClose, MdDashboard, MdSettings, MdSummarize } from "react-icons/md";

export const DashboardSidebar = () => {
    const links = [
        {
            label: "Dashboard",
            icon: MdDashboard as IconType,
            href: "/dashboard",
        },
        {
            label: "Summary",
            icon: MdSummarize as IconType,
            href: "/dashboard/summary",
        },
        {
            label: "Settings",
            icon: MdSettings as IconType,
            href: "/dashboard/settings",
        }
    ];

    return (
        <Box bg="gray.100" p="4" shadow="md" borderRadius="md">

            {/* Sidebar Close Button */}
            <Flex justify="flex-end" align="center" margin={"1rem"}>
                <Link href="/">
                    <Flex backgroundColor={"white"} _hover={{ backgroundColor: "gray.200" }} rounded={"xl"} padding={"0.5rem"}>
                        <Icon as={BiLeftArrow} fontSize="1.5rem" />
                    </Flex>
                </Link>
            </Flex>

            {/* Navigations */}
            <Flex direction="column" align="flex-start" rounded={"3xl"} backgroundColor={"white"} p={4}>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        <Flex align="center" gap="2" p="2" _hover={{ bg: "gray.200", borderRadius: "3xl" }}>
                            <link.icon size="20" />
                            <Text fontWeight="semibold">{link.label}</Text>
                        </Flex>
                    </Link>
                ))}
            </Flex>
        </Box>
    );
};
