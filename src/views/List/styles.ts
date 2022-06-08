import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  list-style: none;
`

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  .tag-filter {
    font-size: 16px;
    font-weight: 700;
    background: none;
    color: ${ props => props.theme.textColor };
    margin: 0 10px;
    opacity: .7;
    transition: all .3s;
    
    &:after {
      content: ''
      display: block;
      background-color: ${ props => props.theme.general.colors.white };
      height: 5px;
      width: 55px;
      transition: width .3s;
    }

    &.tag-filter-recurrent:after {
      background-color: ${ props => props.theme.general.colors.danger };
    }

    &.tag-filter-eventual:after {
      background-color: ${ props => props.theme.general.colors.warning };
    }

    &:hover {
      opacity: .5;

      &:after {
        width: 100%;
      }
    }

    &.tag-filter-active {
      opacity: 1;

      &:after {
        width: 100%;
      }
    }
  }
`