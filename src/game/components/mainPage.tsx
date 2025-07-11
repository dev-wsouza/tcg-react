import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { MessagePanel } from "../../core/components/messagePanel";
import { LoginContainer } from "../../player/components/loginContainer";
import { Page } from "../../core/components/page";

export const MainPage = () => {
    return (
        <Page>
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
                        <LoginContainer />
                    </Flex>
                </Flex>    
            
        </Page>
    );
} 