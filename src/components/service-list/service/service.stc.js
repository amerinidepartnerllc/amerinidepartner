import styled from 'styled-components'
import {device} from '../../../theme'

export const ServiceWrap = styled.li `
    flex-basis: 25%;
    text-align: center;
    height: 350px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    @media ${device.medium}{
        flex-basis: 50%;
    }
    @media ${device.small}{
        flex-basis: 100%;
    }
    div{
        display: block;
        height: 100%;
        padding: 50px 20px;
        transition: all 0.4s ease-in-out 0s;
        &:hover{
            background-color: #fff;
            transform: scale(1.1);
            img{
                opacity: 1;
            }
        }
        img{
            opacity: 0.7;
            transition: 0.3s;
            max-height: 50px;
            max-width: 50px;
        }
        h6{
            margin-top: 15px;
            font-size: 18px;
        }
    }
`;