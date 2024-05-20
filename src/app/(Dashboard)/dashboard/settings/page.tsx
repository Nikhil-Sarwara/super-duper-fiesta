import { Flex } from "@chakra-ui/react";
import { UserProfile } from "@clerk/nextjs";

const Settings = () => {
    return (
        <Flex margin={"2rem"}>
            <UserProfile />
        </Flex>
    );
};

export default Settings;
