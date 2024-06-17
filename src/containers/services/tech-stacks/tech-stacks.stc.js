import styled from 'styled-components'
import {device} from '../../../theme'

export const TechStacksSectionWrap = styled.div `
  background-color: #f8f8f8;
  padding-top: 130px;
`

export const  TechStacksSectionTitleDesc = styled.div `
  padding-bottom: 75px;
  img{
    margin-top: 75px;
  }
`

export const  TechStacksContent = styled.div `
  @media ${device.xlarge}{
    margin-left: 10vw;
  }
  @media ${device.small}{
    margin-left: 0;
  }
`

export const  TechStacksSectionTitle = styled.div `
    margin-left: 16.666667vw;
    width: 16.666667vw;
    @media ${device.xlarge}{
        margin-left: 10vw;
        width: 20vw;
    }
    @media ${device.small}{
        width: 100vw;
    }    
`;