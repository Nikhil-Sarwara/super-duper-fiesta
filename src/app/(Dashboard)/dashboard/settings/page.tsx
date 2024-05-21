import { Flex } from "@chakra-ui/react";
import { UserProfile } from "@clerk/nextjs";

const Settings = () => {
    return (
        <Flex margin={"2rem"}>
            <UserProfile routing="hash" />
        </Flex>
    );
};

export default Settings;
