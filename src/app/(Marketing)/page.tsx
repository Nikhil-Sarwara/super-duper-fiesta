import { Button, Flex } from "@chakra-ui/react";
import { SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <Flex>
        <Button>Hello</Button>
      </Flex>
    </main>
  );
}
