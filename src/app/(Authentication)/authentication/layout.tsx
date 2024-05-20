"use client"

import { Button, Flex } from "@chakra-ui/react";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex direction="column" align="center" justify="center" h="100vh" margin={"2rem"}>
            {/* Back Button Floating Above Left Side */}
            <Flex position="fixed" top="2rem" left="2rem">
                <Button colorScheme="teal" rounded={"full"} type="button" onClick={() => window.history.back()}>Back</Button>
            </Flex>

            {children}
        </Flex>
    );
};

export default AuthenticationLayout
