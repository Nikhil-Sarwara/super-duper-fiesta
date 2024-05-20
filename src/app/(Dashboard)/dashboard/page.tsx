// src/app/dashboard/page.tsx
'use client'
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  IconButton,
  Avatar,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
} from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  return (
    <Flex height="100vh" bg="gray.200" >
      {/* Main Content */}
      <Box flex="1" p="6" overflow="scroll">
        <Flex justify="space-between" align="center" mb="8">
          <Heading size="lg" color="gray.800">
            Dashboard
          </Heading>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6" mb="8">
          <Box bg="white" p="6" boxShadow="lg" borderRadius="md">
            <Flex align="center" mb="4">
              <Avatar size="xl" name="John Doe" src="https://cdn3.iconfinder.com/data/icons/avatars-29/100/Avatar-17-1024.png" mr="4" />
              <Box>
                <Heading size="md" color="gray.800">John Doe</Heading>
                <Text color="gray.600">john.doe@example.com</Text>
              </Box>
            </Flex>
            <Link color="teal.500" href="#">Edit Profile</Link>
          </Box>

          <Box bg="white" p="6" boxShadow="lg" borderRadius="md">
            <Stat>
              <StatLabel>Total Resumes</StatLabel>
              <StatNumber>15</StatNumber>
              <StatHelpText>3 Pending Review</StatHelpText>
            </Stat>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6" mb="8">
          <Box bg="white" p="6" boxShadow="lg" borderRadius="md">
            <Heading size="md" mb="4" color="gray.800">Recent Activities</Heading>
            <Text color="gray.600">- Uploaded Resume "Software Engineer"</Text>
            <Text color="gray.600">- Received feedback on "Data Scientist" resume</Text>
            <Text color="gray.600">- Updated profile picture</Text>
          </Box>

          <Box bg="white" p="6" boxShadow="lg" borderRadius="md">
            <Heading size="md" mb="4" color="gray.800">Upcoming Reviews</Heading>
            <Text color="gray.600">- "Product Manager" resume review due in 2 days</Text>
            <Text color="gray.600">- "Graphic Designer" resume review due in 5 days</Text>
          </Box>
        </SimpleGrid>

        <Box bg="white" p="6" boxShadow="lg" borderRadius="md" mb="8">
          <Heading size="md" mb="4" color="gray.800">Resume Review Statistics</Heading>
        </Box>

        <Box bg="white" p="6" boxShadow="lg" borderRadius="md">
          <Heading size="md" mb="4" color="gray.800">Reviewers' Feedback</Heading>
          <Text color="gray.600">"Great layout and structure!" - Jane Doe</Text>
          <Text color="gray.600">"Needs more detail in experience section." - John Smith</Text>
        </Box>

      </Box>
    </Flex>
  );
};

export default Dashboard;
