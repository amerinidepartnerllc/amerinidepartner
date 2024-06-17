import styled from 'styled-components';
import {device} from '../../theme'

export const ProcessSection = styled.section `
    padding-bottom: 130px;
    &:last-child{
        padding-bottom: 75px;
    }
    @media ${device.medium}{
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
    .col-2.offset-1,
    .col-1.offset-1{
        @media ${device.xlarge}{
            flex: 0 0 30vw;
            max-width: 30vw;
        }
        @media ${device.small}{
            flex: 0 0 80vw;
            max-width: 80vw;
        }
    }
`;
 
export const ProcessInner = styled.div `
    position: relative;
    z-index: 2;
    padding-right: 0;
    @media ${device.small}{
        padding-top: 10vw;
    }
`;

export const Content = styled.div `
    margin-top: 42px;
    @media ${device.small}{
        margin-top: 10vw;
    }
`;

export const ProcessImgWrap = styled.div `
    height: 100%;
`;

export const ProcessImage = styled.img `
    height: 100%;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    background-position: ${props => props.backgroundPosition};
    @media ${device.small}{
        min-height: 350px;
    }
`;