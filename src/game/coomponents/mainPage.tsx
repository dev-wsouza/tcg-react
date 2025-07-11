import { Card, Container, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { MainHeader } from "../../core/components/mainHeader";
import { MessagePanel } from "../../core/components/messagePanel";
import { Footer } from "../../core/components/footer";

export const MainPage = () => {
    return (
        <Container size="3" style={{ backgroundColor: '#a2dfab' }}>
            <Flex direction={'column'}>
                <MainHeader/>
                <Text size="3" align={"center"} style={{margin: '15px'}}>Welcome to the TCG made in React, create an account and start to battle.
                </Text>
                <Flex gap="2">
                    <Flex direction='column' flexGrow='1.4'>
                        <MessagePanel 
                            imageUrl="./image/message-image.png" 
                            messageHeader="Important" 
                            messageText="Welcome to the page, login to start."
                        />
                    </Flex>
                    <Flex direction='column' flexGrow='1'>
                        <Card>Login</Card>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </Container>
    );
} 