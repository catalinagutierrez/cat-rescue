import styled from 'styled-components';

export const DonationFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    form {
        padding-right: 40px;
        width: 150px;
    }

    button {
        opacity: 1;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;
