import { useMediaQuery, Text } from "@chakra-ui/react";

export default function AboutParagraph({paragraph}) {
    const [mobileSize] = useMediaQuery("(min-width: 966px)");
    return (
        <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "30px 0 20px 0"}
        >
            {paragraph}
        </Text>
    )
}