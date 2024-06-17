import styled from 'styled-components'
import {device} from '../../../theme'

export const ProcessSectionWrap = styled.div `
  padding-top: 130px;
`

export const ProcessSectionTitleDesc = styled.div `
  padding-bottom: 75px;
`

export const ProcessContent = styled.div `
  @media ${device.xlarge}{
    margin-left: 10vw;
  }
  @media ${device.small}{
    margin-left: 0;
  }
`

export const ProcessSectionTitle = styled.div `
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