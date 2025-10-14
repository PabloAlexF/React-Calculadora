import styled from 'styled-components'; 


export const ButtonContainer = styled.button `
    padding: 20px;
    border: 1px solid #ddd;
    background: #f8f9fa;
    color: #333;
    font-size: 20px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    min-height: 60px;
    
    &:hover {
        background: #e9ecef;
        border-color: #adb5bd;
    }
    
    &:active {
        background: #dee2e6;
        transform: scale(0.98);
    }
`