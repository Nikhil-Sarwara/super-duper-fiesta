import DashboardNavbar from "@/components/(Dashboard)/Navbar/navbar";
import { Container } from "@chakra-ui/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {/* Navbar */}
            <DashboardNavbar />

            <Container maxW="container.xl" marginY={"1rem"}>
                {children}
            </Container>
        </main>
    );
};

export default DashboardLayout