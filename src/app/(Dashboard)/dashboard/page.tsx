"use client";

import React, { useState } from 'react';
import { Flex, Input, Button } from "@chakra-ui/react";

const Dashboard = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      return
    }

    // Create form data
    const data = new FormData();
    data.append('file', file);

    // Create fetch api to api/upload
    const response = await fetch('api/upload', {
      method: 'POST',
      body: data
    });

    // Print the response
    console.log(response);
  };

  return (
    <Flex direction="column" align="center" justify="center" p={5}>
      <Input type="file" accept=".pdf" onChange={handleFileChange} />
      <Button mt={4} onClick={handleFileUpload}>
        Upload and Extract Text
      </Button>
    </Flex>
  );
};

export default Dashboard;
