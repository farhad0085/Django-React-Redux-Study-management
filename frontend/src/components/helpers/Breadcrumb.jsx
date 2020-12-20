import React from 'react'
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import {ChevronRightIcon} from '@chakra-ui/icons';


const MyBreadcrumb = ({title}) => {

    return (
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{title}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )

}


export default MyBreadcrumb