import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, VStack, Code, useToast } from "@chakra-ui/react";

const Index = () => {
  const [jobInput, setJobInput] = useState("");
  const [crewAISetup, setCrewAISetup] = useState(null);
  const toast = useToast();

  const handleInputChange = (e) => {
    setJobInput(e.target.value);
  };

  const generateCrewAISetup = async () => {
    if (jobInput.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a job description.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // TODO: Implement the API call to generate CrewAI setup based on the job input
    // For demonstration purposes, we'll use a mock response
    const mockResponse = {
      main: `import agents

def main():
    # Initialize agents and assign tasks
    agent1 = agents.Agent("Agent 1")
    agent1.assign_task("Task 1")
    agent1.assign_task("Task 2")

    agent2 = agents.Agent("Agent 2")
    agent2.assign_task("Task 3")

    # Execute tasks
    agent1.execute_tasks()
    agent2.execute_tasks()

if __name__ == "__main__":
    main()`,

      agents: `class Agent:
    def __init__(self, name):
        self.name = name
        self.tasks = []

    def assign_task(self, task):
        self.tasks.append(task)

    def execute_tasks(self):
        print(f"{self.name} executing tasks:")
        for task in self.tasks:
            print(f"- {task}")`,

      tasks: `def task1():
    print("Executing Task 1")
    # TODO: Implement Task 1

def task2():
    print("Executing Task 2")
    # TODO: Implement Task 2

def task3():
    print("Executing Task 3") 
    # TODO: Implement Task 3`,

      tools: `# TODO: Implement relevant tools for the job`,
    };

    setCrewAISetup(mockResponse);
  };

  return (
    <Box maxWidth="800px" margin="0 auto" padding="2rem">
      <Heading as="h1" size="xl" textAlign="center" marginBottom="2rem">
        CrewAI Setup Generator
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>Enter the job description:</Text>
        <Input value={jobInput} onChange={handleInputChange} placeholder="e.g., Build a web scraper" />
        <Button colorScheme="blue" onClick={generateCrewAISetup}>
          Generate CrewAI Setup
        </Button>
      </VStack>

      {crewAISetup && (
        <Box marginTop="2rem">
          <Heading as="h2" size="lg" marginBottom="1rem">
            Generated CrewAI Setup
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontWeight="bold">main.py</Text>
              <Code>{crewAISetup.main}</Code>
            </Box>
            <Box>
              <Text fontWeight="bold">agents.py</Text>
              <Code>{crewAISetup.agents}</Code>
            </Box>
            <Box>
              <Text fontWeight="bold">tasks.py</Text>
              <Code>{crewAISetup.tasks}</Code>
            </Box>
            <Box>
              <Text fontWeight="bold">tools.py</Text>
              <Code>{crewAISetup.tools}</Code>
            </Box>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Index;
