import { Box, Flex,Text,Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}
export default function Profile({showProfileData = true} : ProfileProps){
    return(
        <Flex align="center">
    {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Caio Fábio</Text>
        <Text color="gray.300" fontSize="small">
            caiofabio250@gmail.com
            </Text>
    </Box>
    )}
            <Avatar size="md" name="caiofabio" />
</Flex>
    )
}