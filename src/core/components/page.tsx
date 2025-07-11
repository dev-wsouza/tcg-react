import { Card, Container, Flex, Text } from "@radix-ui/themes";
import React, { PropsWithChildren, ReactNode } from "react";
import { MainHeader } from "../../core/components/mainHeader";
import { Footer } from "../../core/components/footer";

export const Page : React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Container size="3" style={{paddingTop: '15px'}}>
            <Flex direction={'column'}>
                <MainHeader/>
                {children}
            </Flex>
            <Footer />
        </Container>
    );
} 