import styled from 'styled-components';
import {ServiceWrap} from './service/service.stc'

export const ServiceListWrap = styled.ul `
    padding: 0;
    margin-bottom: 0;
    align-items: center;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    ${ServiceWrap}{
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8){
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
    }
`;