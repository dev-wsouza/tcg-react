import { Card, Flex } from '@radix-ui/themes';
import React from 'react';

export const Footer = () => {
    return (
        <Card style={{ margin: '10px'}}>
            <Flex justify={"center"}>
                <h6>TCG in React - dev-wsouza</h6>
            </Flex>
        </Card>
    );
}