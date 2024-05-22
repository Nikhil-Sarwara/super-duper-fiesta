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
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log(data);
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
