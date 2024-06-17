import styled from 'styled-components'
import {device} from '../../../theme'

export const OneServiceSectionWrap = styled.div `
    padding: 130px 0 0 0;
    background-color: #f8f8f8;
    .section-pt-md{
        padding-top: 70px;
    }
    @media ${device.xlarge}{
        .col-2.offset-1{
            margin-left: 20vw;
        }
    }
    @media ${device.medium}{
        padding: 70px 0;
        .col-1.offset-1, .col-2.offset-1 {
            max-width: 80vw;
            min-width: 80vw;
            flex: 0;
            margin-left: 10vw;
        }
        .section-pt-md{
            padding-top: 15px;
        }
        .project-type{
            flex-basis: 50%;
            max-width: 50%;
            width: 50%;
            margin: 30px 0;
        }
    }
    @media ${device.small}{
        padding: 10vw 0;
        .project-type{
            flex-basis: 100%;
            max-width: 100%;
            width: 100%;
            margin: 0;
            padding: 15px 0;
        }
    }
`;

export const SectionTitle = styled.div `
    margin-left: 16.666667vw;
    width: 16.666667vw;
    @media ${device.xlarge}{
        margin-left: 10vw;
        width: 20vw;
    }
    @media ${device.medium}{
        width: 100vw;
    }    
`;

export const OneServiceContent = styled.div `
    margin-top: -7px;
    margin-bottom: -18px;
`;

export const ProjectTypeList = styled.ul `
    margin: 0;
    padding-left: 0px;
`;

export const OneServiceCard = styled.div `
    padding: 0 0px;
    margin: 0 auto;
    @media ${device.medium}{
        width: 100%;
    }
`;

export const SectionTitleDesc = styled.div `
    margin-bottom: 130px;
`

export const WhatWeDoContent = styled.div `
    margin-top: -7px;
    margin-bottom: -18px;
`;