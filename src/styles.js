import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const Content = styled.div`
    background: #ffffff;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`