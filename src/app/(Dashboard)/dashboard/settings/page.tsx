import { Flex } from "@chakra-ui/react";
import { UserProfile } from "@clerk/nextjs";

const DashboardSettings = () => {
    return (
        <main>
            <Flex marginX={"auto"} marginY={"1rem"} width={"100%"} height={"100%"} justifyContent={"center"}>
                <UserProfile routing="hash" />
            </Flex>
        </main>
    );
};

export default DashboardSettings;