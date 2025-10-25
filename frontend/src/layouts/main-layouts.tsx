import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Flex direction="column" minH="100vh" bg="gray.50">
      {/* Header */}
      <Box
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        py={3}
        px={[2, 4]}
      >
        <Flex
          maxW="1200px"
          mx="auto"
          w="100%"
          justify={["center", "flex-start"]}
        >
          <Text fontWeight="bold" fontSize="lg" color="gray.800">
            SJMC 约饭
          </Text>
        </Flex>
      </Box>

      {/* Content */}
      <Flex flex="1" w="100%" justify="center">
        <Box
          maxW="1200px"
          w="100%"
          px={4}
          py={6}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}