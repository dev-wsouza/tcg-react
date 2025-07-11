import { Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { MessagePanel } from "../../core/components/messagePanel";
import { LoginContainer } from "../../player/components/loginContainer";
import { Page } from "../../core/components/page";

export const UserRegisterPage = () => {
    return (
        <Page>
            <Text size="3" align={"center"} style={{margin: '15px'}}>Please fill up the form for the registration.
                </Text>
                <Flex gap="2">
                    <Card>
                        <Text size={'3'}>Register

                        </Text>
                    </Card>
                </Flex>    
            
        </Page>
    );
} 