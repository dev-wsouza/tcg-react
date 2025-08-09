import {Button,Card,Container,Flex,Text,TextField,} from "@radix-ui/themes";
import React, { useState } from "react";
import { MessagePanel } from "../../core/components/messagePanel";
import { LoginContainer } from "../../player/components/loginContainer";
import { Page } from "../../core/components/page";

export const UserRegisterPage = () => {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [rePassword, setRePassword] = useState<string>();

  const onSubmit = () => {
    console.log(email, username, password, rePassword);
  }

  return (
    <Page>
      <Text size="3" align={"center"} style={{ margin: "15px" }}>
        Please fill up the form for the registration.
      </Text>
      <Flex gap="2">
        <Flex direction={"column"} flexGrow={"1"}>
          <Card>
            <Container size={"2"} maxWidth={"400px"}>
              <Flex direction={"column"} gap={"2"}>
                <Text size={"3"}>Register</Text>
                <div>
                  <Text size={"1"}>E-mail</Text>
                  <TextField.Root
                    placeholder="Enter your e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                    <TextField.Slot></TextField.Slot>
                  </TextField.Root>
                </div>
                <div>
                  <Text size={"1"}>Username</Text>
                  <TextField.Root
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  >
                    <TextField.Slot></TextField.Slot>
                  </TextField.Root>
                </div>
                <div>
                  <Text size={"1"}>Password</Text>
                  <TextField.Root
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  >
                    <TextField.Slot></TextField.Slot>
                  </TextField.Root>
                </div>
                <div>
                  <Text size={"1"}>Repeat Password</Text>
                  <TextField.Root
                    placeholder="Repeat your password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    type="password"
                  >
                    <TextField.Slot></TextField.Slot>
                  </TextField.Root>
                </div>
                <Button onClick={onSubmit}>Submit</Button>
              </Flex>
            </Container>
          </Card>
        </Flex>
      </Flex>
    </Page>
  );
};
