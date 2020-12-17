import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ArrowUpIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Button, Box, Center, List, ListItem, ListIcon, FormLabel } from "@chakra-ui/react";
import { formatFileSize, createUUID } from "../../utils";

const DragDropUpload = ({ onChange, allowedFileType }) => {
    
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(old => {
            return [...old, ...acceptedFiles]
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        onChange(files)
    })

    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: allowedFileType })

    return (
        <>
            <Box boxShadow="md" my={2} rounded="md" py={2} bg="white" {...getRootProps()}>
                <Center my={2}>
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Release files now!</p> : <p>Click or drag files here to upload</p>}
                </Center>
                <Center my={2}>
                    <Button leftIcon={<ArrowUpIcon />} colorScheme="pink">
                        Choose Files
                    </Button>
                </Center>
            </Box>
            {files.length > 0 && <FileList files={files} />}
        </>
    )

}


export default DragDropUpload


const FileList = ({ files }) => {
    return (
        <Box>
            <FormLabel>Selected Files</FormLabel>
            <List my={2} spacing={2}>
                {files.map(file => (
                    <ListItem key={createUUID()}>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {file.name} - {formatFileSize(file.size)}
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}